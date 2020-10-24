class Plinko {
    constructor(x, y,r) {
      var options = {

          'isStatic':true
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.color=color((0,255),(0,255),(0,255));
      this.body=Bodies.circle(x,y,this.r/2,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(0, 0,this.r);
      pop();
    }
  };
  