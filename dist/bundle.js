/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app-color-functions.js":
/*!************************************!*\
  !*** ./src/app-color-functions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   petalColorFunc1: () => (/* binding */ petalColorFunc1),
/* harmony export */   petalColorFunc2: () => (/* binding */ petalColorFunc2),
/* harmony export */   petalColorFunc3: () => (/* binding */ petalColorFunc3),
/* harmony export */   petalColorFunc4: () => (/* binding */ petalColorFunc4),
/* harmony export */   petalColorFunc5: () => (/* binding */ petalColorFunc5),
/* harmony export */   randomPetalColorFunction: () => (/* binding */ randomPetalColorFunction)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
// @ts-check



/**
 * @module app-color-functions
 * @desc Functions for determining color of petal.
 * @author TJ
 */

/* INTERFACE */
/**
 * @name FlowerPetalColorFunc
 * @desc JSDoc type definition
 * @author TJ
 * @typedef {Function} FlowerPetalColorFunc
 * @prop {number} n - generation
 * @prop {number} divergence - rotation of petal.
 * @returns {string} - a CSS color
 */

/* FUNCTIONS */
/**
 * @name petalColorFunc1
 * @desc RGB red value increases with age (`n`) of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
var petalColorFunc1 = function petalColorFunc1(n, divergence) {
  return "rgb(".concat(n % 256, ",").concat(n % 256 / 2, ",").concat(128 - n % 256 / 2, ")");
};

/**
 * @name petalColorFunc2
 * @desc RGB `red` value increases with accumulated rotation of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
var petalColorFunc2 = function petalColorFunc2(n, divergence) {
  var aDegrees = n * divergence % 256;
  return "rgb(".concat(aDegrees, ",0,255)");
};

/**
 * @name petalColorFunc3
 * @desc HSL `hue` value increases with accumulated rotation of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
var petalColorFunc3 = function petalColorFunc3(n, divergence) {
  var aDegrees = n * divergence % 361;
  return "hsl(".concat(aDegrees / 2, ",100%,").concat(80 - aDegrees % 30, "%)");
};

/**
 * @name petalColorFunc4
 * @desc HSL `hue` value increases with age (`n`) of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
var petalColorFunc4 = function petalColorFunc4(n, divergence) {
  return "hsl(".concat(n / 5 % 361, ",100%,50%)");
};

/**
 * @name petalColorFunc5
 * @desc HSL `hue` value increases with age (`n`) of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
var petalColorFunc5 = function petalColorFunc5(n, divergence) {
  return "hsl(".concat(360 - n / 5 % 361, ",100%,50%)");
};

/**
 * @name weightedPetalColorFunctions
 * @type {FlowerPetalColorFunc[]}
 */
var weightedPetalColorFunctions = [petalColorFunc3, petalColorFunc4, petalColorFunc4, petalColorFunc5];

/**
 * @function randomPetalColorFunction
 * @returns {FlowerPetalColorFunc}
 */
var randomPetalColorFunction = function randomPetalColorFunction() {
  return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.randomArrayElement)(weightedPetalColorFunctions);
};

/***/ }),

/***/ "./src/app-defaults.js":
/*!*****************************!*\
  !*** ./src/app-defaults.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// @ts-check

/**
 * @module app-defaults
 * @desc Default values for app. Contains `IAppDefaults` interface and `DEFAULTS` object literal.
 * @author TJ
 */

/**
 * @name IAppDefaults
 * @desc JSDoc type definition.
 * @author TJ
 * @typedef {Object} IAppDefaults
 * @prop {number} c - padding between petals in pixels.
 * @prop {number} canvasWidth - width of canvas in pixels.
 * @prop {number} canvasHeight - height of canvas in pixels.
 * @prop {string} clearColor - CSS color to fill background with.
 * @prop {boolean} clearEveryFrame - Clear screen every frame?
 * @prop {number} deltaC - `c` delta per frame.
 * @prop {number} deltaDivergence - `divergence` delta per frame.
 * @prop {number} deltaPetalSize - `petalSize` delta per frame.
 * @prop {number} deltaRotation - `rotation` delta per frame.
 * @prop {number} divergence - degrees of rotation per frame.
 * @prop {number} fps - target frames-per-second of animation loop.
 * @prop {number} maxFlowers - maximum number of flowers to render.
 * @prop {number} maxPetals - maximum number of petals each flower will contain.
 * @prop {number} minFlowerOpacity - minimum opacity of randomly generated flowers.
 * @prop {number} petalSize - radius of petals in pixels.
 * @prop {String} petalStyle
 * @prop {number[]} randomDivergenceValues - an array of divergence values.
 * @prop {number} randomFlowerDelay - time between randomly spawned flowers in milliseconds.
 * @prop {number} randomFlowerPadding - offset in pixels of randomly spawned flowers.
 * @prop {boolean} randomFlowers 
 */

