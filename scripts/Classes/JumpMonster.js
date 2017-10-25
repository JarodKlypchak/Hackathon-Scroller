class JumpMonster extends Monster {

    constructor(x, y) {
        super(x, y);
        this.changeY = .1;
        this.velocityY = -4;
    }

    update(arrayHoles, arrayPlatforms, canvas) {
            Monster.prototype.update(arrayHoles, arrayPlatforms, canvas);


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
            console.log(fallHeight);
            /**
             * Checks if this should stop falling
             */
            if (this.y + this.length >= fallHeight) {

                this.y = fallHeight - this.length;
                this.velocityY = -4;
            }
        }
        /**
         * 
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
    belowObject(height) {

        let result = false;
        if (this.y < height + 10 && this.y > height) {
            result = true;
        }
        return result;
    }


}