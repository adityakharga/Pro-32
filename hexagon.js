class Hexagon{
    constructor(x,y,width,height){
      var options={
        isStatic : false,
        restitution : 0.8,
        friction : 0.3,
        density : 0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height

      this.image = loadImage("polygon.png")
  
      World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      var angle = this.body.angle
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER)
      image(this.image,0,0,40,40)
      pop();
    }
  }