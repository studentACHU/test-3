class Paper {

constructor(x,y,r)
{

    var options= {
        isStatic:false,
        restitution:0.3,
       friction:0.5,
        density:1.2
}
this.x=x;
this.r=r;
this.y=y;
this.image=loadImage("paper.png");
this.body=Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world,this.body);
}
display()
{
var paperpos = this.body.position;

push();
translate(paperpos.x,paperpos.y);
//rectMode(CENTER);
//strokeWeight(3);
//fill(255,0,0);
imageMode(CENTER);
image(this.image,-40,10,81,80);
//ellipse(0,0,this.r,this.r);
pop()






}
}

























































