class Platform{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        if(height === undefined)
            this.height = 0;
        else
            this.height = height;
    }

    /*
     * displays platforms
     */
    display(){
        if(this.height == 0){
            let platform = c.getContext("2d");
            this.platformColor = "#edcc10";
            platform.fillStyle = this.platformColor;
            platform.fillRect(this.x, this.y, this.width, 10);
        } else{
            let platform = c.getContext("2d");
            this.platformColor = "#edcc10";
            platform.fillStyle = this.platformColor;
            platform.fillRect(this.x, this.y, this.width, this.height);
        }
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