/** 
 * @name DEFAULTS
 * @type {IAppDefaults}
 * @desc The app's default values.
 * @static
 */
var DEFAULTS = Object.freeze({
  c: 5,
  canvasWidth: 800,
  canvasHeight: 600,
  clearColor: "#000",
  clearEveryFrame: true,
  deltaC: .005,
  deltaDivergence: 0,
  deltaPetalSize: .01,
  deltaRotation: .01,
  divergence: 137.5,
  fps: 60,
  maxFlowers: 10,
  maxPetals: 1200,
  minFlowerOpacity: .5,
  petalSize: 2,
  petalStyle: "Disc",
  randomDivergenceValues: [30, 60, 72, 90, 120, 137.1, 137.3, 137.5, 137.7, 137.9, 139, 140],
  randomFlowerDelay: 5000,
  randomFlowerPadding: 100,
  randomFlowers: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DEFAULTS);

/***/ }),

/***/ "./src/app-petal-functions.js":
/*!************************************!*\
  !*** ./src/app-petal-functions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPetalDrawFunction: () => (/* binding */ getPetalDrawFunction),
/* harmony export */   randomPetalDrawFunction: () => (/* binding */ randomPetalDrawFunction)
/* harmony export */ });
/* harmony import */ var _types_FlowerPetalDrawFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/FlowerPetalDrawFunc.js */ "./src/types/FlowerPetalDrawFunc.js");
/* harmony import */ var _types_FlowerPetalDrawFunc_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types_FlowerPetalDrawFunc_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils.js */ "./src/utils/utils.js");
// @ts-check
/* eslint max-params: 0 */




/**
 * @module petal-functions
 * @desc Functions that are used to draw flower petals. These functions conform to the FlowerPetalDrawFunc interface.
 * @author TJ
 */

/**
 * @name petalFillDisc
 * @function {FlowerPetalDrawFunc}
 * @prop {CanvasRenderingContext2D} ctx - drawing context where the petal will be rendered.
 * @prop {number} x - 'x' of petal.
 * @prop {number} y - 'y' of petal.
 * @prop {number} radius - 1/2 width of each petal in pixels.
 * @prop {string} color - CSS color of petal.
 */
var petalFillDisc = function petalFillDisc(ctx, x, y, radius, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

/**
 * @name petalFillOval
 * @function {FlowerPetalDrawFunc}
 * @desc fills a squashed circle in the provided <kbd>ctx</kbd>. The circle is centered on  <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {string} color 
 */
var petalFillOval = function petalFillOval(ctx, x, y, radius, color) {
  ctx.save();
  ctx.scale(1.1, .9);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

/**
 * @name petalStrokeCircle
 * @function {FlowerPetalDrawFunc}
 * @desc strokes a circle in the provided <kbd>ctx</kbd>. The circle is centered on  <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {string} color 
 */
var petalStrokeCircle = function petalStrokeCircle(ctx, x, y, radius, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

/**
 * @name petalFillSquare
 * @function {FlowerPetalDrawFunc}
 * @desc fills a square in the provided <kbd>ctx</kbd>. The circle is centered on  <kbd>x,y</kbd>
 * @param {*} ctx 
 * @param {*} x 
 * @param {*} y 
 * @param {*} radius 
 * @param {*} color 
 */
var petalFillSquare = function petalFillSquare(ctx, x, y, radius, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x - radius / 2, y - radius / 2, radius, radius);
  ctx.restore();
};

/**
 * @name IPetalFunctionList
 * @desc JSDoc type definition that enumerates valid property names
 * @author TJ
 * @typedef {Object} IPetalFunctionList
 * @property {FlowerPetalDrawFunc} Circle
 * @property {FlowerPetalDrawFunc} Disc
 * @property {FlowerPetalDrawFunc} Oval
 * @property {FlowerPetalDrawFunc} Square
 */

/**
 * @type {IPetalFunctionList}
 */
var petalFunctionList = {
  Circle: petalStrokeCircle,
  Disc: petalFillDisc,
  Oval: petalFillOval,
  Square: petalFillSquare
};

/**
 * @function getPetalDrawFunction
 * @param {string} funcName 
 * @returns {FlowerPetalDrawFunc}
 */
var getPetalDrawFunction = function getPetalDrawFunction(funcName) {
  return petalFunctionList[funcName];
};

/**
 * @name weightedPetalFunctions
 * @type {FlowerPetalDrawFunc[]}
 */
var weightedPetalFunctions = [petalFillDisc, petalFillDisc, petalFillDisc, petalStrokeCircle, petalFillSquare, petalFillOval];

/**
 * @function randomPetalDrawFunction
 * @returns {FlowerPetalDrawFunc}
 */
var randomPetalDrawFunction = function randomPetalDrawFunction() {
  return (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.randomArrayElement)(weightedPetalFunctions);
};

/***/ }),

