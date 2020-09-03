class Paper {
    constructor(x,y,r) {
        var options = {
            isStataic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }

        this.image = loadImage("sprites/paper.png");

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world, this.body);
    }
    display(){

        var paperPos = this.body.position;
        console.log(paperPos);

        push();
        translate(paperPos.x, paperPos.y);
        rectMode(CENTER);
        fill(255,255,255);
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}