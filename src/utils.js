// @ts-check

/**
 * @module utils
 * @description Utility functions
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
 const assertNonNull = thing => {
	return /** @type {Exclude<T, null>} */ (thing);
}

/**
 * @static dtr
 * @desc Converts degree values to radians.
 * @param {number} degrees - The value in degrees.
 * @returns {number} The value in radians.
 */
const dtr = degrees => degrees * (Math.PI/180);

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
const fillRect = (ctx, x, y, width, height, color) => {
  ctx.save();
  ctx.fillStyle=color;
  ctx.fillRect(x, y, width, height);
  ctx.restore();
};

/**
 * @static fillCircle
 * @desc Fills a circle in the provided <kbd>ctx</kbd>. The circle is centered on  <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {string} color 
 */
const fillCircle = (ctx, x, y, radius, color) => {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

export { assertNonNull, dtr, fillRect, fillCircle };
