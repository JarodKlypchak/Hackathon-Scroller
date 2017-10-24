/*
 * holes in ground
 * params canvas, x value, width
 *
 */
 class Hole{
    constructor(canvas, x, width){
        this.x = x;
        this.width = width;
        this.canvas = canvas;
    }

     /*
      * display function
      */
     display(){
        let hole = c.getContext("2d");
        this.holeColor = "#7EC0EE";
        hole.fillStyle = this.holeColor;
        hole.fillRect(this.x, this.canvas.height-100, this.width, 100);
    }

     /*
      * get X
      */
     getX(){
        return this.x;
    }

     /*
      * get width
      */
     getWidth(){
        return this.width;
    }
}
