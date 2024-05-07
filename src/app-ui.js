// @ts-check
import DEFAULTS from "./app-defaults.js";
import { assertIsNotNull, goFullScreen } from "./utils/utils.js";
import { fillRect } from "./utils/utils-canvas.js";

// JSDoc interface
import "./types/IUICallbacks.js";


/**
 * 
 * @param {HTMLSelectElement} ref 
 * @param {string[] | number[]} dataArray 
 */
const populateSelect = (ref, dataArray) => {
  let html = dataArray.map(val => `<option>${val}</option>`).join("");
  ref.innerHTML = html;
};

/**
 * @function setupUI
 * @param {IAppDefaults} defaults 
 * @param {import("./types/IAppState.js").IAppState} state 
 * @param {IUICallbacks} callbacks 
 */
export const setupUI = (defaults, state, callbacks) => {
  const ctx = assertIsNotNull(state.ctx);
  const canvas = ctx.canvas;

   // Buttons
  /**  @type {!HTMLButtonElement}  */
  const btnRestart =  assertIsNotNull(document.querySelector("#btn-restart"));
  btnRestart.onclick = () => {
    fillRect(ctx, 0, 0, DEFAULTS.canvasWidth, DEFAULTS.canvasHeight, "black");
    callbacks.restartFunction();
  };

  /**  @type {!HTMLButtonElement}  */
  const btnReset =  assertIsNotNull(document.querySelector("#btn-reset"));
  btnReset.onclick = () => window.location.reload();

  /**  @type {!HTMLButtonElement}  */
  const btnFS =  assertIsNotNull(document.querySelector("#btn-fs"));
  btnFS.onclick = () => goFullScreen(canvas);

  // Inputs
  /** @type {!HTMLSelectElement} */
  const ctrlDivergence = assertIsNotNull(document.querySelector("#ctrl-divergence"));
  populateSelect(ctrlDivergence, DEFAULTS.uiDivergenceValues);
  ctrlDivergence.value = `${DEFAULTS.divergence}`;
  ctrlDivergence.onchange = () => {
    state.divergence = +ctrlDivergence.value;
    // change most recent flower's divergence value
    (state.flowerList?.[state.flowerList.length-1]).divergence = state.divergence;
  };

   /** @type {!HTMLSelectElement} */
  const ctrlDeltaDivergence = assertIsNotNull(document.querySelector("#ctrl-delta-divergence"));
  populateSelect(ctrlDeltaDivergence, DEFAULTS.uiDivergenceDeltaValues);
  ctrlDeltaDivergence.value = `${DEFAULTS.deltaDivergence}`;
  ctrlDeltaDivergence.onchange = () => {
    state.deltaDivergence = +ctrlDeltaDivergence.value;
    // change most recent flower's divergence value
    (state.flowerList?.[state.flowerList.length-1]).deltaDivergence = state.deltaDivergence;
  };

   /** @type {!HTMLSelectElement} */
   const ctrlPetalSize = assertIsNotNull(document.querySelector("#ctrl-petal-size"));
   populateSelect(ctrlPetalSize, DEFAULTS.uiPetalSizeValues);
   ctrlPetalSize.value = `${DEFAULTS.petalSize}`;
   ctrlPetalSize.onchange = () => {
     state.petalSize = +ctrlPetalSize.value;
     // change most recent flower's petalSize value
     (state.flowerList?.[state.flowerList.length-1]).petalSize = state.petalSize;
   };

  /** @type {!HTMLSelectElement} */
  const ctrlDeltaPetalSize = assertIsNotNull(document.querySelector("#ctrl-delta-petal-size"));
  ctrlDeltaPetalSize.value = ".01";//`${DEFAULTS.deltaPetalSize}`;
  ctrlDeltaPetalSize.onchange = () => {
    state.deltaPetalSize = +ctrlDeltaPetalSize.value;
    // change most recent flower's petalSize value
    (state.flowerList?.[state.flowerList.length-1]).deltaPetalSize = state.deltaPetalSize;
  };

  /** @type {!HTMLSelectElement} */
  const ctrlC = assertIsNotNull(document.querySelector("#ctrl-c"));
  ctrlC.value = `${DEFAULTS.c}`;
  ctrlC.onchange = () => {
    state.c = +ctrlC.value;
    // change most recent flower's c value
    (state.flowerList?.[state.flowerList.length-1]).c = state.c;
  };

  /** @type {!HTMLSelectElement} */
  const ctrlDeltaC = assertIsNotNull(document.querySelector("#ctrl-delta-c"));
  ctrlDeltaC.value = ".005";
  //ctrlDeltaC.value = `${DEFAULTS.deltaC}`; // FIXME: does not work, had to hard-code above
  ctrlDeltaC.onchange = () => {
    state.deltaC = +ctrlDeltaC.value;
    // change most recent flower's deltaC value
    (state.flowerList?.[state.flowerList.length-1]).deltaC = state.deltaC;
  };

  /** @type {!HTMLSelectElement} */
  const ctrlPetalStyle = assertIsNotNull(document.querySelector("#ctrl-petal-style"));
  ctrlPetalStyle.value = `${DEFAULTS.petalStyle}`;
  ctrlPetalStyle.onchange = () => {
    state.petalStyle = ctrlPetalStyle.value;
    // change most recent flower's c value
    (state.flowerList?.[state.flowerList.length-1]).drawPetalFunction = callbacks.getPetalDrawFunction(state.petalStyle);
  };

   /** @type {!HTMLSelectElement} */
   const ctrlPetalColor = assertIsNotNull(document.querySelector("#ctrl-petal-color"));
   //ctrlPetalStyle.selectedIndex = 1;
   ctrlPetalColor.value = `${DEFAULTS.petalColorFunctionName}`; // FIXME: does not work, had to hard-code above
   ctrlPetalColor.onchange = () => {
     state.petalColorFunctionName = ctrlPetalColor.value;
     console.log(ctrlPetalColor.value);
     //change most recent flower's .colorFunction property
     (state.flowerList?.[state.flowerList.length-1]).colorFunction = callbacks.getPetalColorFunction(state.petalColorFunctionName);
   };

  /** @type {!HTMLInputElement} */
  const cbClearEveryFrame = assertIsNotNull(document.querySelector("#cb-clear-every-frame"));
  cbClearEveryFrame.onchange = () => {
    state.clearEveryFrame = cbClearEveryFrame.checked;
  };

  /** @type {!HTMLInputElement} */
  const cbRandomFlowers = assertIsNotNull(document.querySelector("#cb-random-flowers"));
  cbRandomFlowers.checked = DEFAULTS.randomFlowers ? true : false;
  cbRandomFlowers.onchange = () => state.randomFlowers = cbRandomFlowers.checked;

  canvas.onclick = (e) => callbacks.canvasClickFunction(e);
};

export default setupUI;