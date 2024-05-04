// @ts-check
import Flower from "../Flower.js";

/**
 * @name AppState
 * @desc JSDoc type definition.
 * @author TJ
 * @typedef {Object} AppState
 * @prop {boolean} clearEveryFrame - Clear screen every frame? Toggled by checkbox.
 * @prop {number} c - Current value of `c`. Set by &lt;select>.
 * @prop {number} deltaC - Current value of `deltaC`. Set by &lt;select>.
 * @prop {number} deltaDivergence - Current value of `deltaDivergence`. Set by &lt;select>.
 * @prop {number} divergence - Current value of `divergence`. Set by &lt;select>.
 * @prop {Flower[]} flowerList - Array of current flowers to draw.
 * @prop {number} petalSize - Current `petalSize`. Set by &lt;select>.
 * @prop {boolean} randomFlowers - Periodically show random flowers? Toggled by checkbox.
 */
