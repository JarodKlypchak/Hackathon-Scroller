class Person {

    /**
     *
     * Constructor
     */
    constructor(xPos, yPos, lives, score) {
        this.x = xPos;
        this.y = yPos;
        this.movingLeft = false;
        this.movingRight = false;
        this.jumping = false;
        this.height = 32;
        this.width = 32;
        this.lives = lives;
        this.score = score;
        this.screen = 0;
        this.calcScore = this.score % 500;

<<<<<<< HEAD
        //NEW JUMP STUFF
        this.velocity = 0;
        this.force = -1;
=======
        this.velocity = 0;
        this.force = -.1;
        this.jumpVelocity = 5;
>>>>>>> f29fcd6c72e109c67a3693dafe6d0bb3a37ad705
    }

    /**
     *
     * Moves in the X direction for Distance, if there isn't a platform in the way
     */
    moveX(distance, platforms) {
    moveX(distance, platforms, holes) {

        if (this.canMoveLeft(platforms) && this.movingLeft) {
        if (this.canMoveLeft(platforms, holes) && this.movingLeft) {
            this.x += (-distance);
        }
        if (this.canMoveRight(platforms) && this.movingRight) {
        if (this.canMoveRight(platforms, holes) && this.movingRight) {
            this.x += (distance);
        }
    }

    /**
     * Moves in the Y direction for Distance
     */
    moveY(distance) {
        if (this.y > 0 && distance < 0) {
            this.y += distance;
        } else if (distance > 0) {
            this.y += distance;
        }
    }

    /**
     *
     * If time of jump is below the jump duration, moves up. otherwise down.
     */
    jump(time) {

        if (time <= jumpDuration) {
            person.moveY(-jumpDistance);
        } else {

            person.moveY(jumpDistance);

        }
    }

    /**
     *
     * Displays this.
     */
    display(canvas) {
        let ctx = canvas.getContext("2d");
        let img = document.createElement("IMG");
        img.src = "images/portalCube.png";
        img.src = "images/portalCube64.png";
        ctx.drawImage(img, this.x, this.y, charWidth, charWidth);
        //ctx.fillStyle = "#FF0000";
        //ctx.fillRect(this.x, this.y, charWidth, charWidth);
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



         * Handles Falling when not jumping
         *
         */
        if (this.y < h && !this.jumping) {
            this.jumping = true;
            time = 150;
        }
    }

    /**
     * Checks whether or not this should be falling through a gap.
     */
    handleGaps(arrayHoles, arrayPlatforms) {
        if (!this.jumping && !this.platformUnder(arrayPlatforms)) {
            for (let i = 0; i < arrayHoles.length; i++) {
                if (this.x >= arrayHoles[i].x && this.x + 32 <= arrayHoles[i].x + arrayHoles[i].width && this.y <= baseHeight) {
                    this.jumping = true;
                    time = 1000;
                    this.jump(time);

                }
            }
        }
        if (this.y >= baseHeight + 30) {
            jumpDistance = 25;
        }

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
            if (this.x + charWidth >= arrayMonsters[i].getX() && this.x <= arrayMonsters[i].getX() + 20 && this.y <= arrayMonsters[i].getY() + 25 && this.y + charWidth >= arrayMonsters[i].getY()) {
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
        for (let i = 0; i < platforms.length; i++) {
            if (this.y + charWidth >= platforms[i].y + platforms[i].height + 1 && this.y < platforms[i].y) {

                if (this.x + charWidth < platforms[i].x && this.x + charWidth > platforms[i].x - 5) {

                    return false;
                }
            }
        }


        return true;
    }

    /**
     * 
     * Checks this can move  to the left, without hitting a platform.
     */
    canMoveLeft(platforms, holes) {
        for (let i = 0; i < platforms.length; i++) {
            if (this.y + charWidth >= platforms[i].y + platforms[i].height + 1 && this.y < platforms[i].y) {

                if (this.x > platforms[i].x + platforms[i].width && this.x < platforms[i].x + platforms[i].width + 8) {

                    return false;
                }
            }
        }


        return true;
    }
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
    updateScore(score) {
        this.score += score;
        this.calcScore += score;
        if (person.calcScore >= 500) {
            person.lives++;
            person.calcScore -= 500;
        }
    }
<<<<<<< HEAD
    newJump() {
        this.velocity = 10;
    }

    update(platforms, monsters, coins, holes) {
        if (this.velocity != 0) {
            this.moveY(-velocity);
            this.velocity += force;
        }


    }

=======

    update(arrayPlatforms, arrayHoles, arrayCoins) {
        this.moveX(moveDistance, arrayPlatforms, arrayHoles);
        let fallHeight = this.highestObjectBeneath(arrayPlatforms, arrayHoles);

        for (let i = 0; i < arrayPlatforms.length; i++) {
            if (this.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && this.x + 32 >= arrayPlatforms[i].x && this.y > arrayPlatforms[i].y) {
                if (this.belowObject(arrayPlatforms[i].y)) {
                    this.velocity = -1;

                }
            }
        }



        this.moveY(-this.velocity);

        this.velocity += this.force;
        if (this.y + this.height >= fallHeight && this.velocity < 0) {
            this.y = fallHeight - this.height;
            this.velocity = 0;
            this.jumping = false;

        }



        if (this.velocity < 0) {
            this.jumping = true;
        }
        for (let i = 0; i < arrayCoins.length; i++) {
            if (person.hits(arrayCoins[i])) {
                delete arrayCoins[i];
                arrayCoins.splice(i, 1);
                person.updateScore(50);
                i--;
            }
        }

    }

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
>>>>>>> f29fcd6c72e109c67a3693dafe6d0bb3a37ad705
}