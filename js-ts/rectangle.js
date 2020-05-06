function Rectangle (x,y,width,height) {
    Shape.call(this, x, y); 
    this.width = width; 
    this.height=height; 

    Rectangle.prototype.draw= function(ctx){
        ctx.beginPath();
        ctx.rect(width/2,height/2 ,width, height);
        ctx.stroke();
    };
}

