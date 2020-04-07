// Function.prototype.inherits = function(parent) {
// function Surrogate(){};
// Surrogate.prototype = parent.prototype;
// this.prototype = new Surrogate();
// this.prototype.constructor = this;
// };
Function.prototype.inherits = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};


function MovingObject() { }

function Ship() { 
    MovingObject.call(this)
}
Ship.inherits(MovingObject);

function Asteroid() {
  MovingObject.call(this)
 }
Asteroid.inherits(MovingObject);

MovingObject.prototype.sayHi = function() {
console.log("hi")
};

let redShip = new Ship();
redShip.sayHi();