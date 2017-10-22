class Person {

    constructor(xPos, yPos, lives, score) {
        this.x = xPos;
        this.y = yPos;
        this.movingLeft = false;
        this.movingRight = false;
        this.jumping = false;
        this.lives = lives;
        this.score = score;
        this.screen = 0;
    }


    moveX(distance, platforms) {

        if (this.canMoveLeft(platforms) && this.movingLeft) {
            this.x += (-distance);
        }
        if (this.canMoveRight(platforms) && this.movingRight) {
            this.x += (distance);
        }
    }

    moveY(distance) {
        if (this.y > 0 && distance < 0) {
            this.y += distance;
        } else if (distance > 0) {
            this.y += distance;
        }
    }

    display(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, charWidth, charWidth);
    }

    remove(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "lightgray";
        ctx.fillRect(0, 0, 1000, 500);
    }

    onObject(height) {
        let result = false;
        if (this.y < height + 10 && this.y > height - 10) {
            result = true;
        }
        return result;
    }

    belowObject(height) {

        let result = false;
        if (this.y < height + 10 && this.y > height) {
            result = true;
        }
        return result;
    }
    handleJump(arrayPlatforms) {
        let changed = false;
        for (let i = 0; i < arrayPlatforms.length; i++) {
            if (this.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && this.x + 32 >= arrayPlatforms[i].x && this.y < arrayPlatforms[i].y) {
                h = arrayPlatforms[i].y - charWidth + arrayPlatforms[i].height;
                changed = true;
            }
        }
        if (this.jumping) {
            for (let i = 0; i < arrayPlatforms.length; i++) {
                if (this.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && this.x + 32 >= arrayPlatforms[i].x && this.y > arrayPlatforms[i].y) {
                    if (this.belowObject(arrayPlatforms[i].y)) {
                        time = jumpDuration;

                    }
                }
            }
            time += 5;
            jump(time);

            if (this.onObject(h)) {
                time = 0;
                this.jumping = false;
                this.y = h;
            }
        }
        if (!changed) {
            h = baseHeight;
        }

        //Handles Falling when not jumping
        if (this.y < h && !this.jumping) {
            this.jumping = true;
            time = 150;
        }
    }
    handleGaps(arrayHoles, arrayPlatforms) {
        if (!this.jumping && !this.platformUnder(arrayPlatforms)) {
            for (let i = 0; i < arrayHoles.length; i++) {
                if (this.x >= arrayHoles[i].x && this.x + 32 <= arrayHoles[i].x + arrayHoles[i].width && this.y <= baseHeight) {
                    this.jumping = true;
                    time = 1000;
                    jump(time);

                }
            }
        }
        if (this.y >= baseHeight + 30) {
            jumpDistance = 25;
        }

    }
    platformUnder(arrayPlatforms) {
        for (let i = 0; i < arrayPlatforms.length; i++) {
            if (this.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && this.x + 32 >= arrayPlatforms[i].x && this.y < arrayPlatforms[i].y) {
                return true;
            }
        }
    }

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

    canMoveRight(platforms) {
        for (let i = 0; i < platforms.length; i++) {
            if (this.y + charWidth >= platforms[i].y + platforms[i].height + 1 && this.y < platforms[i].y) {

                if (this.x + charWidth < platforms[i].x && this.x + charWidth > platforms[i].x - 5) {

                    return false;
                }
            }
        }
        return true;
    }
    canMoveLeft(platforms) {
        for (let i = 0; i < platforms.length; i++) {
            if (this.y + charWidth >= platforms[i].y + platforms[i].height + 1 && this.y < platforms[i].y) {

                if (this.x > platforms[i].x + platforms[i].width && this.x < platforms[i].x + platforms[i].width + 8) {

                    return false;
                }
            }
        }
        return true;
    }
}