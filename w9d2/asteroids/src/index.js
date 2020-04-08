console.log("Webpack is working!");
const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;
window.Bullet = Bullet;
window.addEventListener('DOMContentLoaded', (event) => { 
  //   console.log('DOM fully loaded and parsed');
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;

    let ctx = canvasEl.getContext("2d");
    
//     const mo = new MovingObject({
//     pos: [60, 60],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
//    });
//     mo.draw(ctx);

//     const a = new Asteroid({
//     pos: [30, 30]});
//     a.draw(ctx);

  // const g = new Game();
  // g.draw(ctx);

  let gv = new GameView(ctx);
  gv.start();
});