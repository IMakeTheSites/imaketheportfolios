webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/markwlodawski/dev/next/components/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar buttonLines = [\"\", \"\", \"\"];\nvar navs = [{\n  name: \"Home\",\n  link: \"/\"\n}, {\n  name: \"About me\",\n  link: \"/about\"\n}, {\n  name: \"My work\",\n  link: \"/work\"\n}, {\n  name: \"How To Reach Me\",\n  link: \"/contact\"\n}, {\n  name: \"Blog\",\n  link: \"/blog\"\n}];\n\nvar Header = function Header() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      isOpen = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(\"/\"),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      currentLink = _React$useState4[0],\n      setCurrentLink = _React$useState4[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"menu-btn \".concat(isOpen ? \"close\" : \"show\"),\n      onClick: function onClick() {\n        return setOpen(!isOpen);\n      },\n      children: buttonLines.map(function (bl, idx) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"btn-line\"\n        }, \"btn_line_\".concat(idx), false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"menu \".concat(isOpen ? \"show\" : \"close\"),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"menu-branding\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"portrait\",\n          children: \"Mark\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"menu-nav \".concat(isOpen ? \"show\" : \"close\"),\n        children: navs.map(function (nav, idx) {\n          var name = nav.name,\n              link = nav.link;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"nav-item \".concat(currentLink === link ? \"current\" : \"\", \" \").concat(isOpen ? \"show\" : \"close\"),\n            onClick: function onClick() {\n              return setCurrentLink(link);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: link,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                className: \"nav-link\",\n                children: name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, _this)\n          }, \"nav_item_\".concat(idx), false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"yOvPuZ/CYFRCcK3ZtwAOwYneKRQ=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJidXR0b25MaW5lcyIsIm5hdnMiLCJuYW1lIiwibGluayIsIkhlYWRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiY3VycmVudExpbmsiLCJzZXRDdXJyZW50TGluayIsIm1hcCIsImJsIiwiaWR4IiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULENBQXBCO0FBRUEsSUFBTUMsSUFBSSxHQUFHLENBQ1g7QUFBRUMsTUFBSSxFQUFFLE1BQVI7QUFBZ0JDLE1BQUksRUFBRTtBQUF0QixDQURXLEVBRVg7QUFBRUQsTUFBSSxFQUFFLFVBQVI7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUZXLEVBR1g7QUFBRUQsTUFBSSxFQUFFLFNBQVI7QUFBbUJDLE1BQUksRUFBRTtBQUF6QixDQUhXLEVBSVg7QUFBRUQsTUFBSSxFQUFFLGlCQUFSO0FBQTJCQyxNQUFJLEVBQUU7QUFBakMsQ0FKVyxFQUtYO0FBQUVELE1BQUksRUFBRSxNQUFSO0FBQWdCQyxNQUFJLEVBQUU7QUFBdEIsQ0FMVyxDQUFiOztBQVFBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSx3QkFDT0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEUDtBQUFBO0FBQUEsTUFDWkMsTUFEWTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEseUJBRW1CSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsR0FBZixDQUZuQjtBQUFBO0FBQUEsTUFFWkcsV0FGWTtBQUFBLE1BRUNDLGNBRkQ7O0FBR25CLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLHFCQUFjSCxNQUFNLEdBQUcsT0FBSCxHQUFhLE1BQWpDLENBRFg7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNQyxPQUFPLENBQUMsQ0FBQ0QsTUFBRixDQUFiO0FBQUEsT0FGWDtBQUFBLGdCQUlHUCxXQUFXLENBQUNXLEdBQVosQ0FBZ0IsVUFBQ0MsRUFBRCxFQUFLQyxHQUFMO0FBQUEsNEJBQ2Y7QUFBSyxtQkFBUyxFQUFDO0FBQWYsOEJBQTJDQSxHQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFTRTtBQUFLLGVBQVMsaUJBQVVOLE1BQU0sR0FBRyxNQUFILEdBQVksT0FBNUIsQ0FBZDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFJLGlCQUFTLHFCQUFjQSxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BQWhDLENBQWI7QUFBQSxrQkFDR04sSUFBSSxDQUFDVSxHQUFMLENBQVMsVUFBQ0csR0FBRCxFQUFNRCxHQUFOLEVBQWM7QUFBQSxjQUNkWCxJQURjLEdBQ0NZLEdBREQsQ0FDZFosSUFEYztBQUFBLGNBQ1JDLElBRFEsR0FDQ1csR0FERCxDQUNSWCxJQURRO0FBRXRCLDhCQUNFO0FBQ0UscUJBQVMscUJBQWNNLFdBQVcsS0FBS04sSUFBaEIsR0FBdUIsU0FBdkIsR0FBbUMsRUFBakQsY0FDUEksTUFBTSxHQUFHLE1BQUgsR0FBWSxPQURYLENBRFg7QUFLRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1HLGNBQWMsQ0FBQ1AsSUFBRCxDQUFwQjtBQUFBLGFBTFg7QUFBQSxtQ0FPRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUVBLElBQVo7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUMsVUFBYjtBQUFBLDBCQUF5QkQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixnQ0FJbUJXLEdBSm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFhRCxTQWZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBdENEOztHQUFNVCxNOztLQUFBQSxNO0FBd0NTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBidXR0b25MaW5lcyA9IFtcIlwiLCBcIlwiLCBcIlwiXTtcclxuXHJcbmNvbnN0IG5hdnMgPSBbXHJcbiAgeyBuYW1lOiBcIkhvbWVcIiwgbGluazogXCIvXCIgfSxcclxuICB7IG5hbWU6IFwiQWJvdXQgbWVcIiwgbGluazogXCIvYWJvdXRcIiB9LFxyXG4gIHsgbmFtZTogXCJNeSB3b3JrXCIsIGxpbms6IFwiL3dvcmtcIiB9LFxyXG4gIHsgbmFtZTogXCJIb3cgVG8gUmVhY2ggTWVcIiwgbGluazogXCIvY29udGFjdFwiIH0sXHJcbiAgeyBuYW1lOiBcIkJsb2dcIiwgbGluazogXCIvYmxvZ1wiIH0sXHJcbl07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRMaW5rLCBzZXRDdXJyZW50TGlua10gPSBSZWFjdC51c2VTdGF0ZShcIi9cIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BtZW51LWJ0biAke2lzT3BlbiA/IFwiY2xvc2VcIiA6IFwic2hvd1wifWB9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbighaXNPcGVuKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtidXR0b25MaW5lcy5tYXAoKGJsLCBpZHgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWxpbmVcIiBrZXk9e2BidG5fbGluZV8ke2lkeH1gfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2BtZW51ICR7aXNPcGVuID8gXCJzaG93XCIgOiBcImNsb3NlXCJ9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWJyYW5kaW5nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRyYWl0XCI+TWFyazwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2BtZW51LW5hdiAke2lzT3BlbiA/IFwic2hvd1wiIDogXCJjbG9zZVwifWB9PlxyXG4gICAgICAgICAge25hdnMubWFwKChuYXYsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIGxpbmsgfSA9IG5hdjtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1pdGVtICR7Y3VycmVudExpbmsgPT09IGxpbmsgPyBcImN1cnJlbnRcIiA6IFwiXCJ9ICR7XHJcbiAgICAgICAgICAgICAgICAgIGlzT3BlbiA/IFwic2hvd1wiIDogXCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIGtleT17YG5hdl9pdGVtXyR7aWR4fWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50TGluayhsaW5rKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57bmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})