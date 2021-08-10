class playerArcher {
    constructor(x,y) {
     var options = {
     restitution: 0.8,
     friction: 1.0,
     density: 1.0,
     isStatic: true
     };
     this.r = 40;
   
     this.body = Bodies.rectangle(x, y, this.r, options);
   
     this.image = loadImage("./assets/bow.png");
     World.add(world, this.body);
   }
   
   display() {
       if(move === "UP" && computerArcher.body.angle < 1.77) {
           angleValue = 0.1;
       }else{
           angleValue = -0.1;
       }

       if(move === "DOWN" && computerArcher.body.angle > 1.47) {
        angleValue = -0.1;
    }else{
        angleValue = 0.1;
    }

       var angle = this.body.angle;
       var pos = this.body.position;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image, 0, 0, this.r, this.r);
       pop();
       }
   }
   
       Matter.Body.setAngle(this.body,-PI/2);
       
   