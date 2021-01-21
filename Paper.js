class Paper{
    constructor(x, y, radius){
        this.image = loadImage("Sprites/paper.png");
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction': 0.5,
           'density':1.2
        }
        
       this.x = x;
       this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options); //Why radius/2 impacting ball movement
        this.image = loadImage("sprites/paper.png");    
        World.add(world, this.body)
    }
   
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(3)
        fill("white");
        ellipse(0,0,this.radius, this.radius);
      imageMode(CENTER)
      image(this.image, 0, 0, 60, 60);
        pop();
              
    }    


}