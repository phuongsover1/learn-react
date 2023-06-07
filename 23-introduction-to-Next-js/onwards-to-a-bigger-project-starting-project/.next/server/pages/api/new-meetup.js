module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// /api/new-meetup\n// POST /api/new-meetup\n\n\n\nasync function handler(request, response) {\n  console.log('request: ', request);\n\n  if (request.method === 'POST') {\n    const data = response.body;\n    console.log('data in handler: ', data);\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://phuongsover2:phuongsover1@next-js-api.ef8pc3a.mongodb.net/?retryWrites=true&w=majority');\n    const db = client.db('next-js-mongodb');\n    const meetupsCollection = db.collection('meetups');\n    console.log('data :', data);\n    data = JSON.parse(data);\n    const id = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"ObjectId\"](String(Math.floor(Math.random() * 1000)));\n    data = _objectSpread(_objectSpread({}, data), {}, {\n      id\n    });\n    console.log('last data: ', data);\n    const result = await meetupsCollection.insertOne(JSON.stringify(data));\n    console.log(result);\n    client.close();\n    response.status(201).json({\n      message: 'Meetup inserted!'\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIkpTT04iLCJwYXJzZSIsImlkIiwiT2JqZWN0SWQiLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJzdHJpbmdpZnkiLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlQSxPQUFmLENBQXVCQyxPQUF2QixFQUFnQ0MsUUFBaEMsRUFBMEM7QUFDeENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJILE9BQXpCOztBQUNBLE1BQUlBLE9BQU8sQ0FBQ0ksTUFBUixLQUFtQixNQUF2QixFQUErQjtBQUM3QixVQUFNQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssSUFBdEI7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNFLElBQWpDO0FBRUEsVUFBTUUsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsc0dBRG1CLENBQXJCO0FBSUEsVUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsQ0FBVSxpQkFBVixDQUFYO0FBRUEsVUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUI7QUFFQVYsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkUsSUFBdEI7QUFDQUEsUUFBSSxHQUFHUSxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsSUFBWCxDQUFQO0FBQ0EsVUFBTVUsRUFBRSxHQUFHLElBQUlDLGdEQUFKLENBQWFDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixJQUEzQixDQUFELENBQW5CLENBQVg7QUFDQWYsUUFBSSxtQ0FBUUEsSUFBUjtBQUFjVTtBQUFkLE1BQUo7QUFDQWIsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkUsSUFBM0I7QUFDQSxVQUFNZ0IsTUFBTSxHQUFHLE1BQU1WLGlCQUFpQixDQUFDVyxTQUFsQixDQUE0QlQsSUFBSSxDQUFDVSxTQUFMLENBQWVsQixJQUFmLENBQTVCLENBQXJCO0FBRUFILFdBQU8sQ0FBQ0MsR0FBUixDQUFZa0IsTUFBWjtBQUVBZCxVQUFNLENBQUNpQixLQUFQO0FBRUF2QixZQUFRLENBQUN3QixNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUExQjtBQUNEO0FBQ0Y7O0FBRWM1QixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gL2FwaS9uZXctbWVldHVwXG4vLyBQT1NUIC9hcGkvbmV3LW1lZXR1cFxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgY29uc29sZS5sb2coJ3JlcXVlc3Q6ICcsIHJlcXVlc3QpO1xuICBpZiAocmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5ib2R5O1xuICAgIGNvbnNvbGUubG9nKCdkYXRhIGluIGhhbmRsZXI6ICcsIGRhdGEpO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAgICdtb25nb2RiK3NydjovL3BodW9uZ3NvdmVyMjpwaHVvbmdzb3ZlcjFAbmV4dC1qcy1hcGkuZWY4cGMzYS5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuICAgICk7XG5cbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYignbmV4dC1qcy1tb25nb2RiJyk7XG5cbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICAgIGNvbnNvbGUubG9nKCdkYXRhIDonLCBkYXRhKTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICBjb25zdCBpZCA9IG5ldyBPYmplY3RJZChTdHJpbmcoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkpKTtcbiAgICBkYXRhID0geyAuLi5kYXRhLCBpZCB9O1xuICAgIGNvbnNvbGUubG9nKCdsYXN0IGRhdGE6ICcsIGRhdGEpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXNwb25zZS5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ01lZXR1cCBpbnNlcnRlZCEnIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });