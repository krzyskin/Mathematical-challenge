/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {\n\n    $('.start').on('click', function (e) {\n        e.preventDefault();\n        var factor = 0;\n        if (document.getElementById(\"small\").checked === true) {\n            factor = 1;\n        } else if (document.getElementById(\"medium\").checked === true) {\n            factor = 10;\n        } else if (document.getElementById(\"large\").checked === true) {\n            factor = 1000;\n        }\n\n        var num1 = Math.round(Math.random() * 5 * factor);\n        var num2 = Math.round(Math.random() * 5 * factor);\n        var sum = num1 + num2;\n\n        $('.question').text(num1 + '+' + num2);\n\n        var falseResult1 = 0;\n        var falseResult2 = 0;\n        do {\n            falseResult1 = Math.round(Math.random() * 10 * factor);\n            falseResult2 = Math.round(Math.random() * 10 * factor);\n        } while (falseResult1 == falseResult2 || falseResult1 == sum || falseResult2 == sum);\n\n        var array = [falseResult1, falseResult2, sum];\n\n        var sortedArray = array.sort();\n\n        $('.answer-1').text(sortedArray[0]);\n        $('.answer-2').text(sortedArray[1]);\n        $('.answer-3').text(sortedArray[2]);\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });