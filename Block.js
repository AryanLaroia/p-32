class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density : 0.0001
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("boxj.png");
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed < 3){
        var pos =this.body.position;
      imageMode(CENTER);
      
      image(this.image, pos.x, pos.y, this.width, this.height);
      }else{
     
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        tint(255,this.visibility);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
      }
    }
    score(){
      if(this.visiblity<0 && this.visiblity>-105){
        score= score +1;
      }
    }
    };

    
    
  
