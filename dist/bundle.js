/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Flower.js":
/*!***********************!*\
  !*** ./src/Flower.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/FlowerParams.js */ "./src/types/FlowerParams.js");
/* harmony import */ var _types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// @ts-check

/* IMPORTS */



/** 
 * @class Flower
 * @prop {number} n - current petal generation.
 * @desc Represents a procedurally drawn flower. 
 * @author TJ
 * */
var Flower = /*#__PURE__*/function () {
  /**
   * @desc Creates an instance of Flower.
   * @param {FlowerParams} params
   */
  function Flower(params) {
    _classCallCheck(this, Flower);
    //Object.assign(this, { centerX, centerY, divergence, c, petalSize, drawPetalFunction }); //:-(

    /** @type {number} */
    this.n = 0;

    // Required properies from FlowerParams
    /** @type {number} */
    this.centerX = params.centerX;

    /** @type {number} */
    this.centerY = params.centerY;

    /** @type {number} */
    this.divergence = params.divergence;

    /** @type {number} */
    this.c = params.c;

    /** @type {number} */
    this.petalSize = params.petalSize;

    /** @type {function} */
    this.drawPetalFunction = params.drawPetalFunction;
  }

  /**
   * Draws the next petal.
   * 
   * @param {CanvasRenderingContext2D} ctx - drawing context where the flower will be rendered.
   */
  return _createClass(Flower, [{
    key: "update",
    value: function update(ctx) {
      var a = this.n * (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.dtr)(this.divergence);
      var r = this.c * Math.sqrt(this.n);
      var x = r * Math.cos(a) + this.centerX;
      var y = r * Math.sin(a) + this.centerY;
      var color = "hsl(".concat(this.n / 5 % 361, ",100%,50%)"); // 4
      this.drawPetalFunction(ctx, x, y, this.petalSize, color);
      this.n++;
      this.c += .005;
      this.petalSize += .01;
    }
  }]);
}();
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flower);

/***/ }),

/***/ "./src/RotatingFlower.js":
/*!*******************************!*\
  !*** ./src/RotatingFlower.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/FlowerParams.js */ "./src/types/FlowerParams.js");
/* harmony import */ var _types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_FlowerPetal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/FlowerPetal.js */ "./src/types/FlowerPetal.js");
/* harmony import */ var _types_FlowerPetal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types_FlowerPetal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flower_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flower.js */ "./src/Flower.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
// @ts-check

/* IMPORTS */





/** 
 * @class RotatingFlower
 * @extends Flower
 * @prop {FlowerPetal[]} _petals
 * @desc Represents a pre-rendered rotating flower.
 * @author TJ
 * @private
 */
var RotatingFlower = /*#__PURE__*/function (_Flower) {
  /**
   * @desc Creates an instance of RotatingFlower
   * @param {FlowerParams} params 
   */
  function RotatingFlower(params) {
    var _this;
    _classCallCheck(this, RotatingFlower);
    _this = _callSuper(this, RotatingFlower, [params]);
    /**
     * @type {FlowerPetal[]}
     */
    _this._petals = [];

    // Optional properties from FlowerParams, which are required for RotatingFlower
    _this.rotation = params.rotation || 0;
    _this.deltaC = params.deltaC || 0;
    _this.deltaDivergence = params.deltaDivergence || 0;
    _this.deltaPetalSize = params.deltaPetalSize || 0;
    _this.deltaRotation = params.deltaRotation || 0;
    return _this;
  }

  /**
   * Draws the next petal.
   * @param {CanvasRenderingContext2D} ctx - drawing context where the flower will be rendered.
   */
  _inherits(RotatingFlower, _Flower);
  return _createClass(RotatingFlower, [{
    key: "update",
    value: function update(ctx) {
      var a = this.n * (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.dtr)(this.divergence);
      var r = this.c * Math.sqrt(this.n);
      var x = r * Math.cos(a); // + this.centerX;
      var y = r * Math.sin(a); //+ this.centerY;
      var color = "hsl(".concat(this.n / 5 % 361, ",100%,50%)"); // 4

      this._petals.push({
        x: x,
        y: y,
        color: color,
        petalSize: this.petalSize
      });
      ctx.save();
      ctx.translate(this.centerX, this.centerY);
      ctx.rotate(this.rotation);
      var _iterator = _createForOfIteratorHelper(this._petals),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          this.drawPetalFunction(ctx, p.x, p.y, this.petalSize, p.color);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ctx.restore();
      this.n++;
      this.c += this.deltaC;
      this.divergence += this.deltaDivergence;
      this.petalSize += this.deltaPetalSize;
      this.rotation += this.deltaRotation;
    }
  }]);
}(_Flower_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RotatingFlower);

