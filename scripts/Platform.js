class Platform{
    constructor(x, y, width){
        this.x = x;
        this.y = y;
        this.width = width;
    }

    display(){
        let platform = c.getContext("2d");
        const platformColor = "#edcc10";
        platform.fillStyle = this.platformColor;
        platform.fillRect(this.x, this.y, this.width, 10);
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getWidth(){
        return this.width;
    }
}
