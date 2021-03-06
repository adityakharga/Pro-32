class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.00,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    attach(){
    this.sling.bodyA = body
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke(255)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
        }
   
    }
    
}