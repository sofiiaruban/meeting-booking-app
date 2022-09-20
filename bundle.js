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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-task/./src/style.scss?");

/***/ }),

/***/ "./src/create-event.js":
/*!*****************************!*\
  !*** ./src/create-event.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nlet submitBtn = document.querySelector(\".btn-submit\");\r\nlet setData = function() {\r\n    let eventName = document.querySelector('#event-name').value;\r\n    let participantName = document.querySelector('#participant-name').value;\r\n    let day = document.querySelector('#day').value;\r\n    let time = document.querySelector('#time').value;\r\n\r\n\r\n    let newEvent =\r\n    {eventName,\r\n    participantName,\r\n    day,\r\n    time }\r\n   \r\n    \r\n    const events = JSON.parse(localStorage.getItem('events')) || [];\r\n    events.push(newEvent);\r\n    localStorage.setItem('events', JSON.stringify(events));\r\n    \r\n   \r\n}\r\nsubmitBtn.onclick = setData; \r\n\r\n//connect local storages of the two pages\r\nwindow.addEventListener('storage', function(e) {\r\n   \r\n});\n\n//# sourceURL=webpack://test-task/./src/create-event.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _create_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-event.js */ \"./src/create-event.js\");\n//import \"./style.css\";\r\n\r\n\r\nlet table = document.querySelector('table');\r\ntable.onclick = function(event){\r\n    let target = event.target;\r\n    console.log(target)\r\n    if (target.tagName == 'TD') {\r\n        return target.style.background = \"#ccffcc\";\r\n    }\r\n}\r\nlet fillBar = function (){\r\n    let test = document.querySelector('#mon');\r\n    test.style.backgroundColor = '#ccffcc';\r\n}\r\nfillBar()\r\nlet test = document.querySelector('tr[data-time=\"10:00\"] td[data-day=\"mon\"]')\r\ntest.style.backgroundColor = '#ccffcc';\r\ntest.append('TEST');\r\n \r\n\r\n\n\n//# sourceURL=webpack://test-task/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;