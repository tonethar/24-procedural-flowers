// @ts-check
import Flower from "../Flower.js";

/**
 * @name AppState
 * @desc JSDoc type definition.
 * @author TJ
 * @typedef {Object} AppState
 * @prop {boolean} clearEveryFrame - Clear screen every frame? Toggled by checkbox.
 * @prop {number} currentC - Current value of `c`. Set by &lt;select>.
 * @prop {number} currentDivergence - Current value of `divergence`. Set by &lt;select>.
 * @prop {number} currentPetalSize - Current `petalSize`. Set by &lt;select>.
 * @prop {Flower[]} flowerList - Array of current flowers to draw.
 * @prop {boolean} randomFlowers - Periodically show random flowers? Toggled by checkbox.
 */