/***/ "./src/app-state.js":
/*!**************************!*\
  !*** ./src/app-state.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-defaults */ "./src/app-defaults.js");
/* harmony import */ var _classes_RotatingFlower_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/RotatingFlower.js */ "./src/classes/RotatingFlower.js");
// @ts-check




/**
 * @module app-state
 * @description Current state variables of app. Contains `IAppState` interface and `state` object literal.
 * @author TJ
 */

/**
 * @name IAppState
 * @desc JSDoc type definition.
 * @author TJ
 * @typedef {Object} IAppState
 * @prop {boolean} clearEveryFrame - Clear screen every frame? Toggled by checkbox.
 * @prop {number} c - Current value of `c`. Set by &lt;select>.
 * @prop {number} deltaC - Current value of `deltaC`. Set by &lt;select>.
 * @prop {number} deltaDivergence - Current value of `deltaDivergence`. Set by &lt;select>.
 * @prop {number} deltaPetalSize - Current value of `deltaPetalSize`. Set by &lt;select>.
 * @prop {number} divergence - Current value of `divergence`. Set by &lt;select>.
 * @prop {RotatingFlower[]} flowerList - Array of current flowers to draw.
 * @prop {number} petalSize - Current `petalSize`. Set by &lt;select>.
 * @prop {string} petalStyle - Current `petalStyle`. Set by &lt;select>.
 * @prop {boolean} randomFlowers - Periodically show random flowers? Toggled by checkbox.
 */

/**
 * @name state
 * @type {IAppState}
 * @static
 * @desc Mutable app state variables that can change over time. Most of these could be saved to localStorage.
 */
var state = Object.seal({
  clearEveryFrame: _app_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].clearEveryFrame,
  c: _app_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].c,
  deltaC: _app_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].deltaC,
  deltaDivergence: _app_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].deltaDivergence,
  deltaPetalSize: _app_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].deltaPetalSize,
  divergence: _app_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].divergence,
  petalSize: _app_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].petalSize,
  petalStyle: _app_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].petalStyle,
  flowerList: [],
  randomFlowers: _app_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].randomFlowers
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ }),

/***/ "./src/classes/Flower.js":
/*!*******************************!*\
  !*** ./src/classes/Flower.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/FlowerParams.js */ "./src/types/FlowerParams.js");
/* harmony import */ var _types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
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
      var a = this.n * (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.dtr)(this.divergence);
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

/***/ "./src/classes/RotatingFlower.js":
/*!***************************************!*\
  !*** ./src/classes/RotatingFlower.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/FlowerParams.js */ "./src/types/FlowerParams.js");
