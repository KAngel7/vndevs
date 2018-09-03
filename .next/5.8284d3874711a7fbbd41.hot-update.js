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
var SLOW = 0.1;

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
        e.preventDefault();
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
        console.log(_this.v);
        _this.v *= direction;
        _this.translate -= _this.v * deltaTime;
        if (_this.translate > 0) _this.translate = 0;
        if (_this.translate < -1000) _this.translate = -1000;
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
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "caption-section caption-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "home-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "VNDEVS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "home-subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Developers from Viet Nam")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "caption-section caption-intro-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "home-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "VNDEVS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "home-subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Developers from Viet Nam")));
    }
  }]);

  return Caption;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Caption);

/***/ })

})
//# sourceMappingURL=5.8284d3874711a7fbbd41.hot-update.js.map