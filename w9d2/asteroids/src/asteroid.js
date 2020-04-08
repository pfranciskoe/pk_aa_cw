const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Ship = require("./ship.js");

function Asteroid(options) {
    MovingObject.call(this, {
      game: options["game"], color: Asteroid.COLOR, radius: Asteroid.RADIUS,
      pos: options['pos'], vel: Util.randomVec(2)});

}
Util.inherits(Asteroid, MovingObject);
Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
        otherObject.relocate();
  }
  if (otherObject instanceof Bullet) {
    this.game.remove(this);
  }
};

Asteroid.COLOR = '#723f3f';
Asteroid.RADIUS = 10; 
module.exports = Asteroid;