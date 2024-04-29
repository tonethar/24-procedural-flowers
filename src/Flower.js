import { dtr } from "./utils.js";

/** @class 
 * Flower represents a procedurally drawn flower. 
 * @auth TJ
 * */
class Flower{
  /**
   * Creates an instance of Flower.
   * 
   * @param {number} centerX - the x around which petals are drawn.
   * @param {number} centerY - the y around which petals are drawn.
   * @param {number} divergence - the rotation (in radians) between successive petals.
   * @param {number} c - the spacing between petals.
   * @param {number} petalSize - the width of each petal in pixels.
   * @param {Function} drawPetalFunction - draws petal
   * 
   * @property {number} n - the current petal generation.
   * 
   * @returns {Flower} The new Flower Object.
   */
  constructor(centerX, centerY, divergence, c, petalSize, drawPetalFunction){
    Object.assign(this, { centerX, centerY, divergence, c, petalSize, drawPetalFunction });
    this.n = 0;
  }

  /**
   * Draws the next petal.
   * 
   * @param {CanvasRenderingContext2D} ctx 
   */
  update(ctx) {
    const a = this.n * dtr(this.divergence);
    const r = this.c * Math.sqrt(this.n);
    const x = r * Math.cos(a) + this.centerX;
    const y = r * Math.sin(a) + this.centerY;
    const color = `hsl(${this.n/5 % 361},100%,50%)`; // 4
    this.drawPetalFunction(ctx, x, y, this.petalSize, color);
    this.n++;
    this.c+=.005;
    this.petalSize +=.01;
  };
};

export default Flower;
