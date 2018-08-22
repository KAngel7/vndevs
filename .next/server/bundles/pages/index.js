module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./src/Landing/style.css
var style = __webpack_require__(11);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react-particles-js"
var external__react_particles_js_ = __webpack_require__(12);
var external__react_particles_js__default = /*#__PURE__*/__webpack_require__.n(external__react_particles_js_);

// EXTERNAL MODULE: ./src/Landing/Header/style.css
var Header_style = __webpack_require__(13);
var Header_style_default = /*#__PURE__*/__webpack_require__.n(Header_style);

// EXTERNAL MODULE: ./src/Landing/Header/MenuBar/style.css
var MenuBar_style = __webpack_require__(14);
var MenuBar_style_default = /*#__PURE__*/__webpack_require__.n(MenuBar_style);

// CONCATENATED MODULE: ./src/Landing/Header/MenuBar/index.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MenuBar_MenuBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuBar, _React$Component);

  function MenuBar() {
    _classCallCheck(this, MenuBar);

    return _possibleConstructorReturn(this, (MenuBar.__proto__ || Object.getPrototypeOf(MenuBar)).apply(this, arguments));
  }

  _createClass(MenuBar, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: ""
      });
    }
  }]);

  return MenuBar;
}(external__react__default.a.Component);

/* harmony default export */ var Header_MenuBar = (MenuBar_MenuBar);
// EXTERNAL MODULE: ./src/Landing/Header/Caption/style.css
var Caption_style = __webpack_require__(15);
var Caption_style_default = /*#__PURE__*/__webpack_require__.n(Caption_style);

// CONCATENATED MODULE: ./src/Landing/Header/Caption/index.tsx
function Caption__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Caption__typeof = function _typeof(obj) { return typeof obj; }; } else { Caption__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Caption__typeof(obj); }

function Caption__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Caption__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Caption__createClass(Constructor, protoProps, staticProps) { if (protoProps) Caption__defineProperties(Constructor.prototype, protoProps); if (staticProps) Caption__defineProperties(Constructor, staticProps); return Constructor; }

function Caption__possibleConstructorReturn(self, call) { if (call && (Caption__typeof(call) === "object" || typeof call === "function")) { return call; } return Caption__assertThisInitialized(self); }

function Caption__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Caption__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Caption_Caption =
/*#__PURE__*/
function (_React$Component) {
  Caption__inherits(Caption, _React$Component);

  function Caption() {
    Caption__classCallCheck(this, Caption);

    return Caption__possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).apply(this, arguments));
  }

  Caption__createClass(Caption, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "homeCaption"
      }, external__react__default.a.createElement("div", {
        className: "homeTitle"
      }, external__react__default.a.createElement("span", null, "VNDEVS")), external__react__default.a.createElement("div", {
        className: "homeSubtitle"
      }, external__react__default.a.createElement("span", null, "Best Viet Nam outsourcing company")));
    }
  }]);

  return Caption;
}(external__react__default.a.Component);

/* harmony default export */ var Header_Caption = (Caption_Caption);
// CONCATENATED MODULE: ./src/Landing/Header/index.tsx
function Header__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header__typeof = function _typeof(obj) { return typeof obj; }; } else { Header__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header__typeof(obj); }

function Header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header__createClass(Constructor, protoProps, staticProps) { if (protoProps) Header__defineProperties(Constructor.prototype, protoProps); if (staticProps) Header__defineProperties(Constructor, staticProps); return Constructor; }

function Header__possibleConstructorReturn(self, call) { if (call && (Header__typeof(call) === "object" || typeof call === "function")) { return call; } return Header__assertThisInitialized(self); }

function Header__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  Header__inherits(Header, _React$Component);

  function Header() {
    Header__classCallCheck(this, Header);

    return Header__possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  Header__createClass(Header, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "header"
      }, external__react__default.a.createElement(external__react_particles_js__default.a, {
        params: __webpack_require__(16),
        className: "header-particles"
      }), external__react__default.a.createElement("div", {
        className: "menuBarWrapper"
      }, external__react__default.a.createElement(Header_MenuBar, null)), external__react__default.a.createElement(Header_Caption, null));
    }
  }]);

  return Header;
}(external__react__default.a.Component);

/* harmony default export */ var Landing_Header = (Header_Header);
// CONCATENATED MODULE: ./src/Landing/index.tsx
function Landing__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Landing__typeof = function _typeof(obj) { return typeof obj; }; } else { Landing__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Landing__typeof(obj); }

function Landing__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Landing__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Landing__createClass(Constructor, protoProps, staticProps) { if (protoProps) Landing__defineProperties(Constructor.prototype, protoProps); if (staticProps) Landing__defineProperties(Constructor, staticProps); return Constructor; }

function Landing__possibleConstructorReturn(self, call) { if (call && (Landing__typeof(call) === "object" || typeof call === "function")) { return call; } return Landing__assertThisInitialized(self); }

function Landing__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Landing__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Landing_Landing =
/*#__PURE__*/
function (_React$Component) {
  Landing__inherits(Landing, _React$Component);

  function Landing() {
    Landing__classCallCheck(this, Landing);

    return Landing__possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
  }

  Landing__createClass(Landing, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "landing"
      }, external__react__default.a.createElement(Landing_Header, null));
    }
  }]);

  return Landing;
}(external__react__default.a.Component);

/* harmony default export */ var src_Landing = (Landing_Landing);
// CONCATENATED MODULE: ./pages/index.tsx


/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement(src_Landing, null);
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),
/* 13 */
/***/ (function(module, exports) {



/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"particles":{"number":{"value":40,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"}},"opacity":{"value":0.6,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":1.6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"bubble"},"resize":true,"onresize":{"enable":true,"density_auto":true,"density_area":400}},"modes":{"bubble":{"distance":240,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4}}},"retina_detect":true}

/***/ })
/******/ ]);