/* harmony import */ var _types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types_FlowerParams_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_FlowerPetal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/FlowerPetal.js */ "./src/types/FlowerPetal.js");
/* harmony import */ var _types_FlowerPetal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types_FlowerPetal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flower_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flower.js */ "./src/classes/Flower.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    /** @type {FlowerPetal[]}*/
    _this._petals = [];

    // Optional properties from FlowerParams, which are required for RotatingFlower
    _this.alpha = params.alpha || 1;
    _this.colorFunction = params.colorFunction || function () {}; // TODO - need a default color function here
    //this.drawPetalFunction = ... // TODO - need assignment and default value
    _this.deltaC = params.deltaC || 0;
    _this.deltaDivergence = params.deltaDivergence || 0;
    _this.deltaPetalSize = params.deltaPetalSize || 0;
    _this.deltaRotation = params.deltaRotation || 0;
    _this.rotation = params.rotation || 0;
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
      var a = this.n * (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.dtr)(this.divergence);
      var r = this.c * Math.sqrt(this.n);
      var x = r * Math.cos(a); // + this.centerX;
      var y = r * Math.sin(a); //+ this.centerY;
      //const color = `hsl(${this.n/5 % 361},100%,50%)`; // 4

      var color = this.colorFunction(this.n, this.divergence);
      // If there's room, create a new petal
      if (this._petals.length < RotatingFlower.maxPetals) {
        this._petals.push({
          x: x,
          y: y,
          color: color,
          petalSize: this.petalSize
        });
      }

      // Draw all petals
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.translate(this.centerX, this.centerY);
      ctx.rotate(this.rotation);
      var _iterator = _createForOfIteratorHelper(this._petals),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          // let aDegrees = (n * divergence) % 256; // 2
          // let color = `rgb(${aDegrees},0,255)`;
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
/**
 * @type {number}
 */
_defineProperty(RotatingFlower, "maxPetals", 50);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RotatingFlower);

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
 * @prop {number} c - spacing between petals.
 * @prop {number} centerX - center `x` of Flower around which petals are drawn.
 * @prop {number} centerY - center `y` of Flower around which petals are drawn.
 * @prop {number} divergence - rotation (in radians) between successive petals.
 * @prop {number} petalSize - width of each petal in pixels.
 * @prop {Function} drawPetalFunction - function that draws petals.
 * @prop {number} [alpha=1] - opacity of entire flower
 * @prop {Function} [colorFunction=0] - function used to determine color of petal.
 * @prop {number} [deltaRotation=0] - `rotation` delta per frame.
 * @prop {number} [deltaC=0] - `c` delta per frame.
 * @prop {number} [deltaDivergence=0] - `divergence` delta per frame.
 * @prop {number} [deltaPetalSize=0] - `petalSize` delta per frame.
 * @prop {number} [rotation=0] - rotation of flower in radians.
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

/***/ "./src/types/FlowerPetalDrawFunc.js":
/*!******************************************!*\
  !*** ./src/types/FlowerPetalDrawFunc.js ***!
  \******************************************/
/***/ (() => {

// @ts-check
/**
 * @name FlowerPetalDrawFunc
 * @desc JSDoc type definition
 * @author TJ
 * @typedef {Function} FlowerPetalDrawFunc
 * @prop {CanvasRenderingContext2D} ctx - drawing context where the petal will be rendered.
 * @prop {number} x - 'x' of petal.
 * @prop {number} y - 'y' of petal.
 * @prop {number} radius - 1/2 width of each petal in pixels.
 * @prop {string} color - CSS color of petal.
 */

/***/ }),

/***/ "./src/types/Point.js":
/*!****************************!*\
  !*** ./src/types/Point.js ***!
  \****************************/
/***/ (() => {

// @ts-check
/**
 * @name Point
 * @desc JSDoc type definition.
 * @author TJ
 * @typedef {Object} Point
 * @property {number} x 
 * @property {number} y
 */

/***/ }),

/***/ "./src/utils/utils-canvas.js":
/*!***********************************!*\
  !*** ./src/utils/utils-canvas.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillCircle: () => (/* binding */ fillCircle),
/* harmony export */   fillRect: () => (/* binding */ fillRect)
/* harmony export */ });
// @ts-check
/* eslint max-params: 0 */

/**
 * @module utils-canvas
 * @desc Utility functions
 * @author TJ
 */

/**
 * @function fillCircle
 * @static
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
 * @function fillRect
 * @static
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

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertNonNull: () => (/* binding */ assertNonNull),
/* harmony export */   dtr: () => (/* binding */ dtr),
/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber),
/* harmony export */   getXY: () => (/* binding */ getXY),
/* harmony export */   goFullScreen: () => (/* binding */ goFullScreen),
/* harmony export */   randomArrayElement: () => (/* binding */ randomArrayElement)
/* harmony export */ });
/* harmony import */ var _types_Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/Point.js */ "./src/types/Point.js");
/* harmony import */ var _types_Point_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types_Point_js__WEBPACK_IMPORTED_MODULE_0__);
// @ts-check
/* eslint max-params: 0 */



