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

var ReactDOM = _my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"]; // function App(props) {
//     const [num, setNum] = React.useState(1)
//     return (
//         <div id="App">
//             <div>{props.title}、{num}</div>
//             <button onClick={() => setNum(num + 1)}>累加</button>
//             <div>源码</div>
//         </div>
//     );
// }
// let element = <App title="学习react" />
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

var element = /*#__PURE__*/_my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
  id: "App"
}, /*#__PURE__*/_my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, "\u5B66\u4E60react"), /*#__PURE__*/_my_react_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, "\u6E90\u7801"));
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
  Object.keys(vdom.props).filter(function (key) {
    return key !== 'children';
  }).filter(function (name) {
    return dom[name] = vdom.props[name];
  }); // console.log('vdom', vdom);
} // 渲染虚拟DOM


function render(vdom, container) {
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [vdom]
    }
  }; // const dom = vdom.type === 'TEXT' ? document.createTextNode('') : document.createElement(vdom.type);
  // Object.keys(vdom.props)
  // .filter(key => key !== 'children')
  // .filter(name => dom[name] = vdom.props[name]);
  // console.log('vdom', vdom);
  // vdom.props.children.forEach(child => {
  //     render(child, dom);
  // });
  // container.appendChild(dom);
  // container.innerHTML = `<pre>${JSON.stringify(vdom, null, 2)}</pre>`;
} // 下一个单元任务


var nextUnitOfWork = null; // 调度diff或者渲染任务

function workLoop(deadline) {
  // 有下一个任务，且当前帧还没有结束
  while (nextUnitOfWork && deadline.timeRemaining() > 1) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }

  requestIdleCallback(workLoop);
} // 启动空闲时间渲染


requestIdleCallback(workLoop); // 获取下一个任务

function performUnitOfWork(fiber) {
  if (!fiber.dom) fiber.dom = createDom(fiber); // 真实dom操作
  // if (fiber.parent) fiber.parent.dom.appendChild(fiber.dom);

  var elements = fiber.props.children;
  var index = 0;
  var prevslibing = null;

  while (index < elements.length) {
    var element = elements[index];
    var _newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null
    };

    if (index == 0) {
      // 父元素的 child 指向第一个子元素
      fiber.child = _newFiber;
    } else {
      // 每一个元素的 slibing 指向下一个兄弟元素
      prevslibing.slibing = _newFiber;
    }

    prevslibing = fiber;
    index++;
  } // 找下一个任务
  // 先找子元素


  if (fiber.child) return fiber.child; // 没有子元素了，就找兄弟元素

  var nextFiber = fiber;

  while (nextFiber) {
    if (nextFiber.slibing) {
      return nextFiber.slibing;
    } // 没有兄弟元素了，找父元素


    nextFiber = newFiber.parent;
  }

  console.log('performUnitOfWork after', fiber);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  createElement: createElement,
  render: render
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map