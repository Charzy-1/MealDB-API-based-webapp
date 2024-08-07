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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchLikes: () => (/* binding */ fetchLikes),\n/* harmony export */   fetchMealDetails: () => (/* binding */ fetchMealDetails),\n/* harmony export */   fetchMeals: () => (/* binding */ fetchMeals),\n/* harmony export */   postLike: () => (/* binding */ postLike)\n/* harmony export */ });\nconst mealApiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';\r\nconst involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UrgQm7RyKhohgsiKlIZF/likes';\r\n\r\nconst fetchMeals = async (searchQuery) => {\r\n  const response = await fetch(`${mealApiUrl}/search.php?s=${searchQuery}`);\r\n  const data = await response.json();\r\n  return data.meals;\r\n};\r\n\r\nconst fetchMealDetails = async (mealId) => {\r\n  const response = await fetch(`${mealApiUrl}/lookup.php?i=${mealId}`);\r\n  const data = await response.json();\r\n  return data.meals[0];\r\n};\r\n\r\nconst fetchLikes = async () => {\r\n  const response = await fetch(involvementApiUrl);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst postLike = async (mealId) => {\r\n  await fetch(involvementApiUrl, {\r\n    method: 'POST',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body: JSON.stringify({ item_id: mealId })\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./src/js/api.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n\r\n\r\nconst mealContainer = document.getElementById('meal-container');\r\nconst mealCountElement = document.getElementById('meal-count');\r\n\r\nconst displayMeals = async () => {\r\n  const meals = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchMeals)('');\r\n  const likes = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchLikes)();\r\n\r\n  mealCountElement.textContent = meals.length;\r\n\r\n  meals.forEach(meal => {\r\n    const mealLikes = likes.find(like => like.item_id === meal.idMeal);\r\n    const likesCount = mealLikes ? mealLikes.likes : 0;\r\n\r\n    const mealCard = document.createElement('div');\r\n    mealCard.classList.add('meal-card');\r\n\r\n    mealCard.innerHTML = `\r\n      <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\r\n      <div class=\"meal-info\">\r\n        <h3>${meal.strMeal}</h3>\r\n        <div class=\"likes-comments\">\r\n          <div class=\"like-button\" data-id=\"${meal.idMeal}\">\r\n            <img src=\"src/img/like-icon.png\" alt=\"Like\">\r\n            <span>${likesCount}</span>\r\n          </div>\r\n          <button class=\"comments-button\" data-id=\"${meal.idMeal}\">comments</button>\r\n        </div>\r\n      </div>\r\n    `;\r\n\r\n    mealContainer.appendChild(mealCard);\r\n\r\n    // Add event listener to the like button\r\n    const likeButton = mealCard.querySelector('.like-button');\r\n    likeButton.addEventListener('click', async () => {\r\n      await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(meal.idMeal);\r\n      likeButton.querySelector('span').textContent = parseInt(likeButton.querySelector('span').textContent, 10) + 1;\r\n    });\r\n\r\n    // Add event listener to the comments button\r\n    const commentsButton = mealCard.querySelector('.comments-button');\r\n    commentsButton.addEventListener('click', () => {\r\n      // Open comments popup (implement this function)\r\n      openCommentsPopup(meal.idMeal);\r\n    });\r\n  });\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  displayMeals();\r\n});\r\n\r\n// Implement openCommentsPopup function\r\nconst openCommentsPopup = (mealId) => {\r\n  // Your implementation for the comments popup\r\n};\r\n\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./src/js/index.js?");

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