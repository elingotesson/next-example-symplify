"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst sstsdk = __webpack_require__(/*! @symplify-conversion/sst-sdk-nodejs */ \"@symplify-conversion/sst-sdk-nodejs\");\nconst sst = new sstsdk(process.env.SYMPLIFY_WEBSITE_ID);\nconst cookieJar = (req, res)=>{\n    return {\n        get: (key)=>(0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)(key, {\n                req,\n                res\n            }),\n        set: (key, value, expiresInDays)=>{\n            const expires = new Date(Date.now() + expiresInDays * 24 * 3600 * 1000);\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.setCookie)(key, value, {\n                req,\n                res,\n                expires\n            });\n        }\n    };\n};\nfunction Page({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: data || \"Data was not sent from the server\"\n    }, void 0, false, {\n        fileName: \"/Users/elin.gotesson/projects/next-example-symplify/pages/test.tsx\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, this);\n}\n// This gets called on every request\nasync function getServerSideProps(context) {\n    let variant = null;\n    const testName = \"Server side test acce\";\n    const testVariation = sst?.findVariation(testName, cookieJar(context.req, context.res));\n    if (testVariation) {\n        switch(testVariation){\n            case \"Original\":\n                variant = \"original\";\n                break;\n            case \"Variant 1\":\n                variant = \"variant-1\";\n                break;\n        }\n    }\n    // Pass data to the page via props\n    return {\n        props: {\n            data: variant\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFvRDtBQUVwRCxNQUFNRSxTQUFTQyxtQkFBT0EsQ0FBQztBQUN2QixNQUFNQyxNQUFNLElBQUlGLE9BQU9HLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CO0FBRXRELE1BQU1DLFlBQVksQ0FBQ0MsS0FBVUMsTUFBYTtJQUN6QyxPQUFPO1FBQ05DLEtBQUssQ0FBQ0MsTUFBZ0JaLHVEQUFTQSxDQUFDWSxLQUFLO2dCQUFFSDtnQkFBS0M7WUFBSTtRQUNoREcsS0FBSyxDQUFDRCxLQUFhRSxPQUFlQyxnQkFBMEI7WUFDM0QsTUFBTUMsVUFBVSxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUtILGdCQUFnQixLQUFLLE9BQU87WUFDbEVkLHVEQUFTQSxDQUFDVyxLQUFLRSxPQUFPO2dCQUFFTDtnQkFBS0M7Z0JBQUtNO1lBQVE7UUFDM0M7SUFDRDtBQUNEO0FBTUEsU0FBU0csS0FBSyxFQUFFQyxLQUFJLEVBQVMsRUFBRTtJQUM3QixxQkFBTyw4REFBQ0M7a0JBQUlELFFBQVE7Ozs7OztBQUN0QjtBQUVBLG9DQUFvQztBQUM3QixlQUFlRSxtQkFBbUJDLE9BQVksRUFBRTtJQUN0RCxJQUFJQyxVQUFVLElBQUk7SUFDbEIsTUFBTUMsV0FBVztJQUNqQixNQUFNQyxnQkFBZ0J0QixLQUFLdUIsY0FBY0YsVUFBVWpCLFVBQVVlLFFBQVFkLEdBQUcsRUFBRWMsUUFBUWIsR0FBRztJQUVyRixJQUFJZ0IsZUFBZTtRQUNsQixPQUFRQTtZQUNQLEtBQUs7Z0JBQ0FGLFVBQVU7Z0JBQ2QsS0FBTTtZQUNQLEtBQUs7Z0JBQ0pBLFVBQVU7Z0JBQ1YsS0FBTTtRQUNSO0lBQ0QsQ0FBQztJQUVBLGtDQUFrQztJQUNsQyxPQUFPO1FBQUVJLE9BQU87WUFBRVIsTUFBTUk7UUFBUTtJQUFFO0FBQ3BDLENBQUM7QUFFRCxpRUFBZUwsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZXhhbXBsZS1zeW1wbGlmeS8uL3BhZ2VzL3Rlc3QudHN4PzdhMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29va2llLCBzZXRDb29raWUgfSBmcm9tIFwiY29va2llcy1uZXh0XCI7XG5cbmNvbnN0IHNzdHNkayA9IHJlcXVpcmUoJ0BzeW1wbGlmeS1jb252ZXJzaW9uL3NzdC1zZGstbm9kZWpzJyk7XG5jb25zdCBzc3QgPSBuZXcgc3N0c2RrKHByb2Nlc3MuZW52LlNZTVBMSUZZX1dFQlNJVEVfSUQpO1xuXG5jb25zdCBjb29raWVKYXIgPSAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Z2V0OiAoa2V5OiBzdHJpbmcpID0+IGdldENvb2tpZShrZXksIHsgcmVxLCByZXMgfSksXG5cdFx0c2V0OiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbkRheXM6IG51bWJlcikgPT4ge1xuXHRcdFx0Y29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyBleHBpcmVzSW5EYXlzICogMjQgKiAzNjAwICogMTAwMCk7XG5cdFx0XHRzZXRDb29raWUoa2V5LCB2YWx1ZSwgeyByZXEsIHJlcywgZXhwaXJlcyB9KTtcblx0XHR9LFxuXHR9O1xufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBQYWdlKHsgZGF0YSB9OiBQcm9wcykge1xuICByZXR1cm4gPGgxPntkYXRhIHx8ICdEYXRhIHdhcyBub3Qgc2VudCBmcm9tIHRoZSBzZXJ2ZXInIH08L2gxPlxufVxuXG4vLyBUaGlzIGdldHMgY2FsbGVkIG9uIGV2ZXJ5IHJlcXVlc3RcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogYW55KSB7XG5cdGxldCB2YXJpYW50ID0gbnVsbDtcblx0Y29uc3QgdGVzdE5hbWUgPSAnU2VydmVyIHNpZGUgdGVzdCBhY2NlJztcblx0Y29uc3QgdGVzdFZhcmlhdGlvbiA9IHNzdD8uZmluZFZhcmlhdGlvbih0ZXN0TmFtZSwgY29va2llSmFyKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcykpO1xuXG5cdGlmICh0ZXN0VmFyaWF0aW9uKSB7XG5cdFx0c3dpdGNoICh0ZXN0VmFyaWF0aW9uKSB7XG5cdFx0XHRjYXNlICdPcmlnaW5hbCc6XG4gICAgICAgIHZhcmlhbnQgPSAnb3JpZ2luYWwnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ1ZhcmlhbnQgMSc6XG5cdFx0XHRcdHZhcmlhbnQgPSAndmFyaWFudC0xJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyBwcm9wczogeyBkYXRhOiB2YXJpYW50IH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlIl0sIm5hbWVzIjpbImdldENvb2tpZSIsInNldENvb2tpZSIsInNzdHNkayIsInJlcXVpcmUiLCJzc3QiLCJwcm9jZXNzIiwiZW52IiwiU1lNUExJRllfV0VCU0lURV9JRCIsImNvb2tpZUphciIsInJlcSIsInJlcyIsImdldCIsImtleSIsInNldCIsInZhbHVlIiwiZXhwaXJlc0luRGF5cyIsImV4cGlyZXMiLCJEYXRlIiwibm93IiwiUGFnZSIsImRhdGEiLCJoMSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJ2YXJpYW50IiwidGVzdE5hbWUiLCJ0ZXN0VmFyaWF0aW9uIiwiZmluZFZhcmlhdGlvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.tsx\n");

/***/ }),

/***/ "@symplify-conversion/sst-sdk-nodejs":
/*!******************************************************!*\
  !*** external "@symplify-conversion/sst-sdk-nodejs" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("@symplify-conversion/sst-sdk-nodejs");

/***/ }),

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/test.tsx"));
module.exports = __webpack_exports__;

})();