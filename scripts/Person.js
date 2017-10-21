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
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x - 8, this.y - 8, this.x + 8, this.y + 8);
    }
}