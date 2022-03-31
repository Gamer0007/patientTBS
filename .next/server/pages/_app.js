(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/utilities.css */ "./styles/utilities.css");
/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_utilities_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_homepage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/homepage.css */ "./styles/homepage.css");
/* harmony import */ var _styles_homepage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_detail_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/detail.css */ "./styles/detail.css");
/* harmony import */ var _styles_detail_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_detail_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_checkout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/checkout.css */ "./styles/checkout.css");
/* harmony import */ var _styles_checkout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_checkout_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_complete_checkout_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/complete-checkout.css */ "./styles/complete-checkout.css");
/* harmony import */ var _styles_complete_checkout_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_complete_checkout_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_sign_in_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/sign-in.css */ "./styles/sign-in.css");
/* harmony import */ var _styles_sign_in_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_in_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_sign_up_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/sign-up.css */ "./styles/sign-up.css");
/* harmony import */ var _styles_sign_up_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_up_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_sign_up_photo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/sign-up-photo.css */ "./styles/sign-up-photo.css");
/* harmony import */ var _styles_sign_up_photo_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_up_photo_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_sign_up_success_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/sign-up-success.css */ "./styles/sign-up-success.css");
/* harmony import */ var _styles_sign_up_success_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_up_success_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_404_not_found_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/404-not-found.css */ "./styles/404-not-found.css");
/* harmony import */ var _styles_404_not_found_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_404_not_found_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_overview_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/overview.css */ "./styles/overview.css");
/* harmony import */ var _styles_overview_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_overview_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/sidebar.css */ "./styles/sidebar.css");
/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_transactions_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/transactions.css */ "./styles/transactions.css");
/* harmony import */ var _styles_transactions_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_transactions_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_transactions_detail_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/transactions-detail.css */ "./styles/transactions-detail.css");
/* harmony import */ var _styles_transactions_detail_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_transactions_detail_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_edit_profile_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/edit-profile.css */ "./styles/edit-profile.css");
/* harmony import */ var _styles_edit_profile_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_edit_profile_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_navbar_log_in_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/navbar-log-in.css */ "./styles/navbar-log-in.css");
/* harmony import */ var _styles_navbar_log_in_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_log_in_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/dist/shared/lib/head */ "next/dist/shared/lib/head");
/* harmony import */ var next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "D:\\nextjs1\\01_nodejs_mern stack 2021\\bwa-storegg-main\\bwa-storegg-main\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_16___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("link", {
        href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/404-not-found.css":
