const MovingObject = require('./moving_object.js');
const Util = require("./util.js");
Util.inherits(Ship, MovingObject);
function Ship(options) {
  MovingObject.call(this,{color:Ship.COLOR, radius:Ship.RADIUS, vel:[0,0], pos: options['pos'], game: options['game']});
}

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function(impulse){
    
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
};
Ship.prototype.fireBullet = function(){
  let that = this;
  let newvel = that.vel.slice();
  let newnewvel = [newvel[0] * 2,newvel[1]*2];
  let posi = that.pos.slice();
  let bullet = new Bullet({game: that.game, vel:newnewvel, pos:posi})
  this.game.bullets.push(bullet);
};

Ship.RADIUS = 5;
Ship.COLOR = "#00ffff";
module.exports = Ship;