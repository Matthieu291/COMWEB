function Shape (x,y) {
    this.center = new Point(x,y);

    Shape.prototype.setCenter = function(point){
        this.center = point;
        }

    Shape.prototype.getCenter = function(){
        return this.center; 
    }
}
