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

// EXTERNAL MODULE: external "react-particles-js"
var external__react_particles_js_ = __webpack_require__(11);
var external__react_particles_js__default = /*#__PURE__*/__webpack_require__.n(external__react_particles_js_);

// EXTERNAL MODULE: ./src/Landing/style.css
var style = __webpack_require__(12);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./src/Landing/Header/style.css
var Header_style = __webpack_require__(13);
var Header_style_default = /*#__PURE__*/__webpack_require__.n(Header_style);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(14);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./src/Landing/Header/index.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("header", {
        className: "header"
      }, external__react__default.a.createElement("div", {
        className: "app-container"
      }, external__react__default.a.createElement("nav", {
        className: "nav-menu"
      }, external__react__default.a.createElement("ul", null, external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
        prefetch: true,
        href: "/"
      }, external__react__default.a.createElement("a", null, "Home"))), external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
        prefetch: true,
        href: "/about"
      }, external__react__default.a.createElement("a", null, "About"))), external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
        prefetch: true,
        href: "/contact"
      }, external__react__default.a.createElement("a", null, "Contact")))))));
    }
  }]);

  return Header;
}(external__react__default.a.Component);

/* harmony default export */ var Landing_Header = (Header_Header);
// EXTERNAL MODULE: ./src/Landing/Caption/style.css
var Caption_style = __webpack_require__(15);
var Caption_style_default = /*#__PURE__*/__webpack_require__.n(Caption_style);

// CONCATENATED MODULE: ./src/Landing/Caption/index.tsx
function Caption__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Caption__typeof = function _typeof(obj) { return typeof obj; }; } else { Caption__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Caption__typeof(obj); }

function Caption__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Caption__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Caption__createClass(Constructor, protoProps, staticProps) { if (protoProps) Caption__defineProperties(Constructor.prototype, protoProps); if (staticProps) Caption__defineProperties(Constructor, staticProps); return Constructor; }

function Caption__possibleConstructorReturn(self, call) { if (call && (Caption__typeof(call) === "object" || typeof call === "function")) { return call; } return Caption__assertThisInitialized(self); }

function Caption__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Caption__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var CAPTION_WEIGHT = 3400;
var FPS = 120;
var SLOW = 0.08;
var MAX_A = 0.015;
var MIN_V = 0.0001;

