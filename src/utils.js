/**
 * Converts degree values to radians.
 * 
 * @param {number} degrees 
 * @returns {number} The value in radians
 */
const dtr = degrees => degrees * (Math.PI/180);

/**
 * Fills a rectangle.
 * 
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
  ctx.fillRect(x,y,width,height);
  ctx.restore();
};

/**
 * Fills a circle
 * 
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
  ctx.arc(x,y,radius,0,Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

export { dtr, fillRect, fillCircle };
