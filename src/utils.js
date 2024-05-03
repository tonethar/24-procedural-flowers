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
 export const assertNonNull = thing => {
	return /** @type {Exclude<T, null>} */ (thing);
}

/**
 * @function dtr
 * @static
 * @desc Converts degree values to radians.
 * @param {number} degrees - The value in degrees.
 * @returns {number} The value in radians.
 */
export const dtr = degrees => degrees * (Math.PI/180);

/**
 * @function randomArrayElement
 * @static
 * @param {any[]} arr 
 * @returns {any}
 */
export const randomArrayElement = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * @function getRandomNumber
 * @static
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
