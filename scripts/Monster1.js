class Monster{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    display(){
        let monster = c.getContext("2d");
        const monsterColor = "blue";
        monster.fillStyle = monsterColor;
        monster.fillRect(this.x, this.y, 64, 64);
    }

    update(){
        this.x += -5;
    }
}