/**
 * @module utils
 * @desc Utility functions
 * @author TJ
 */

/**
* @function assertNonNull
* @static
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
 * @function dtr
 * @static
 * @desc Converts degree values to radians.
 * @param {number} degrees - The value in degrees.
 * @returns {number} The value in radians.
 */
var dtr = function dtr(degrees) {
  return degrees * (Math.PI / 180);
};

/**
 * @function randomArrayElement
 * @static
 * @param {any[]} arr 
 * @returns {any}
 */
var randomArrayElement = function randomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * @function getRandomNumber
 * @static
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
var getRandomNumber = function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
};

/**
 * @function getXY
 * @static
 * @param {!MouseEvent} e
 * @returns {Point}
 */
var getXY = function getXY(e) {
  var x = e.offsetX;
  var y = e.offsetY;
  console.log(x, y);
  return {
    x: x,
    y: y
  };
};

/**
 * @function goFullScreen
 * @static
 * @param {HTMLElement} element 
 */
var goFullScreen = function goFullScreen(element) {
  return element.requestFullscreen();
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
/*!*************************!*\
  !*** ./src/app-main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-defaults.js */ "./src/app-defaults.js");
/* harmony import */ var _app_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-state.js */ "./src/app-state.js");
/* harmony import */ var _classes_RotatingFlower_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/RotatingFlower.js */ "./src/classes/RotatingFlower.js");
/* harmony import */ var _app_petal_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-petal-functions.js */ "./src/app-petal-functions.js");
/* harmony import */ var _app_color_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-color-functions.js */ "./src/app-color-functions.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _utils_utils_canvas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/utils-canvas.js */ "./src/utils/utils-canvas.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//@ts-check
/*global window, document*/

/**
 * @module main
 * @description Main module of the application.
 * @author TJ
 */

/* IMPORTS */








/* CONSTANTS */

/**
 * @name canvas
 * @desc Reference to `canvas` element.
 * @type {!HTMLCanvasElement} 
 */
var canvas = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#canvas"));

/**
 * @name ctx
 * @desc Reference to drawing context of `canvas`.
 * @type {!CanvasRenderingContext2D}
 */
var ctx = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(canvas.getContext("2d"));

/* METHODS */

/**
 * @name addFlowerToList
 * @desc Adds a new flower to the end of the list.
 * @param {RotatingFlower} flower
 */
var addFlowerToList = function addFlowerToList(flower) {
  // if too many flowers, remove oldest one
  if (_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.length > _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].maxFlowers - 1) {
    _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.shift();
  }
  // add new flower to end of list
  _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.push(flower);
};

/**
 * @name createFlowerWithCurrentUISettings
 * @desc Instantiates a new flower using current UI values.
 * @param {number} x 
 * @param {number} y 
 * @returns {RotatingFlower}
 */
var createFlowerWithCurrentUISettings = function createFlowerWithCurrentUISettings(x, y) {
  // params for new RotatingFlower
  /** @type {FlowerParams} */
  var params = {
    c: _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].c,
    centerX: x,
    centerY: y,
    colorFunction: _app_color_functions_js__WEBPACK_IMPORTED_MODULE_4__.petalColorFunc4,
    deltaC: _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].deltaC,
    deltaDivergence: _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].deltaDivergence,
    deltaPetalSize: _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].deltaPetalSize,
    deltaRotation: _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].deltaRotation,
    divergence: _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].divergence,
    drawPetalFunction: (0,_app_petal_functions_js__WEBPACK_IMPORTED_MODULE_3__.getPetalDrawFunction)(_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].petalStyle),
    petalSize: _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].petalSize
  };
  return new _classes_RotatingFlower_js__WEBPACK_IMPORTED_MODULE_2__["default"](params);
};

/**
 * @name createRandomFlower
 * @desc Instantiates a new flower using random values.
 * @param {number} x - the `x` position of the new flower
 * @param {number} y - the `y` position of the new flower
 * @returns {RotatingFlower}
 */