/***/ }),

/***/ "./src/types/AppDefaults.js":
/*!**********************************!*\
  !*** ./src/types/AppDefaults.js ***!
  \**********************************/
/***/ (() => {

// @ts-check

/**
 * @name AppDefaults
 * @desc JSDoc type definition.
 * @author TJ
 * @typedef {Object} AppDefaults
 * @prop {number} c - padding between petals in pixels.
 * @prop {number} canvasWidth - width of canvas in pixels.
 * @prop {number} canvasHeight - height of canvas in pixels.
 * @prop {string} clearColor - CSS color to fill background with.
 * @prop {number} deltaC - `c` delta per frame.
 * @prop {number} deltaDivergence - `divergence` delta per frame.
 * @prop {number} deltaPetalSize - `petalSize` delta per frame.
 * @prop {number} deltaRotation - `rotation` delta per frame.
 * @prop {number} divergence - degrees of rotation per frame.
 * @prop {number} fps - target frames-per-second of animation loop.
 * @prop {number} petalSize - radius of petals in pixels.
 */

/***/ }),

/***/ "./src/types/FlowerParams.js":
/*!***********************************!*\
  !*** ./src/types/FlowerParams.js ***!
  \***********************************/
/***/ (() => {

// @ts-check
/**
 * @name FlowerParams
 * @desc JSDoc type definition. These are also properties of the Flower class.
 * @author TJ
 * @typedef {Object} FlowerParams
 * @prop {number} centerX - center `x` of Flower around which petals are drawn.
 * @prop {number} centerY - center `y` of Flower around which petals are drawn.
 * @prop {number} divergence - rotation (in radians) between successive petals.
 * @prop {number} c - spacing between petals.
 * @prop {number} petalSize - width of each petal in pixels.
 * @prop {Function} drawPetalFunction - function that draws petals.
 * @prop {number} [rotation=0] - rotation of flower in radians.
 * @prop {number} [deltaRotation=0] - `rotation` delta per frame.
 * @prop {number} [deltaC=0] - `c` delta per frame.
 * @prop {number} [deltaDivergence=0] - `divergence` delta per frame.
 * @prop {number} [deltaPetalSize=0] - `petalSize` delta per frame.
 */

/***/ }),

/***/ "./src/types/FlowerPetal.js":
/*!**********************************!*\
  !*** ./src/types/FlowerPetal.js ***!
  \**********************************/
/***/ (() => {

// @ts-check
/**
 * @name FlowerPetal
 * @desc JSDoc type definition
 * @author TJ
 * @typedef {Object} FlowerPetal
 * @prop {number} x - 'x' of petal.
 * @prop {number} y - 'y' of petal.
 * @prop {number} petalSize - width of each petal in pixels.
 * @prop {string} color - CSS color of petal.
 */

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertNonNull: () => (/* binding */ assertNonNull),
/* harmony export */   dtr: () => (/* binding */ dtr),
/* harmony export */   fillCircle: () => (/* binding */ fillCircle),
/* harmony export */   fillRect: () => (/* binding */ fillRect),
/* harmony export */   getRandom: () => (/* binding */ getRandom)
/* harmony export */ });
// @ts-check
/* eslint max-params: 0 */

