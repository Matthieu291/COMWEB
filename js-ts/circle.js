
function Circle (x,y,r) {
    this.r=r; 
}

Circle.prototype = Object(Shape.prototype);

Circle.prototype.draw= function(ctx){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}
 