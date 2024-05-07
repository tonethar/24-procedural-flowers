//@ts-check
/*global window, document*/

/**
 * @module main
 * @description Main module of the application.
 * @author TJ
 */

/* IMPORTS */
import DEFAULTS from "./app-defaults.js";
import { getPetalColorFunction, randomPetalColorFunction } from "./app-petal-color-functions.js";
import { getPetalDrawFunction, randomPetalDrawFunction } from "./app-petal-draw-functions.js";
import state from "./app-state.js";
import setupUI from "./app-ui.js";
import { assertIsNotNull, randomNumber, getXY, randomArrayElement } from "./utils/utils.js";
import RotatingFlower from "./classes/RotatingFlower.js";
import { fillRect } from "./utils/utils-canvas.js";

/* METHODS */
/**
 * @name addFlowerToList
 * @desc Adds a new flower to the end of the list.
 * @param {RotatingFlower} flower
 */
const addFlowerToList = flower => {
  // if too many flowers, remove oldest one
  if(state.flowerList.length > DEFAULTS.maxFlowers-1){
    state.flowerList.shift();
  }
  // add new flower to end of list
  state.flowerList.push(flower);
}

/**
 * @name createFlowerWithCurrentUISettings
 * @desc Instantiates a new flower using current UI values.
 * @param {number} x 
 * @param {number} y 
 * @returns {RotatingFlower}
 */
const createFlowerWithCurrentUISettings = (x, y) =>{
  // params for new RotatingFlower
   /** @type {IFlowerParams} */
   const params =  {
    c: state.c,
    centerX: x, 
    centerY: y, 
    colorFunction: getPetalColorFunction(state.petalColorFunctionName),
    deltaC: state.deltaC,
    deltaDivergence: state.deltaDivergence,
    deltaPetalSize: state.deltaPetalSize,
    deltaRotation: DEFAULTS.deltaRotation,
    divergence: state.divergence, 
    drawPetalFunction: getPetalDrawFunction(state.petalStyle),
    petalSize: state.petalSize, 
  };
  return new RotatingFlower(params);
}

/**
 * @name createRandomFlower
 * @desc Instantiates a new flower using random values.
 * @param {number} x - the `x` position of the new flower
 * @param {number} y - the `y` position of the new flower
 * @returns {RotatingFlower}
 */
const createRandomFlower = (x, y) => {
    /** @type {IFlowerParams} */
    const params =  {
      alpha: DEFAULTS.minFlowerOpacity + Math.random()/2,
      c: randomNumber(2, 6),
      centerX: x, 
      centerY: y, 
      colorFunction: randomPetalColorFunction(),
      deltaC: randomNumber(.002, .01),
      deltaDivergence: Math.random() < 0 ? 0 : randomNumber(-.005,.005),
      deltaPetalSize: randomNumber(0, .04),
      deltaRotation: Math.random() < .5 ? randomNumber(-.002, -.02) : randomNumber(.002, .02),
      divergence: randomArrayElement(DEFAULTS.randomDivergenceValues), 
      drawPetalFunction: randomPetalDrawFunction(),
      petalSize: randomNumber(1, 5), 
    };
    return new RotatingFlower(params);
};

/**
 * @name initFlowerSprites
 * @desc instantiates initial flower using defaults and adds it to flowers list.
 */
const initFlowerSprites = () => {
  // clear list
  state.flowerList.length = 0;
  // add flower to list
  addFlowerToList(createFlowerWithCurrentUISettings(DEFAULTS.canvasWidth/2, DEFAULTS.canvasHeight/2));
};

/**
 * Called every frame
 * @param {CanvasRenderingContext2D} ctx 
 */
const loop = (ctx) => {
  window.setTimeout(() => loop(ctx), 1000/DEFAULTS.fps);
  if(state.clearEveryFrame){
    fillRect(ctx, 0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight, DEFAULTS.clearColor);
  }
  for(const f of state.flowerList){
    f.update(ctx);
  }
};

/**
 * @name init
 * @desc Handles app initialization.
 */
const init = () => {
  // I. Setup canvas & drawing context
  // get ref to <canvas>
  /** @type {HTMLCanvasElement} */
  const canvas = assertIsNotNull(document.querySelector("#canvas"));

  // create drawing context and assign to `state.ctx` property
  state.ctx = assertIsNotNull(canvas.getContext("2d"));

  // seal `state` object - no new properties
  Object.seal(state);

  // set width and height of canvas
  canvas.width = DEFAULTS.canvasWidth;
  canvas.height = DEFAULTS.canvasHeight;

  // fill canvas with default clear color
  fillRect(state.ctx, 0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight, DEFAULTS.clearColor);


  // II. setup UI
  /**
   * @name canvasClickFunction
   * @param {MouseEvent} e 
   */
  const canvasClickFunction = e => {
    /** @type {IPoint} */
    const loc = getXY(e);
    addFlowerToList(createFlowerWithCurrentUISettings(loc.x, loc.y));
  }

  /**
   * @name uiCallbacks
   * @type {IUICallbacks}
   */
  const uiCallbacks = {
    canvasClickFunction: canvasClickFunction,
    getPetalDrawFunction: getPetalDrawFunction,
    getPetalColorFunction: getPetalColorFunction,
    restartFunction: initFlowerSprites,
  };
  setupUI(DEFAULTS, state, uiCallbacks);


  // III. Set up flower sprites
  RotatingFlower.maxPetals = DEFAULTS.maxPetals;

  // Interval to create random flowers
  setInterval(() => {
    if(state.randomFlowers){
      const padding = DEFAULTS.randomFlowerPadding;
      const x = randomNumber(padding, DEFAULTS.canvasWidth-padding);
      const y = randomNumber(padding, DEFAULTS.canvasHeight-padding);
      addFlowerToList(createRandomFlower(x, y));
    }
  }, DEFAULTS.randomFlowerDelay);

  // initialize starting flower
  initFlowerSprites();

  // IV. start up app
  loop(state.ctx);
};

init();
