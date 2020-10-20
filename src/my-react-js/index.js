// 创建虚拟DOM
function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => typeof child === 'object' ? child : createTextElement(child)),
        },
    };
}
// 文本类型虚拟DOM创建
function createTextElement(text) {
    return {
        type: 'TEXT',
        props: {
            nodeValue: text,
            children: [],
        }
    }
}
// 通过虚拟dom，新建DOM元素
function createDom(vdom) {
    const dom = vdom.type === 'TEXT' ? document.createTextNode('') : document.createElement(vdom.type);
    updateDom(dom, {}, vdom.props);
    return dom;
}
function updateDom(dom, prevProps, nextProps) {
    // 1. 规避children属性
    // 2. 老的存在，取消
    // 3. 新的存在，新增 并没有做新老相等的判定
    // @todo 兼容性
    Object.keys(prevProps)
        .filter(name => name !== 'children')
        .filter(name => !(name in nextProps))
        .filter(name => {
            if (name.slice(0, 2)=== 'on') {
                dom.removeEventListener(name.slice(0, 2).toLowerCase(), prevProps[name], false);
            }
            dom[name] = '';
        })
    Object.keys(nextProps)
        .filter(name => name !== 'children')
        .filter(name => {
            if (name.slice(0, 2)=== 'on') {
                dom.addEventListener(name.slice(0, 2).toLowerCase(), prevProps[name], false);
            }
            dom[name] = nextProps[name];
        })
}
// 渲染虚拟DOM
function render(vdom, container) {
    wipRoot = {
        dom: container,
        props: {
            children: [vdom],
        },
        base: currentRoot, // 存储上一个fiber根节点
    };
    delletions = [];
    nextUnitOfWork = wipRoot;
    // vdom.props.children.forEach(child => {
    //     render(child, dom);
    // })
    // container.appendChild(dom);
    // container.innerHTML = `<pre>${JSON.stringify(vdom, null, 2)}</pre>`
}

function commitRoot() {
    delletions.forEach(commitWorker);
    commitWorker(wipRoot.child);
    currentRoot = wipRoot;
    wipRoot = null;
}
function commitWorker(fiber) {
    if (!fiber) return;
    // const domParent = fiber.parent.dom;
    // 向上查找
    let domParentFiber = fiber.parent;
    while (!domParentFiber.dom) {
        domParentFiber = domParentFiber.parent;
    }
    const domParent = domParentFiber.dom;
    if (fiber.effectTag === 'PLACEMENT' && fiber.dom !== null) {
        domParent.appendChild(fiber.dom);
    } else if (fiber.effectTag === 'DELETION') {
        commitDeletion(fiber, domParent);
    } else if (fiber.effectTag === 'UPDATE' && fiber.dom !== null) {
        // 更新DOM
        updateDom(fiber.dom, fiber.base.props, fiber.props);
    }
    // domParent.appendChild(fiber.dom);
    commitWorker(fiber.child);
    commitWorker(fiber.sibing);
}
function commitDeletion(fiber, domParent) {
    if (fiber.dom) {
        domParent.removeChild(fiber.dom);
    } else {
        commitDeletion(fiber.child, domParent);
    }

}
// 下一个单元任务
let nextUnitOfWork = null;
// 保存全局fiber的根结点
let wipRoot = null;
let currentRoot = null;
let delletions = null;
// 调度diff或者渲染任务
function workLoop(deadline) {
    // 有下一个任务，且当前帧还没有结束
    while(nextUnitOfWork && deadline.timeRemaining() > 1) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }
    // 如果没有任务了，并且根结点还在，提交
    if (!nextUnitOfWork && wipRoot) commitRoot() 
    requestIdleCallback(workLoop);
}
// 启动空闲时间渲染
requestIdleCallback(workLoop);
// 获取下一个任务
function performUnitOfWork(fiber) {
    const isFunctionComponent = fiber.type instanceof Function;
    if (isFunctionComponent) {
        updateFunctionComponent(fiber);
    } else {
        // 先不考虑class组件
        // dom
        updateHostComponent(fiber);
    }

    // 找下一个任务
    // 先找子元素
    if (fiber.child) return fiber.child;
    // 没有子元素就找兄弟元素
    let nextFiber = fiber;
    while (nextFiber) {
        if (nextFiber.sibing) return nextFiber.sibing;
        // 没有兄弟元素了，找父元素
        nextFiber = nextFiber.parent;
    }
}

let wipFiber = null;
let hookIndex = null;
function useState(init) {
    const oldHooks = wipFiber.base && wipFiber.base.hooks && wipFiber.base.hooks[hookIndex];
    const hook = {
        state: oldHooks ? oldHooks.state : init,
        queue: [],
    };
    const actions = oldHooks ? oldHooks.queue : [];
    actions.forEach((action) => hook.state = action);
    const setState = (action) => {
        hook.queue.push(action);
        wipRoot = {
            dom: currentRoot.dom,
            props: currentRoot.props,
            base: currentRoot,
        };
        nextUnitOfWork = wipRoot;
        delletions = [];
    }
    wipFiber.hooks.push(hook);
    hookIndex++;
    return [hook.state, setState];
}

function updateFunctionComponent(fiber) {
    wipFiber = fiber;
    hookIndex = 0;
    wipFiber.hooks = [];
    const children = [fiber.type(fiber.props)];
    reconcileChildren(fiber, children);
}
function updateHostComponent(fiber) {
    // 根据当前任务，获取下一个
    if (!fiber.dom) fiber.dom = createDom(fiber); // 不是入口
    // if (fiber.parent) fiber.parent.dom.appendChild(fiber.dom); // 真实的DOM操作
    reconcileChildren(fiber, fiber.props.children);
}
function reconcileChildren(wipFiber, elements) {
    // 构建fiber结构
    let index = 0;
    let oldFiber = wipFiber.base && wipFiber.base.child;
    let prevsibing = null;
    while (index < elements.length && oldFiber != null) {
    // while (index < elements.length) {
        let element = elements[index];
        const newFiber = null;

        // 对比oldfiber的状态和当前element
        // 先比较类型
        const sameType = oldFiber && element && oldFiber.type == element.type;

        if (sameType) {
            // 复用节点，更新
            newFiber = {
                type: oldFiber.type,
                props: element.props,
                dom: oldFiber.dom,
                parent: wipFiber,
                base: oldFiber,
                effectTag: 'UPDATE',
            };
        }
        if (!sameType && element) {
            // 替换节点
            newFiber = {
                type: element.type,
                props: element.props,
                dom: null,
                parent: wipFiber,
                base: null,
                effectTag: 'PLACEMENT',
            };
        }
        if (!sameType && oldFiber) {
            // 删除
            oldFiber.effectTag = 'DELETION';
            delletions.push(oldFiber);
        }

        if (oldFiber) oldFiber = oldFiber.sibing;
        if (index === 0) {
            // 第一个元素是父fiber的child属性
            wipFiber.child = newFiber;
        } else {
            prevsibing.sibing = newFiber;
        }
        prevsibing = newFiber;
        index++;
        // fiber结构（链表）基本构建结束
    }
    
}

export default {
    createElement,
    render,
    useState,
}