"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/chatbot.tsx":
/*!********************************!*\
  !*** ./components/chatbot.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Chatbot = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleToggleChat = ()=>setIsOpen(!isOpen);\n    const sendMessage = async ()=>{\n        if (userInput.trim()) {\n            // Add user's message to the chat\n            setMessages((prev)=>[\n                    ...prev,\n                    {\n                        sender: \"user\",\n                        text: userInput\n                    }\n                ]);\n            try {\n                // Send the message to the backend\n                const response = await fetch(\"http://127.0.0.1:5000/chatbot\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        question: userInput\n                    })\n                });\n                if (response.ok) {\n                    const data = await response.json();\n                    // Add the bot's response to the chat\n                    setMessages((prev)=>[\n                            ...prev,\n                            {\n                                sender: \"bot\",\n                                text: data.response\n                            }\n                        ]);\n                } else {\n                    console.error(\"Error from backend:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error:\", error);\n            }\n            // Clear the input field\n            setUserInput(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: styles.toggleButton,\n                onClick: handleToggleChat,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"fa fa-robot\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Owner\\\\portfolio-website\\\\components\\\\chatbot.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Owner\\\\portfolio-website\\\\components\\\\chatbot.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.chatContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.chatHeader,\n                        children: \"Hi, I'm a Personal Bot for Sai Mahadasa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\portfolio-website\\\\components\\\\chatbot.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 1,\n                            overflowY: \"auto\"\n                        },\n                        children: messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    ...styles.message,\n                                    ...msg.sender === \"user\" ? styles.userMessage : styles.botMessage\n                                },\n                                children: msg.text\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Owner\\\\portfolio-website\\\\components\\\\chatbot.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\portfolio-website\\\\components\\\\chatbot.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.inputContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                style: styles.input,\n                                value: userInput,\n                                onChange: (e)=>setUserInput(e.target.value),\n                                placeholder: \"Type your message...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Owner\\\\portfolio-website\\\\components\\\\chatbot.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: styles.sendButton,\n                                onClick: sendMessage,\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Owner\\\\portfolio-website\\\\components\\\\chatbot.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\portfolio-website\\\\components\\\\chatbot.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Owner\\\\portfolio-website\\\\components\\\\chatbot.tsx\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Owner\\\\portfolio-website\\\\components\\\\chatbot.tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chatbot, \"rhsWDET3SIUWZZrtNhTCE2G7f6g=\");\n_c = Chatbot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chatbot);\n// Define styles with CSSProperties\nconst styles = {\n    toggleButton: {\n        position: \"fixed\",\n        right: \"20px\",\n        bottom: \"20px\",\n        backgroundColor: \"#5c67f2\",\n        color: \"white\",\n        border: \"none\",\n        borderRadius: \"5px\",\n        padding: \"10px 15px\",\n        cursor: \"pointer\",\n        zIndex: 1000,\n        fontSize: \"16px\"\n    },\n    chatContainer: {\n        position: \"fixed\",\n        right: \"20px\",\n        bottom: \"70px\",\n        width: \"400px\",\n        maxWidth: \"90%\",\n        height: \"100vh\",\n        maxHeight: \"90vh\",\n        borderRadius: \"10px\",\n        boxShadow: \"0 4px 10px rgba(0, 0, 0, 0.2)\",\n        overflowY: \"auto\",\n        backgroundColor: \"#fff\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        padding: \"15px\",\n        zIndex: 1000\n    },\n    message: {\n        borderRadius: \"8px\",\n        padding: \"10px\",\n        maxWidth: \"80%\",\n        wordWrap: \"break-word\",\n        color: \"#333\",\n        marginBottom: \"10px\"\n    },\n    user: {\n        alignSelf: \"flex-end\",\n        backgroundColor: \"#e1ffc7\"\n    },\n    bot: {\n        alignSelf: \"flex-start\",\n        backgroundColor: \"#d1e8ff\"\n    },\n    inputContainer: {\n        display: \"flex\",\n        marginTop: \"10px\"\n    },\n    input: {\n        flex: 1,\n        padding: \"8px\",\n        border: \"1px solid #ccc\",\n        borderRadius: \"5px\",\n        fontSize: \"14px\",\n        transition: \"border-color 0.3s\"\n    },\n    button: {\n        backgroundColor: \"#5c67f2\",\n        color: \"white\",\n        border: \"none\",\n        borderRadius: \"5px\",\n        padding: \"8px 12px\",\n        cursor: \"pointer\",\n        marginLeft: \"10px\",\n        fontSize: \"14px\",\n        transition: \"background-color 0.3s\"\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Chatbot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDUkMsUUFBUTtRQUNSQyxVQUFVO0lBQ2Q7SUFDQTdCLGVBQWU7UUFDWG1CLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JTLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWFIsY0FBYztRQUNkUyxXQUFXO1FBQ1gvQixXQUFXO1FBQ1htQixpQkFBaUI7UUFDakJhLFNBQVM7UUFDVEMsZUFBZTtRQUNmVixTQUFTO1FBQ1RFLFFBQVE7SUFDWjtJQUNBckIsU0FBUztRQUNMa0IsY0FBYztRQUNkQyxTQUFTO1FBQ1RLLFVBQVU7UUFDVk0sVUFBVTtRQUNWZCxPQUFPO1FBQ1BlLGNBQWM7SUFDbEI7SUFDQUMsTUFBTTtRQUNGQyxXQUFXO1FBQ1hsQixpQkFBaUI7SUFDckI7SUFDQW1CLEtBQUs7UUFDREQsV0FBVztRQUNYbEIsaUJBQWlCO0lBQ3JCO0lBQ0FaLGdCQUFnQjtRQUNaeUIsU0FBUztRQUNUTyxXQUFXO0lBQ2Y7SUFDQS9CLE9BQU87UUFDSFQsTUFBTTtRQUNOd0IsU0FBUztRQUNURixRQUFRO1FBQ1JDLGNBQWM7UUFDZEksVUFBVTtRQUNWYyxZQUFZO0lBQ2hCO0lBQ0FsRCxRQUFRO1FBQ0o2QixpQkFBaUI7UUFDakJDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLFNBQVM7UUFDVEMsUUFBUTtRQUNSaUIsWUFBWTtRQUNaZixVQUFVO1FBQ1ZjLFlBQVk7SUFDaEI7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NoYXRib3QudHN4P2Q5ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2hhdGJvdDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPHsgc2VuZGVyOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9W10+KFtdKTtcclxuICAgIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZUNoYXQgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJJbnB1dC50cmltKCkpIHtcclxuICAgICAgICAgICAgLy8gQWRkIHVzZXIncyBtZXNzYWdlIHRvIHRoZSBjaGF0XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgeyBzZW5kZXI6ICd1c2VyJywgdGV4dDogdXNlcklucHV0IH1dKTtcclxuICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgbWVzc2FnZSB0byB0aGUgYmFja2VuZFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwL2NoYXRib3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVzdGlvbjogdXNlcklucHV0IH0pLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBib3QncyByZXNwb25zZSB0byB0aGUgY2hhdFxyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgeyBzZW5kZXI6ICdib3QnLCB0ZXh0OiBkYXRhLnJlc3BvbnNlIH1dKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZnJvbSBiYWNrZW5kOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGlucHV0IGZpZWxkXHJcbiAgICAgICAgICAgIHNldFVzZXJJbnB1dCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogQm90IFRvZ2dsZSBCdXR0b24gKi99XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy50b2dnbGVCdXR0b259IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZUNoYXR9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcm9ib3RcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgey8qIENoYXQgQ29udGFpbmVyICovfVxyXG4gICAgICAgICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2hhdEhlYWRlcn0+SGksIEknbSBhIFBlcnNvbmFsIEJvdCBmb3IgU2FpIE1haGFkYXNhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1lc3NhZ2VzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgb3ZlcmZsb3dZOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZXMubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4obXNnLnNlbmRlciA9PT0gJ3VzZXInID8gc3R5bGVzLnVzZXJNZXNzYWdlIDogc3R5bGVzLmJvdE1lc3NhZ2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21zZy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogSW5wdXQgRmllbGQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmlucHV0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcklucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuc2VuZEJ1dHRvbn0gb25DbGljaz17c2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRib3Q7XHJcblxyXG5cclxuLy8gRGVmaW5lIHN0eWxlcyB3aXRoIENTU1Byb3BlcnRpZXNcclxuY29uc3Qgc3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IFJlYWN0LkNTU1Byb3BlcnRpZXMgfSA9IHtcclxuICAgIHRvZ2dsZUJ1dHRvbjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIHJpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgYm90dG9tOiAnMjBweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzVjNjdmMicsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCAxNXB4JyxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICB6SW5kZXg6IDEwMDAsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JywgLy8gQWRkZWQgZm9udCBzaXplIGZvciBjb25zaXN0ZW5jeVxyXG4gICAgfSxcclxuICAgIGNoYXRDb250YWluZXI6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICByaWdodDogJzIwcHgnLFxyXG4gICAgICAgIGJvdHRvbTogJzcwcHgnLFxyXG4gICAgICAgIHdpZHRoOiAnNDAwcHgnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnOTAlJywgLy8gTWFrZSBpdCByZXNwb25zaXZlXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzkwdmgnLCAvLyBMaW1pdCBoZWlnaHQgb24gc21hbGxlciBzY3JlZW5zXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBwYWRkaW5nOiAnMTVweCcsXHJcbiAgICAgICAgekluZGV4OiAxMDAwLFxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICBtYXhXaWR0aDogJzgwJScsXHJcbiAgICAgICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcclxuICAgICAgICBjb2xvcjogJyMzMzMnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLCAvLyBBZGQgbWFyZ2luIGZvciBiZXR0ZXIgc3BhY2luZ1xyXG4gICAgfSxcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBhbGlnblNlbGY6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2UxZmZjNycsXHJcbiAgICB9LFxyXG4gICAgYm90OiB7XHJcbiAgICAgICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2QxZThmZicsXHJcbiAgICB9LFxyXG4gICAgaW5wdXRDb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTBweCcsIC8vIFNwYWNlIGJldHdlZW4gY2hhdCBtZXNzYWdlcyBhbmQgaW5wdXRcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgcGFkZGluZzogJzhweCcsIC8vIFNsaWdodGx5IHNtYWxsZXIgcGFkZGluZ1xyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsIC8vIFNtYWxsZXIgZm9udCBzaXplIGZvciBpbnB1dFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdib3JkZXItY29sb3IgMC4zcycsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzVjNjdmMicsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnOHB4IDEycHgnLCAvLyBTbWFsbGVyIHBhZGRpbmcgZm9yIGJ1dHRvblxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLCAvLyBTbWFsbGVyIGZvbnQgc2l6ZSBmb3IgYnV0dG9uXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4zcycsXHJcbiAgICB9LFxyXG4gICBcclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2hhdGJvdCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJoYW5kbGVUb2dnbGVDaGF0Iiwic2VuZE1lc3NhZ2UiLCJ0cmltIiwicHJldiIsInNlbmRlciIsInRleHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlc3Rpb24iLCJvayIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsImRpdiIsImJ1dHRvbiIsInN0eWxlIiwic3R5bGVzIiwidG9nZ2xlQnV0dG9uIiwib25DbGljayIsImkiLCJjbGFzc05hbWUiLCJjaGF0Q29udGFpbmVyIiwiY2hhdEhlYWRlciIsImZsZXgiLCJvdmVyZmxvd1kiLCJtYXAiLCJtc2ciLCJpbmRleCIsIm1lc3NhZ2UiLCJ1c2VyTWVzc2FnZSIsImJvdE1lc3NhZ2UiLCJpbnB1dENvbnRhaW5lciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJzZW5kQnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImN1cnNvciIsInpJbmRleCIsImZvbnRTaXplIiwid2lkdGgiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1heEhlaWdodCIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwid29yZFdyYXAiLCJtYXJnaW5Cb3R0b20iLCJ1c2VyIiwiYWxpZ25TZWxmIiwiYm90IiwibWFyZ2luVG9wIiwidHJhbnNpdGlvbiIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/chatbot.tsx\n"));

/***/ })

});