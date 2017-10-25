/*
 * class Coin
 * takes x,y in constructor
 * displays coin and then disappears when the main character passes through it
 */
class Coin {
    /*
     * constructor takes x, y value
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 20;
        this.width = 20;
    }

    /*
     * displays coin given canvas
     */
    display() {
        let coin = c.getContext("2d");
        var img = document.createElement("IMG");
        img.src = "images/Coin20.png";
        coin.drawImage(img, this.x, this.y, this.width, this.width);
    }



    /*
     * returns X
     */
    getX() {
        return this.x;
    }

    /*
     * returns Y
     */
    getY() {
        return this.y;
    }
}