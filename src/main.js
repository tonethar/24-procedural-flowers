// @ts-check
/*global window, document*/

/**
 * @module main
 * @description Main module of the application.
 * @author TJ
 */

/* IMPORTS */
import "./types/AppDefaults.js";
import Flower from "./Flower.js";
import RotatingFlower from "./RotatingFlower.js";
import { assertNonNull, getRandom, fillCircle, fillRect } from "./utils.js";

/* CONSTANTS */

/** @type {AppDefaults} */
const DEFAULTS = Object.freeze({
  c:            4,
  canvasWidth:  800,
  canvasHeight: 600,
  clearColor:   "#000",
  deltaC: .005,
  deltaDivergence: 0,
  deltaPetalSize: .01,
  deltaRotation: .01,
  divergence:   137.5,
  fps:          60,
  petalSize:    2,
});

/**
 * Reference to `canvas` element.
 * @type {!HTMLCanvasElement} 
 */
const canvas = assertNonNull(document.querySelector("#canvas"));

/**
 * Reference to drawing context of `canvas`.
 * @type {!CanvasRenderingContext2D}
 */
const ctx = assertNonNull(canvas.getContext("2d"));


/* PROPERTIES */

/**
 * @name clearScreenEveryFrame
 * @desc Toggled by checkbox.
 * @type {boolean}
 */
let clearScreenEveryFrame = true;

/**
 * @name currentDivergence
 * @desc Set by &lt;select>.
 * @type {number}
 */
let currentDivergence = DEFAULTS.divergence;

/**
 * @name currentC
 * @desc Set by &lt;select>.
 * @type {number}
 */
let currentC = DEFAULTS.c;


/**
 * Array of current flowers to draw.
 * @type {Flower[]}
 */
const flowerSprites = [];

/* METHODS */

/**
 * @param {number} x
 * @param {number} y
 * @returns {Flower}
 */
const createRandomFlower = (x, y) => {
    /** @type {FlowerParams} */
    const params =  {
      c: currentC,
      centerX: x, 
      centerY: y, 
      deltaC: getRandom(.002, .01),
      deltaDivergence: 0,
      deltaPetalSize: getRandom(.01,.04),
      deltaRotation: Math.random() < .5 ? getRandom(-.002, -.02) : getRandom(.002, .02),
      divergence: currentDivergence, 
      drawPetalFunction: fillCircle,
      petalSize: getRandom(1, 5), 
    };
    return new RotatingFlower(params);
};

const initFlowerSprites = () => {
  // clear array
  flowerSprites.length = 0;

  // add new default Flowersprite
   /** @type {FlowerParams} */
   const params =  {
    c: currentC,
    centerX: DEFAULTS.canvasWidth/2, 
    centerY: DEFAULTS.canvasHeight/2, 
    deltaC: DEFAULTS.deltaC,
    deltaDivergence: DEFAULTS.deltaDivergence,
    deltaPetalSize: DEFAULTS.deltaPetalSize,
    deltaRotation: DEFAULTS.deltaRotation,
    divergence: currentDivergence, 
    drawPetalFunction: fillCircle,
    petalSize: DEFAULTS.petalSize, 
  };
  flowerSprites.push(new RotatingFlower(params));

  //flowerSprites.push(createRandomFlower(DEFAULTS.canvasWidth/2,DEFAULTS.canvasHeight/2));
};

/**
 * Called every frame.
 */
const loop = () => {
  window.setTimeout(loop, 1000/DEFAULTS.fps);
  if(clearScreenEveryFrame){
    fillRect(ctx, 0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight, DEFAULTS.clearColor);
  }
  for(const f of flowerSprites){
    f.update(ctx);
  }
};

/**
 * Handles app initialization.
 */
const init = () => {
  // I. Setup canvas & drawing context
  canvas.width = DEFAULTS.canvasWidth;
  canvas.height = DEFAULTS.canvasHeight;
  ctx.fillRect(0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight);

  // II. setup UI
  /**  @type {!HTMLButtonElement}  */
  const btnRestart =  assertNonNull(document.querySelector("#btn-restart"));
  btnRestart.onclick = () => {
    fillRect(ctx, 0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight, "black");
    initFlowerSprites();
  };

  /**  @type {!HTMLButtonElement}  */
  const btnReset =  assertNonNull(document.querySelector("#btn-reset"));
  btnReset.onclick = () => window.location.reload();

  /** @type {!HTMLSelectElement} */
  const ctrlDivergence = assertNonNull(document.querySelector("#ctrl-divergence"));
  ctrlDivergence.onchange = () => {
    currentDivergence = +ctrlDivergence.value;
    // change most recent flower's divergence value
    (flowerSprites?.[flowerSprites.length-1]).divergence = currentDivergence;
  };

  /** @type {!HTMLSelectElement} */
  const ctrlC = assertNonNull(document.querySelector("#ctrl-c"));
  ctrlC.onchange = () => {
    currentC = +ctrlC.value;
    // change most recent flower's c value
    (flowerSprites?.[flowerSprites.length-1]).c = currentC;
  };

  /** @type {!HTMLInputElement} */
  const cbClearEveryFrame = assertNonNull(document.querySelector("#cb-clear-every-frame"));
  cbClearEveryFrame.onchange = () => {
    clearScreenEveryFrame = cbClearEveryFrame.checked;
  };

  // III. Set up flower sprites
  initFlowerSprites();

  // IV. start up app
  loop();
};

init();
