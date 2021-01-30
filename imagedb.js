class dd {
    constructor(x, y, width, height) {
      var options = {

          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     // rectMode(CENTER);
     // strokeWeight(2);
     // stroke("black");
   //   fill("white");
      image(this.image,-40,40, this.width, this.height);
      pop();
    }
  };