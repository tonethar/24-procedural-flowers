// @ts-check

import { randomArrayElement } from "./utils/utils";

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
export const petalColorFunc1 = (n, divergence) => `rgb(${n % 256},${(n % 256)/2},${128 - (n % 256)/2})`; 

/**
 * @name petalColorFunc2
 * @desc RGB `red` value increases with accumulated rotation of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
export const petalColorFunc2 = (n, divergence) => {
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
export const petalColorFunc3 = (n, divergence) => {
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
export const petalColorFunc4 = (n, divergence) => `hsl(${n/5 % 361},100%,50%)`;

/**
 * @name petalColorFunc5
 * @desc HSL `hue` value increases with age (`n`) of petal.
 * @function {FlowerPetalColorFunc}
 * @param {number} n 
 * @param {number} divergence 
 * @returns {string}
 */
export const petalColorFunc5 = (n, divergence) => `hsl(${360 - (n/5 % 361)},100%,50%)`;

/**
 * @name weightedPetalColorFunctions
 * @type {FlowerPetalColorFunc[]}
 */
const weightedPetalColorFunctions = [  petalColorFunc3, petalColorFunc4, petalColorFunc4, petalColorFunc5 ];

/**
 * @function randomPetalColorFunction
 * @returns {FlowerPetalColorFunc}
 */
export const randomPetalColorFunction = () => randomArrayElement(weightedPetalColorFunctions);