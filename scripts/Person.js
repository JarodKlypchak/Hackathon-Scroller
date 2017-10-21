class Person {

    constructor(xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
    }


    moveX(distance) {
        this.x += distance;
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
        if (this.y < height + 1 && this.y > height - 1) {
            result = true;
        }
        return result;
    }
}