 class Hole{
    constructor(canvas, x, width){
        this.x = x;
        this.width = width;
        this.canvas = canvas;
    }

     display(){
        let hole = c.getContext("2d");
        hole.fillStyle = "lightgray";
        hole.fillRect(this.x, this.canvas.height-100, this.width, 100);
    }
}
