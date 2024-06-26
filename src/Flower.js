// @ts-check
import { dtr } from "./utils.js";

/** @class 
 * Flower represents a procedurally drawn flower. 
 * @auth TJ
 * */
class Flower{
  /**
   * Creates an instance of Flower.
   * 
   * @param {number} centerX - `x` around which petals are drawn.
   * @param {number} centerY - `y` around which petals are drawn.
   * @param {number} divergence - rotation (in radians) between successive petals.
   * @param {number} c - spacing between petals.
   * @param {number} petalSize - width of each petal in pixels.
   * @param {Function} drawPetalFunction - function that draws petals.
   * 
   * @property {number} n - current petal generation.
   * @property {number} centerX - `x` around which petals are drawn.
   * @property {number} centerY - `y` around which petals are drawn.
   * @property {number} divergence - rotation (in radians) between successive petals.
   * @property {number} c - spacing between petals.
   * @property {number} petalSize - width of each petal in pixels.
   * @property {Function} drawPetalFunction - function that draws petals.
   */
  constructor(centerX, centerY, divergence, c, petalSize, drawPetalFunction){
    //Object.assign(this, { centerX, centerY, divergence, c, petalSize, drawPetalFunction }); //:-(
    this.n = 0;
    this.centerX = centerX;
    this.centerY = centerY;
    this.divergence = divergence;
    this.petalSize = petalSize;
    this.drawPetalFunction = drawPetalFunction;
    this.c = c;
  }

  /**
   * Draws the next petal.
   * 
   * @param {CanvasRenderingContext2D} ctx - drawing context where the flower will be rendered.
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
  }
};

export default Flower;
