const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Bullet(options){
MovingObject.call(this, { color: Bullet.COLOR, radius: Bullet.RADIUS, vel:options["vel"],
     pos: options['pos'], game: options['game'] });

};
Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroid) {
        otherObject.game.remove();
    }

};
Util.inherits(Bullet, MovingObject);
Bullet.prototype.isWrappable = function(){return false;}
Bullet.RADIUS = 2;
Bullet.COLOR = "#ff4d00";
module.exports = Bullet;