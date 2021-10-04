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
exports.id = "pages/api/products/explore";
exports.ids = ["pages/api/products/explore"];
exports.modules = {

/***/ "./pages/api/products/explore.js":
/*!***************************************!*\
  !*** ./pages/api/products/explore.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/prisma */ \"./util/prisma.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method !== 'GET') {\n    return res.status(405).json({\n      message: 'Sorry that method is not allowed'\n    });\n  }\n\n  const categories = await _util_prisma__WEBPACK_IMPORTED_MODULE_0__.default.category.findMany({\n    where: {\n      products: {\n        some: {}\n      } //only show categories that have products\n\n    },\n    select: {\n      id: true,\n      name: true,\n      products: {\n        select: {\n          id: true,\n          name: true,\n          image: true,\n          price: true,\n          review: true\n        }\n      }\n    },\n    orderBy: {\n      name: 'asc'\n    }\n  });\n  return res.status(200).json({\n    categories\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdHMvZXhwbG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCLFdBQU9ELEdBQUcsQ0FDUEUsTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBRkQsQ0FBUDtBQUdEOztBQUNELFFBQU1DLFVBQVUsR0FBRyxNQUFNUCxtRUFBQSxDQUF5QjtBQUNoRFUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFFBQVEsRUFBRTtBQUFFQyxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQURMLENBQ21COztBQURuQixLQUR5QztBQUloREMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLEVBQUUsRUFBRSxJQURFO0FBRU5DLE1BQUFBLElBQUksRUFBRSxJQUZBO0FBR05KLE1BQUFBLFFBQVEsRUFBRTtBQUNSRSxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsRUFBRSxFQUFFLElBREU7QUFFTkMsVUFBQUEsSUFBSSxFQUFFLElBRkE7QUFHTkMsVUFBQUEsS0FBSyxFQUFFLElBSEQ7QUFJTkMsVUFBQUEsS0FBSyxFQUFFLElBSkQ7QUFLTkMsVUFBQUEsTUFBTSxFQUFFO0FBTEY7QUFEQTtBQUhKLEtBSndDO0FBaUJoREMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BKLE1BQUFBLElBQUksRUFBRTtBQURDO0FBakJ1QyxHQUF6QixDQUF6QjtBQXFCQSxTQUFPYixHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRSxJQUFBQTtBQUFGLEdBQXJCLENBQVA7QUFDRCxDQTVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9leHBsb3JlLmpzP2ZjMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi91dGlsL3ByaXNtYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICByZXR1cm4gcmVzXG4gICAgICAuc3RhdHVzKDQwNSlcbiAgICAgIC5qc29uKHsgbWVzc2FnZTogJ1NvcnJ5IHRoYXQgbWV0aG9kIGlzIG5vdCBhbGxvd2VkJyB9KTtcbiAgfVxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3J5LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgcHJvZHVjdHM6IHsgc29tZToge30gfSwgLy9vbmx5IHNob3cgY2F0ZWdvcmllcyB0aGF0IGhhdmUgcHJvZHVjdHNcbiAgICB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgaWQ6IHRydWUsXG4gICAgICBuYW1lOiB0cnVlLFxuICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICBpbWFnZTogdHJ1ZSxcbiAgICAgICAgICBwcmljZTogdHJ1ZSxcbiAgICAgICAgICByZXZpZXc6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3JkZXJCeToge1xuICAgICAgbmFtZTogJ2FzYycsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNhdGVnb3JpZXMgfSk7XG59O1xuIl0sIm5hbWVzIjpbInByaXNtYSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5IiwiZmluZE1hbnkiLCJ3aGVyZSIsInByb2R1Y3RzIiwic29tZSIsInNlbGVjdCIsImlkIiwibmFtZSIsImltYWdlIiwicHJpY2UiLCJyZXZpZXciLCJvcmRlckJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/products/explore.js\n");

/***/ }),

/***/ "./util/prisma.js":
/*!************************!*\
  !*** ./util/prisma.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n // eslint-disable-next-line\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL3ByaXNtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Q0FFQTs7QUFDQSxJQUFJQyxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxJQUFBQSxNQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUQsd0RBQUosRUFBaEI7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi91dGlsL3ByaXNtYS5qcz84MDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5sZXQgcHJpc21hO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG5cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/prisma.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/products/explore.js"));
module.exports = __webpack_exports__;

})();