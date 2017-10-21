function Person(xPos, yPos) {


    this.x = xPos;
    this.y = yPos;


    function moveX(distance) {
        this.x += distance;
    }

    function moveY(distance) {
        this.y += distance;
    }

    function display(canvas) {
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x - 8, this.x + 8, this.y - 8, this.y + 8);
    }
}