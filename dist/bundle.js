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

/***/ "./node_modules/css-loader/dist/cjs.js!./public/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    font-family: Arial, sans-serif;\r\n  }\r\n  \r\n  header {\r\n    background-color: #f8f8f8;\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n  \r\n  header h1 {\r\n    margin: 0;\r\n  }\r\n  \r\n  nav ul {\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  nav ul li {\r\n    display: inline;\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  nav ul li a {\r\n    text-decoration: none;\r\n    color: #000;\r\n  }\r\n  \r\n  main {\r\n    padding: 20px;\r\n  }\r\n  \r\n  .meal-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 20px;\r\n  }\r\n  \r\n  .meal-card {\r\n    width: 200px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .meal-card img {\r\n    width: 100%;\r\n    height: 150px;\r\n    /* object-fit: cover; */\r\n  }\r\n  \r\n  .meal-info {\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .likes-comments {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .like-button {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .like-button img {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  .comments-button {\r\n    background-color: #ff6347;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .likes-comments .like-button img {\r\n    width: 24px;  /* Adjust the size of the image */\r\n    height: 24px; /* Adjust the size of the image */\r\n    margin-right: 5px; /* Add some space between the image and the text */\r\n    cursor: pointer; /* Change the cursor to pointer on hover */\r\n    transition: transform 0.3s; /* Add a transition effect */\r\n  }\r\n  \r\n  .likes-comments .like-button img:hover {\r\n    transform: scale(1.1); /* Slightly increase the size on hover */\r\n  }\r\n\r\n\r\n/* Popup styles */\r\n.popup {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .popup-content {\r\n    background: white;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    width: 80%;\r\n    max-width: 500px;\r\n    position: relative;\r\n  }\r\n  \r\n  .close-popup {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    background: transparent;\r\n    border: none;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  #comments-list {\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  #comments-list li {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  #comment-username,\r\n  #comment-text {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  #submit-comment {\r\n    width: 100%;\r\n    padding: 10px;\r\n    background: #333;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  \r\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./public/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/img/heart.png":
/*!***************************!*\
  !*** ./src/img/heart.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"../images/img/heart.png\");\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./src/img/heart.png?");

/***/ }),

/***/ "./public/styles.css":
/*!***************************!*\
  !*** ./public/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./public/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./public/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/JS/api.js":
/*!***********************!*\
  !*** ./src/JS/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchLikes: () => (/* binding */ fetchLikes),\n/* harmony export */   fetchMeals: () => (/* binding */ fetchMeals),\n/* harmony export */   postLike: () => (/* binding */ postLike)\n/* harmony export */ });\nconst mealApiUrl = 'https://www.themealdb.com/api/json/v1/1';\r\n\r\nconst fetchMeals = async (searchQuery = '') => {\r\n  const response = await fetch(`${mealApiUrl}/search.php?s=${searchQuery}`);\r\n  const data = await response.json();\r\n  return data.meals ? data.meals.slice(0, 30) : [];\r\n};\r\n\r\n\r\nconst fetchLikes = async () => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UrgQm7RyKhohgsiKlIZF/likes');\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst postLike = async (mealId) => {\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UrgQm7RyKhohgsiKlIZF/likes', {\r\n    method: 'POST',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body: JSON.stringify({ item_id: mealId }),\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./src/JS/api.js?");

/***/ }),

