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

    update(){
        this.x -= 15;
    }

    falling(){
        
    
    }
}
