class Platform{
    constructor(x, y, width){
        this.x = x;
        this.y = y;
        this.width = width;
    }

    /*
     * displays platforms
     */
    display(){
        let platform = c.getContext("2d");
        this.platformColor = "#edcc10";
        platform.fillStyle = this.platformColor;
        platform.fillRect(this.x, this.y, this.width, 10);
    }

    /*
     * returns X value
     */
    getX(){
        return this.x;
    }

    /*
     * returns y value
     */
    getY(){
        return this.y;
    }

    /*
     * returns width
     */
    getWidth(){
        return this.width;
    }
}
