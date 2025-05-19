/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pharm-calc-project/./src/css/style.css?");

/***/ }),

/***/ "./src/images/cover2.jpg":
/*!*******************************!*\
  !*** ./src/images/cover2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/d2a0f3873e016678de32.jpg\";\n\n//# sourceURL=webpack://pharm-calc-project/./src/images/cover2.jpg?");

/***/ }),

/***/ "./src/js/Amount.js":
/*!**************************!*\
  !*** ./src/js/Amount.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Amount {\n  constructor(number, unit) {\n    this.value = number;\n    this.unit = unit;\n  }\n  mgToMcg() {\n    if (this.unit === \"mg\") {\n      return this.value * 1000;\n    }\n  }\n  mcgToMg() {\n    if (this.unit === \"mcg\") {\n      return this.value / 1000;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Amount);\n\n//# sourceURL=webpack://pharm-calc-project/./src/js/Amount.js?");

/***/ }),

/***/ "./src/js/Conc.js":
/*!************************!*\
  !*** ./src/js/Conc.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Conc {\n  constructor(number, unit) {\n    this.value = number;\n    this.unit = unit;\n  }\n  toMgPerMl() {\n    if (this.unit === \"mg/ml\") {\n      return this.value;\n    } else if (this.unit === \"mcg/ml\") {\n      return this.value / 1000;\n    } else if (this.unit === \"mg/l\") {\n      return this.value / 1000;\n    }\n  }\n  mgmlTomcgml() {\n    if (this.unit === \"mg/ml\") {\n      return this.value * 1000;\n    }\n  }\n  mcgmlToMgml() {\n    if (this.unit === \"ug/ml\") {\n      return this.value / 1000;\n    }\n  }\n  mgmlToMgL() {\n    if (this.unit === \"mg/ml\") {\n      return this.value * 1000;\n    }\n  }\n  mgLToMcgml() {\n    if (this.unit === \"mg/l\") {\n      return this.value;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Conc);\n\n//# sourceURL=webpack://pharm-calc-project/./src/js/Conc.js?");

/***/ }),

/***/ "./src/js/Dose.js":
/*!************************!*\
  !*** ./src/js/Dose.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Dose {\n  constructor(number, unit) {\n    this.value = number;\n    this.unit = unit;\n  }\n  toMgPerKg() {\n    if (this.unit === \"mg/kg\") {\n      return this.value;\n    } else if (this.unit === \"mcg/kg\") {\n      return this.value / 1000;\n    }\n  }\n  mgkgToMcgkg() {\n    if (this.unit === \"mg/kg\") {\n      return this.value * 1000;\n    }\n  }\n  mcgkgToMgkg() {\n    if (this.unit === \"mcg/kg\") {\n      return this.value / 1000;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dose);\n\n//# sourceURL=webpack://pharm-calc-project/./src/js/Dose.js?");

/***/ }),

/***/ "./src/js/DoseCalc.js":
/*!****************************!*\
  !*** ./src/js/DoseCalc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Weight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weight */ \"./src/js/Weight.js\");\n/* harmony import */ var _Conc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conc */ \"./src/js/Conc.js\");\n/* harmony import */ var _Dose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dose */ \"./src/js/Dose.js\");\n/* harmony import */ var _Amount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Amount */ \"./src/js/Amount.js\");\n/* harmony import */ var _Volume__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Volume */ \"./src/js/Volume.js\");\n\n\n\n\n\nclass DoseCalc {\n  constructor(dose, doseUnit, conc, concUnit, weight, weightUnit) {\n    this.weight = new _Weight__WEBPACK_IMPORTED_MODULE_0__[\"default\"](weight, weightUnit);\n    this.conc = new _Conc__WEBPACK_IMPORTED_MODULE_1__[\"default\"](conc, concUnit);\n    this.dose = new _Dose__WEBPACK_IMPORTED_MODULE_2__[\"default\"](dose, doseUnit);\n  }\n  calcAmountInMg() {\n    const amount = this.dose.toMgPerKg() * this.weight.toKg();\n    return new _Amount__WEBPACK_IMPORTED_MODULE_3__[\"default\"](amount, \"mg\");\n  }\n  calcVolumeInMl() {\n    const volume = this.dose.toMgPerKg() * this.weight.toKg() / this.conc.toMgPerMl();\n    return new _Volume__WEBPACK_IMPORTED_MODULE_4__[\"default\"](volume, \"ml\");\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoseCalc);\n\n//# sourceURL=webpack://pharm-calc-project/./src/js/DoseCalc.js?");

