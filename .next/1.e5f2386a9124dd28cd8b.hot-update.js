webpackHotUpdate(1,{

/***/ "./pages/_document.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("./node_modules/next/document.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_constants_env__ = __webpack_require__("./src/constants/env.ts");
var _jsxFileName = "/Users/khanh/node-js-getting-started/pages/_document.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _default =
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
      return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("html", {
        lang: "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        property: "og:type",
        content: "website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        property: "og:site_name",
        content: __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["h" /* SITE_NAME */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        property: "og:title",
        content: __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["i" /* SITE_TITLE */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        property: "og:description",
        content: __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["e" /* SITE_DESCRIPTION */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        property: "og:image",
        content: __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["f" /* SITE_IMAGE */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        name: "twitter:card",
        content: "summary_large_image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        name: "twitter:site",
        content: __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["h" /* SITE_NAME */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        name: "twitter:title",
        content: __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["i" /* SITE_TITLE */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        name: "twitter:description",
        content: __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["e" /* SITE_DESCRIPTION */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        property: "twitter:image",
        content: __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["f" /* SITE_IMAGE */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        name: "format-detection",
        content: "telephone=no, address=no, email=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["h" /* SITE_NAME */]), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        name: "description",
        content: __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["e" /* SITE_DESCRIPTION */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", {
        name: "keywords",
        content: __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["g" /* SITE_KEYWORDS */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", {
        rel: "shortcut icon",
        type: "image/png/ico",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", {
        src: "https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), !__WEBPACK_IMPORTED_MODULE_2__src_constants_env__["a" /* DEV */] && __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["b" /* FB_TRACKING_ID */] && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", {
        dangerouslySetInnerHTML: {
          __html: "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window,document,'script', 'https://connect.facebook.net/en_US/fbevents.js');\n                  fbq('init', '".concat(__WEBPACK_IMPORTED_MODULE_2__src_constants_env__["b" /* FB_TRACKING_ID */], "');\n                  fbq('track', 'PageView'); ")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("noscript", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", {
        height: "1",
        width: "1",
        src: "//www.facebook.com/tr?id=".concat(__WEBPACK_IMPORTED_MODULE_2__src_constants_env__["b" /* FB_TRACKING_ID */], "&ev=PageView&noscript=1"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }))), !__WEBPACK_IMPORTED_MODULE_2__src_constants_env__["a" /* DEV */] && __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["c" /* GA_TRACKING_ID */] && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=".concat(__WEBPACK_IMPORTED_MODULE_2__src_constants_env__["c" /* GA_TRACKING_ID */]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", {
        dangerouslySetInnerHTML: {
          __html: "window.dataLayer = window.dataLayer || [];\n                  function gtag(){dataLayer.push(arguments);}\n                  gtag('js', new Date());\n                  gtag('config', '".concat(__WEBPACK_IMPORTED_MODULE_2__src_constants_env__["c" /* GA_TRACKING_ID */], "');")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), !__WEBPACK_IMPORTED_MODULE_2__src_constants_env__["a" /* DEV */] && __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["d" /* SENTRY_TRACKING_ID */] && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", _extends({
        src: "https://cdn.ravenjs.com/3.17.0/raven.min.js"
      }, {
        crossOrigin: 'anonymous'
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), !__WEBPACK_IMPORTED_MODULE_2__src_constants_env__["a" /* DEV */] && __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["d" /* SENTRY_TRACKING_ID */] && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", {
        dangerouslySetInnerHTML: {
          __html: "Raven.config('https://".concat(__WEBPACK_IMPORTED_MODULE_2__src_constants_env__["d" /* SENTRY_TRACKING_ID */], "@sentry.io/156600').install()")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_2__src_constants_env__["a" /* DEV */] ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js",
        type: "text/javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js",
        type: "text/javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_document")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.e5f2386a9124dd28cd8b.hot-update.js.map