class Ground{
    constructor(y){
        this.y = y;
    }

    display(canvas){
        let c = c.getContext("2d");
        c.fillStyle = "green";
        c.fillRect(0, 1000, 0, this.y);
    }
}
