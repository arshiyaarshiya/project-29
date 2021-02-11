class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB :pointB,
            stiffnes : 0.04,
            length : 1
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
    }

    display(){
        if(this.sling.bodyA){
            var pos = this.sling.bodyA.position;
            strokeWeight(7);
            stroke("brown");
            line(pos.x,pos.y,this.pointB.x,this.pointB.y);
        }
    }
}