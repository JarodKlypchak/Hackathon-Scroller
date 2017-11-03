/**
 * This Class Represents the Players Character.
 */
class Person {

    /**
     *
     * Constructor
     */
    constructor(xPos, yPos, lives, score) {
        /**
         * Basic Location Instance Variables
         */
        this.abPosition = xPos;
        this.x = xPos;
        this.y = yPos;
        this.height = 32;
        this.width = 32;

        /**
         * Keeps track of if this is moving left or right.
         */
        this.movingLeft = false;
        this.movingRight = false;
        this.movingDistance = 2;

        /**
         * Number of lives, and the score the user has.
         */
        this.lives = lives;
        this.score = score;
        this.calcScore = this.score % 500;

        /**
         * Keeps Track of which screen of the level the user is on.
         */
        this.screen = 0;


        /**
         * Instance Variables for Jumping
         */
        this.jumping = false;
        this.velocity = 0;
        this.force = -.05;
        this.jumpVelocity = 3.5;
    }


    /**
     *
     * Moves in the X direction for Distance, if there isn't a platform in the way
     */
    moveX(distance, platforms, holes) {

        if (this.y + this.height > 401) {

            for (let i = 0; i < holes.length; i++) {
                if (this.x <= holes[i].x + holes[i].width && this.x + 32 >= holes[i].x) {
                    if (this.x < holes[i].x) {
                        this.movingLeft = false;
                    } else if (this.x + this.width > holes[i].x + holes[i].width) {
                        this.movingRight = false;
                    }
                }
            }
        }


        for (let i = 0; i < 8; i++) {
            if (this.canMoveLeft(platforms, holes) && this.movingLeft) {
                this.x += (-distance);
            }
            if (this.canMoveRight(platforms, holes) && this.movingRight) {
                this.x += (distance);
            }
        }

    }

    /**
     * Moves in the Y direction for Distance
     */
    moveY(distance) {
        if (this.y < 0) {
            this.velocty = -1;
        }
        if (this.y > 0 && distance < 0) {
            this.y += distance;
        } else if (distance > 0) {
            this.y += distance;
        }
    }

    /**
     *
     * Displays this.
     */
    display(canvas) {
        let ctx = canvas.getContext("2d");
        let img = document.createElement("IMG");
        img.src = "images/portalCube64.png";
        ctx.drawImage(img, this.x, this.y, charWidth, charWidth);

    }

    /**
     *
     * Returns true if this is at the set height.
     */
    onObject(height) {
        let result = false;
        if (this.y < height + 10 && this.y > height - 10) {
            result = true;
        }
        return result;
    }

    /**
     *
     * Returns true if this is directly under the set height.
     */
    belowObject(height) {

        let result = false;
        if (this.y < height + 10 && this.y > height) {
            result = true;
        }
        return result;
    }




    /**
     *
     * Checks if a platform is under this
     */
    platformUnder(arrayPlatforms) {
        for (let i = 0; i < arrayPlatforms.length; i++) {
            if (this.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && this.x + 32 >= arrayPlatforms[i].x && this.y < arrayPlatforms[i].y) {
                return true;
            }
        }
    }

    /**
     *
     * Checks if this collided with monster, or fell through the bottom of the screen.
     */
    shouldDie(arrayMonsters) {

        if (this.y > 500) {
            this.jumping = false;
            this.lives--;
            return true;
        }
        for (let i = 0; i < arrayMonsters.length; i++) {
            if (this.x + charWidth >= arrayMonsters[i].getX() && this.x <= arrayMonsters[i].getX() + 20 && this.y <= arrayMonsters[i].getY() && this.y + charWidth >= arrayMonsters[i].getY()) {
                this.jumping = false;
                this.lives--;
                return true;
            }
        }
    }

