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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\nlet submitBtn = document.querySelector(\".btn-submit\");\r\n\r\nlet setData = function(event) {\r\n    let eventName = document.querySelector('#event-name').value;\r\n    let participantName = document.querySelector('#participant-name').value;\r\n    let day = document.querySelector('#day').value;\r\n    let time = document.querySelector('#time').value;\r\n    event.preventDefault();\r\n\r\n    let newEvent =\r\n    {eventName,\r\n    participantName,\r\n    day,\r\n    time }\r\n    \r\n    const events = JSON.parse(localStorage.getItem('events')) || [];\r\n\r\n    //events.every(function(item) {\r\n    //    if (newEvent.day === item.day && newEvent.time === item.time){\r\n    //        showError();\r\n    //    } else {\r\n    //        events.push(newEvent);\r\n    //    }\r\n    //});\r\n\r\n    if  (events.some(item =>  (JSON.stringify(item.day) == JSON.stringify(newEvent.day) && JSON.stringify(item.time) == JSON.stringify(newEvent.time)))) {\r\n        showError();\r\n        } else {\r\n        events.push(newEvent);\r\n    }\r\n    localStorage.setItem('events', JSON.stringify(events));\r\n    submitBtn.addEventListener('click', redirect);\r\n}\r\n\r\nlet redirect = function() {\r\n    location.replace(\"index.html\");\r\n\r\n}\r\nsubmitBtn.addEventListener('click', setData);\r\n\r\n\r\nlet erorrModal = document.querySelector('.error-message-popup');\r\n\r\nfunction showError() {\r\n   return erorrModal.style.display= \"flex\";\r\n}\r\n\r\nlet closeErrorModal = document.querySelector('.close');\r\n\r\nfunction closeShowError() {\r\n    return erorrModal.style.display= \"none\";\r\n}\r\ncloseErrorModal.onclick = closeShowError;\r\n\r\n//connect local storages of the two pages\r\nwindow.addEventListener('storage', function(e) {});\n\n//# sourceURL=webpack://test-task/./src/create-event.js?");

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
/******/ 	__webpack_require__("./src/create-event.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;