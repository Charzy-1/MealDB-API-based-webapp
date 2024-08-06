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

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchLikes: () => (/* binding */ fetchLikes),\n/* harmony export */   fetchMealDetails: () => (/* binding */ fetchMealDetails),\n/* harmony export */   fetchMeals: () => (/* binding */ fetchMeals),\n/* harmony export */   postLike: () => (/* binding */ postLike)\n/* harmony export */ });\nconst mealApiUrl = 'https://www.themealdb.com/api/json/v1/1';\r\nconst involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UrgQm7RyKhohgsiKlIZF/likes';\r\n\r\nconst fetchMeals = async (searchQuery) => {\r\n  const response = await fetch(`${mealApiUrl}/search.php?s=${searchQuery}`);\r\n  const data = await response.json();\r\n  return data.meals;\r\n};\r\n\r\nconst fetchMealDetails = async (mealId) => {\r\n  const response = await fetch(`${mealApiUrl}/lookup.php?i=${mealId}`);\r\n  const data = await response.json();\r\n  return data.meals[0];\r\n};\r\n\r\nconst fetchLikes = async () => {\r\n  const response = await fetch(involvementApiUrl);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst postLike = async (mealId) => {\r\n  await fetch(involvementApiUrl, {\r\n    method: 'POST',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body: JSON.stringify({ item_id: mealId })\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./src/js/api.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMeals: () => (/* binding */ displayMeals),\n/* harmony export */   updateLikes: () => (/* binding */ updateLikes)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n// dom.js\r\n\r\n\r\nconst displayMeals = async () => {\r\n  const mealList = document.getElementById('meal-list');\r\n  const meals = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchMeals)('');\r\n  const likes = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchLikes)();\r\n\r\n  meals.forEach((meal) => {\r\n    const mealItem = document.createElement('div');\r\n    mealItem.className = 'meal-item';\r\n\r\n    const mealName = document.createElement('p');\r\n    mealName.textContent = meal.strMeal;\r\n\r\n    const likeButton = document.createElement('img');\r\n    likeButton.src = '../src/img/like-icon.png';\r\n    likeButton.className = 'like-button';\r\n    likeButton.dataset.id = meal.idMeal;\r\n    likeButton.addEventListener('click', async (e) => {\r\n      await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(meal.idMeal);\r\n      updateLikes(e.target.dataset.id);\r\n    });\r\n\r\n    mealItem.appendChild(mealName);\r\n    mealItem.appendChild(likeButton);\r\n    mealList.appendChild(mealItem);\r\n  });\r\n};\r\n\r\nconst updateLikes = async (mealId) => {\r\n  const likes = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchLikes)();\r\n  const likeButton = document.querySelector(`img[data-id='${mealId}']`);\r\n  const mealLike = likes.find((like) => like.item_id === mealId);\r\n  likeButton.nextSibling.textContent = mealLike ? mealLike.likes : 0;\r\n};\r\n\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n// index.js\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayMeals)();\r\n});\r\n\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./src/js/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;