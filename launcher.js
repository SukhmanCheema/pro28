class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        //this.slingImage1=loadImage("sprites/sling1.png");
        //this.slingImage2=loadImage("sprites/sling2.png");
        //this.slingImage3=loadImage("sprites/sling3.png");
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }
    attach(body){
    this.launcher.bodyA=body;

    }

    display(){
        //image(this.slingImage1,170,20);
        //image(this.slingImage2,140,20);
        
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<180){
             stroke(48,22,8);
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
            image(this.launcherImage3,pointA.x-25,pointA.y-15,15,30);
            } else{

                stroke(48,22,8);
                strokeWeight(3);
                line(pointA.x-10, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+10, pointA.y, pointB.x+10, pointB.y);
              //  image(this.launcherImage3,pointA.x+25,pointA.y-15,15,30);
                
                
                
                
            }
        }
    }
    
}
