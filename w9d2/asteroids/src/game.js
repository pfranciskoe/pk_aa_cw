const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js")
function Game(){
    this.asteroids = [];
    this.ship = new Ship({ pos: this.randomPosition(), game: this });
    this.addAsteroids();
    this.bullets = [];
}

Game.DIM_X = 600;
Game.DIM_Y = 350;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function(){
    for (i = 0; i < Game.NUM_ASTEROIDS; i++){
        let randPos = this.randomPosition();
        this.asteroids.push(new Asteroid({pos:randPos, game:this}));
    }
};

Game.prototype.randomPosition = function() {
let posi = [0,0];
    posi[0] = Math.floor(Math.random() * Game.DIM_X);
    posi[1] = Math.floor(Math.random() * Game.DIM_Y);

return posi;
};

Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach((obj)=>obj.draw(ctx));
};
Game.prototype.moveObjects = function(){
    this.allObjects().forEach((obj)=>obj.move());
};

Game.prototype.wrap = function(pos) {
    if (pos[0] >= Game.DIM_X) { pos[0] = 0; return pos;}
    if (pos[0] <= 0) { pos[0] = Game.DIM_X; return pos;}
    if (pos[1] >= Game.DIM_Y) { pos[1] = 0; return pos;}
    if (pos[1] <= 0) { pos[1] = Game.DIM_Y; return pos;}
    return pos;
};
Game.prototype.checkCollisions = function() {
      for (j = 0; j < this.asteroids.length; j++) {
          if (this.asteroids[j].isCollidedWith(this.ship)){
            this.asteroids[j].collideWith(this.ship);
          }
          for(i=0;i<this.bullets.length; i++){
            if (this.asteroids[j].isCollidedWith(this.bullets[i])) {
                console.log("hit")
                this.asteroids[j].collideWith(this.bullets[i]);
            }
        } 
      }
};

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
  let ast = [];
  for (i = 0; i < this.asteroids.length; i++) {
    if (asteroid !== this.asteroids[i]) {
      ast.push(this.asteroids[i]);
    }
  }
  this.asteroids = ast;
};

Game.prototype.allObjects = function() {
    let objts = this.asteroids.concat([this.ship]);
    let objo = objts.concat(this.bullets);
    return objo;
    // let objtsbull = objts.concat([this.bullets]);
    // return objtsbull;
};

Game.prototype.isOutOfBounds = function(pos){
    if (pos[0] > Game.DIM_X || pos[0] < 0 || pos[1] > Game.DIM_Y || pos[1] < 0) {
        return true;
    }
};

module.exports = Game;