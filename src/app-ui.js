// @ts-check
import DEFAULTS from "./app-defaults.js";
import { assertNonNull, getRandomNumber, getXY, goFullScreen, randomArrayElement } from "./utils/utils.js";
import { fillRect } from "./utils/utils-canvas.js";

// JSDoc interface
import "./types/UICallbacks.js";

/**
 * 
 * @param {import("./app-defaults.js").IAppDefaults} defaults 
 * @param {import("./app-state.js").IAppState} state 
 * @param {UICallbacks} callbacks 
 */

export const setupUI = (defaults, state, callbacks) => {
  const ctx = assertNonNull(state.ctx);

  const canvas = ctx.canvas;
   // Buttons
  /**  @type {!HTMLButtonElement}  */
  const btnRestart =  assertNonNull(document.querySelector("#btn-restart"));
  btnRestart.onclick = () => {
    fillRect(ctx, 0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight, "black");
    callbacks.initFlowerSprites();
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
    (state.flowerList?.[state.flowerList.length-1]).drawPetalFunction = callbacks.getPetalDrawFunction(state.petalStyle);
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

};

export default setupUI;