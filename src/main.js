// @ts-nocheck
/*global window, document*/

/**
 * @module main
 * @description Main module of the application.
 * @author TJ
 */

/* IMPORTS */
import "./types/AppDefaults.js";
//import "./types/AppState.js"; // FIXME - import of AppState type not working for JSDoc
import Flower from "./Flower.js";
import RotatingFlower from "./RotatingFlower.js";
import { assertNonNull, getRandomNumber, getXY, randomArrayElement } from "./utils.js";
import { fillRect } from "./utils-canvas.js";
import { petalFillCircle, petalFillSquare, petalStrokeCircle } from "./flower-helpers.js";

/* CONSTANTS */

/** @type {AppDefaults} */
const DEFAULTS = Object.freeze({
  c:                      5,
  canvasWidth:            800,
  canvasHeight:           600,
  clearColor:             "#000",
  deltaC:                 .005,
  deltaDivergence:        0,
  deltaPetalSize:         .01,
  deltaRotation:          .01,
  divergence:             137.5,
  fps:                    60,
  maxFlowers:             10,
  maxPetals:              1000,
  minFlowerOpacity:       .5,
  petalSize:              2,
  randomDivergenceValues: [137.1, 137.3, 137.5, 137.7, 137.9, 139, 140],
  randomFlowerDelay:      5000,
  randomFlowerPadding:    100,
});


/**
 * @name canvas
 * @desc Reference to `canvas` element.
 * @type {!HTMLCanvasElement} 
 */
const canvas = assertNonNull(document.querySelector("#canvas"));

/**
 * @name ctx
 * @desc Reference to drawing context of `canvas`.
 * @type {!CanvasRenderingContext2D}
 */
const ctx = assertNonNull(canvas.getContext("2d"));

const petalFunctions = [petalFillCircle, petalFillCircle, petalFillCircle, petalStrokeCircle, petalFillSquare];

// PROPERTIES

/**
 * @name state
 * @type {AppState}
 * @desc App state variables. Most of these could be saved to localStorage.
 */
const state = Object.seal({
  clearScreenEveryFrame: true,
  currentC:              DEFAULTS.c,
  currentDivergence:     DEFAULTS.divergence,
  flowerList:            [],
  petalSize:             DEFAULTS.petalSize,
  randomFlowers:         true,
});


/* METHODS */

/**
 * @name addFlowerToList
 * @desc Adds a new flower to the end of the list.
 * @param {Flower} flower
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
 * @returns {Flower}
 */
const createFlowerWithCurrentUISettings = (x, y) =>{
  // add new default Flowersprite
   /** @type {FlowerParams} */
   const params =  {
    c: state.currentC,
    centerX: x, 
    centerY: y, 
    deltaC: DEFAULTS.deltaC,
    deltaDivergence: DEFAULTS.deltaDivergence,
    deltaPetalSize: DEFAULTS.deltaPetalSize,
    deltaRotation: DEFAULTS.deltaRotation,
    divergence: state.currentDivergence, 
    drawPetalFunction: petalFillCircle,
    petalSize: state.petalSize, 
  };
  return new RotatingFlower(params);
}

/**
 * @name createRandomFlower
 * @desc Instantiates a new flower using random values.
 * @param {number} x - the `x` position of the new flower
 * @param {number} y - the `y` position of the new flower
 * @returns {Flower}
 */
const createRandomFlower = (x, y) => {
    /** @type {FlowerParams} */
    const params =  {
      alpha: DEFAULTS.minFlowerOpacity + Math.random()/2,
      c: getRandomNumber(2, 6),
      centerX: x, 
      centerY: y, 
      deltaC: getRandomNumber(.002, .01),
      deltaDivergence: Math.random() < 0 ? 0 : getRandomNumber(-.005,.005),
      deltaPetalSize: getRandomNumber(.01,.04),
      deltaRotation: Math.random() < .5 ? getRandomNumber(-.002, -.02) : getRandomNumber(.002, .02),
      divergence: randomArrayElement(DEFAULTS.randomDivergenceValues), 
      drawPetalFunction: randomArrayElement(petalFunctions),
      petalSize: getRandomNumber(1, 5), 
    };
    return new RotatingFlower(params);
};

/**
 * @name initFlowerSprites
 * @desc instantiates initial flower using defaults and adds it to flowers list.
 */
const initFlowerSprites = (useCurrentSettings=false) => {
  // clear list
  state.flowerList.length = 0;
  // add flower to list
  addFlowerToList(createFlowerWithCurrentUISettings(DEFAULTS.canvasWidth/2, DEFAULTS.canvasHeight/2));
};

/**
 * Called every frame.
 */
const loop = () => {
  window.setTimeout(loop, 1000/DEFAULTS.fps);
  if(state.clearScreenEveryFrame){
    fillRect(ctx, 0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight, DEFAULTS.clearColor);
  }
  for(const f of state.flowerList){
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
    initFlowerSprites(true);
  };

  /**  @type {!HTMLButtonElement}  */
  const btnReset =  assertNonNull(document.querySelector("#btn-reset"));
  btnReset.onclick = () => window.location.reload();

  /** @type {!HTMLSelectElement} */
  const ctrlDivergence = assertNonNull(document.querySelector("#ctrl-divergence"));
  ctrlDivergence.onchange = () => {
    state.currentDivergence = +ctrlDivergence.value;
    // change most recent flower's divergence value
    (state.flowerList?.[state.flowerList.length-1]).divergence = state.currentDivergence;
  };

   /** @type {!HTMLSelectElement} */
   const ctrlPetalSize = assertNonNull(document.querySelector("#ctrl-petal-size"));
   ctrlPetalSize.onchange = () => {
     state.petalSize = +ctrlPetalSize.value;
     // change most recent flower's c value
     (state.flowerList?.[state.flowerList.length-1]).petalSize = state.petalSize;
   };

  /** @type {!HTMLSelectElement} */
  const ctrlC = assertNonNull(document.querySelector("#ctrl-c"));
  ctrlC.onchange = () => {
    state.currentC = +ctrlC.value;
    // change most recent flower's c value
    (state.flowerList?.[state.flowerList.length-1]).c = state.currentC;
  };

  /** @type {!HTMLInputElement} */
  const cbClearEveryFrame = assertNonNull(document.querySelector("#cb-clear-every-frame"));
  cbClearEveryFrame.onchange = () => {
    state.clearScreenEveryFrame = cbClearEveryFrame.checked;
  };

  /** @type {!HTMLInputElement} */
  const cbRandomFlowers = assertNonNull(document.querySelector("#cb-random-flowers"));
  cbRandomFlowers.onchange = () => {
    state.randomFlowers = cbRandomFlowers.checked;
  };


  // III. Set up flower sprites
  RotatingFlower.maxPetals = DEFAULTS.maxPetals;

  // Interval to create random flowers
  setInterval(()=> {
    if(state.randomFlowers){
      const padding = DEFAULTS.randomFlowerPadding;
      const x = getRandomNumber(padding, DEFAULTS.canvasWidth-padding);
      const y = getRandomNumber(padding, DEFAULTS.canvasHeight-padding);
      addFlowerToList(createRandomFlower(x,y));
    }
  }, DEFAULTS.randomFlowerDelay);

  // initialize starting flower
  initFlowerSprites();

  // get canvas clicking working
  canvas.onclick = e => {
    const loc = getXY(e);
    addFlowerToList(createFlowerWithCurrentUISettings(loc.x, loc.y));
  }

  // IV. start up app
  loop();
};

init();
