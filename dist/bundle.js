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

/***/ "./script.ts":
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/
/***/ (function() {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nconst url1 = 'https://services.odata.org/Experimental/OData/OData.svc/Products?$orderby=Price asc';\r\nconst url2 = 'https://services.odata.org/Experimental/OData/OData.svc/ProductDetails';\r\n//function for getting data from an endpoint\r\nfunction getData(url) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const response = yield fetch(url);\r\n            const users = yield response.json();\r\n            return users.value;\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n        }\r\n    });\r\n}\r\n//function for merging data\r\nmergeData(url1, url2);\r\nfunction mergeData(url1, url2) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        //getting data from server\r\n        const dataPart1 = yield getData(url1);\r\n        const dataPart2 = yield getData(url2);\r\n        //getting array from unique data`s IDs\r\n        const setID = [...new Set(dataPart1.map(({ ID }) => ID)\r\n                .concat(dataPart2.map(({ ProductID }) => ProductID)))];\r\n        //getting Map of data\r\n        const getMap1 = (data, id) => new Map(data.map((_a) => {\r\n            var _b = id, _id = _a[_b], res = __rest(_a, [typeof _b === \"symbol\" ? _b : _b + \"\"]);\r\n            return [_id, Object.assign({ ID: _id }, res)];\r\n        }));\r\n        const getMap2 = (data, id) => new Map(data.map((_a) => {\r\n            var _b = id, _id = _a[_b], res = __rest(_a, [typeof _b === \"symbol\" ? _b : _b + \"\"]);\r\n            return [_id, Object.assign({}, res)];\r\n        }));\r\n        const dataPart1Mapped = getMap1(dataPart1, 'ID');\r\n        const dataPart2Mapped = getMap2(dataPart2, 'ProductID');\r\n        //merging both data's\r\n        const resultData = setID.map(id => (Object.assign(Object.assign({}, (dataPart1Mapped.get(id) || {})), (dataPart2Mapped.get(id) || {}))));\r\n        console.log(resultData);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://AdditionalTask/./script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.ts"]();
/******/ 	
/******/ })()
;