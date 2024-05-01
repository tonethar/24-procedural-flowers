// @ts-check

/* IMPORTS */
import "./types/FlowerParams.js";
import "./types/FlowerPetal.js";
import Flower from "./Flower.js";
import { dtr } from "./utils.js";

/** 
 * @class RotatingFlower
 * @extends Flower
 * @prop {FlowerPetal[]} _petals
 * @desc Represents a pre-rendered rotating flower.
 * @author TJ
 * @private
 */
class RotatingFlower extends Flower{
  /**
   * @desc Creates an instance of RotatingFlower
   * @param {FlowerParams} params 
   */
  constructor(params){
    super(params);
    /**
     * @type {FlowerPetal[]}
     */
    this._petals = [];

    // Optional properties from FlowerParams, which are required for RotatingFlower
    this.rotation = params.rotation || 0;
    this.deltaC = params.deltaC || 0;
    this.deltaDivergence = params.deltaDivergence || 0;
    this.deltaPetalSize = params.deltaPetalSize || 0;
    this.deltaRotation = params.deltaRotation || 0;
  }

  /**
   * Draws the next petal.
   * @param {CanvasRenderingContext2D} ctx - drawing context where the flower will be rendered.
   */
  update(ctx) {
    const a = this.n * dtr(this.divergence);
    const r = this.c * Math.sqrt(this.n);
    const x = r * Math.cos(a);// + this.centerX;
    const y = r * Math.sin(a); //+ this.centerY;
    const color = `hsl(${this.n/5 % 361},100%,50%)`; // 4

    this._petals.push({x, y, color, petalSize: this.petalSize});

    ctx.save()
    ctx.translate(this.centerX, this.centerY);
    ctx.rotate(this.rotation);
    for(let p of this._petals){
      this.drawPetalFunction(ctx, p.x, p.y, this.petalSize, p.color);
    }
    ctx.restore();

    this.n++;
    this.c += this.deltaC;
    this.divergence += this.deltaDivergence;
    this.petalSize += this.deltaPetalSize;
    this.rotation += this.deltaRotation;
  
  }
}

export default RotatingFlower;
