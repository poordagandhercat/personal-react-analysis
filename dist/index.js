/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-react-js */ "./src/my-react-js/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var ReactDOM = _my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"];

function App(props) {
  var _React$useState = _my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"].useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      num = _React$useState2[0],
      setNum = _React$useState2[1];

  return /*#__PURE__*/_my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    id: "App"
  }, /*#__PURE__*/_my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, props.title, "\u3001", num), /*#__PURE__*/_my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
    onClick: function onClick() {
      return setNum(num + 1);
    }
  }, "\u7D2F\u52A0"), /*#__PURE__*/_my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, "\u6E90\u7801"));
}

var element = /*#__PURE__*/_my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(App, {
  title: "\u5B66\u4E60react"
});
ReactDOM.render(element, document.getElementById('root'));

/***/ }),

/***/ "./src/my-react-js/index.js":
/*!**********************************!*\
  !*** ./src/my-react-js/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 创建虚拟DOM
function createElement(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    type: type,
    props: _objectSpread(_objectSpread({}, props), {}, {
      children: children.map(function (child) {
        return _typeof(child) === 'object' ? child : createTextElement(child);
      })
    })
  };
} // 文本类型虚拟DOM创建


function createTextElement(text) {
  return {
    type: 'TEXT',
    props: {
      nodeValue: text,
      children: []
    }
  };
} // 通过虚拟dom，新建DOM元素


function createDom(vdom) {
  var dom = vdom.type === 'TEXT' ? document.createTextNode('') : document.createElement(vdom.type);
  updateDom(dom, {}, vdom.props);
  return dom;
}

function updateDom(dom, prevProps, nextProps) {
  // 1. 规避children属性
  // 2. 老的存在，取消
  // 3. 新的存在，新增 并没有做新老相等的判定
  // @todo 兼容性
  Object.keys(prevProps).filter(function (name) {
    return name !== 'children';
  }).filter(function (name) {
    return !(name in nextProps);
  }).filter(function (name) {
    if (name.slice(0, 2) === 'on') {
      dom.removeEventListener(name.slice(0, 2).toLowerCase(), prevProps[name], false);
    }

    dom[name] = '';
  });
  Object.keys(nextProps).filter(function (name) {
    return name !== 'children';
  }).filter(function (name) {
    if (name.slice(0, 2) === 'on') {
      dom.addEventListener(name.slice(0, 2).toLowerCase(), prevProps[name], false);
    }

    dom[name] = nextProps[name];
  });
} // 渲染虚拟DOM


function render(vdom, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [vdom]
    },
    base: currentRoot // 存储上一个fiber根节点

  };
  delletions = [];
  nextUnitOfWork = wipRoot; // vdom.props.children.forEach(child => {
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
  if (!fiber) return; // const domParent = fiber.parent.dom;
  // 向上查找

  var domParentFiber = fiber.parent;

  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent;
  }

  var domParent = domParentFiber.dom;

  if (fiber.effectTag === 'PLACEMENT' && fiber.dom !== null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === 'DELETION') {
    commitDeletion(fiber, domParent);
  } else if (fiber.effectTag === 'UPDATE' && fiber.dom !== null) {
    // 更新DOM
    updateDom(fiber.dom, fiber.base.props, fiber.props);
  } // domParent.appendChild(fiber.dom);


  commitWorker(fiber.child);
  commitWorker(fiber.sibing);
}

function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom);
  } else {
    commitDeletion(fiber.child, domParent);
  }
} // 下一个单元任务


var nextUnitOfWork = null; // 保存全局fiber的根结点

var wipRoot = null;
var currentRoot = null;
var delletions = null; // 调度diff或者渲染任务

function workLoop(deadline) {
  // 有下一个任务，且当前帧还没有结束
  while (nextUnitOfWork && deadline.timeRemaining() > 1) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  } // 如果没有任务了，并且根结点还在，提交


  if (!nextUnitOfWork && wipRoot) commitRoot();
  requestIdleCallback(workLoop);
} // 启动空闲时间渲染


requestIdleCallback(workLoop); // 获取下一个任务

function performUnitOfWork(fiber) {
  var isFunctionComponent = fiber.type instanceof Function;

  if (isFunctionComponent) {
    updateFunctionComponent(fiber);
  } else {
    // 先不考虑class组件
    // dom
    updateHostComponent(fiber);
  } // 找下一个任务
  // 先找子元素


  if (fiber.child) return fiber.child; // 没有子元素就找兄弟元素

  var nextFiber = fiber;

  while (nextFiber) {
    if (nextFiber.sibing) return nextFiber.sibing; // 没有兄弟元素了，找父元素

    nextFiber = nextFiber.parent;
  }
}

var wipFiber = null;
var hookIndex = null;

function useState(init) {
  var oldHooks = wipFiber.base && wipFiber.base.hooks && wipFiber.base.hooks[hookIndex];
  var hook = {
    state: oldHooks ? oldHooks.state : init,
    queue: []
  };
  var actions = oldHooks ? oldHooks.queue : [];
  actions.forEach(function (action) {
    return hook.state = action;
  });

  var setState = function setState(action) {
    hook.queue.push(action);
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      base: currentRoot
    };
    nextUnitOfWork = wipRoot;
    delletions = [];
  };

  wipFiber.hooks.push(hook);
  hookIndex++;
  return [hook.state, setState];
}

function updateFunctionComponent(fiber) {
  wipFiber = fiber;
  hookIndex = 0;
  wipFiber.hooks = [];
  var children = [fiber.type(fiber.props)];
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
  var index = 0;
  var oldFiber = wipFiber.base && wipFiber.base.child;
  var prevsibing = null;

  while (index < elements.length && oldFiber != null) {
    // while (index < elements.length) {
    var element = elements[index];
    var newFiber = null; // 对比oldfiber的状态和当前element
    // 先比较类型

    var sameType = oldFiber && element && oldFiber.type == element.type;

    if (sameType) {
      // 复用节点，更新
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        base: oldFiber,
        effectTag: 'UPDATE'
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
        effectTag: 'PLACEMENT'
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
    index++; // fiber结构（链表）基本构建结束
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  createElement: createElement,
  render: render,
  useState: useState
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map