# Procedural Flowers
- HTML5 canvas-based procedural flowers
- I have been assigning this as HW for many years - and have gotten a lot of great submissions.
- See - https://github.com/tonethar/IGME-330-Master/blob/master/notes/HW-algorithmic-botany.md
- Wanted to do my own version with some more features!

## I. Try it out
- v3 - The original assignment
  - https://tonethar.github.io/projects/procedural-flowers/original-assignment/index.html
- v5 - Lot's of new feaatures!
  - https://tonethar.github.io/projects/procedural-flowers/index.html
  - https://tonethar.github.io/projects/procedural-flowers/latest-esm/index.html

## II. Instructions
- `git clone https://github.com/tonethar/24-procedural-flowers.git`
- `cd 24-procedural-flowers`
- `npm start`
- optionally, `npm run docs` to generate updated documentation

***OR***

- No git? No Node.js? No problem! Even with branches later than **v2** you can just run and edit the code in native ES6 mode:
  - download **index.html** and contents of **src/** folder
  - in **index.html**, delete the `<script src="dist/bundle.js"></script>` line
  - in **index.html**, uncomment the `<script type="module" src="./src/main.js"></script>` line
  - run **index.html** off of a web server or VSCode's LiveServer etc


## III. Modifying the code
- Simple changes to the initial UI state:
  - Checkboxes - head to **app-defaults.js** and modify the boolean values of `uiClearEveryFrame` and `uiRandomFlowers` to either `true` or `false`. This will check or uncheck the applicable dropbox AND will change the initial `state` value for that property in **app-state.js**
  - Drop-down menus (aka `<select>`) 
    - for example, to change the available values in the "Divergence angle" menu, head to **app-defaults.js** and edit the values of the `uiDivergenceValues` array. Note that this is any array of numbers, not strings
    - to change the `<option>` that is initially selected head to **app-defaults.js** and modify the `uiDivergence` property. This will also effect the initial `state.divergence` value in **app-state.js**
    - this technique will also work for the "Divergenace angle delta", "Petal size", "Petal size delta", "Petal spacing" and "Petal spacing delta" dropdowns
- Changing the "Petal Style" and "Petal Color" drop-downs:
  - This gets trickier because the style and color names in the dropdowns point at JS functions. Meaning that if you want to add any new styles or colors, you will have to first write a new JS function.
  - for example, to add a new "Petal Color" function, head to **app-petal-color-functions.js** 

## IV. Version History

### v1
- "Done" version of IGME-330 HW linked above.
- Vanilla ES5 - will run off of desktop.

### v2
- Vanilla ES6 with *main.js* and *utils.js* modules - needs to run off of a web server.
- ES6 `Flower` class
- Arrow functions
- JSDoc for generating documentation

### v3
- Webpack/Babel/Bundling
- JSDoc for static type checking

### v4
- New capabilities, new classes and interfaces
- `RotatingFlower` class
- `FlowerParams` interface
- `FlowerPetal` interface

### v5
- Multiple flowers
  - option for periodically spawned flowers with random starting values
- Click on canvas to create a new flower
