/*global window, document*/

import Flower from "./Flower.js";
import { fillCircle, fillRect } from "./utils.js";

const canvasWidth = 640, canvasHeight = 480;
const divergence = 137.5;
const c = 4;
const petalSize = 2;
const fps = 60;
const mainFlower = new Flower( canvasWidth/2, canvasHeight/2, divergence, c, petalSize, fillCircle );

let canvas;
let ctx;

/**
 * Called every frame.
 */
const loop = () => {
  window.setTimeout(loop, 1000/fps);
  mainFlower.update(ctx);
};

/**
 * Handles initialization.
 */
const init = () => {
  // I. init variables
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // II. setup UI
  document.querySelector("#btn-restart").onclick = () => {
    fillRect(ctx, 0, 0, canvasWidth, canvasHeight, "black");
    mainFlower.n = 0;
    mainFlower.c = 4;
    mainFlower.petalSize = 2;
  };

  document.querySelector("#ctrl-divergence").onchange = e => {
    mainFlower.divergence = +e.target.value;
  };

  // III. start up app
  loop();
};

init();
