/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Controller/Game.ts":
/*!***********************************!*\
  !*** ./src/ts/Controller/Game.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Game = void 0;\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n    this.addEventListener();\n    this.resetForm = document.querySelector(settings_1.settings.forms.domSelector);\n  }\n  _createClass(Game, [{\n    key: \"addEventListener\",\n    value: function addEventListener() {\n      var _this = this;\n      window.addEventListener('submit', function (e) {\n        e.preventDefault();\n        _this.reset();\n      });\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.resetForm.classList.add(settings_1.settings.forms.hideClass);\n    }\n  }]);\n  return Game;\n}();\nexports.Game = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29udHJvbGxlci9HYW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLFVBQUEsR0FBQUMsbUJBQUE7QUFBcUMsSUFFeEJDLElBQUk7RUFHWixTQUFBQSxLQUFBO0lBQUFDLGVBQUEsT0FBQUQsSUFBQTtJQUNLLElBQUksQ0FBQ0UsZ0JBQWdCLEVBQUU7SUFDdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDUCxVQUFBLENBQUFRLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUM7RUFDeEU7RUFBQ0MsWUFBQSxDQUFBVCxJQUFBO0lBQUFVLEdBQUE7SUFBQUMsS0FBQSxFQUVPLFNBQUFULGlCQUFBLEVBQWdCO01BQUEsSUFBQVUsS0FBQTtNQUNuQkMsTUFBTSxDQUFDWCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ1ksQ0FBYSxFQUFHO1FBQzlDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQkgsS0FBSSxDQUFDSSxLQUFLLEVBQUU7TUFDakIsQ0FBQyxDQUFDO0lBQ1A7RUFBQztJQUFBTixHQUFBO0lBQUFDLEtBQUEsRUFFTyxTQUFBSyxNQUFBLEVBQUs7TUFDUixJQUFJLENBQUNiLFNBQVMsQ0FBQ2MsU0FBUyxDQUFDQyxHQUFHLENBQUNwQixVQUFBLENBQUFRLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDWSxTQUFTLENBQUM7SUFDM0Q7RUFBQztFQUFBLE9BQUFuQixJQUFBO0FBQUE7QUFqQk5vQixZQUFBLEdBQUFwQixJQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy90cy9Db250cm9sbGVyL0dhbWUudHM/MDRmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgICBwcml2YXRlIHJlYWRvbmx5IHJlc2V0Rm9ybSA6IEhUTUxGb3JtRWxlbWVudDtcblxuICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKVxuICAgICAgICAgIHRoaXMucmVzZXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5mb3Jtcy5kb21TZWxlY3RvcilcbiAgICAgfVxuXG4gICAgIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6U3VibWl0RXZlbnQpPT57XG4gICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgfSk7XG4gICAgIH1cblxuICAgICBwcml2YXRlIHJlc2V0KCl7XG4gICAgICAgICAgdGhpcy5yZXNldEZvcm0uY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5mb3Jtcy5oaWRlQ2xhc3MpXG4gICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbInNldHRpbmdzXzEiLCJyZXF1aXJlIiwiR2FtZSIsIl9jbGFzc0NhbGxDaGVjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNldEZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXR0aW5ncyIsImZvcm1zIiwiZG9tU2VsZWN0b3IiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwid2luZG93IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoaWRlQ2xhc3MiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Controller/Game.ts\n");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar Game_1 = __webpack_require__(/*! ./Controller/Game */ \"./src/ts/Controller/Game.ts\");\nnew Game_1.Game();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUFBLE1BQUEsR0FBQUMsbUJBQUE7QUFFQSxJQUFJRCxNQUFBLENBQUFFLElBQUksRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1qdWluLTIwMjIvLi9zcmMvdHMvbWFpbi50cz9lODg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZX0gZnJvbSBcIi4vQ29udHJvbGxlci9HYW1lXCI7XG5cbm5ldyBHYW1lKCk7Il0sIm5hbWVzIjpbIkdhbWVfMSIsInJlcXVpcmUiLCJHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/main.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    snake: {\n      domSelector: \"#snake\",\n      ctx: \"2d\"\n    },\n    food: {\n      domSelector: \"#food\",\n      ctx: \"2d\"\n    },\n    fps: 4,\n    size: {\n      width: 600,\n      height: 600\n    }\n  },\n  snake: {\n    unit: 20,\n    color: \"#252422\",\n    initialCount: 6,\n    borderColor: 'white'\n  },\n  food: {\n    radius: 10,\n    color: \"#EB5E28\"\n  },\n  score: {\n    domSelector: \".game__score span\"\n  },\n  forms: {\n    domSelector: \".game__play\",\n    messageSelector: \".game__play__message\",\n    inputSelector: \".game__play__score\",\n    hideClass: \"hide\",\n    messages: {\n      selfEating: \"Oh non ! Le serpent s'est mordu la queue...\",\n      goOut: \"Oh non ! Le serpent s’est pris la tête dans le mur...\"\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWFBLGdCQUFRLEdBQUc7RUFDcEJFLE1BQU0sRUFBRTtJQUNKQyxLQUFLLEVBQUU7TUFBQ0MsV0FBVyxFQUFFLFFBQVE7TUFBRUMsR0FBRyxFQUFFO0lBQUksQ0FBQztJQUN6Q0MsSUFBSSxFQUFFO01BQUNGLFdBQVcsRUFBRSxPQUFPO01BQUVDLEdBQUcsRUFBRTtJQUFJLENBQUM7SUFDdkNFLEdBQUcsRUFBRSxDQUFDO0lBQ05DLElBQUksRUFBRTtNQUFDQyxLQUFLLEVBQUUsR0FBRztNQUFFQyxNQUFNLEVBQUU7SUFBRztHQUNqQztFQUNEUCxLQUFLLEVBQUU7SUFDSFEsSUFBSSxFQUFFLEVBQUU7SUFDUkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLFlBQVksRUFBRSxDQUFDO0lBQ2ZDLFdBQVcsRUFBRztHQUNqQjtFQUNEUixJQUFJLEVBQUU7SUFBQ1MsTUFBTSxFQUFFLEVBQUU7SUFBRUgsS0FBSyxFQUFFO0VBQVMsQ0FBQztFQUNwQ0ksS0FBSyxFQUFFO0lBQ0haLFdBQVcsRUFBRTtHQUNoQjtFQUNEYSxLQUFLLEVBQUU7SUFDSGIsV0FBVyxFQUFFLGFBQWE7SUFDMUJjLGVBQWUsRUFBRSxzQkFBc0I7SUFDdkNDLGFBQWEsRUFBRSxvQkFBb0I7SUFDbkNDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCQyxRQUFRLEVBQUU7TUFDTkMsVUFBVSxFQUFFLDZDQUE2QztNQUN6REMsS0FBSyxFQUFFOzs7Q0FHbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtZW4tanVpbi0yMDIyLy4vc3JjL3RzL3NldHRpbmdzLnRzPzc0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGNhbnZhczoge1xuICAgICAgICBzbmFrZToge2RvbVNlbGVjdG9yOiBcIiNzbmFrZVwiLCBjdHg6IFwiMmRcIn0sXG4gICAgICAgIGZvb2Q6IHtkb21TZWxlY3RvcjogXCIjZm9vZFwiLCBjdHg6IFwiMmRcIn0sXG4gICAgICAgIGZwczogNCxcbiAgICAgICAgc2l6ZToge3dpZHRoOiA2MDAsIGhlaWdodDogNjAwfSxcbiAgICB9LFxuICAgIHNuYWtlOiB7XG4gICAgICAgIHVuaXQ6IDIwLFxuICAgICAgICBjb2xvcjogXCIjMjUyNDIyXCIsXG4gICAgICAgIGluaXRpYWxDb3VudDogNixcbiAgICAgICAgYm9yZGVyQ29sb3IgOiAnd2hpdGUnLFxuICAgIH0sXG4gICAgZm9vZDoge3JhZGl1czogMTAsIGNvbG9yOiBcIiNFQjVFMjhcIn0sXG4gICAgc2NvcmU6IHtcbiAgICAgICAgZG9tU2VsZWN0b3I6IFwiLmdhbWVfX3Njb3JlIHNwYW5cIlxuICAgIH0sXG4gICAgZm9ybXM6IHtcbiAgICAgICAgZG9tU2VsZWN0b3I6IFwiLmdhbWVfX3BsYXlcIixcbiAgICAgICAgbWVzc2FnZVNlbGVjdG9yOiBcIi5nYW1lX19wbGF5X19tZXNzYWdlXCIsXG4gICAgICAgIGlucHV0U2VsZWN0b3I6IFwiLmdhbWVfX3BsYXlfX3Njb3JlXCIsXG4gICAgICAgIGhpZGVDbGFzczogXCJoaWRlXCIsXG4gICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICBzZWxmRWF0aW5nOiBcIk9oIG5vbiAhIExlIHNlcnBlbnQgcydlc3QgbW9yZHUgbGEgcXVldWUuLi5cIixcbiAgICAgICAgICAgIGdvT3V0OiBcIk9oIG5vbiAhIExlIHNlcnBlbnQgc+KAmWVzdCBwcmlzIGxhIHTDqnRlIGRhbnMgbGUgbXVyLi4uXCIsXG4gICAgICAgIH0sXG4gICAgfVxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2V0dGluZ3MiLCJjYW52YXMiLCJzbmFrZSIsImRvbVNlbGVjdG9yIiwiY3R4IiwiZm9vZCIsImZwcyIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsInVuaXQiLCJjb2xvciIsImluaXRpYWxDb3VudCIsImJvcmRlckNvbG9yIiwicmFkaXVzIiwic2NvcmUiLCJmb3JtcyIsIm1lc3NhZ2VTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJoaWRlQ2xhc3MiLCJtZXNzYWdlcyIsInNlbGZFYXRpbmciLCJnb091dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexamen_juin_2022"] = self["webpackChunkexamen_juin_2022"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;