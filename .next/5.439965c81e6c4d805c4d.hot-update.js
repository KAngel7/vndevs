webpackHotUpdate(5,{

/***/ "./src/Landing/Caption/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
    }), Object.defineProperty(_assertThisInitialized(_this), "lastWheel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: new Date().getTime()
    }), Object.defineProperty(_assertThisInitialized(_this), "handleWheel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.a = e.deltaY / CAPTION_WEIGHT;
        if (_this.a > 0.015) _this.a = 0.015;
        _this.lastWheel = new Date().getTime();
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
            _this.draw(deltaTime);

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
        var direction = _this.v > 0 ? 1 : -1;
        _this.v = Math.abs(_this.v) - Math.abs(_this.v) * SLOW;
        if (_this.v < 0) _this.v = 0;
        if (_this.v > 2) _this.v = 2;
        _this.v *= direction;
        _this.translate -= _this.v * deltaTime;
        if (_this.translate > 0) _this.translate = 0;
        if (_this.translate < -_this.captionRef.current.clientHeight) _this.translate = -_this.captionRef.current.clientHeight;
        _this.captionRef.current.style.transform = "translate(0, ".concat(_this.translate, "px)");

        if (new Date().getTime() - _this.lastWheel > deltaTime) {
          _this.a = 0;
        }
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
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "caption-section caption-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "home-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "VNDEVS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "home-subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Developers from Viet Nam")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "caption-intro-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "home-subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Developers from Viet Nam")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
        className: "footer-area section-gap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-5 col-md-6 col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "single-footer-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "About Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "T\xE2n B\xECnh Dicstrict, H\u1ED3 Ch\xED Minh city 700000"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "footer-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "2018 All rights reserved"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-5  col-md-6 col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "single-footer-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Newsletter"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Stay update with our latest"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "",
        id: "mc_embed_signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        target: "_blank",
        action: "",
        method: "get",
        className: "form-inline",
        noValidate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        name: "EMAIL",
        placeholder: "Enter Email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "click-btn btn btn-default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-long-arrow-right",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-2 col-md-6 col-sm-6 social-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "single-footer-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Follow Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Let us be social"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "footer-social d-flex align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.facebook.com/2tech-166561357524636",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })))))))));
    }
  }]);

  return Caption;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Caption);

/***/ })

})
//# sourceMappingURL=5.439965c81e6c4d805c4d.hot-update.js.map