    /**
     *
     * Checks this can move  to the right, without hitting a platform.
     */
    canMoveRight(platforms, holes) {
        let result = true;
        for (let i = 0; i < platforms.length; i++) {
            if (this.y + charWidth >= platforms[i].y + platforms[i].height + 1 && this.y < platforms[i].y) {

                if (this.x + charWidth < platforms[i].x && this.x + charWidth > platforms[i].x - .5) {

                    result = false;
                }
            }
        }


        return result;
    }

    /**
     * 
     * Checks this can move  to the left, without hitting a platform.
     */
    canMoveLeft(platforms, holes) {
        for (let i = 0; i < platforms.length; i++) {
            if (this.y + charWidth >= platforms[i].y + platforms[i].height + 1 && this.y < platforms[i].y) {

                if (this.x > platforms[i].x + platforms[i].width && this.x < platforms[i].x + platforms[i].width + .5) {

                    return false;
                }
            }
        }


        return true;
    }

    /**
     * 
     * Reports if this colides with obj.
     */
    hits(obj) {
        let result = false;
        if (this.x >= obj.x && this.x <= obj.x + obj.width || (this.x + charWidth >= obj.x && this.x + charWidth <= obj.x + obj.width)) {
            if (this.y >= obj.y && this.y <= obj.y + obj.height || (this.y + charWidth >= obj.y && this.y + charWidth <= obj.y + obj.height)) {
                result = true;
            }
        }
        if (this.obj >= this.x && obj.x <= this.x + this.width || (obj.x + obj.width >= this.x && obj.x + obj.width <= this.x + this.width)) {
            if (obj.y >= this.y && obj.y <= this.y + this.height || (obj.y + obj.height >= this.y && obj.y + obj.height <= this.y + this.height)) {
                result = true;
            }
        }
        return result;
    }

    /**
     * 
     * Addes score to this.score, and checks if an extra live should be awarded.
     */
    updateScore(score) {
        this.score += score;
        this.calcScore += score;
        if (person.calcScore >= 2000) {
            person.lives++;
            person.calcScore -= 2000;
        }
    }




    /**
     * 
     * Main Update that handles all movement of this.
     */

    update(arrayPlatforms, arrayHoles, arrayCoins) {
        this.moveX(moveDistance, arrayPlatforms, arrayHoles);
        let fallHeight = this.highestObjectBeneath(arrayPlatforms, arrayHoles);

        /**
         * Checks if this would hit a platform above it
         */
        for (let i = 0; i < arrayPlatforms.length; i++) {
            if (this.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && this.x + 32 >= arrayPlatforms[i].x && this.y > arrayPlatforms[i].y) {
                if (this.belowObject(arrayPlatforms[i].y)) {
                    this.velocity = -1;

                }
            }
        }


        /**
         * Moves this vertically, changes gravity to account for acceleration
         */
        this.moveY(-this.velocity);
        this.velocity += this.force;

        /**
         * Checks if this should stop falling
         */
        if (this.y + this.height >= fallHeight && this.velocity < 0) {
            this.y = fallHeight - this.height;
            this.velocity = 0;
            this.jumping = false;

        }


        /**
         * Stops the User from Jumping if they are falling
         */
        if (this.velocity < 0) {
            this.jumping = true;
        }

        /**
         * Checks if a Coin is hit
         */
        for (let i = 0; i < arrayCoins.length; i++) {
            if (person.hits(arrayCoins[i])) {
                delete arrayCoins[i];
                arrayCoins.splice(i, 1);
                person.updateScore(50);
                i--;
            }
        }

    }

    /**
     * 
     * Reports the height of the highest object that is beneath the object.
     */
    highestObjectBeneath(arrayPlatforms, arrayHoles) {
        let y = baseHeight + 32;
        if (this.y + this.height - 1 > baseHeight + 32) {
            y = 1000;
        }
        for (let i = 0; i < arrayHoles.length; i++) {
            if (this.x >= arrayHoles[i].x && this.x + this.width <= arrayHoles[i].x + arrayHoles[i].width) {
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