/***/ "./src/JS/index.js":
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/styles.css */ \"./public/styles.css\");\n/* harmony import */ var _img_heart_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/heart.png */ \"./src/img/heart.png\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/JS/api.js\");\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./involvement.js */ \"./src/JS/involvement.js\");\n// Import CSS file\r\n\r\n\r\n// Import image using Webpack's file-loader\r\n\r\n\r\n\r\n\r\n\r\nconst mealContainer = document.getElementById('meal-container');\r\nconst mealCountElement = document.getElementById('meal-count');\r\n\r\nconst displayMeals = async () => {\r\n  try {\r\n    const meals = await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.fetchMeals)();  \r\n    const likes = await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.fetchLikes)();\r\n\r\n    mealCountElement.textContent = meals.length;\r\n\r\n    mealContainer.innerHTML = '';  // Clear the container first\r\n\r\n    meals.forEach(meal => {\r\n      const mealLikes = likes.find(like => like.item_id === meal.idMeal);\r\n      const likesCount = mealLikes ? mealLikes.likes : 0;\r\n\r\n      const mealCard = document.createElement('div');\r\n      mealCard.classList.add('meal-card');\r\n\r\n      mealCard.innerHTML = `\r\n        <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\r\n        <div class=\"meal-info\">\r\n          <h3>${meal.strMeal}</h3>\r\n          <div class=\"likes-comments\">\r\n            <div class=\"like-button\" data-id=\"${meal.idMeal}\">\r\n              <img src=\"${_img_heart_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" alt=\"Like\"> <!-- Use the imported variable here -->\r\n              <span>${likesCount}</span>\r\n            </div>\r\n            <button class=\"comments-button\" data-id=\"${meal.idMeal}\">Comments</button>\r\n          </div>\r\n        </div>\r\n      `;\r\n\r\n      mealContainer.appendChild(mealCard);\r\n\r\n      // Add event listener to the like button\r\n      const likeButton = mealCard.querySelector('.like-button');\r\n      likeButton.addEventListener('click', async () => {\r\n        await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(meal.idMeal);\r\n        likeButton.querySelector('span').textContent = parseInt(likeButton.querySelector('span').textContent, 10) + 1;\r\n      });\r\n\r\n      // Add event listener to the comments button\r\n      const commentsButton = mealCard.querySelector('.comments-button');\r\n      commentsButton.addEventListener('click', async () => {\r\n        const comments = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_3__.fetchComments)(meal.idMeal);\r\n        openCommentsPopup(meal, comments);\r\n      });\r\n    });\r\n  } catch (error) {\r\n    console.error('Error displaying meals:', error);\r\n  }\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  displayMeals();\r\n});\r\n\r\n// Implement openCommentsPopup function\r\nconst openCommentsPopup = (meal, comments) => {\r\n  // Create popup container\r\n  const popup = document.createElement('div');\r\n  popup.classList.add('popup');\r\n\r\n  // Generate comments list HTML\r\n  const commentsListHTML = comments.map(comment => `\r\n    <li>${comment.creation_date} add a new comment: ${comment.username} says: ${comment.comment}</li>\r\n  `).join('');\r\n\r\n  // Set popup content\r\n  popup.innerHTML = `\r\n    <div class=\"popup-content\">\r\n      <button class=\"close-popup\">&times;</button>\r\n      <h2>${meal.strMeal}</h2>\r\n      <p>Area: ${meal.strArea}</p>\r\n      <p>Category: ${meal.strCategory}</p>\r\n      <div>\r\n        <h3>Comments (${comments.length})</h3>\r\n        <ul id=\"comments-list\">\r\n          ${commentsListHTML}\r\n        </ul>\r\n      </div>\r\n      <div>\r\n        <h3>Add a comment</h3>\r\n        <input type=\"text\" id=\"comment-username\" placeholder=\"Your name\">\r\n        <textarea id=\"comment-text\" placeholder=\"Your insights\"></textarea>\r\n        <button id=\"submit-comment\">Comment</button>\r\n      </div>\r\n    </div>\r\n  `;\r\n\r\n  document.body.appendChild(popup);\r\n\r\n  // Close popup\r\n  popup.querySelector('.close-popup').addEventListener('click', () => {\r\n    document.body.removeChild(popup);\r\n  });\r\n\r\n  // Handle comment submission\r\n  document.getElementById('submit-comment').addEventListener('click', async () => {\r\n    const username = document.getElementById('comment-username').value;\r\n    const comment = document.getElementById('comment-text').value;\r\n\r\n    if (username && comment) {\r\n      await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_3__.postComment)(meal.idMeal, username, comment);\r\n      const updatedComments = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_3__.fetchComments)(meal.idMeal);\r\n      const commentsList = document.getElementById('comments-list');\r\n      commentsList.innerHTML = updatedComments.map(comment => `\r\n        <li>${comment.creation_date} add a new comment: ${comment.username} says: ${comment.comment}</li>\r\n      `).join('');\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./src/JS/index.js?");

/***/ }),

/***/ "./src/JS/involvement.js":
/*!*******************************!*\
  !*** ./src/JS/involvement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchComments: () => (/* binding */ fetchComments),\n/* harmony export */   postComment: () => (/* binding */ postComment)\n/* harmony export */ });\nconst involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UrgQm7RyKhohgsiKlIZF/comments';\r\n\r\nconst fetchComments = async (mealId) => {\r\n  const response = await fetch(`${involvementApiUrl}?item_id=${mealId}`);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst postComment = async (mealId, username, comment) => {\r\n  await fetch(involvementApiUrl, {\r\n    method: 'POST',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body: JSON.stringify({ item_id: mealId, username, comment })\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://mealdb-api-based-webapp/./src/JS/involvement.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/JS/index.js");
/******/ 	
/******/ })()
;