/*!**********************************!*\
  !*** ./styles/404-not-found.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/checkout.css":
/*!*****************************!*\
  !*** ./styles/checkout.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/complete-checkout.css":
/*!**************************************!*\
  !*** ./styles/complete-checkout.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/detail.css":
/*!***************************!*\
  !*** ./styles/detail.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/edit-profile.css":
/*!*********************************!*\
  !*** ./styles/edit-profile.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/homepage.css":
/*!*****************************!*\
  !*** ./styles/homepage.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/navbar-log-in.css":
/*!**********************************!*\
  !*** ./styles/navbar-log-in.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/overview.css":
/*!*****************************!*\
  !*** ./styles/overview.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sidebar.css":
/*!****************************!*\
  !*** ./styles/sidebar.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sign-in.css":
/*!****************************!*\
  !*** ./styles/sign-in.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sign-up-photo.css":
/*!**********************************!*\
  !*** ./styles/sign-up-photo.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sign-up-success.css":
/*!************************************!*\
  !*** ./styles/sign-up-success.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sign-up.css":
/*!****************************!*\
  !*** ./styles/sign-up.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/transactions-detail.css":
/*!****************************************!*\
  !*** ./styles/transactions-detail.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/transactions.css":
/*!*********************************!*\
  !*** ./styles/transactions.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/utilities.css":
/*!******************************!*\
  !*** ./styles/utilities.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/shared/lib/head":
/*!********************************************!*\
  !*** external "next/dist/shared/lib/head" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7OztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxzQkFDRTtBQUFBLDRCQUNGLCtEQUFDLG1FQUFEO0FBQUEsOEJBRUU7QUFBTSxZQUFJLEVBQUMseUVBQVg7QUFBcUYsV0FBRyxFQUFDLFlBQXpGO0FBQ0ksaUJBQVMsRUFBQyx5RUFEZDtBQUVJLG1CQUFXLEVBQUM7QUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBTUU7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFDSSxZQUFJLEVBQUMscUxBRFQ7QUFFSSxXQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFXRTtBQUFNLFlBQUksRUFBQywwQ0FBWDtBQUFzRCxXQUFHLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBZUU7QUFBUSxXQUFHLEVBQUMsOEVBQVo7QUFDSSxpQkFBUyxFQUFDLHlFQURkO0FBRUksbUJBQVcsRUFBQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREUsZUFzQkYsK0RBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJFO0FBQUEsa0JBREY7QUEwQkQ7O0FBQ0QsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBaUJwREE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yZWdnLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL3N0eWxlcy80MDQtbm90LWZvdW5kLmNzcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vc3R5bGVzL2NoZWNrb3V0LmNzcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vc3R5bGVzL2NvbXBsZXRlLWNoZWNrb3V0LmNzcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vc3R5bGVzL2RldGFpbC5jc3MiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL3N0eWxlcy9lZGl0LXByb2ZpbGUuY3NzIiwid2VicGFjazovL3N0b3JlZ2cvLi9zdHlsZXMvaG9tZXBhZ2UuY3NzIiwid2VicGFjazovL3N0b3JlZ2cvLi9zdHlsZXMvbmF2YmFyLWxvZy1pbi5jc3MiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL3N0eWxlcy9vdmVydmlldy5jc3MiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL3N0eWxlcy9zaWRlYmFyLmNzcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vc3R5bGVzL3NpZ24taW4uY3NzIiwid2VicGFjazovL3N0b3JlZ2cvLi9zdHlsZXMvc2lnbi11cC1waG90by5jc3MiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL3N0eWxlcy9zaWduLXVwLXN1Y2Nlc3MuY3NzIiwid2VicGFjazovL3N0b3JlZ2cvLi9zdHlsZXMvc2lnbi11cC5jc3MiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL3N0eWxlcy90cmFuc2FjdGlvbnMtZGV0YWlsLmNzcyIsIndlYnBhY2s6Ly9zdG9yZWdnLy4vc3R5bGVzL3RyYW5zYWN0aW9ucy5jc3MiLCJ3ZWJwYWNrOi8vc3RvcmVnZy8uL3N0eWxlcy91dGlsaXRpZXMuY3NzIiwid2VicGFjazovL3N0b3JlZ2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3RvcmVnZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL3V0aWxpdGllcy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9ob21lcGFnZS5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9kZXRhaWwuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvY2hlY2tvdXQuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvY29tcGxldGUtY2hlY2tvdXQuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvc2lnbi1pbi5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9zaWduLXVwLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL3NpZ24tdXAtcGhvdG8uY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvc2lnbi11cC1zdWNjZXNzLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzLzQwNC1ub3QtZm91bmQuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvb3ZlcnZpZXcuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvc2lkZWJhci5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy90cmFuc2FjdGlvbnMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvdHJhbnNhY3Rpb25zLWRldGFpbC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9lZGl0LXByb2ZpbGUuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvbmF2YmFyLWxvZy1pbi5jc3MnXG5cblxuXG5cblxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4oXG4gICAgPD5cbiAgPEhlYWQ+XG4gICAgey8qIEJvb3RzdGFycCBjc3MgKi99XG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC0rMG4weFZXMmVTUjVPb21HTllEbmh6QWJEc09YeGN2U04xVFBwclZNVE5EYmlZWkN4WWJPT2w3K0FNdnlURzJ4XCIgXG4gICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgIHsvKiBHb29nbGUgRm9udCAgKi99XG4gICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIvPlxuICAgIDxsaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgey8qIEFPUyBBbmltYXRpb24gICovfVxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9hb3NAMi4zLjEvZGlzdC9hb3MuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICB7LyogPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9hb3NAMi4zLjEvZGlzdC9hb3MuanNcIj48L3NjcmlwdD4gKi99XG5cbiAgICB7LyogQ2FsbCBCb290c3RyYXAgSlMgKi99XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMS9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWd0RWpyRC9TZUN0bUlTa0prTlVhYUtNb0xEMC8vRWxKMTlzbW96dUhWNnozSWVoZHMrM1VsYjlCbjlQbHgweDRcIiBcbiAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XG5cblxuICA8L0hlYWQ+XG4gIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiSGVhZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==