/***/ }),

/***/ "./src/js/DoseCalcForm.js":
/*!********************************!*\
  !*** ./src/js/DoseCalcForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DoseCalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoseCalc */ \"./src/js/DoseCalc.js\");\n\nclass DoseCalcForm {\n  constructor() {\n    this.form = document.getElementById(\"calcForm\");\n    this.doseEl = document.getElementById(\"dose\");\n    this.doseUnitEl = document.getElementById(\"doseUnit\");\n    this.weightEl = document.getElementById(\"weight\");\n    this.weightUnitEl = document.getElementById(\"weightUnit\");\n    this.concEl = document.getElementById(\"concentration\");\n    this.concUnitEl = document.getElementById(\"concentrationUnit\");\n    this.resultEl = document.getElementById(\"resultDiv\");\n    this.form.addEventListener(\"submit\", this.handleSubmit.bind(this));\n  }\n  handleSubmit(event) {\n    event.preventDefault();\n    const dose = document.getElementById(\"dose\").value;\n    const doseUnit = document.getElementById(\"doseUnit\").value;\n    const weight = document.getElementById(\"weight\").value;\n    const weightUnit = document.getElementById(\"weightUnit\").value;\n    const conc = document.getElementById(\"concentration\").value;\n    const concUnit = document.getElementById(\"concentrationUnit\").value;\n    const doseCalulator = new _DoseCalc__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dose, doseUnit, conc, concUnit, weight, weightUnit);\n    const volume = doseCalulator.calcVolumeInMl();\n    const amount = doseCalulator.calcAmountInMg();\n\n    // console.log(doseCalulator);\n\n    this.showResult(amount, volume);\n    return;\n  }\n  showResult(amount, volume) {\n    const result = document.createElement(\"div\");\n    result.id = \"resultText\";\n    result.innerHTML = `\n      <h5 class=\"mb-3\">Calculation Results</h5>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <strong>Volume to Dispense:</strong>\n          <span id=\"volumeToDispense\">${volume.value.toFixed(2)}${volume.unit}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <strong>Amount of Drug Present:</strong>\n          <span id=\"drugAmountInGrams\">${amount.value.toFixed(2)}${amount.unit}</span>\n        </li>\n      </ul>\n    `;\n    this.resultEl.appendChild(result);\n    this.resultEl.style.display = \"block\";\n    return;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoseCalcForm);\n\n//# sourceURL=webpack://pharm-calc-project/./src/js/DoseCalcForm.js?");

/***/ }),

/***/ "./src/js/Volume.js":
/*!**************************!*\
  !*** ./src/js/Volume.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Volume {\n  constructor(number, unit) {\n    this.value = number;\n    this.unit = unit;\n  }\n  mlToLitre() {\n    if (this.unit === \"ml\") {\n      return this.value / 1000;\n    }\n  }\n  litreToMl() {\n    if (this.unit === \"l\") {\n      return this.value * 1000;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Volume);\n\n//# sourceURL=webpack://pharm-calc-project/./src/js/Volume.js?");

/***/ }),

/***/ "./src/js/Weight.js":
/*!**************************!*\
  !*** ./src/js/Weight.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Weight {\n  constructor(number, unit) {\n    this.value = number;\n    this.unit = unit;\n  }\n  toKg() {\n    if (this.unit === \"g\") {\n      return this.value / 1000;\n    } else if (this.unit === \"kg\") {\n      return this.value;\n    } else if (this.unit === \"lb\") {\n      return this.value * 0.45359237;\n    }\n  }\n  lbToKg() {\n    if (this.unit === \"lb\") {\n      return this.value * 0.45359237;\n    }\n  }\n  gramToKg() {\n    if (this.unit === \"g\") {\n      return this.value / 1000;\n    }\n  }\n  kgToGram() {\n    if (this.unit === \"kg\") {\n      return this.value * 1000;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weight);\n\n//# sourceURL=webpack://pharm-calc-project/./src/js/Weight.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_cover2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/cover2.jpg */ \"./src/images/cover2.jpg\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _DoseCalcForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DoseCalcForm */ \"./src/js/DoseCalcForm.js\");\n\n\n\nconst app = new _DoseCalcForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n//# sourceURL=webpack://pharm-calc-project/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;