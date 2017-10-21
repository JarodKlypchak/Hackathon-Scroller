class Ground(){
    constructor(y){
        this.y = 50;
    }

    function display(canvas){
        let c = c.getContext("2d");
        c.fillStyle = "green";
        c.fillRect(0, 1000, 0, this.y);
    }
}
