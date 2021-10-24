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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n//import \"./style.css\";\r\n\r\n\r\n\r\n\r\nlet items = JSON.parse(localStorage.getItem('events'));\r\n\r\nfunction getItem(arr){\r\n    for (let i = 0; i < arr.length; i++) {\r\n        let cell = document.querySelector(`tr[data-time=\"${arr[i][\"time\"]}\"] td[data-day=\"${arr[i][\"day\"]}\"]`);\r\n        let eventName = document.createElement('span');\r\n        eventName.innerHTML = `${arr[i][\"eventName\"]}` \r\n        cell.appendChild(eventName);\r\n        cell.setAttribute(\"data-participant\", `${arr[i][\"participantName\"]}`)\r\n        cell.classList.add(\"occupied\");\r\n    }\r\n}\r\ngetItem(items);\r\n\r\nlet table = document.querySelector('table');\r\nlet deletePopUp = document.querySelector('.event-deliting-popup');\r\nlet confirmBtn = document.querySelector('.event-deliting-confirm-btn');\r\nlet undoBtn = document.querySelector('.event-deliting-undo-btn');\r\n\r\ntable.onclick = function(event){\r\n    let target = event.target;\r\n    \r\n    if (target.className == \"close\") {\r\n\r\n        deletePopUp.style.display= \"flex\";\r\n\r\n        let getParent = target.parentNode;\r\n\r\n        let eventNameP = document.querySelector('.event-deliting-popup p');\r\n        let eventName = getParent.lastChild.textContent;\r\n        eventNameP.textContent= `Are you sure you want to delete \"${eventName}\" event?`;\r\n\r\n        let getDay = getParent.dataset.day;\r\n        let getTime = getParent.parentNode.dataset.time;\r\n        \r\n        confirmBtn.onclick = function() {\r\n            deleteItem(getDay, getTime);\r\n            rerenderTable(getDay, getTime);\r\n            deletePopUp.style.display= \"none\";\r\n        } \r\n        undoBtn.onclick= function() {\r\n             location.replace(\"index.html\");\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction deleteItem(day, time) {\r\n    let index;\r\n    for (let i = 0; i < items.length; i++) {\r\n        if (items[i].day  == day && items[i].time == time) {\r\n            index=i;\r\n            break;\r\n        }\r\n    }\r\n    if(index === undefined) return \r\n    items.splice(index, 1);\r\n    localStorage.setItem('events', JSON.stringify(items));\r\n\r\n}\r\nfunction rerenderTable(day, time) {\r\n    let cell = document.querySelector(`tr[data-time=\"${time}\"] td[data-day=\"${day}\"]`);\r\n    let eventName = cell.lastChild;\r\n    cell.removeChild(eventName);\r\n    cell.removeAttribute(\"data-participant\");\r\n    cell.classList.remove(\"occupied\");\r\n\r\n}\r\nlet input =  document.getElementById('participant');\r\n\r\ninput.addEventListener('change', filterMeeting);\r\n\r\nfunction filterMeeting () {\r\n    let inputedParticipant = input.value;\r\n    let cells = document.querySelectorAll('td[data-participant]');\r\n    \r\n    for (let i = 0; i < cells.length; i++) {\r\n        cells[i].classList.remove('hide');\r\n        if (cells[i].dataset.participant !== inputedParticipant && inputedParticipant !== \"all\") {\r\n          cells[i].classList.add('hide');\r\n        }  \r\n    }\r\n    \r\n}\r\n// to do \r\n// event-deliting-popup\r\n// * fix redirect box\r\n\r\n\n\n//# sourceURL=webpack://test-task/./src/index.js?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;