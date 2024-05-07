// @ts-check
import DEFAULTS from "./app-defaults";

/**
 * @module app-state
 * @description Current state variables of app. Contains `IAppState` interface and `state` object literal.
 * @author TJ
 */

/**
 * @name state
 * @type {import("./types/IAppState").IAppState}
 * @static
 * @desc Mutable app state variables that can change over time. Most of these could be saved to localStorage.
 */
const state = Object.seal({
  clearEveryFrame:        DEFAULTS.clearEveryFrame,
  c:                      DEFAULTS.c,
  ctx:                    null,
  deltaC:                 DEFAULTS.deltaC,
  deltaDivergence:        DEFAULTS.deltaDivergence,
  deltaPetalSize:         DEFAULTS.deltaPetalSize,
  divergence:             DEFAULTS.divergence,
  petalColorFunctionName: DEFAULTS.petalColorFunctionName,
  petalSize:              DEFAULTS.petalSize,
  petalStyle:             DEFAULTS.petalStyle,
  flowerList:             [],
  randomFlowers:          DEFAULTS.randomFlowers,
});

export default state;
