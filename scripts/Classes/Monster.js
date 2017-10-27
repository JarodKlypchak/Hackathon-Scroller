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
        this.length = 25;
        this.x = x;
        this.y = y;
        this.changeX = .8;
        this.closestPlat;
        if(this.y == 375){
            this.onGround = true;
        } else {
            this.onGround = false;
        }
    }

    /*
     * registers which platform is closest to the monster if they're not on the ground
     */
    closestPlatform(arrayPlatforms) {
        if (!this.onGround) {
            this.closest = this.x - arrayPlatforms[0].x;
            for (let i = 0; i < arrayPlatforms.length; i++) {
                if (Math.abs(this.x - arrayPlatforms[i].x) <= this.closest && this.y + this.length == arrayPlatforms[i].y) {
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
        img.src = "images/Slime20Remake.png";
        monster.drawImage(img, this.x, this.y, this.length, this.length);
    }

    /*
     * update funtion for monster calls arrayHoles, arrayPlatforms, and canvas
     */
    update(arrayHoles, arrayPlatforms, canvas) {
        this.x -= this.changeX;
        if (this.onGround) {
            this.onGroundDontHitPillarsOrFallOff(arrayHoles, arrayPlatforms);
        } else {
            this.stayOnPlatform();
        }
        this.checkOffCanvas(canvas);
    }

    /*
     * don't fall down a hole or hit a pillar
     */
    onGroundDontHitPillarsOrFallOff(arrayHoles, arrayPlatforms){
        if (this.onGround) {
            for (let i = 0; i < arrayHoles.length; i++) {
                if (this.x <= (arrayHoles[i].getX() + arrayHoles[i].getWidth()) && this.x >= (arrayHoles[i].getX() - this.length)) {
                    this.changeX *= -1;
                }
            }
            /*
             * check to see if monsters run into pillars
             */
            for (let i = 0; i < arrayPlatforms.length; i++) {
                if (arrayPlatforms[i].height != 0) {
                    if (this.y <= arrayPlatforms[i].y && !(this.y <= arrayPlatforms[i].y + arrayPlatforms[i].height) && this.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && this.x >= arrayPlatforms[i].x - this.length) {
                        this.changeX *= -1;
                    }
                }
            }
        }
    }

    /*
     * don't fall off platform
     */
    stayOnPlatform(){
        if (this.x >= (this.closestPlat.getX() + this.closestPlat.getWidth() - this.length -1) || this.x <= this.closestPlat.getX()) {
            this.changeX *= -1;
        }
    }

    /*
     * check to see if they're about to leave the canvas
     */
    checkOffCanvas(canvas) {
        if (this.x >= canvas.width - this.length || this.x <= this.length) {
            this.changeX *= -1;
        }
    }

    /*
     * if person stomps monster return true
     */
    stomped(person) {
        if (person.x >= this.x - this.length && person.x <= this.x + this.length && person.y + charWidth + 2 <= this.y && person.y <= this.y && !(person.y <= this.y - charWidth - 10)) {
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
    offScreen(screen) {
        if(!(screen == 0 && this.x >= 0 && this.x <= 900)){
            this.changeX = 0;
        } else if(!(screen > 0 && this.x >= (screen - 1) * 900 + 1 && this.x <= screen * 900)){
            this.changeX = 0;
        }
    }
}