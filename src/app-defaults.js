// @ts-check
import { colorFunctionValues} from "./app-petal-color-functions";
import { drawFunctionValues } from "./app-petal-draw-functions";


/**
 * @module app-defaults
 * @desc Default values for app. Contains `IAppDefaults` interface and `DEFAULTS` object literal.
 * @author TJ
 */

/** 
 * @name appDefaults
 * @type {IAppDefaults}
 * @desc The app's default values.
 * @static
 */
const appDefaults = Object.freeze({
  canvasWidth:              800,
  canvasHeight:             600,
  clearColor:               "#000",
  deltaRotation:            .01,
  fps:                      60,
  maxFlowers:               10,
  maxPetals:                1200,
  minFlowerOpacity:         .5,
  randomDivergenceValues:   [30, 60, 72, 90, 120, 137.1, 137.3, 137.5, 137.7, 137.9, 139, 140,],
  randomFlowerDelay:        5000,
  randomFlowerPadding:      100,
  uiC:                      5,
  uiCDeltaValues:           [-.001, 0, .002, .005, .01, .02,],
  uiClearEveryFrame:        true,
  uiColorFunctionValues:    colorFunctionValues(),
  uiCValues:                [2, 3, 4, 5, 8, 10,],
  uiDeltaC:                 .002,
  uiDeltaDivergence:        0,
  uiDeltaPetalSize:         .01,
  uiDivergence:             137.5,
  uiDivergenceDeltaValues:  [-.005, -.002, -.001, 0, .001, .002, .005,],
  uiDivergenceValues:       [30, 60, 72, 90, 120, 137.1, 137.3, 137.5, 137.7, 137.9, 139, 140,],
  uiDrawFunctionValues:     drawFunctionValues(),
  uiPetalColorFunctionName: "increase-hue",
  uiPetalSize:              3,
  uiPetalSizeDeltaValues:   [0, .01, .02, .05, .25,],
  uiPetalSizeValues:        [1, 2, 3, 5, 8, 10,],
  uiPetalStyleFunctionName: "Disc",
  uiRandomFlowers:          true,
});

export default appDefaults;
        