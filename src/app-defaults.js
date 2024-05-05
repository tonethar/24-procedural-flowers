// @ts-check

/**
 * @module app-defaults
 * @desc Contains default values for app.
 * @author TJ
 */

/**
 * @name IAppDefaults
 * @desc JSDoc type definition.
 * @author TJ
 * @typedef {Object} IAppDefaults
 * @prop {number} c - padding between petals in pixels.
 * @prop {number} canvasWidth - width of canvas in pixels.
 * @prop {number} canvasHeight - height of canvas in pixels.
 * @prop {string} clearColor - CSS color to fill background with.
 * @prop {boolean} clearEveryFrame - Clear screen every frame?
 * @prop {number} deltaC - `c` delta per frame.
 * @prop {number} deltaDivergence - `divergence` delta per frame.
 * @prop {number} deltaPetalSize - `petalSize` delta per frame.
 * @prop {number} deltaRotation - `rotation` delta per frame.
 * @prop {number} divergence - degrees of rotation per frame.
 * @prop {number} fps - target frames-per-second of animation loop.
 * @prop {number} maxFlowers - maximum number of flowers to render.
 * @prop {number} maxPetals - maximum number of petals each flower will contain.
 * @prop {number} minFlowerOpacity - minimum opacity of randomly generated flowers.
 * @prop {number} petalSize - radius of petals in pixels.
 * @prop {String} petalStyle
 * @prop {number[]} randomDivergenceValues - an array of divergence values.
 * @prop {number} randomFlowerDelay - time between randomly spawned flowers in milliseconds.
 * @prop {number} randomFlowerPadding - offset in pixels of randomly spawned flowers.
 * @prop {boolean} randomFlowers 
 */

/** 
 * @name DEFAULTS
 * @type {IAppDefaults}
 * @desc The app's default values.
 * @static
 */
const DEFAULTS = Object.freeze({
  c:                      5,
  canvasWidth:            800,
  canvasHeight:           600,
  clearColor:             "#000",
  clearEveryFrame:        true,
  deltaC:                 .005,
  deltaDivergence:        0,
  deltaPetalSize:         .01,
  deltaRotation:          .01,
  divergence:             137.5,
  fps:                    60,
  maxFlowers:             10,
  maxPetals:              1200,
  minFlowerOpacity:       .5,
  petalSize:              2,
  petalStyle:             "Disc",
  randomDivergenceValues: [30, 60, 72, 90, 120, 137.1, 137.3, 137.5, 137.7, 137.9, 139, 140],
  randomFlowerDelay:      5000,
  randomFlowerPadding:    100,
  randomFlowers:          false,
});

export default DEFAULTS;
