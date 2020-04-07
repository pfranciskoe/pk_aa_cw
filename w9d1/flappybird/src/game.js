
import Level from './level';

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }
  animate(){
    //we're only calling it on "Level"
    //this === Level
    //this.level.animate
    this.level.animate(this.ctx);
  };
  restart(){
    //this is storing a new level as an ivar
    this.level = new Level(this.dimensions);
    this.animate();
  }
  
};