var createRandomFlower = function createRandomFlower(x, y) {
  /** @type {FlowerParams} */
  var params = {
    alpha: _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].minFlowerOpacity + Math.random() / 2,
    c: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getRandomNumber)(2, 6),
    centerX: x,
    centerY: y,
    colorFunction: (0,_app_color_functions_js__WEBPACK_IMPORTED_MODULE_4__.randomPetalColorFunction)(),
    deltaC: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getRandomNumber)(.002, .01),
    deltaDivergence: Math.random() < 0 ? 0 : (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getRandomNumber)(-.005, .005),
    deltaPetalSize: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getRandomNumber)(.01, .04),
    deltaRotation: Math.random() < .5 ? (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getRandomNumber)(-.002, -.02) : (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getRandomNumber)(.002, .02),
    divergence: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.randomArrayElement)(_app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomDivergenceValues),
    drawPetalFunction: (0,_app_petal_functions_js__WEBPACK_IMPORTED_MODULE_3__.randomPetalDrawFunction)(),
    petalSize: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getRandomNumber)(1, 5)
  };
  return new _classes_RotatingFlower_js__WEBPACK_IMPORTED_MODULE_2__["default"](params);
};

/**
 * @name initFlowerSprites
 * @desc instantiates initial flower using defaults and adds it to flowers list.
 */
var initFlowerSprites = function initFlowerSprites() {
  // clear list
  _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.length = 0;
  // add flower to list
  addFlowerToList(createFlowerWithCurrentUISettings(_app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasWidth / 2, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasHeight / 2));
};

/**
 * Called every frame.
 */
