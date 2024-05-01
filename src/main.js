// @ts-check
/*global window, document*/

/**
 * @module main
 * @description This is the main module of the application
 * @author TJ
 */

import Flower from "./Flower.js";
import RotatingFlower from "./RotatingFlower.js";
import { assertNonNull, fillCircle, fillRect } from "./utils.js";

/**
 * Width of `canvas`
 * @type {number}
 */
const canvasWidth = 640;

/**
 * Height of `canvas`
 * @type {number}
 */
const canvasHeight = 480;

/**
 * Default divergence value.
 * @type {number}
 */
const divergence = 137.5;

/**
 * Default padding value.
 * @type {number}
 */
const c = 4;

/**
 * Default petalSize value.
 * @type {number}
 */
const petalSize = 2;

/**
 * Default frames-per-second value.
 * @type {number}
 */
const fps = 60;

/**
 * @type {boolean}
 */
let clearScreenEveryFrame = false;

/**
 * The primary flower being drawn
 * @type Flower
 */
//const mainFlower = new Flower( canvasWidth/2, canvasHeight/2, divergence, c, petalSize, fillCircle );
//const mainFlower = new Flower( {centerX: canvasWidth/2, centerY:canvasHeight/2, divergence, c, petalSize, drawPetalFunction: fillCircle});
const mainFlower = new RotatingFlower( {centerX: canvasWidth/2, centerY:canvasHeight/2, divergence, c, petalSize, drawPetalFunction: fillCircle});
// @ts-ignore
mainFlower.deltaRotation = .01; // FIXME: JSDoc error 

const flower2 = new Flower( {centerX: canvasWidth/2, centerY:canvasHeight/2, divergence, c, petalSize, drawPetalFunction: fillCircle});


/**
 * Reference to `canvas` element
 * @type {!HTMLCanvasElement}
 */
let canvas;

/**
 * Reference to drawing context of `canvas`
 * @type {!CanvasRenderingContext2D}
 */
let ctx;

/**
 * Called every frame.
 */
const loop = () => {
  window.setTimeout(loop, 1000/fps);
  if(clearScreenEveryFrame){
    fillRect(ctx, 0, 0, canvasWidth, canvasHeight, "black");
  }
  mainFlower.update(ctx);
  //flower2.update(ctx);
};

/**
 * Handles initialization.
 */
const init = () => {
  // I. init variables
  canvas = assertNonNull(document.querySelector("#canvas"));
  ctx = assertNonNull(canvas.getContext("2d"));
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // II. setup UI
  /** 
   * @type {HTMLButtonElement!} 
   * */
  const btnRestart =  assertNonNull(document.querySelector("#btn-restart"));
  btnRestart.onclick = () => {
    fillRect(ctx, 0, 0, canvasWidth, canvasHeight, "black");
    mainFlower.n = 0;
    mainFlower.c = 4;
    mainFlower.petalSize = 2;
  };

  /** 
   * @type {HTMLSelectElement!} 
   * */
  const ctrlDivergence = assertNonNull(document.querySelector("#ctrl-divergence"));
  ctrlDivergence.onchange = () => {
    mainFlower.divergence = +ctrlDivergence.value;
  };

  /**
   * @type {HTMLInputElement}
   */
  const cbClearEveryFrame = assertNonNull(document.querySelector("#cb-clear-every-frame"));
  cbClearEveryFrame.onchange = () => {
    clearScreenEveryFrame = cbClearEveryFrame.checked;
  };

  // III. start up app
  loop();
};

init();
