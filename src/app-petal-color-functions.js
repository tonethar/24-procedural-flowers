// @ts-check

import { randomArrayElement } from "./utils/utils";

/**
 * @module app-color-functions
 * @desc Functions for determining color of petal.
 * @author TJ
 */

/* PETAL COLOR FUNCTION DEFINITIONS */
/**
 * @name petalColorFunc1
 * @desc RGB red value increases with age (`n`) of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
const petalColorFunc1 = (n, divergence) => `rgb(${n % 256},${(n % 256)/2},${128 - (n % 256)/2})`; 

/**
 * @name petalColorFunc2
 * @desc RGB `red` value increases with accumulated rotation of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
const petalColorFunc2 = (n, divergence) => {
  const aDegrees = (n * divergence) % 256;
  return `rgb(${aDegrees},0,255)`;
};

/**
 * @name petalColorFunc3
 * @desc HSL `hue` value increases with accumulated rotation of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
const petalColorFunc3 = (n, divergence) => {
  const aDegrees = (n * divergence) % 361;
  return `hsl(${aDegrees/2},100%,${80 - aDegrees%30}%)`;
};

/**
 * @name petalColorFunc4
 * @desc HSL `hue` value increases with age (`n`) of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
const petalColorFunc4 = (n, divergence) => `hsl(${n/5 % 361},100%,50%)`;

/**
 * @name petalColorFunc5
 * @desc HSL `hue` value increases with age (`n`) of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
const petalColorFunc5 = (n, divergence) => `hsl(${360 - (n/5 % 361)},100%,50%)`;

/* PUBLIC */
/**
 * @type {IPetalColorFuncList}
 */
const colorFunctions = {
  func1: petalColorFunc1,
  func2: petalColorFunc2,
  func3: petalColorFunc3,
  func4: petalColorFunc4,
  func5: petalColorFunc5,
};

/**
 * @function getPetalColorFunction
 * @desc Public interface for color functions
 * @param {string} funcName 
 * @returns {IFlowerPetalDrawFunc}
 */
export const getPetalColorFunction = funcName => colorFunctions[funcName];

/**
 * @type {IFlowerPetalColorFunc[]}
 */
const weightedPetalColorFunctions = [  petalColorFunc3, petalColorFunc4, petalColorFunc4, petalColorFunc5 ];

/**
 * @function randomPetalColorFunction
 * @desc Returns a random petal color function.
 * @returns {IFlowerPetalColorFunc}
 */
export const randomPetalColorFunction = () => randomArrayElement(weightedPetalColorFunctions);