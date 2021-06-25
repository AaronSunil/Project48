class Wall {
    constructor(x,y,width,height) {
      var b=createSprite(x,y,width,height);
      b.shapeColor="pink";
    }
    display(p){

      p.collide(b)
    }
  };
