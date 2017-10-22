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
    }

    /*
     * displays coin given canvas
     */
    display() {
        let coin = c.getContext("2d");
        var img=document.createElement("IMG");
        img.src="images/coinNickVersion.jpg";
        coin.drawImage(img,this.x, this.y, 20, 20);
    }

    /*
     * if coin is collected, return true
     */
    coinCollected() {
        let ret = false;
        if ((person.x >= this.x && person.x <= this.x + 20) || (person.x + charWidth >= this.x && person.x + charWidth <= this.x + 20)) {
            if (person.y >= this.y && person.y <= this.y + 20) {
                ret = true;
            }
            if (person.y + charWidth >= this.y && person.y + charWidth <= this.y + 20) {
                ret = true;
            }
        }
        return ret;

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