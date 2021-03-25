class  Roof{
    constructer(x,y,width,height){
        this.body = bodies.rectangle(x,y,width,height,{isStaic:true});
        this.width = width;
        this.height = height;
        World.add (world,this.bodies);

    }

    display(){
        push();
        rectmode(CENTER);
        fill(128,128,128);
        rect(this.body.position.x,this. body.position.y);
        pop();
    }
}