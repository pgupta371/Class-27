class Chain{
    constructor(bodyA, bodyB){
        var opt = { bodyA: bodyA, 
            bodyB: bodyB, 
            stiffness: 1,
            lenght: 10,
          }
    this.chain = Constraint.create(opt);
    World.add(world, this.chain);
    }
    display() {
        var posa = this.chain.bodyA.position;
        var posb = this.chain.bodyB.position;

        strokeWeight(5);
        line(posa.x, posa.y, posb.x, posb.y);
      }
}