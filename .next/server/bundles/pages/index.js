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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Landing__ = __webpack_require__("./src/Landing/index.tsx");
var _jsxFileName = "/Users/khanh/node-js-getting-started/pages/index.tsx";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_Landing__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  });
});

/***/ }),

/***/ "./src/Landing/Caption/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./src/Landing/Caption/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
var _jsxFileName = "/Users/khanh/node-js-getting-started/src/Landing/Caption/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var CAPTION_WEIGHT = 3400;
var FPS = 120;
var SLOW = 0.08;
var MAX_A = 0.015;
var MIN_V = 0.0001;

var Caption =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Caption, _React$Component);

  function Caption() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Caption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Caption.__proto__ || Object.getPrototypeOf(Caption)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "lastTime", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(_assertThisInitialized(_this), "a", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(_assertThisInitialized(_this), "v", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(_assertThisInitialized(_this), "captionRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef()
    }), Object.defineProperty(_assertThisInitialized(_this), "heightRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef()
    }), Object.defineProperty(_assertThisInitialized(_this), "isMove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), Object.defineProperty(_assertThisInitialized(_this), "translate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(_assertThisInitialized(_this), "handleWheel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        _this.a = e.deltaY / CAPTION_WEIGHT;
        if (_this.a > MAX_A) _this.a = MAX_A;
        if (_this.a < -MAX_A) _this.a = -MAX_A;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "startAnimate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.isMove = true;

        _this.moveLoop();
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "stopAnimate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.isMove = false;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "moveLoop", {
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
    }), Object.defineProperty(_assertThisInitialized(_this), "draw", {
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

  _createClass(Caption, [{
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "home-caption",
        ref: this.captionRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "caption-section caption-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "home-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "VNDEVS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "home-subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Developers from Viet Nam")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "caption-intro-2",
        ref: this.heightRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "home-headline-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "home-headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "We are developers from VietNam. We help you invent what's next, and bring it to life with technology."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tech-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
        className: "footer-area section-gap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "app-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-5 col-md-6 col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "single-footer-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "About Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Address: T\xE2n B\xECnh Dicstrict, H\u1ED3 Ch\xED Minh city 700000"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "footer-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "2018 All rights reserved"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-5  col-md-6 col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "single-footer-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Newsletter"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Stay update with our latest"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "",
        id: "mc_embed_signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        target: "_blank",
        action: "",
        method: "get",
        className: "form-inline",
        noValidate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        name: "EMAIL",
        placeholder: "Enter Email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "click-btn btn btn-default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Send"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-2 col-md-6 col-sm-6 social-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "single-footer-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Follow Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Let us be social"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "footer-social d-flex align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.facebook.com/vndevs.tk/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "Facebook")))))))));
    }
  }]);

  return Caption;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Caption);

/***/ }),

/***/ "./src/Landing/Caption/style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Landing/Header/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./src/Landing/Header/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/khanh/node-js-getting-started/src/Landing/Header/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Header =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "app-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "nav-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        prefetch: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        prefetch: true,
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "About"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        prefetch: true,
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "Contact")))))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/Landing/Header/style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Landing/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_particles_js__ = __webpack_require__("react-particles-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_particles_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_particles_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Landing/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./src/Landing/Header/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Caption__ = __webpack_require__("./src/Landing/Caption/index.tsx");
var _jsxFileName = "/Users/khanh/node-js-getting-started/src/Landing/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Landing =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Landing, _React$Component);

  function Landing() {
    _classCallCheck(this, Landing);

    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
  }

  _createClass(Landing, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "landing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "section-caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_particles_js___default.a, {
        params: __webpack_require__("./src/Landing/particles-config.json"),
        className: "landing-particles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Caption__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })));
    }
  }]);

  return Landing;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Landing);

/***/ }),

/***/ "./src/Landing/particles-config.json":
/***/ (function(module, exports) {

module.exports = {"particles":{"number":{"value":40,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"}},"opacity":{"value":0.6,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":1.6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"bubble"},"resize":true,"onresize":{"enable":true,"density_auto":true,"density_area":400}},"modes":{"bubble":{"distance":240,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4}}},"retina_detect":true}

/***/ }),

/***/ "./src/Landing/style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-particles-js":
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map