/**
 * @module utils
 * @desc Utility functions
 * @author TJ
 */

/**
* @static assertNonNull
* @author https://docs.joshuatz.com/cheatsheets/js/jsdoc/
* @desc Utility function because we can't use a TS-style post-fix assert (yet) in JSDoc
*  - Takes any union type and excludes `null`
* @template T
* @param {T} thing - any union type
* @returns {Exclude<T, null>}
*/
var assertNonNull = function assertNonNull(thing) {
  return /** @type {Exclude<T, null>} */thing;
};

/**
 * @static dtr
 * @desc Converts degree values to radians.
 * @param {number} degrees - The value in degrees.
 * @returns {number} The value in radians.
 */
var dtr = function dtr(degrees) {
  return degrees * (Math.PI / 180);
};

/**
 * @static getRandom
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
var getRandom = function getRandom(min, max) {
  return Math.random() * (max - min) + min;
};

/* CANVAS UTILS */

/**
 * @static fillCircle
 * @desc Fills a circle in the provided <kbd>ctx</kbd>. The circle is centered on  <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {string} color 
 */
var fillCircle = function fillCircle(ctx, x, y, radius, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

/**
 * @static fillRect
 * @desc Fills a rectangle in the provided <kbd>ctx</kbd>. The rectangle's upper-left corner begins at <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} x 
 * @param {number} y 
 * @param {number} width 
 * @param {number} height 
 * @param {string} color 
 */
var fillRect = function fillRect(ctx, x, y, width, height, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.restore();
};

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_AppDefaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/AppDefaults.js */ "./src/types/AppDefaults.js");
/* harmony import */ var _types_AppDefaults_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types_AppDefaults_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Flower_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flower.js */ "./src/Flower.js");
/* harmony import */ var _RotatingFlower_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RotatingFlower.js */ "./src/RotatingFlower.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
// @ts-check
/*global window, document*/

/**
 * @module main
 * @description Main module of the application.
 * @author TJ
 */

/* IMPORTS */





/* CONSTANTS */

/** @type {AppDefaults} */
var DEFAULTS = Object.freeze({
  c: 4,
  canvasWidth: 800,
  canvasHeight: 600,
  clearColor: "#000",
  deltaC: .005,
  deltaDivergence: 0,
  deltaPetalSize: .01,
  deltaRotation: .01,
  divergence: 137.5,
  fps: 60,
  petalSize: 2
});

/**
 * Reference to `canvas` element.
 * @type {!HTMLCanvasElement} 
 */
var canvas = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.assertNonNull)(document.querySelector("#canvas"));

/**
 * Reference to drawing context of `canvas`.
 * @type {!CanvasRenderingContext2D}
 */
var ctx = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.assertNonNull)(canvas.getContext("2d"));

/* PROPERTIES */

/**
 * @name clearScreenEveryFrame
 * @desc Toggled by checkbox.
 * @type {boolean}
 */
var clearScreenEveryFrame = true;

/**
 * @name currentDivergence
 * @desc Set by &lt;select>.
 * @type {number}
 */
var currentDivergence = DEFAULTS.divergence;

/**
 * @name currentC
 * @desc Set by &lt;select>.
 * @type {number}
 */
var currentC = DEFAULTS.c;

/**
 * Array of current flowers to draw.
 * @type {Flower[]}
 */
var flowerSprites = [];

/* METHODS */

/**
 * @param {number} x
 * @param {number} y
 * @returns {Flower}
 */
