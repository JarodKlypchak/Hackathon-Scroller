class Person {

    constructor(xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
    }


    moveX(distance) {
        this.x += distance;
    }

    moveY(distance) {
        this.y += distance;
    }

    display(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, 64, 64);
    }

    remove(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "lightgray";
        ctx.fillRect(0, 0, 1000, 500);
    }
}