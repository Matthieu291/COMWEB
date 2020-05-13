class Circle1 extends Shape1{
    r : number; 
    constructor(r:number, x:number, y:number){
        super(x,y); 
        this.r = r; 
    }
    protected setCenter1 (p:Point1){
        this.center = p; 
    }
    protected draw (ctx:CanvasRenderingContext2D){
        ctx.beginPath(); 
        ctx.arc(this.center.getX, this.center.getY, this.r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}