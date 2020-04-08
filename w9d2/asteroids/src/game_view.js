const Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  let that = this;
    this.bindKeyHandlers()
  const func = function() {
    that.game.step();
    that.game.draw(that.ctx);
  };
  setInterval(func, 20);
};

GameView.prototype.bindKeyHandlers = function(){
    let shp = this.game.ship
    key('up',function(){shp.power([0,-1])});
    key('down',function(){shp.power([0, 1])});
    key('left',function(){shp.power([-1,0])});
    key('right',function(){shp.power([1, 0])});
}

module.exports = GameView;