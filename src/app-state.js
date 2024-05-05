// @ts-check

import DEFAULTS from "./app-defaults";
import RotatingFlower from "./classes/RotatingFlower.js"

/**
 * @module app-state
 * @description Contains current state of app.
 * @author TJ
 */

/**
 * @name IAppState
 * @desc JSDoc type definition.
 * @author TJ
 * @typedef {Object} IAppState
 * @prop {boolean} clearEveryFrame - Clear screen every frame? Toggled by checkbox.
 * @prop {number} c - Current value of `c`. Set by &lt;select>.
 * @prop {number} deltaC - Current value of `deltaC`. Set by &lt;select>.
 * @prop {number} deltaDivergence - Current value of `deltaDivergence`. Set by &lt;select>.
 * @prop {number} deltaPetalSize - Current value of `deltaPetalSize`. Set by &lt;select>.
 * @prop {number} divergence - Current value of `divergence`. Set by &lt;select>.
 * @prop {RotatingFlower[]} flowerList - Array of current flowers to draw.
 * @prop {number} petalSize - Current `petalSize`. Set by &lt;select>.
 * @prop {string} petalStyle - Current `petalStyle`. Set by &lt;select>.
 * @prop {boolean} randomFlowers - Periodically show random flowers? Toggled by checkbox.
 */

/**
 * @name state
 * @type {IAppState}
 * @static
 * @desc Mutable app state variables that can change over time. Most of these could be saved to localStorage.
 */
const state = Object.seal({
  clearEveryFrame:    DEFAULTS.clearEveryFrame,
  c:                  DEFAULTS.c,
  deltaC:             DEFAULTS.deltaC,
  deltaDivergence:    DEFAULTS.deltaDivergence,
  deltaPetalSize:     DEFAULTS.deltaPetalSize,
  divergence:         DEFAULTS.divergence,
  petalSize:          DEFAULTS.petalSize,
  petalStyle:         DEFAULTS.petalStyle,
  flowerList:         [],
  randomFlowers:      DEFAULTS.randomFlowers,
});

export default state;
