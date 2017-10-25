/*
 * class JumpMonster extends Monster
 */
class JumpMonster extends Monster {

    /*
     * constructor calls Monster constructor and adds changeY and velocityY
     */
    constructor(x, y) {
        super(x, y);
        this.changeY = .1;
        this.velocityY = -4;
    }

    /*
     * register if this is below an object
     */
    belowObject(height) {
        let result = false;
        if (this.y < height + 10 && this.y > height) {
            result = true;
        }
        return result;
    }

    /*
     * displays JumpMonster
     */
    display(){
        let picture = c.getContext("2d");
        let img = document.createElement("IMG");
        img.src = "images/JumpMonster.png";
        picture.drawImage(img, this.x, this.y, this.length, this.length);
    }

    /*
     * update function calls Monseter functions along with handling gravity and jump physics
     */
    update(arrayHoles, arrayPlatforms, canvas) {
        if (this.onGround) {
            super.onGroundDontHitPillarsOrFallOff(arrayHoles, arrayPlatforms);
        } else {
            super.stayOnPlatform();
        }
        super.checkOffCanvas(canvas);

        let fallHeight = this.highestObjectBeneath(arrayPlatforms, arrayHoles);
        /**
         * Checks if this would hit a platform above it
         */
        for (let i = 0; i < arrayPlatforms.length; i++) {
            if (this.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && this.x + 32 >= arrayPlatforms[i].x && this.y > arrayPlatforms[i].y) {
                if (this.belowObject(arrayPlatforms[i].y)) {
                    this.velocityY = -1;
                }
            }
        }

        /**
         * Moves this vertically, changes gravity to account for acceleration
         */
        this.y += this.velocityY;
        this.velocityY += this.changeY;
        this.x -= this.changeX;

        /**
         * Checks if this should stop falling
         */
        if (this.y + this.length >= fallHeight) {
            this.y = fallHeight - this.length;
            this.velocityY = -4;
        }
        /*
         * checks to see if Monster is about to leave canvas and stops it by making it fall really fast...
         */
        if (this.y < 0) {
            this.changeY = 1;
        } else {
            this.changeY = .1;
        }
    }

    /*
     * Reports the height of the highest object that is beneath the object.
     */
    highestObjectBeneath(arrayPlatforms, arrayHoles) {
        let y = baseHeight + 32;
        if (this.y + this.length - 1 > y) {
            y = 1000;
        }
        for (let i = 0; i < arrayHoles.length; i++) {
            if (this.x >= arrayHoles[i].x && this.x + this.length <= arrayHoles[i].x + arrayHoles[i].width) {
                y = 1000;
            }
        }


        for (let i = 0; i < arrayPlatforms.length; i++) {
            if (this.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && this.x + 32 >= arrayPlatforms[i].x && this.y <= arrayPlatforms[i].y) {

                if (arrayPlatforms[i].y == 400) {
                    if (arrayPlatforms[i].y + arrayPlatforms[i].height <= y) {

                        y = arrayPlatforms[i].y + arrayPlatforms[i].height;
                    }
                } else if (arrayPlatforms[i].y <= y) {

                    y = arrayPlatforms[i].y;
                }
            }
        }
        return y;
    }
}