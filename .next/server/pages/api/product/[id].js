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
exports.id = "pages/api/product/[id]";
exports.ids = ["pages/api/product/[id]"];
exports.modules = {

/***/ "./pages/api/product/[id].js":
/*!***********************************!*\
  !*** ./pages/api/product/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/prisma */ \"./util/prisma.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  var _req$query;\n\n  if (req.method !== 'GET') {\n    return res.status(405).json({\n      message: 'Sorry that method is not allowed'\n    });\n  }\n\n  const id = req === null || req === void 0 ? void 0 : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.id;\n\n  if (!id) {\n    return res.status(400).json({\n      message: 'Missing product id.'\n    });\n  }\n\n  const data = await _util_prisma__WEBPACK_IMPORTED_MODULE_0__.default.product.findUnique({\n    where: {\n      id\n    },\n    select: {\n      id: true,\n      name: true,\n      image: true,\n      price: true,\n      description: true\n    }\n  });\n\n  if (!data) {\n    return res.status(400).json({\n      message: 'Invalid product id.'\n    });\n  }\n\n  return res.status(200).json({\n    data\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdC9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFBQTs7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsV0FBT0QsR0FBRyxDQUNQRSxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FGRCxDQUFQO0FBR0Q7O0FBQ0QsUUFBTUMsRUFBRSxHQUFHTixHQUFILGFBQUdBLEdBQUgscUNBQUdBLEdBQUcsQ0FBRU8sS0FBUiwrQ0FBRyxXQUFZRCxFQUF2Qjs7QUFDQSxNQUFJLENBQUNBLEVBQUwsRUFBUztBQUNQLFdBQU9MLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDs7QUFFRCxRQUFNRyxJQUFJLEdBQUcsTUFBTVQsb0VBQUEsQ0FBMEI7QUFDM0NZLElBQUFBLEtBQUssRUFBRTtBQUNMTCxNQUFBQTtBQURLLEtBRG9DO0FBSTNDTSxJQUFBQSxNQUFNLEVBQUU7QUFDTk4sTUFBQUEsRUFBRSxFQUFFLElBREU7QUFFTk8sTUFBQUEsSUFBSSxFQUFFLElBRkE7QUFHTkMsTUFBQUEsS0FBSyxFQUFFLElBSEQ7QUFJTkMsTUFBQUEsS0FBSyxFQUFFLElBSkQ7QUFLTkMsTUFBQUEsV0FBVyxFQUFFO0FBTFA7QUFKbUMsR0FBMUIsQ0FBbkI7O0FBYUEsTUFBSSxDQUFDUixJQUFMLEVBQVc7QUFDVCxXQUFPUCxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0osR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUksSUFBQUE7QUFBRixHQUFyQixDQUFQO0FBQ0QsQ0E3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9wYWdlcy9hcGkvcHJvZHVjdC9baWRdLmpzPzBjNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi91dGlsL3ByaXNtYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICByZXR1cm4gcmVzXG4gICAgICAuc3RhdHVzKDQwNSlcbiAgICAgIC5qc29uKHsgbWVzc2FnZTogJ1NvcnJ5IHRoYXQgbWV0aG9kIGlzIG5vdCBhbGxvd2VkJyB9KTtcbiAgfVxuICBjb25zdCBpZCA9IHJlcT8ucXVlcnk/LmlkO1xuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ01pc3NpbmcgcHJvZHVjdCBpZC4nIH0pO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgaWQ6IHRydWUsXG4gICAgICBuYW1lOiB0cnVlLFxuICAgICAgaW1hZ2U6IHRydWUsXG4gICAgICBwcmljZTogdHJ1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIHByb2R1Y3QgaWQuJyB9KTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEgfSk7XG59O1xuIl0sIm5hbWVzIjpbInByaXNtYSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiaWQiLCJxdWVyeSIsImRhdGEiLCJwcm9kdWN0IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0IiwibmFtZSIsImltYWdlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/product/[id].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/product/[id].js"));
module.exports = __webpack_exports__;

})();