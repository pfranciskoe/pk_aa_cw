const HanoiGame = require("./game")


$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});

HanoiGame.prototype.render(){

};