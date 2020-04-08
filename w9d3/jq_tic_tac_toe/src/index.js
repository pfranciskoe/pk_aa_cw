const View = require("./ttt-view.js")
const Game = require("./game.js")
const Board = require('./board.js')
// const MoveError = require ('./moveError.js')
// const PlayScript = require("./playScript.js")
  $(() => {
    const game = new Game();
    const view = new View(game,$(".ttt"));
  });