var loop = function loop() {
  window.setTimeout(loop, 1000 / _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].fps);
  if (_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearEveryFrame) {
    (0,_utils_utils_canvas_js__WEBPACK_IMPORTED_MODULE_6__.fillRect)(ctx, 0, 0, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasWidth, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasHeight, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearColor);
  }
  var _iterator = _createForOfIteratorHelper(_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var f = _step.value;
      f.update(ctx);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/**
 * Handles app initialization.
 */
var init = function init() {
  // I. Setup canvas & drawing context
  canvas.width = _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasWidth;
  canvas.height = _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasHeight;
  ctx.fillRect(0, 0, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasWidth, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasHeight);

  // II. setup UI

  // Buttons
  /**  @type {!HTMLButtonElement}  */
  var btnRestart = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#btn-restart"));
  btnRestart.onclick = function () {
    (0,_utils_utils_canvas_js__WEBPACK_IMPORTED_MODULE_6__.fillRect)(ctx, 0, 0, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasWidth, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasHeight, "black");
    initFlowerSprites();
  };

  /**  @type {!HTMLButtonElement}  */
  var btnReset = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#btn-reset"));
  btnReset.onclick = function () {
    return window.location.reload();
  };

  /**  @type {!HTMLButtonElement}  */
  var btnFS = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#btn-fs"));
  btnFS.onclick = function () {
    return (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.goFullScreen)(canvas);
  };

  // Inputs
  /** @type {!HTMLSelectElement} */
  var ctrlDivergence = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#ctrl-divergence"));
  ctrlDivergence.value = "".concat(_app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].divergence);
  ctrlDivergence.onchange = function () {
    var _state$flowerList;
    _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].divergence = +ctrlDivergence.value;
    // change most recent flower's divergence value
    ((_state$flowerList = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList) === null || _state$flowerList === void 0 ? void 0 : _state$flowerList[_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.length - 1]).divergence = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].divergence;
  };

  /** @type {!HTMLSelectElement} */
  var ctrlDeltaDivergence = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#ctrl-delta-divergence"));
  ctrlDeltaDivergence.value = "".concat(_app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].deltaDivergence);
  ctrlDeltaDivergence.onchange = function () {
    var _state$flowerList2;
    _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].deltaDivergence = +ctrlDeltaDivergence.value;
    // change most recent flower's divergence value
    ((_state$flowerList2 = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList) === null || _state$flowerList2 === void 0 ? void 0 : _state$flowerList2[_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.length - 1]).deltaDivergence = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].deltaDivergence;
  };

  /** @type {!HTMLSelectElement} */
  var ctrlPetalSize = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#ctrl-petal-size"));
  ctrlPetalSize.value = "".concat(_app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].petalSize);
  ctrlPetalSize.onchange = function () {
    var _state$flowerList3;
    _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].petalSize = +ctrlPetalSize.value;
    // change most recent flower's petalSize value
    ((_state$flowerList3 = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList) === null || _state$flowerList3 === void 0 ? void 0 : _state$flowerList3[_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.length - 1]).petalSize = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].petalSize;
  };

  /** @type {!HTMLSelectElement} */
  var ctrlDeltaPetalSize = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#ctrl-delta-petal-size"));
  ctrlDeltaPetalSize.value = ".01"; //`${DEFAULTS.deltaPetalSize}`;
  ctrlDeltaPetalSize.onchange = function () {
    var _state$flowerList4;
    _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].deltaPetalSize = +ctrlDeltaPetalSize.value;
    // change most recent flower's petalSize value
    ((_state$flowerList4 = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList) === null || _state$flowerList4 === void 0 ? void 0 : _state$flowerList4[_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.length - 1]).deltaPetalSize = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].deltaPetalSize;
  };

  /** @type {!HTMLSelectElement} */
  var ctrlC = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#ctrl-c"));
  ctrlC.value = "".concat(_app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].c);
  ctrlC.onchange = function () {
    var _state$flowerList5;
    _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].c = +ctrlC.value;
    // change most recent flower's c value
    ((_state$flowerList5 = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList) === null || _state$flowerList5 === void 0 ? void 0 : _state$flowerList5[_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.length - 1]).c = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].c;
  };

  /** @type {!HTMLSelectElement} */
  var ctrlDeltaC = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#ctrl-delta-c"));
  ctrlDeltaC.value = ".005";
  //ctrlDeltaC.value = `${DEFAULTS.deltaC}`; // FIXME: does not work, had to hard-code above
  ctrlDeltaC.onchange = function () {
    var _state$flowerList6;
    _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].deltaC = +ctrlDeltaC.value;
    // change most recent flower's deltaC value
    ((_state$flowerList6 = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList) === null || _state$flowerList6 === void 0 ? void 0 : _state$flowerList6[_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.length - 1]).deltaC = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].deltaC;
  };

  /** @type {!HTMLSelectElement} */
  var ctrlPetalStyle = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#ctrl-petal-style"));
  //ctrlPetalStyle.selectedIndex = 1;
  ctrlPetalStyle.value = "".concat(_app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].petalStyle); // FIXME: does not work, had to hard-code above
  ctrlPetalStyle.onchange = function () {
    var _state$flowerList7;
    _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].petalStyle = ctrlPetalStyle.value;
    // change most recent flower's c value
    ((_state$flowerList7 = _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList) === null || _state$flowerList7 === void 0 ? void 0 : _state$flowerList7[_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].flowerList.length - 1]).drawPetalFunction = (0,_app_petal_functions_js__WEBPACK_IMPORTED_MODULE_3__.getPetalDrawFunction)(_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].petalStyle);
  };

  /** @type {!HTMLInputElement} */
  var cbClearEveryFrame = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#cb-clear-every-frame"));
  cbClearEveryFrame.onchange = function () {
    _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearEveryFrame = cbClearEveryFrame.checked;
  };

  /** @type {!HTMLInputElement} */
  var cbRandomFlowers = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.assertNonNull)(document.querySelector("#cb-random-flowers"));
  cbRandomFlowers.checked = _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomFlowers ? true : false;
  cbRandomFlowers.onchange = function () {
    return _app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomFlowers = cbRandomFlowers.checked;
  };

  // III. Set up flower sprites
  _classes_RotatingFlower_js__WEBPACK_IMPORTED_MODULE_2__["default"].maxPetals = _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].maxPetals;

  // Interval to create random flowers
  setInterval(function () {
    if (_app_state_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomFlowers) {
      var padding = _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomFlowerPadding;
      var x = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getRandomNumber)(padding, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasWidth - padding);
      var y = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getRandomNumber)(padding, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].canvasHeight - padding);
      addFlowerToList(createRandomFlower(x, y));
    }
  }, _app_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomFlowerDelay);

  // initialize starting flower
  initFlowerSprites();

  // enable canvas clicking
  canvas.onclick = function (e) {
    /** @type {Point} */
    var loc = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.getXY)(e);
    addFlowerToList(createFlowerWithCurrentUISettings(loc.x, loc.y));
  };

  // IV. start up app
  loop();
};
init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map