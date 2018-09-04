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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/document"
var document_ = __webpack_require__(8);
var document__default = /*#__PURE__*/__webpack_require__.n(document_);

// CONCATENATED MODULE: ./src/constants/env.ts
var DEV = "production" !== 'production';
var SITE_DOMAIN = 'https://www.vndevs.tk';
var GA_TRACKING_ID = 'GTM-WB4RWJ9';
var GTAG_ID = 'UA-125125869-1';
var FB_TRACKING_ID = '';
var SENTRY_TRACKING_ID = '';
var SITE_NAME = 'VNDEVS | VietNam Developers | IT consultants';
var SITE_TITLE = 'VNDEVS | VietNam Developers | IT consultants';
var SITE_DESCRIPTION = "We are developers from VietNam. We help you invent what's next, and bring it to life with technology.";
var SITE_IMAGE = "".concat(SITE_DOMAIN, "/company-logo.png");
var SITE_KEYWORDS = 'vndevs, vietnam developer, vietnam developers, viet nam developers, it consultants, vndevs consultants';
// CONCATENATED MODULE: ./pages/_document.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _document__default; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _document__default =
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
        lang: "en"
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
      }), external__react_["createElement"]("title", null, SITE_NAME), external__react_["createElement"]("meta", {
        name: "description",
        content: SITE_DESCRIPTION
      }), external__react_["createElement"]("meta", {
        name: "keywords",
        content: SITE_KEYWORDS
      }), external__react_["createElement"]("link", {
        rel: "shortcut icon",
        type: "image/png/ico",
        href: "/static/favicon.ico"
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
      })), !DEV && GTAG_ID && external__react_["createElement"](external__react_["Fragment"], null, external__react_["createElement"]("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-125125869-1"
      }), external__react_["createElement"]("script", {
        dangerouslySetInnerHTML: {
          __html: "window.dataLayer = window.dataLayer || [];\n                  function gtag(){dataLayer.push(arguments);}\n                  gtag('js', new Date());\n                  gtag('config', '".concat(GTAG_ID, "');")
        }
      })), !DEV && GA_TRACKING_ID && external__react_["createElement"](external__react_["Fragment"], null, external__react_["createElement"]("style", null, '.async-hide { opacity: 0 !important}'), external__react_["createElement"]("script", {
        dangerouslySetInnerHTML: {
          __html: "(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;\n                  h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};\n                  (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;\n                  })(window,document.documentElement,'async-hide','dataLayer',4000,\n                  {'".concat(GA_TRACKING_ID, "':true});")
        }
      })), !DEV && GA_TRACKING_ID && external__react_["createElement"]("script", {
        dangerouslySetInnerHTML: {
          __html: "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n                  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n                  ga('create', 'UA-62971524-1', 'auto');\n                  ga('require', '".concat(GA_TRACKING_ID, "');\n                  ga('send', 'pageview');")
        }
      }), !DEV && SENTRY_TRACKING_ID && external__react_["createElement"]("script", _extends({
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
  }]);

  return _default;
}(document__default.a);



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ })
/******/ ]);