var Caption_Caption =
/*#__PURE__*/
function (_React$Component) {
  Caption__inherits(Caption, _React$Component);

  function Caption() {
    var _ref;

    var _temp, _this;

    Caption__classCallCheck(this, Caption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Caption__possibleConstructorReturn(_this, (_temp = _this = Caption__possibleConstructorReturn(this, (_ref = Caption.__proto__ || Object.getPrototypeOf(Caption)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Caption__assertThisInitialized(_this), "lastTime", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "a", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "v", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "captionRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: external__react__default.a.createRef()
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "heightRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: external__react__default.a.createRef()
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "isMove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "translate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "handleWheel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        _this.a = e.deltaY / CAPTION_WEIGHT;
        if (_this.a > MAX_A) _this.a = MAX_A;
        if (_this.a < -MAX_A) _this.a = -MAX_A;
      }
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "startAnimate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.isMove = true;

        _this.moveLoop();
      }
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "stopAnimate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.isMove = false;
      }
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "moveLoop", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        requestAnimationFrame(function (time) {
          if (!_this.lastTime) _this.lastTime = time;
          var deltaTime = time - _this.lastTime;

          if (deltaTime > 1000 / FPS) {
            if (_this.a || _this.v) _this.draw(deltaTime);
            _this.a = 0;
            _this.lastTime = time;
          }

          if (_this.isMove) {
            _this.moveLoop();
          }
        });
      }
    }), Object.defineProperty(Caption__assertThisInitialized(_this), "draw", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(deltaTime) {
        _this.v += _this.a * deltaTime;
        _this.v *= 1 - SLOW;
        if (Math.abs(_this.v) < MIN_V) _this.v = 0;
        _this.translate -= _this.v * deltaTime;
        if (_this.translate > 0) _this.translate = 0;
        if (_this.translate < -_this.heightRef.current.clientHeight) _this.translate = -_this.heightRef.current.clientHeight;
        _this.captionRef.current.style.transform = "translate(0, ".concat(_this.translate, "px)");
      }
    }), _temp));
  }

  Caption__createClass(Caption, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('wheel', this.handleWheel);
      this.startAnimate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('wheel', this.handleWheel);
      this.stopAnimate();
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "home-caption",
        ref: this.captionRef
      }, external__react__default.a.createElement("div", {
        className: "caption-section caption-intro"
      }, external__react__default.a.createElement("h1", {
        className: "home-title"
      }, "VNDEVS"), external__react__default.a.createElement("h3", {
        className: "home-subtitle"
      }, "Developers from Viet Nam")), external__react__default.a.createElement("div", {
        className: "caption-intro-2",
        ref: this.heightRef
      }, external__react__default.a.createElement("div", {
        className: "home-headline-section"
      }, external__react__default.a.createElement("p", {
        className: "home-headline"
      }, "We are developers from VietNam. We help you invent what's next, and bring it to life with technology."), external__react__default.a.createElement("p", null, external__react__default.a.createElement("div", {
        className: "tech-image"
      }))), external__react__default.a.createElement("footer", {
        className: "footer-area section-gap"
      }, external__react__default.a.createElement("div", {
        className: "app-container"
      }, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col-lg-5 col-md-6 col-sm-6"
      }, external__react__default.a.createElement("div", {
        className: "single-footer-widget"
      }, external__react__default.a.createElement("h6", null, "About Us"), external__react__default.a.createElement("p", null, "Address: T\xE2n B\xECnh Dicstrict, H\u1ED3 Ch\xED Minh city 700000"), external__react__default.a.createElement("p", {
        className: "footer-text"
      }, "2018 All rights reserved"))), external__react__default.a.createElement("div", {
        className: "col-lg-5  col-md-6 col-sm-6"
      }, external__react__default.a.createElement("div", {
        className: "single-footer-widget"
      }, external__react__default.a.createElement("h6", null, "Newsletter"), external__react__default.a.createElement("p", null, "Stay update with our latest"), external__react__default.a.createElement("div", {
        className: "",
        id: "mc_embed_signup"
      }, external__react__default.a.createElement("form", {
        target: "_blank",
        action: "",
        method: "get",
        className: "form-inline",
        noValidate: true
      }, external__react__default.a.createElement("input", {
        type: "email",
        className: "form-control",
        name: "EMAIL",
        placeholder: "Enter Email",
        required: true
      }), external__react__default.a.createElement("button", {
        className: "click-btn btn btn-default"
      }, "Send"), external__react__default.a.createElement("div", {
        className: "info"
      }))))), external__react__default.a.createElement("div", {
        className: "col-lg-2 col-md-6 col-sm-6 social-widget"
      }, external__react__default.a.createElement("div", {
        className: "single-footer-widget"
      }, external__react__default.a.createElement("h6", null, "Follow Us"), external__react__default.a.createElement("p", null, "Let us be social"), external__react__default.a.createElement("div", {
        className: "footer-social d-flex align-items-center"
      }, external__react__default.a.createElement("a", {
        href: "https://www.facebook.com/vndevs.tk/",
        target: "_blank"
      }, "Facebook")))))))));
    }
  }]);

  return Caption;
}(external__react__default.a.Component);

/* harmony default export */ var Landing_Caption = (Caption_Caption);
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
      }, external__react__default.a.createElement(Landing_Header, null), external__react__default.a.createElement("div", {
        className: "section-caption"
      }, external__react__default.a.createElement(external__react_particles_js__default.a, {
        params: __webpack_require__(16),
        className: "landing-particles"
      }), external__react__default.a.createElement(Landing_Caption, null)));
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

module.exports = require("react-particles-js");

/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, exports) {



/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"particles":{"number":{"value":40,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"}},"opacity":{"value":0.6,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":1.6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"bubble"},"resize":true,"onresize":{"enable":true,"density_auto":true,"density_area":400}},"modes":{"bubble":{"distance":240,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4}}},"retina_detect":true}

/***/ })
/******/ ]);