var createRandomFlower = function createRandomFlower(x, y) {
  /** @type {FlowerParams} */
  var params = {
    c: currentC,
    centerX: x,
    centerY: y,
    deltaC: (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getRandom)(.002, .01),
    deltaDivergence: 0,
    deltaPetalSize: (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getRandom)(.01, .04),
    deltaRotation: Math.random() < .5 ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getRandom)(-.002, -.02) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getRandom)(.002, .02),
    divergence: currentDivergence,
    drawPetalFunction: _utils_js__WEBPACK_IMPORTED_MODULE_3__.fillCircle,
    petalSize: (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getRandom)(1, 5)
  };
  return new _RotatingFlower_js__WEBPACK_IMPORTED_MODULE_2__["default"](params);
};
var initFlowerSprites = function initFlowerSprites() {
  // clear array
  flowerSprites.length = 0;

  // add new default Flowersprite
  /** @type {FlowerParams} */
  var params = {
    c: currentC,
    centerX: DEFAULTS.canvasWidth / 2,
    centerY: DEFAULTS.canvasHeight / 2,
    deltaC: DEFAULTS.deltaC,
    deltaDivergence: DEFAULTS.deltaDivergence,
    deltaPetalSize: DEFAULTS.deltaPetalSize,
    deltaRotation: DEFAULTS.deltaRotation,
    divergence: currentDivergence,
    drawPetalFunction: _utils_js__WEBPACK_IMPORTED_MODULE_3__.fillCircle,
    petalSize: DEFAULTS.petalSize
  };
  flowerSprites.push(new _RotatingFlower_js__WEBPACK_IMPORTED_MODULE_2__["default"](params));

  //flowerSprites.push(createRandomFlower(DEFAULTS.canvasWidth/2,DEFAULTS.canvasHeight/2));
};

/**
 * Called every frame.
 */
var loop = function loop() {
  window.setTimeout(loop, 1000 / DEFAULTS.fps);
  if (clearScreenEveryFrame) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.fillRect)(ctx, 0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight, DEFAULTS.clearColor);
  }
  for (var _i = 0, _flowerSprites = flowerSprites; _i < _flowerSprites.length; _i++) {
    var f = _flowerSprites[_i];
    f.update(ctx);
  }
};

/**
 * Handles app initialization.
 */
var init = function init() {
  // I. Setup canvas & drawing context
  canvas.width = DEFAULTS.canvasWidth;
  canvas.height = DEFAULTS.canvasHeight;
  ctx.fillRect(0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight);

  // II. setup UI
  /**  @type {!HTMLButtonElement}  */
  var btnRestart = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.assertNonNull)(document.querySelector("#btn-restart"));
  btnRestart.onclick = function () {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.fillRect)(ctx, 0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight, "black");
    initFlowerSprites();
  };

  /**  @type {!HTMLButtonElement}  */
  var btnReset = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.assertNonNull)(document.querySelector("#btn-reset"));
  btnReset.onclick = function () {
    return window.location.reload();
  };

  /** @type {!HTMLSelectElement} */
  var ctrlDivergence = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.assertNonNull)(document.querySelector("#ctrl-divergence"));
  ctrlDivergence.onchange = function () {
    currentDivergence = +ctrlDivergence.value;
    // change most recent flower's divergence value
    (flowerSprites === null || flowerSprites === void 0 ? void 0 : flowerSprites[flowerSprites.length - 1]).divergence = currentDivergence;
  };

  /** @type {!HTMLSelectElement} */
  var ctrlC = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.assertNonNull)(document.querySelector("#ctrl-c"));
  ctrlC.onchange = function () {
    currentC = +ctrlC.value;
    // change most recent flower's c value
    (flowerSprites === null || flowerSprites === void 0 ? void 0 : flowerSprites[flowerSprites.length - 1]).c = currentC;
  };

  /** @type {!HTMLInputElement} */
  var cbClearEveryFrame = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.assertNonNull)(document.querySelector("#cb-clear-every-frame"));
  cbClearEveryFrame.onchange = function () {
    clearScreenEveryFrame = cbClearEveryFrame.checked;
  };

  // III. Set up flower sprites
  initFlowerSprites();

  // IV. start up app
  loop();
};
init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map