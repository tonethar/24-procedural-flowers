# Procedural Flowers
- HTML5 canvas-based procedural flowers
- I have been assigning this as HW for many years - and have gotten a lot of great submissions.
- See - https://github.com/tonethar/IGME-330-Master/blob/master/notes/HW-algorithmic-botany.md
- Wanted to do my own version with some more features!

## I. Try it out
- v3 - url1
- v4 - url2

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

## III. Version History

### v1
- "Done" version of IGME-330 HW linked above.
- Vanilla ES5 - will run off of desktop.

### v2
- Vanilla ES6 with *main.js* and *utils.js* modules - needs to run off of a web server.
- ES6 `Flower` class
- Arrow functions
- ESLint
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

