class Monster{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    display(canvas){
        let monster = c.getContext("2d");
        const monsterColor = "blue";
        monster.fillStyle = monsterColor;
        monster.fillRect(this.x, this.y, 25, 25);
    }

    update(arrayHoles){
        this.x -= 15;
        for(let i = 0; i < arrayHoles.length; i++){
            if(this.x <= (arrayHoles[i].getX() + arrayHoles[i].getWidth()) && this.x >= (arrayHoles[i].getX())){
                console.log("oh no I died");
            }
        }
    }
}
