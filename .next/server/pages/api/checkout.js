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
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "./pages/api/checkout.js":
/*!*******************************!*\
  !*** ./pages/api/checkout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/prisma */ \"./util/prisma.js\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  var _req$body;\n\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Method not allowed. '\n    });\n  } //tested on Postman-Success.\n  // console.log(req.body.cart);\n\n\n  const cart = (req === null || req === void 0 ? void 0 : (_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.cart) || {};\n  console.log('CART', cart);\n  const productIds = Object.keys(cart);\n  const products = await _util_prisma__WEBPACK_IMPORTED_MODULE_1__.default.product.findMany({\n    where: {\n      id: {\n        in: productIds\n      }\n    },\n    select: {\n      id: true,\n      price: true\n    }\n  });\n  console.log('PRODUCTS', products); // calculate total\n\n  let total = 0;\n  products.forEach(product => {\n    total += product.price * cart[product.id].quantity;\n  });\n  console.log('TOTAL', total); // Stripe payment intent\n\n  const paymentIntent = await stripe.paymentIntents.create({\n    amount: total,\n    currency: 'usd'\n  });\n  return res.status(200).json({\n    publishableKey: process.env.STRIPE_PUBLIC,\n    paymentIntent: paymentIntent.client_secret\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hlY2tvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsK0NBQUosQ0FBV0csT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQXZCLENBQWY7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFBQTs7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNELEdBSGdDLENBRy9CO0FBRUY7OztBQUNBLFFBQU1DLElBQUksR0FBRyxDQUFBTixHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILHlCQUFBQSxHQUFHLENBQUVPLElBQUwsd0RBQVdELElBQVgsS0FBbUIsRUFBaEM7QUFDQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkgsSUFBcEI7QUFDQSxRQUFNSSxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixJQUFaLENBQW5CO0FBQ0EsUUFBTU8sUUFBUSxHQUFHLE1BQU1sQixrRUFBQSxDQUF3QjtBQUM3Q3FCLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxFQUFFLEVBQUU7QUFDRkMsUUFBQUEsRUFBRSxFQUFFUjtBQURGO0FBREMsS0FEc0M7QUFNN0NTLElBQUFBLE1BQU0sRUFBRTtBQUNORixNQUFBQSxFQUFFLEVBQUUsSUFERTtBQUVORyxNQUFBQSxLQUFLLEVBQUU7QUFGRDtBQU5xQyxHQUF4QixDQUF2QjtBQVdBWixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCSSxRQUF4QixFQXBCaUMsQ0FxQmpDOztBQUNBLE1BQUlRLEtBQUssR0FBRyxDQUFaO0FBQ0FSLEVBQUFBLFFBQVEsQ0FBQ1MsT0FBVCxDQUFpQlIsT0FBTyxJQUFJO0FBQzFCTyxJQUFBQSxLQUFLLElBQUlQLE9BQU8sQ0FBQ00sS0FBUixHQUFnQmQsSUFBSSxDQUFDUSxPQUFPLENBQUNHLEVBQVQsQ0FBSixDQUFpQk0sUUFBMUM7QUFDRCxHQUZEO0FBR0FmLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJZLEtBQXJCLEVBMUJpQyxDQTJCakM7O0FBQ0EsUUFBTUcsYUFBYSxHQUFHLE1BQU01QixNQUFNLENBQUM2QixjQUFQLENBQXNCQyxNQUF0QixDQUE2QjtBQUN2REMsSUFBQUEsTUFBTSxFQUFFTixLQUQrQztBQUV2RE8sSUFBQUEsUUFBUSxFQUFFO0FBRjZDLEdBQTdCLENBQTVCO0FBS0EsU0FBTzNCLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCeUIsSUFBQUEsY0FBYyxFQUFFaEMsT0FBTyxDQUFDQyxHQUFSLENBQVlnQyxhQURGO0FBRTFCTixJQUFBQSxhQUFhLEVBQUVBLGFBQWEsQ0FBQ087QUFGSCxHQUFyQixDQUFQO0FBSUQsQ0FyQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9wYWdlcy9hcGkvY2hlY2tvdXQuanM/ZGJmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vdXRpbC9wcmlzbWEnO1xuXG5jb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVQpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQuICcgfSk7XG4gIH0gLy90ZXN0ZWQgb24gUG9zdG1hbi1TdWNjZXNzLlxuXG4gIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5LmNhcnQpO1xuICBjb25zdCBjYXJ0ID0gcmVxPy5ib2R5Py5jYXJ0IHx8IHt9O1xuICBjb25zb2xlLmxvZygnQ0FSVCcsIGNhcnQpO1xuICBjb25zdCBwcm9kdWN0SWRzID0gT2JqZWN0LmtleXMoY2FydCk7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcHJpc21hLnByb2R1Y3QuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDoge1xuICAgICAgICBpbjogcHJvZHVjdElkcyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGlkOiB0cnVlLFxuICAgICAgcHJpY2U6IHRydWUsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKCdQUk9EVUNUUycsIHByb2R1Y3RzKTtcbiAgLy8gY2FsY3VsYXRlIHRvdGFsXG4gIGxldCB0b3RhbCA9IDA7XG4gIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgdG90YWwgKz0gcHJvZHVjdC5wcmljZSAqIGNhcnRbcHJvZHVjdC5pZF0ucXVhbnRpdHk7XG4gIH0pO1xuICBjb25zb2xlLmxvZygnVE9UQUwnLCB0b3RhbCk7XG4gIC8vIFN0cmlwZSBwYXltZW50IGludGVudFxuICBjb25zdCBwYXltZW50SW50ZW50ID0gYXdhaXQgc3RyaXBlLnBheW1lbnRJbnRlbnRzLmNyZWF0ZSh7XG4gICAgYW1vdW50OiB0b3RhbCxcbiAgICBjdXJyZW5jeTogJ3VzZCcsXG4gIH0pO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgcHVibGlzaGFibGVLZXk6IHByb2Nlc3MuZW52LlNUUklQRV9QVUJMSUMsXG4gICAgcGF5bWVudEludGVudDogcGF5bWVudEludGVudC5jbGllbnRfc2VjcmV0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsiU3RyaXBlIiwicHJpc21hIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNhcnQiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RJZHMiLCJPYmplY3QiLCJrZXlzIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiZmluZE1hbnkiLCJ3aGVyZSIsImlkIiwiaW4iLCJzZWxlY3QiLCJwcmljZSIsInRvdGFsIiwiZm9yRWFjaCIsInF1YW50aXR5IiwicGF5bWVudEludGVudCIsInBheW1lbnRJbnRlbnRzIiwiY3JlYXRlIiwiYW1vdW50IiwiY3VycmVuY3kiLCJwdWJsaXNoYWJsZUtleSIsIlNUUklQRV9QVUJMSUMiLCJjbGllbnRfc2VjcmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/checkout.js\n");

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

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/checkout.js"));
module.exports = __webpack_exports__;

})();