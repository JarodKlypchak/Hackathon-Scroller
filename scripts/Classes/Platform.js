class Platform {
    /*
     * constructor
     */
    constructor(x, y, width, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.displayed = true;
    }

    /*
     * displays platforms
     */
    display() {
        if (this.height == 0) {
            let platform = c.getContext("2d");
            this.platformColor = "#edcc10";
            platform.fillStyle = this.platformColor;
            platform.fillRect(this.x, this.y, this.width, this.height + 10);
        } else {
            let platform = c.getContext("2d");
            this.platformColor = "#edcc10";
            platform.fillStyle = this.platformColor;
            platform.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    /*
     * returns X value
     */
    getX() {
        return this.x;
    }

    /*
     * returns y value
     */
    getY() {
        return this.y;
    }

    /*
     * returns width
     */
    getWidth() {
        return this.width;
    }

    /*
     * checks if it's displayed
     */
    onScreen() {
        if (0 <= this.x && this.x <= 900) {
            this.displayed = true;
        } else {
            this.displayed = false;
        }
    }
}