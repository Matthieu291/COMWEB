
function Circle (x,y,r) {
    Shape.call(this,x,y); 
    this.r=r; 

    Circle.prototype.draw= function(ctx){
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    };

    Circle.prototype.setCenter = function(){
        
    };
}