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

/***/ "../todolist/src/todo.ts":
/*!*******************************!*\
  !*** ../todolist/src/todo.ts ***!
  \*******************************/
/***/ (() => {

eval("\nwindow.onload = function () {\n    let todolist = [];\n    todolist = checklocal(\"todolist\");\n    document.getElementById(\"clear\").onclick = function () {\n        localStorage.clear();\n        location.reload();\n    };\n    document.getElementById(\"add\").onclick = function () {\n        let todotask = document.getElementById(\"in\")\n            .value;\n        todolist.push(todotask);\n        localStorage.setItem(\"todolist\", JSON.stringify(todolist));\n        showeachtask(todolist);\n    };\n    showeachtask(todolist);\n};\nconst showeachtask = (todolist) => {\n    const deletetask = (button) => {\n        let todolist = JSON.parse(localStorage.getItem(\"todolist\") || \"\");\n        delete todolist[button.id];\n        localStorage.setItem(\"todolist\", JSON.stringify(todolist.filter((task) => task !== null)));\n        location.reload();\n    };\n    let name = deletetask.name;\n    var output = \"\";\n    for (let item in todolist) {\n        output =\n            output +\n                todolist[item] +\n                '<button id=\"' +\n                item +\n                '\"onclick=\"' + name + '(this)\"\">remove</button>' +\n                \"<br>\" +\n                \"<hr>\";\n    }\n    document.getElementById(\"out\").innerHTML = output;\n};\nconst checklocal = function (key) {\n    if (localStorage.getItem(key) !== null) {\n        return JSON.parse(localStorage.getItem(key) || \"\");\n    }\n    return new Array();\n};\n\n\n//# sourceURL=webpack:///../todolist/src/todo.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../todolist/src/todo.ts"]();
/******/ 	
/******/ })()
;