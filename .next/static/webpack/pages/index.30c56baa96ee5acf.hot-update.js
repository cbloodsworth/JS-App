"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _class; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass _class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps() {\n        const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://random.dog/woof.json?filter=mp4,webm\");\n        const data = await res.json();\n        return {\n            imageURL: data.url\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"homepage-wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"g_id_onload\",\n                                \"data-client_id\": \"YOUR_GOOGLE_CLIENT_ID\",\n                                \"data-login_uri\": \"https://your.domain/your_login_endpoint\",\n                                \"data-auto_prompt\": \"false\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                                lineNumber: 20,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"g_id_signin\",\n                                \"data-type\": \"standard\",\n                                \"data-size\": \"large\",\n                                \"data-theme\": \"outline\",\n                                \"data-text\": \"sign_in_with\",\n                                \"data-shape\": \"rectangular\",\n                                \"data-callback\": \"OnSuccess\",\n                                \"data-logo_alignment\": \"left\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                                lineNumber: 25,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 3\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Welcome to Protest Plots!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"zipcode-input\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Enter your zipcode: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            for: \"zipcode\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"zipcode\",\n                            name: \"zipcode\",\n                            maxLength: \"5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"about-us\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"What is Protest Plots?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"ProtestPlots is a centralized hub of information for people to gather information about protests nearby.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"login-button\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this);\n    }\n}\n\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDRjtBQUl2QixxQkFBY0MsNENBQVNBO0lBQ2xDLGFBQWFFLGtCQUFrQjtRQUMzQixNQUFNQyxNQUFNLE1BQU1GLHlEQUFLQSxDQUFDO1FBQ3hCLE1BQU1HLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUUzQixPQUFPO1lBQ0hDLFVBQVVGLEtBQUtHLEdBQUc7UUFDdEI7SUFDSjtJQUNBQyxTQUFVO1FBQ04scUJBQ0ksOERBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQzs4QkFDZiw0RUFBQ0M7OzBDQUNHLDhEQUFDSDtnQ0FBSUksSUFBRztnQ0FDTEMsa0JBQWU7Z0NBQ2ZDLGtCQUFlO2dDQUNmQyxvQkFBaUI7Ozs7OzswQ0FFcEIsOERBQUNQO2dDQUFJUSxPQUFNO2dDQUNSQyxhQUFVO2dDQUNWQyxhQUFVO2dDQUNWQyxjQUFXO2dDQUNYQyxhQUFVO2dDQUNWQyxjQUFXO2dDQUNYQyxpQkFBYztnQ0FDZEMsdUJBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJYiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ2hCO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ2dCO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOzRCQUFNQyxLQUFJOzs7Ozs7c0NBQ1gsOERBQUNDOzRCQUFNQyxNQUFLOzRCQUFPakIsSUFBRzs0QkFBVWtCLE1BQUs7NEJBQVVDLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFFN0QsOERBQUNDO29CQUFRdkIsV0FBVTs7c0NBQ2YsOERBQUN3QjtzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQztzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQUVQLDhEQUFDQztvQkFBTzFCLFdBQVU7OEJBQWU7Ozs7Ozs7Ozs7OztJQUc3QztBQUNKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9yYW5kb20uZG9nL3dvb2YuanNvbj9maWx0ZXI9bXA0LHdlYm1cIilcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbWFnZVVSTDogZGF0YS51cmxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGh0bWw+XHJcbiAgPGJvZHk+XHJcbiAgICAgIDxkaXYgaWQ9XCJnX2lkX29ubG9hZFwiXHJcbiAgICAgICAgIGRhdGEtY2xpZW50X2lkPVwiWU9VUl9HT09HTEVfQ0xJRU5UX0lEXCJcclxuICAgICAgICAgZGF0YS1sb2dpbl91cmk9XCJodHRwczovL3lvdXIuZG9tYWluL3lvdXJfbG9naW5fZW5kcG9pbnRcIlxyXG4gICAgICAgICBkYXRhLWF1dG9fcHJvbXB0PVwiZmFsc2VcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJnX2lkX3NpZ25pblwiXHJcbiAgICAgICAgIGRhdGEtdHlwZT1cInN0YW5kYXJkXCJcclxuICAgICAgICAgZGF0YS1zaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICBkYXRhLXRoZW1lPVwib3V0bGluZVwiXHJcbiAgICAgICAgIGRhdGEtdGV4dD1cInNpZ25faW5fd2l0aFwiXHJcbiAgICAgICAgIGRhdGEtc2hhcGU9XCJyZWN0YW5ndWxhclwiXHJcbiAgICAgICAgIGRhdGEtY2FsbGJhY2s9XCJPblN1Y2Nlc3NcIlxyXG4gICAgICAgICBkYXRhLWxvZ29fYWxpZ25tZW50PVwibGVmdFwiPlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2JvZHk+XHJcbjwvaHRtbD5cclxuICAgICAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIFByb3Rlc3QgUGxvdHMhPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiemlwY29kZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5FbnRlciB5b3VyIHppcGNvZGU6IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInppcGNvZGVcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiemlwY29kZVwiIG5hbWU9XCJ6aXBjb2RlXCIgbWF4TGVuZ3RoPVwiNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImFib3V0LXVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPldoYXQgaXMgUHJvdGVzdCBQbG90cz88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlByb3Rlc3RQbG90cyBpcyBhIGNlbnRyYWxpemVkIGh1YiBvZiBpbmZvcm1hdGlvbiBmb3IgcGVvcGxlIHRvIGdhdGhlciBpbmZvcm1hdGlvbiBhYm91dCBwcm90ZXN0cyBuZWFyYnkuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbi1idXR0b25cIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmZXRjaCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImRhdGEiLCJqc29uIiwiaW1hZ2VVUkwiLCJ1cmwiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJodG1sIiwiYm9keSIsImlkIiwiZGF0YS1jbGllbnRfaWQiLCJkYXRhLWxvZ2luX3VyaSIsImRhdGEtYXV0b19wcm9tcHQiLCJjbGFzcyIsImRhdGEtdHlwZSIsImRhdGEtc2l6ZSIsImRhdGEtdGhlbWUiLCJkYXRhLXRleHQiLCJkYXRhLXNoYXBlIiwiZGF0YS1jYWxsYmFjayIsImRhdGEtbG9nb19hbGlnbm1lbnQiLCJoMSIsImgyIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwibWF4TGVuZ3RoIiwiYXJ0aWNsZSIsImgzIiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});