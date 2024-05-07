// @ts-check
/*eslint @stylistic/js/quote-props: ["error", "as-needed"]*/

/**
 * @module app-defaults
 * @desc Default values for app. Contains `IAppDefaults` interface and `DEFAULTS` object literal.
 * @author TJ
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
  deltaPetalSize:         0,
  deltaRotation:          .01,
  divergence:             137.5,
  fps:                    60,
  maxFlowers:             10,
  maxPetals:              1200,
  minFlowerOpacity:       .5,
  petalColorFunctionName: "func4",
  petalSize:              3,
  petalStyle:             "Disc",
  randomDivergenceValues: [30, 60, 72, 90, 120, 137.1, 137.3, 137.5, 137.7, 137.9, 139, 140],
  randomFlowerDelay:      5000,
  randomFlowerPadding:    100,
  randomFlowers:          true,
  uiDivergenceDeltaValues:[.005, .002, .001, 0, .001, .002, .005],
  uiDivergenceValues:     [30, 60, 72, 90, 120, 137.1, 137.3, 137.5, 137.7, 137.9, 139, 140],
  uiPetalSizeValues:            [1, 2, 3, 5, 8, 10],
});

export default DEFAULTS;
        