class FireBall {
    constructor(xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
        this.width = 10;
        this.height = 10;
        this.speed = -2;
    }

    update(person, arrayPlatforms, arrayMonsters) {
        this.x += this.speed;
    }

    leavesScreen() {
        if (this.x <= 0)
            return true;
    }

    display() {
            let ctx = c.getContext("2d");
            let img = document.createElement("IMG");
            img.src = "images/FIREBALL.png";
            ctx.drawImage(img, this.x, this.y, this.width, this.height);
        }
        /**
         * 
         * Reports if this colides with obj.
         */
    hits(obj) {
        let result = false;
        let swapped = false;
        if (obj.height < 0) {
            obj.y += obj.height;
            obj.height *= -1;
            swapped = true;
        }
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
        if (swapped) {
            obj.y += obj.height;
            obj.height *= -1;
        }
        return result;
    }
}