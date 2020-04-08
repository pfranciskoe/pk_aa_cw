/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Asteroid(options) {\n    MovingObject.call(this, {\n      game: options[\"game\"], color: Asteroid.COLOR, radius: Asteroid.RADIUS,\n      pos: options['pos'], vel: Util.randomVec(2)});\n\n}\nUtil.inherits(Asteroid, MovingObject);\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n        otherObject.relocate();\n  }\n  if (otherObject instanceof Bullet) {\n    this.game.remove(this);\n  }\n};\n\nAsteroid.COLOR = '#723f3f';\nAsteroid.RADIUS = 10; \nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Bullet(options){\nMovingObject.call(this, { color: Bullet.COLOR, radius: Bullet.RADIUS, vel:options[\"vel\"],\n     pos: options['pos'], game: options['game'] });\n\n};\nBullet.prototype.collideWith = function (otherObject) {\n    if (otherObject instanceof Asteroid) {\n        otherObject.game.remove();\n    }\n\n};\nUtil.inherits(Bullet, MovingObject);\nBullet.prototype.isWrappable = function(){return false;}\nBullet.RADIUS = 2;\nBullet.COLOR = \"#ff4d00\";\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\")\nfunction Game(){\n    this.asteroids = [];\n    this.ship = new Ship({ pos: this.randomPosition(), game: this });\n    this.addAsteroids();\n    this.bullets = [];\n}\n\nGame.DIM_X = 600;\nGame.DIM_Y = 350;\nGame.NUM_ASTEROIDS = 10;\n\nGame.prototype.addAsteroids = function(){\n    for (i = 0; i < Game.NUM_ASTEROIDS; i++){\n        let randPos = this.randomPosition();\n        this.asteroids.push(new Asteroid({pos:randPos, game:this}));\n    }\n};\n\nGame.prototype.randomPosition = function() {\nlet posi = [0,0];\n    posi[0] = Math.floor(Math.random() * Game.DIM_X);\n    posi[1] = Math.floor(Math.random() * Game.DIM_Y);\n\nreturn posi;\n};\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach((obj)=>obj.draw(ctx));\n};\nGame.prototype.moveObjects = function(){\n    this.allObjects().forEach((obj)=>obj.move());\n};\n\nGame.prototype.wrap = function(pos) {\n    if (pos[0] >= Game.DIM_X) { pos[0] = 0; return pos;}\n    if (pos[0] <= 0) { pos[0] = Game.DIM_X; return pos;}\n    if (pos[1] >= Game.DIM_Y) { pos[1] = 0; return pos;}\n    if (pos[1] <= 0) { pos[1] = Game.DIM_Y; return pos;}\n    return pos;\n};\nGame.prototype.checkCollisions = function() {\n      for (j = 0; j < this.asteroids.length; j++) {\n          if (this.asteroids[j].isCollidedWith(this.ship)){\n            this.asteroids[j].collideWith(this.ship);\n          }\n          for(i=0;i<this.bullets.length; i++){\n            if (this.asteroids[j].isCollidedWith(this.bullets[i])) {\n                console.log(\"hit\")\n                this.asteroids[j].collideWith(this.bullets[i]);\n            }\n        } \n      }\n};\n\nGame.prototype.step = function() {\n    this.moveObjects();\n    this.checkCollisions();\n};\n\nGame.prototype.remove = function(asteroid) {\n  let ast = [];\n  for (i = 0; i < this.asteroids.length; i++) {\n    if (asteroid !== this.asteroids[i]) {\n      ast.push(this.asteroids[i]);\n    }\n  }\n  this.asteroids = ast;\n};\n\nGame.prototype.allObjects = function() {\n    let objts = this.asteroids.concat([this.ship]);\n    let objo = objts.concat(this.bullets);\n    return objo;\n    // let objtsbull = objts.concat([this.bullets]);\n    // return objtsbull;\n};\n\nGame.prototype.isOutOfBounds = function(pos){\n    if (pos[0] > Game.DIM_X || pos[0] < 0 || pos[1] > Game.DIM_Y || pos[1] < 0) {\n        return true;\n    }\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  let that = this;\n    this.bindKeyHandlers()\n  const func = function() {\n    that.game.step();\n    that.game.draw(that.ctx);\n  };\n  setInterval(func, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function(){\n    let shp = this.game.ship\n    key('up',function(){shp.power([0,-1])});\n    key('down',function(){shp.power([0, 1])});\n    key('left',function(){shp.power([-1,0])});\n    key('right',function(){shp.power([1, 0])});\n    key('space', function () {shp.fireBullet()});\n\n\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.MovingObject = MovingObject;\nwindow.Util = Util;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\nwindow.Ship = Ship;\nwindow.Bullet = Bullet;\nwindow.addEventListener('DOMContentLoaded', (event) => { \n  //   console.log('DOM fully loaded and parsed');\n    const canvasEl = document.getElementById('game-canvas');\n    canvasEl.width = Game.DIM_X;\n    canvasEl.height = Game.DIM_Y;\n\n    let ctx = canvasEl.getContext(\"2d\");\n    \n//     const mo = new MovingObject({\n//     pos: [60, 60],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n//    });\n//     mo.draw(ctx);\n\n//     const a = new Asteroid({\n//     pos: [30, 30]});\n//     a.draw(ctx);\n\n  // const g = new Game();\n  // g.draw(ctx);\n\n  let gv = new GameView(ctx);\n  gv.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n    this.radius = options[\"radius\"];\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.color = options[\"color\"];\n    this.game = options[\"game\"];\n}\nMovingObject.prototype.draw = function(ctx){\n\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  if (this.isWrappable()){\n  this.pos = this.game.wrap(this.pos);\n  }\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    let pos1 = this.pos;\n    let pos2 = otherObject.pos;\n    let difx = pos1[0] - pos2[0];\n    let dify = pos1[1] - pos2[1];\n    let dist = Math.sqrt((difx * difx) + (dify * dify));\n    if (dist<= this.radius + otherObject.radius) {\n        return true;\n    } else {\n        return false;\n    };\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n    // this.game.remove(this);\n    // this.game.remove(otherObject);\n};\nMovingObject.prototype.isWrappable = function() {return true;}\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nUtil.inherits(Ship, MovingObject);\nfunction Ship(options) {\n  MovingObject.call(this,{color:Ship.COLOR, radius:Ship.RADIUS, vel:[0,0], pos: options['pos'], game: options['game']});\n}\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n};\n\nShip.prototype.power = function(impulse){\n    \n    this.vel[0] += impulse[0];\n    this.vel[1] += impulse[1];\n};\nShip.prototype.fireBullet = function(){\n  let that = this;\n  let newvel = that.vel.slice();\n  let newnewvel = [newvel[0] * 2,newvel[1]*2];\n  let posi = that.pos.slice();\n  let bullet = new Bullet({game: that.game, vel:newnewvel, pos:posi})\n  this.game.bullets.push(bullet);\n};\n\nShip.RADIUS = 5;\nShip.COLOR = \"#00ffff\";\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n  // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });