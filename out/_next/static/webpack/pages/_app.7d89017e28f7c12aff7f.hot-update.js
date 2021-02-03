webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/markwlodawski/dev/next/components/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // var classNames = require(\"classnames\");\n// const menuBtn = window.document.querySelector(\".menu-btn\");\n// const menu = window.document.querySelector(\".menu\");\n// const menuNav = window.document.querySelector(\".menu-nav\");\n// const menuBranding = window.document.querySelector(\".menu-branding\");\n// const navItems = window.document.querySelectorAll(\".nav-item\");\n// let showMenu = false;\n// let menuBtn;\n// function toggleMenu() {\n//   if (!showMenu) {\n//     menuBtn.classList.add(\"close\");\n//     menu.classList.add(\"show\");\n//     menuNav.classList.add(\"show\");\n//     menuBranding.classList.add(\"show\");\n//     navItems.forEach((item) => item.classList.add(\"show\"));\n//     // Set Menu State\n//     showMenu = true;\n//   } else {\n//     menuBtn.classList.remove(\"close\");\n//     menu.classList.remove(\"show\");\n//     menuNav.classList.remove(\"show\");\n//     menuBranding.classList.remove(\"show\");\n//     navItems.forEach((item) => item.classList.remove(\"show\"));\n//     // Set Menu State\n//     showMenu = false;\n//   }\n// }\n\nvar buttonLines = [\"\", \"\", \"\"];\nvar navs = [{\n  name: \"Home\",\n  link: \"/\"\n}, {\n  name: \"About me\",\n  link: \"/about\"\n}, {\n  name: \"My work\",\n  link: \"/work\"\n}, {\n  name: \"How To Reach Me\",\n  link: \"/contact\"\n}, {\n  name: \"Blog\",\n  link: \"/blog\"\n}];\n\nvar Header = function Header() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      isOpen = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(\"/\"),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      currentLink = _React$useState4[0],\n      setCurrentLink = _React$useState4[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"menu-btn \".concat(isOpen ? \"close\" : \"show\"),\n      onClick: function onClick() {\n        return setOpen(!isOpen);\n      },\n      children: buttonLines.map(function (bl, idx) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"btn-line\"\n        }, \"btn_line_\".concat(idx), false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"menu \".concat(isOpen ? \"show\" : \"close\"),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"menu-branding\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"portrait\",\n          children: \"Mark\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"menu-nav \".concat(isOpen ? \"show\" : \"close\"),\n        children: navs.map(function (nav, idx) {\n          var name = nav.name,\n              link = nav.link;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"nav-item \".concat(currentLink === link ? \"current\" : \"\", \" \").concat(isOpen ? \"show\" : \"close\"),\n            onClick: function onClick() {\n              return setCurrentLink(link);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: link,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                className: \"nav-link\",\n                children: name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 17\n            }, _this)\n          }, \"nav_item_\".concat(idx), false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"yOvPuZ/CYFRCcK3ZtwAOwYneKRQ=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJidXR0b25MaW5lcyIsIm5hdnMiLCJuYW1lIiwibGluayIsIkhlYWRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiY3VycmVudExpbmsiLCJzZXRDdXJyZW50TGluayIsIm1hcCIsImJsIiwiaWR4IiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FBcEI7QUFFQSxJQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxNQUFJLEVBQUUsTUFBUjtBQUFnQkMsTUFBSSxFQUFFO0FBQXRCLENBRFcsRUFFWDtBQUFFRCxNQUFJLEVBQUUsVUFBUjtBQUFvQkMsTUFBSSxFQUFFO0FBQTFCLENBRlcsRUFHWDtBQUFFRCxNQUFJLEVBQUUsU0FBUjtBQUFtQkMsTUFBSSxFQUFFO0FBQXpCLENBSFcsRUFJWDtBQUFFRCxNQUFJLEVBQUUsaUJBQVI7QUFBMkJDLE1BQUksRUFBRTtBQUFqQyxDQUpXLEVBS1g7QUFBRUQsTUFBSSxFQUFFLE1BQVI7QUFBZ0JDLE1BQUksRUFBRTtBQUF0QixDQUxXLENBQWI7O0FBUUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLHdCQUNPQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURQO0FBQUE7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsT0FESTs7QUFBQSx5QkFFbUJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxHQUFmLENBRm5CO0FBQUE7QUFBQSxNQUVaRyxXQUZZO0FBQUEsTUFFQ0MsY0FGRDs7QUFHbkIsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLGVBQVMscUJBQWNILE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBakMsQ0FEWDtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1DLE9BQU8sQ0FBQyxDQUFDRCxNQUFGLENBQWI7QUFBQSxPQUZYO0FBQUEsZ0JBSUdQLFdBQVcsQ0FBQ1csR0FBWixDQUFnQixVQUFDQyxFQUFELEVBQUtDLEdBQUw7QUFBQSw0QkFDZjtBQUFLLG1CQUFTLEVBQUM7QUFBZiw4QkFBMkNBLEdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFoQjtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVNFO0FBQUssZUFBUyxpQkFBVU4sTUFBTSxHQUFHLE1BQUgsR0FBWSxPQUE1QixDQUFkO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUksaUJBQVMscUJBQWNBLE1BQU0sR0FBRyxNQUFILEdBQVksT0FBaEMsQ0FBYjtBQUFBLGtCQUNHTixJQUFJLENBQUNVLEdBQUwsQ0FBUyxVQUFDRyxHQUFELEVBQU1ELEdBQU4sRUFBYztBQUFBLGNBQ2RYLElBRGMsR0FDQ1ksR0FERCxDQUNkWixJQURjO0FBQUEsY0FDUkMsSUFEUSxHQUNDVyxHQURELENBQ1JYLElBRFE7QUFFdEIsOEJBQ0U7QUFDRSxxQkFBUyxxQkFBY00sV0FBVyxLQUFLTixJQUFoQixHQUF1QixTQUF2QixHQUFtQyxFQUFqRCxjQUNQSSxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BRFgsQ0FEWDtBQUtFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUcsY0FBYyxDQUFDUCxJQUFELENBQXBCO0FBQUEsYUFMWDtBQUFBLG1DQU9FLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRUEsSUFBWjtBQUFBLHFDQUNFO0FBQUcseUJBQVMsRUFBQyxVQUFiO0FBQUEsMEJBQXlCRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGLGdDQUltQlcsR0FKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWFELFNBZkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0F0Q0Q7O0dBQU1ULE07O0tBQUFBLE07QUF3Q1NBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gdmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcclxuXHJcbi8vIGNvbnN0IG1lbnVCdG4gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcclxuLy8gY29uc3QgbWVudSA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbi8vIGNvbnN0IG1lbnVOYXYgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW5hdlwiKTtcclxuLy8gY29uc3QgbWVudUJyYW5kaW5nID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1icmFuZGluZ1wiKTtcclxuLy8gY29uc3QgbmF2SXRlbXMgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbVwiKTtcclxuXHJcbi8vIGxldCBzaG93TWVudSA9IGZhbHNlO1xyXG4vLyBsZXQgbWVudUJ0bjtcclxuXHJcbi8vIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbi8vICAgaWYgKCFzaG93TWVudSkge1xyXG4vLyAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XHJcbi8vICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4vLyAgICAgbWVudU5hdi5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuLy8gICAgIG1lbnVCcmFuZGluZy5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuLy8gICAgIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dcIikpO1xyXG5cclxuLy8gICAgIC8vIFNldCBNZW51IFN0YXRlXHJcbi8vICAgICBzaG93TWVudSA9IHRydWU7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlXCIpO1xyXG4vLyAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuLy8gICAgIG1lbnVOYXYuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbi8vICAgICBtZW51QnJhbmRpbmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbi8vICAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpKTtcclxuXHJcbi8vICAgICAvLyBTZXQgTWVudSBTdGF0ZVxyXG4vLyAgICAgc2hvd01lbnUgPSBmYWxzZTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IGJ1dHRvbkxpbmVzID0gW1wiXCIsIFwiXCIsIFwiXCJdO1xyXG5cclxuY29uc3QgbmF2cyA9IFtcclxuICB7IG5hbWU6IFwiSG9tZVwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gIHsgbmFtZTogXCJBYm91dCBtZVwiLCBsaW5rOiBcIi9hYm91dFwiIH0sXHJcbiAgeyBuYW1lOiBcIk15IHdvcmtcIiwgbGluazogXCIvd29ya1wiIH0sXHJcbiAgeyBuYW1lOiBcIkhvdyBUbyBSZWFjaCBNZVwiLCBsaW5rOiBcIi9jb250YWN0XCIgfSxcclxuICB7IG5hbWU6IFwiQmxvZ1wiLCBsaW5rOiBcIi9ibG9nXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudExpbmssIHNldEN1cnJlbnRMaW5rXSA9IFJlYWN0LnVzZVN0YXRlKFwiL1wiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YG1lbnUtYnRuICR7aXNPcGVuID8gXCJjbG9zZVwiIDogXCJzaG93XCJ9YH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFpc09wZW4pfVxyXG4gICAgICA+XHJcbiAgICAgICAge2J1dHRvbkxpbmVzLm1hcCgoYmwsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tbGluZVwiIGtleT17YGJ0bl9saW5lXyR7aWR4fWB9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17YG1lbnUgJHtpc09wZW4gPyBcInNob3dcIiA6IFwiY2xvc2VcIn1gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtYnJhbmRpbmdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydHJhaXRcIj5NYXJrPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YG1lbnUtbmF2ICR7aXNPcGVuID8gXCJzaG93XCIgOiBcImNsb3NlXCJ9YH0+XHJcbiAgICAgICAgICB7bmF2cy5tYXAoKG5hdiwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgbGluayB9ID0gbmF2O1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWl0ZW0gJHtjdXJyZW50TGluayA9PT0gbGluayA/IFwiY3VycmVudFwiIDogXCJcIn0gJHtcclxuICAgICAgICAgICAgICAgICAgaXNPcGVuID8gXCJzaG93XCIgOiBcImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtgbmF2X2l0ZW1fJHtpZHh9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRMaW5rKGxpbmspfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})