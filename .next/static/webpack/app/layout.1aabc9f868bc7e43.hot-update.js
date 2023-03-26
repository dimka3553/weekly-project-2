"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/components/Login/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Login/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-dialog */ \"(app-client)/./node_modules/@radix-ui/react-dialog/dist/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"(app-client)/./src/components/Login/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Avatar */ \"(app-client)/./src/components/Avatar.jsx\");\n\nvar _s = $RefreshSig$();\n// a login modal, with a login button that opens the modal, it contains an input with an email which is stored in local storage.\n// the login button should be hidden if the user is logged in, and the logout button should be shown instead.\n\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const email = localStorage.getItem(\"email\");\n        if (email) {\n            setEmail(email);\n            setInputValue(email);\n        }\n    }, []);\n    const handleLogin = ()=>{\n        localStorage.setItem(\"email\", inputValue);\n        setEmail(inputValue);\n        setIsOpen(false);\n    };\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"email\");\n        setEmail(\"\");\n        setIsOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Root, {\n            open: isOpen,\n            onOpenChange: setIsOpen,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Trigger, {\n                    className: \"text-primary\",\n                    children: [\n                        \" \",\n                        email ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hover:scale-105 active:scale-95 transition-[0.15s]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    account: email,\n                                    size: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this) : \"Log in\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Overlay, {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().DialogOverlay),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Content, {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().DialogContent),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-5 pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center h-[60px] justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                                            className: \"text-xl font-bold text-black\",\n                                            children: email ? \"Account \" : \"Log in\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Close, {\n                                            className: \"flex items-center justify-center h-10 w-10 rounded-full text-gray-500 text-2xl hover:bg-slate-100 hover:ring-2 text-center align-middle transition-[0.15s] hover:scale-105 active:scale-95\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                width: \"17\",\n                                                height: \"16\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 17 16\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                                        width: \"20\",\n                                                        height: \"2\",\n                                                        x: \"2.025\",\n                                                        y: \"0.222\",\n                                                        fill: \"#666\",\n                                                        rx: \"1\",\n                                                        transform: \"rotate(45 2.025 .222)\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                                        width: \"20\",\n                                                        height: \"2\",\n                                                        x: \"0.833\",\n                                                        y: \"14.586\",\n                                                        fill: \"#666\",\n                                                        rx: \"1\",\n                                                        transform: \"rotate(-45 .833 14.586)\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Description, {\n                                    className: \"mb-4 text-gray-500\",\n                                    children: email ? \"You are logged in as \" : \" Please enter your email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    value: inputValue,\n                                    disabled: email ? true : false,\n                                    onChange: (e)=>setInputValue(e.target.value),\n                                    className: \"w-full border border-gray-400 p-2 rounded-md mb-4\",\n                                    placeholder: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this),\n                                email ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogout,\n                                    className: \"bg-red-500 text-white px-5 py-2 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-[0.15s]\",\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogin,\n                                    className: \"bg-gray-500 text-white px-5 py-2 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-[0.15s]\",\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dimashkabura/Desktop/code/weekly-poject-2/src/components/Login/index.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Login, \"pyTlx6A44Qxn9dWP6MlvVGV8QQc=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQSxnSUFBZ0k7QUFDaEksNkdBQTZHO0FBRTVEO0FBQ0w7QUFDSDtBQUNBO0FBRTFCLFNBQVNLLFFBQVE7O0lBQzlCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFFMUNELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNSyxRQUFRTSxhQUFhQyxPQUFPLENBQUM7UUFDbkMsSUFBSVAsT0FBTztZQUNUQyxTQUFTRDtZQUNURyxjQUFjSDtRQUNoQixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwsTUFBTVEsY0FBYyxJQUFNO1FBQ3hCRixhQUFhRyxPQUFPLENBQUMsU0FBU1A7UUFDOUJELFNBQVNDO1FBQ1RHLFVBQVUsS0FBSztJQUNqQjtJQUVBLE1BQU1LLGVBQWUsSUFBTTtRQUN6QkosYUFBYUssVUFBVSxDQUFDO1FBQ3hCVixTQUFTO1FBQ1RJLFVBQVUsS0FBSztJQUNqQjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDWCx3REFBVztZQUFDbUIsTUFBTVQ7WUFBUVUsY0FBY1Q7OzhCQUN2Qyw4REFBQ1gsMkRBQWM7b0JBQUNzQixXQUFVOzt3QkFDdkI7d0JBQ0FoQixzQkFDQyw4REFBQ2lCOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ2xCLDBEQUFNQTtvQ0FBQ29CLFNBQVNsQjtvQ0FBT21CLE1BQU07Ozs7OztnQ0FBTzs7Ozs7O21DQUd2QyxRQUNEO3dCQUFFOzs7Ozs7OzhCQUVMLDhEQUFDekIsMkRBQWM7b0JBQUNzQixXQUFXbkIseUVBQW9COzhCQUM3Qyw0RUFBQ0gsMkRBQWM7d0JBQUNzQixXQUFXbkIseUVBQW9CO2tDQUM3Qyw0RUFBQ29COzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUlELFdBQVU7O3NEQUNiLDhEQUFDdEIseURBQVk7NENBQUNzQixXQUFVO3NEQUNyQmhCLFFBQVEsYUFBYSxRQUFROzs7Ozs7c0RBRWhDLDhEQUFDTix5REFBWTs0Q0FBQ3NCLFdBQVU7c0RBQ3RCLDRFQUFDVTtnREFDQ0MsT0FBTTtnREFDTkMsT0FBTTtnREFDTkMsUUFBTztnREFDUEMsTUFBSztnREFDTEMsU0FBUTs7a0VBRVIsOERBQUNDO3dEQUNDSixPQUFNO3dEQUNOQyxRQUFPO3dEQUNQSSxHQUFFO3dEQUNGQyxHQUFFO3dEQUNGSixNQUFLO3dEQUNMSyxJQUFHO3dEQUNIQyxXQUFVOzs7Ozs7a0VBRVosOERBQUNKO3dEQUNDSixPQUFNO3dEQUNOQyxRQUFPO3dEQUNQSSxHQUFFO3dEQUNGQyxHQUFFO3dEQUNGSixNQUFLO3dEQUNMSyxJQUFHO3dEQUNIQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FNbEIsOERBQUMxQywrREFBa0I7b0NBQUNzQixXQUFVOzhDQUMzQmhCLFFBQVEsMEJBQTBCLDBCQUEwQjs7Ozs7OzhDQUUvRCw4REFBQ3NDO29DQUNDQyxNQUFLO29DQUNMQyxPQUFPdEM7b0NBQ1B1QyxVQUFVekMsUUFBUSxJQUFJLEdBQUcsS0FBSztvQ0FDOUIwQyxVQUFVLENBQUNDLElBQU14QyxjQUFjd0MsRUFBRUMsTUFBTSxDQUFDSixLQUFLO29DQUM3Q3hCLFdBQVU7b0NBQ1Y2QixhQUFZOzs7Ozs7Z0NBRWI3QyxzQkFDQyw4REFBQzhDO29DQUNDQyxTQUFTckM7b0NBQ1RNLFdBQVU7OENBQ1g7Ozs7O3lEQUlELDhEQUFDOEI7b0NBQ0NDLFNBQVN2QztvQ0FDVFEsV0FBVTs4Q0FDWDs7Ozs7d0NBR0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mLENBQUM7R0EzR3VCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vaW5kZXgudHN4PzBhYzYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbi8vIGEgbG9naW4gbW9kYWwsIHdpdGggYSBsb2dpbiBidXR0b24gdGhhdCBvcGVucyB0aGUgbW9kYWwsIGl0IGNvbnRhaW5zIGFuIGlucHV0IHdpdGggYW4gZW1haWwgd2hpY2ggaXMgc3RvcmVkIGluIGxvY2FsIHN0b3JhZ2UuXG4vLyB0aGUgbG9naW4gYnV0dG9uIHNob3VsZCBiZSBoaWRkZW4gaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluLCBhbmQgdGhlIGxvZ291dCBidXR0b24gc2hvdWxkIGJlIHNob3duIGluc3RlYWQuXG5cbmltcG9ydCAqIGFzIERpYWxvZyBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQC9jb21wb25lbnRzL0F2YXRhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XG4gICAgaWYgKGVtYWlsKSB7XG4gICAgICBzZXRFbWFpbChlbWFpbCk7XG4gICAgICBzZXRJbnB1dFZhbHVlKGVtYWlsKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIGlucHV0VmFsdWUpO1xuICAgIHNldEVtYWlsKGlucHV0VmFsdWUpO1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZW1haWxcIik7XG4gICAgc2V0RW1haWwoXCJcIik7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RGlhbG9nLlJvb3Qgb3Blbj17aXNPcGVufSBvbk9wZW5DaGFuZ2U9e3NldElzT3Blbn0+XG4gICAgICAgIDxEaWFsb2cuVHJpZ2dlciBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAge2VtYWlsID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tWzAuMTVzXVwiPlxuICAgICAgICAgICAgICA8QXZhdGFyIGFjY291bnQ9e2VtYWlsfSBzaXplPXszMH0gLz57XCIgXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJMb2cgaW5cIlxuICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICA8L0RpYWxvZy5UcmlnZ2VyPlxuICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPXtzdHlsZXMuRGlhbG9nT3ZlcmxheX0+XG4gICAgICAgICAgPERpYWxvZy5Db250ZW50IGNsYXNzTmFtZT17c3R5bGVzLkRpYWxvZ0NvbnRlbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHBiLTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBoLVs2MHB4XSBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgIHtlbWFpbCA/IFwiQWNjb3VudCBcIiA6IFwiTG9nIGluXCJ9XG4gICAgICAgICAgICAgICAgPC9EaWFsb2cuVGl0bGU+XG4gICAgICAgICAgICAgICAgPERpYWxvZy5DbG9zZSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTEwIHctMTAgcm91bmRlZC1mdWxsIHRleHQtZ3JheS01MDAgdGV4dC0yeGwgaG92ZXI6Ymctc2xhdGUtMTAwIGhvdmVyOnJpbmctMiB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUgdHJhbnNpdGlvbi1bMC4xNXNdIGhvdmVyOnNjYWxlLTEwNSBhY3RpdmU6c2NhbGUtOTVcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTdcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNyAxNlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgeD1cIjIuMDI1XCJcbiAgICAgICAgICAgICAgICAgICAgICB5PVwiMC4yMjJcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNjY2XCJcbiAgICAgICAgICAgICAgICAgICAgICByeD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg0NSAyLjAyNSAuMjIyKVwiXG4gICAgICAgICAgICAgICAgICAgID48L3JlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgeD1cIjAuODMzXCJcbiAgICAgICAgICAgICAgICAgICAgICB5PVwiMTQuNTg2XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzY2NlwiXG4gICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoLTQ1IC44MzMgMTQuNTg2KVwiXG4gICAgICAgICAgICAgICAgICAgID48L3JlY3Q+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L0RpYWxvZy5DbG9zZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPERpYWxvZy5EZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJtYi00IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICB7ZW1haWwgPyBcIllvdSBhcmUgbG9nZ2VkIGluIGFzIFwiIDogXCIgUGxlYXNlIGVudGVyIHlvdXIgZW1haWxcIn1cbiAgICAgICAgICAgICAgPC9EaWFsb2cuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2VtYWlsID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS00MDAgcC0yIHJvdW5kZWQtbWQgbWItNFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtlbWFpbCA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgcHgtNSBweS0yIHJvdW5kZWQtbWQgaG92ZXI6c2NhbGUtWzEuMDJdIGFjdGl2ZTpzY2FsZS1bMC45OF0gdHJhbnNpdGlvbi1bMC4xNXNdXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIHRleHQtd2hpdGUgcHgtNSBweS0yIHJvdW5kZWQtbWQgaG92ZXI6c2NhbGUtWzEuMDJdIGFjdGl2ZTpzY2FsZS1bMC45OF0gdHJhbnNpdGlvbi1bMC4xNXNdXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRGlhbG9nLkNvbnRlbnQ+XG4gICAgICAgIDwvRGlhbG9nLk92ZXJsYXk+XG4gICAgICA8L0RpYWxvZy5Sb290PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkRpYWxvZyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQXZhdGFyIiwiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlTG9naW4iLCJzZXRJdGVtIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIlJvb3QiLCJvcGVuIiwib25PcGVuQ2hhbmdlIiwiVHJpZ2dlciIsImNsYXNzTmFtZSIsImRpdiIsImFjY291bnQiLCJzaXplIiwiT3ZlcmxheSIsIkRpYWxvZ092ZXJsYXkiLCJDb250ZW50IiwiRGlhbG9nQ29udGVudCIsIlRpdGxlIiwiQ2xvc2UiLCJzdmciLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsInZpZXdCb3giLCJyZWN0IiwieCIsInkiLCJyeCIsInRyYW5zZm9ybSIsIkRlc2NyaXB0aW9uIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Login/index.tsx\n"));

/***/ })

});