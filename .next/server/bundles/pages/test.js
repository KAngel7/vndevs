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
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),
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

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(11);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/document"
var document_ = __webpack_require__(1);
var document__default = /*#__PURE__*/__webpack_require__.n(document_);

// CONCATENATED MODULE: ./src/constants/env.ts
var DEV = "production" !== 'production';
var GA_TRACKING_ID = '';
var FB_TRACKING_ID = '';
var SENTRY_TRACKING_ID = '';
var SITE_NAME = '';
var SITE_TITLE = '';
var SITE_DESCRIPTION = '';
var SITE_IMAGE = '';
// CONCATENATED MODULE: ./pages/test.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return test__default; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var test__default =
/*#__PURE__*/
function (_Document) {
  _inherits(_default, _Document);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return external__react_["createElement"]("html", {
        lang: "ko"
      }, external__react_["createElement"](document_["Head"], null, external__react_["createElement"]("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      }), external__react_["createElement"]("meta", {
        property: "og:type",
        content: "website"
      }), external__react_["createElement"]("meta", {
        property: "og:site_name",
        content: SITE_NAME
      }), external__react_["createElement"]("meta", {
        property: "og:title",
        content: SITE_TITLE
      }), external__react_["createElement"]("meta", {
        property: "og:description",
        content: SITE_DESCRIPTION
      }), external__react_["createElement"]("meta", {
        property: "og:image",
        content: SITE_IMAGE
      }), external__react_["createElement"]("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), external__react_["createElement"]("meta", {
        name: "twitter:site",
        content: SITE_NAME
      }), external__react_["createElement"]("meta", {
        name: "twitter:title",
        content: SITE_TITLE
      }), external__react_["createElement"]("meta", {
        name: "twitter:description",
        content: SITE_DESCRIPTION
      }), external__react_["createElement"]("meta", {
        property: "twitter:image",
        content: SITE_IMAGE
      }), external__react_["createElement"]("meta", {
        name: "format-detection",
        content: "telephone=no, address=no, email=no"
      }), external__react_["createElement"]("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
        integrity: "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",
        crossOrigin: "anonymous"
      }), external__react_["createElement"]("link", {
        rel: "shortcut icon",
        href: "/static/img/favicon.ico"
      }), external__react_["createElement"]("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css"
      }), external__react_["createElement"]("script", {
        src: "https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries"
      }), !DEV && FB_TRACKING_ID && external__react_["createElement"]("script", {
        dangerouslySetInnerHTML: {
          __html: "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window,document,'script', 'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '".concat(FB_TRACKING_ID, "');\nfbq('track', 'PageView'); ")
        }
      }), !DEV && FB_TRACKING_ID && external__react_["createElement"]("noscript", null, external__react_["createElement"]("img", {
        height: "1",
        width: "1",
        src: "//www.facebook.com/tr?id=".concat(FB_TRACKING_ID, "&ev=PageView&noscript=1")
      })), !DEV && SENTRY_TRACKING_ID && external__react_["createElement"]("script", _extends({
        src: "https://cdn.ravenjs.com/3.17.0/raven.min.js"
      }, {
        crossOrigin: 'anonymous'
      })), !DEV && SENTRY_TRACKING_ID && external__react_["createElement"]("script", {
        dangerouslySetInnerHTML: {
          __html: "Raven.config('https://".concat(SENTRY_TRACKING_ID, "@sentry.io/156600').install()")
        }
      }), DEV ? external__react_["createElement"]("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js",
        type: "text/javascript"
      }) : external__react_["createElement"]("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js",
        type: "text/javascript"
      })), external__react_["createElement"]("body", null, external__react_["createElement"](document_["Main"], null), external__react_["createElement"](document_["NextScript"], null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var documentProps,
            _ref,
            renderPage,
            page,
            _args = arguments;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return document__default.a.getInitialProps(_args.length <= 0 ? undefined : _args[0]);

              case 2:
                documentProps = _context.sent;
                _ref = _args.length <= 0 ? undefined : _args[0], renderPage = _ref.renderPage;
                page = renderPage();
                return _context.abrupt("return", _objectSpread({}, documentProps, page));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(document__default.a);



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ })
/******/ ]);