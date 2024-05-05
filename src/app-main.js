//@ts-check
/*global window, document*/

/**
 * @module main
 * @description Main module of the application.
 * @author TJ
 */

/* IMPORTS */
import DEFAULTS from "./app-defaults.js";
import state from "./app-state.js";
import RotatingFlower from "./classes/RotatingFlower.js";
import { assertNonNull, getRandomNumber, getXY, goFullScreen, randomArrayElement } from "./utils/utils.js";
// @ts-ignore
import { fillRect } from "./utils/utils-canvas.js";  // FIXME - import of utils-canvas.js not working for JSDoc
import { getPetalFunction, randomPetalFunction } from "./app-petal-functions.js";

/* CONSTANTS */

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
   /** @type {FlowerParams} */
   const params =  {
    c: state.c,
    centerX: x, 
    centerY: y, 
    deltaC: state.deltaC,
    deltaDivergence: state.deltaDivergence,
    deltaPetalSize: state.deltaPetalSize,
    deltaRotation: DEFAULTS.deltaRotation,
    divergence: state.divergence, 
    drawPetalFunction: getPetalFunction(state.petalStyle),
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
      drawPetalFunction: randomPetalFunction(),
      petalSize: getRandomNumber(1, 5), 
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
 * Called every frame.
 */
const loop = () => {
  window.setTimeout(loop, 1000/DEFAULTS.fps);
  if(state.clearEveryFrame){
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

  // Buttons
  /**  @type {!HTMLButtonElement}  */
  const btnRestart =  assertNonNull(document.querySelector("#btn-restart"));
  btnRestart.onclick = () => {
    fillRect(ctx, 0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight, "black");
    initFlowerSprites();
  };

  /**  @type {!HTMLButtonElement}  */
  const btnReset =  assertNonNull(document.querySelector("#btn-reset"));
  btnReset.onclick = () => window.location.reload();

  /**  @type {!HTMLButtonElement}  */
  const btnFS =  assertNonNull(document.querySelector("#btn-fs"));
  btnFS.onclick = () => goFullScreen(canvas);

  // Inputs
  /** @type {!HTMLSelectElement} */
  const ctrlDivergence = assertNonNull(document.querySelector("#ctrl-divergence"));
  ctrlDivergence.value = `${DEFAULTS.divergence}`;
  ctrlDivergence.onchange = () => {
    state.divergence = +ctrlDivergence.value;
    // change most recent flower's divergence value
    (state.flowerList?.[state.flowerList.length-1]).divergence = state.divergence;
  };

   /** @type {!HTMLSelectElement} */
  const ctrlDeltaDivergence = assertNonNull(document.querySelector("#ctrl-delta-divergence"));
  ctrlDeltaDivergence.value = `${DEFAULTS.deltaDivergence}`;
  ctrlDeltaDivergence.onchange = () => {
    state.deltaDivergence = +ctrlDeltaDivergence.value;
    // change most recent flower's divergence value
    (state.flowerList?.[state.flowerList.length-1]).deltaDivergence = state.deltaDivergence;
  };

   /** @type {!HTMLSelectElement} */
   const ctrlPetalSize = assertNonNull(document.querySelector("#ctrl-petal-size"));
   ctrlPetalSize.value = `${DEFAULTS.petalSize}`;
   ctrlPetalSize.onchange = () => {
     state.petalSize = +ctrlPetalSize.value;
     // change most recent flower's petalSize value
     (state.flowerList?.[state.flowerList.length-1]).petalSize = state.petalSize;
   };

  /** @type {!HTMLSelectElement} */
  const ctrlDeltaPetalSize = assertNonNull(document.querySelector("#ctrl-delta-petal-size"));
  ctrlDeltaPetalSize.value = ".01";//`${DEFAULTS.deltaPetalSize}`;
  ctrlDeltaPetalSize.onchange = () => {
    state.deltaPetalSize = +ctrlDeltaPetalSize.value;
    // change most recent flower's petalSize value
    (state.flowerList?.[state.flowerList.length-1]).deltaPetalSize = state.deltaPetalSize;
  };

  /** @type {!HTMLSelectElement} */
  const ctrlC = assertNonNull(document.querySelector("#ctrl-c"));
  ctrlC.value = `${DEFAULTS.c}`;
  ctrlC.onchange = () => {
    state.c = +ctrlC.value;
    // change most recent flower's c value
    (state.flowerList?.[state.flowerList.length-1]).c = state.c;
  };

  /** @type {!HTMLSelectElement} */
  const ctrlDeltaC = assertNonNull(document.querySelector("#ctrl-delta-c"));
  ctrlDeltaC.value = ".005";
  //ctrlDeltaC.value = `${DEFAULTS.deltaC}`; // FIXME: does not work, had to hard-code above
  ctrlDeltaC.onchange = () => {
    state.deltaC = +ctrlDeltaC.value;
    // change most recent flower's deltaC value
    (state.flowerList?.[state.flowerList.length-1]).deltaC = state.deltaC;
  };

  /** @type {!HTMLSelectElement} */
  const ctrlPetalStyle = assertNonNull(document.querySelector("#ctrl-petal-style"));
  //ctrlPetalStyle.selectedIndex = 1;
  ctrlPetalStyle.value = `${DEFAULTS.petalStyle}`; // FIXME: does not work, had to hard-code above
  ctrlPetalStyle.onchange = () => {
    state.petalStyle = ctrlPetalStyle.value;
    // change most recent flower's c value
    (state.flowerList?.[state.flowerList.length-1]).drawPetalFunction = getPetalFunction(state.petalStyle);
  };

  /** @type {!HTMLInputElement} */
  const cbClearEveryFrame = assertNonNull(document.querySelector("#cb-clear-every-frame"));
  cbClearEveryFrame.onchange = () => {
    state.clearEveryFrame = cbClearEveryFrame.checked;
  };

  /** @type {!HTMLInputElement} */
  const cbRandomFlowers = assertNonNull(document.querySelector("#cb-random-flowers"));
  cbRandomFlowers.checked = DEFAULTS.randomFlowers ? true : false;
  cbRandomFlowers.onchange = () => state.randomFlowers = cbRandomFlowers.checked;


  // III. Set up flower sprites
  RotatingFlower.maxPetals = DEFAULTS.maxPetals;

  // Interval to create random flowers
  setInterval(() => {
    if(state.randomFlowers){
      const padding = DEFAULTS.randomFlowerPadding;
      const x = getRandomNumber(padding, DEFAULTS.canvasWidth-padding);
      const y = getRandomNumber(padding, DEFAULTS.canvasHeight-padding);
      addFlowerToList(createRandomFlower(x, y));
    }
  }, DEFAULTS.randomFlowerDelay);

  // initialize starting flower
  initFlowerSprites();

  // enable canvas clicking
  canvas.onclick = e => {
    /** @type {Point} */
    const loc = getXY(e);
    addFlowerToList(createFlowerWithCurrentUISettings(loc.x, loc.y));
  }

  // IV. start up app
  loop();
};

init();
