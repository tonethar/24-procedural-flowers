// @ts-check
/* eslint max-params: 0 */

import "./types/FlowerPetalDrawFunc.js";

/**
 * @module flower-helpers
 * @desc Utility functions
 * @author TJ
 */

/**
 * @function petalFillCircle
 * @static
 * @desc Fills a circle in the provided <kbd>ctx</kbd>. The circle is centered on  <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {string} color 
 */
export const petalFillCircle = (ctx, x, y, radius, color) => {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

/**
 * @function petalStrokeCircle
 * @desc strokes a circle in the provided <kbd>ctx</kbd>. The circle is centered on  <kbd>x,y</kbd>
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {string} color 
 */

export const petalStrokeCircle = (ctx, x, y, radius, color) => {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

/**
 * 
 * @param {*} ctx 
 * @param {*} x 
 * @param {*} y 
 * @param {*} radius 
 * @param {*} color 
 */
export const petalFillSquare = (ctx, x, y, radius, color) => {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x - radius/2, y - radius/2, radius, radius);
  ctx.restore();
};