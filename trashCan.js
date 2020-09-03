class TrashCan {
    constructor(x,y,width,height) {

        this.x = x;
        this.y = y;
        this.TrashCanWidth = 200;
        this.TrashCanHeight = 320;
        this.Thickness = 20;
        this.angle = 0;

        this.image = loadImage("sprites/dustbingreen.png")
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.TrashCanWidth,this.Thickness,{isStatic:true});
        this.leftWallBody = Bodies.rectangle(this.x-this.TrashCanWidth/2,this.y-this.TrashCanHeight/2,this.Thickness,this.TrashCanHeight,{isStatic:true});
        Matter.Body.setAngle(this.leftWallBody, this.angle);

        this.rightWallBody = Bodies.rectangle(this.x+this.TrashCanWidth/2,this.y-this.TrashCanHeight/2,this.Thickness,this.TrashCanHeight,{isStatic:true});
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody);
   
    }
display(){

    var posBottom = this.bottomBody.position;
    var posLeft = this.leftWallBody.position;
    var posRight = this.rightWallBody.position;

    push();
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rotate(this.angle);
    rect(0,0,this.Thickness, this.TrashCanHeight);
    pop();

    push();
    translate(posRight.x, posRight.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rotate(-1*this.angle);
    rect(0,0,this.Thickness, this.TrashCanHeight);
    pop();

    push();
    translate(posBottom.x, posBottom.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rect(0,0,this.TrashCanWidth, this.Thickness);
    imageMode(CENTER);
    image(this.image, 10, -155, this.width, this.height);
    pop();
  }
}