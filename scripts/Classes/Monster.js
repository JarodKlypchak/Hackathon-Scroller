/*
 * class Monster
 * takes x, y in constructor
 * displays monster and keeps monster on platform or ground and prevents from
 * them killing themselves
 */
class Monster {

    /*
     * constructor takes x, and y value
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 25;
        this.width = 25;
        this.changeX = .8;
    }

    /*
     * registers which platform is closest to the monster if they're not on the ground
     */
    closestPlatform(arrayPlatforms) {
            if (this.y != 375) {
                this.closest = this.x - arrayPlatforms[0].x;
                for (let i = 0; i < arrayPlatforms.length; i++) {
                    if (Math.abs(this.x - arrayPlatforms[i].x) <= this.closest && this.y + 25 == arrayPlatforms[i].y) {
                        this.closestPlat = arrayPlatforms[i];
                        this.closest = this.x - this.closestPlat.x;
                    }
                }
            }
        }
        /*
         * displays monster given canvas
         */
    display() {
        let monster = c.getContext("2d");
        var img = document.createElement("IMG");
        img.src = "images/Slime.png";
        monster.drawImage(img, this.x, this.y, 25, 25);
    }

    /*
     * update funtion for monster calls arrayHoles, arrayPlatforms, and canvas
     */
    update(arrayHoles, arrayPlatforms, canvas) {
        this.x -= this.changeX;
        /*
         * checks holes and sees if it's on it so it doesn't fall off
         */
        if (this.y == 375) {
            for (let i = 0; i < arrayHoles.length; i++) {
                if (this.x <= (arrayHoles[i].getX() + arrayHoles[i].getWidth()) && this.x >= (arrayHoles[i].getX() - 25)) {
                    this.changeX *= -1;
                }
            }

            /*
             * check to see if monsters run into pillars
             */
            for (let i = 0; i < arrayPlatforms.length; i++) {
                if (arrayPlatforms[i].height != 0) {
                    if (this.y <= arrayPlatforms[i].y && this.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && this.x >= arrayPlatforms[i].x - 26) {
                        this.changeX *= -1;
                    }
                }
            }
            /*
             * checks platforms and sees if it's on it so it doesn't fall off
             */
        } else {
            if (this.x >= (this.closestPlat.getX() + this.closestPlat.getWidth() - 26) || this.x <= this.closestPlat.getX()) {
                this.changeX *= -1;
            }
        }
        /*
         * check to see if they're about to leave the canvas
         */
        if (this.x >= canvas.width - 25 || this.x <= 25) {
            this.changeX *= -1;
        }
    }

    /*
     * if person stomps monster return true
     */
    stomped(person) {
        if (person.x >= this.x - 27 && person.x <= this.x + 27 && person.y + 34 >= this.y && person.y <= this.y + 25) {
            return true;
        }
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

    /*
     * monster off screen
     */
    offScreen(person, canvas) {
        if (person.x - canvas.width > this.x) {
            this.changeX = 0;
        }
    }
}