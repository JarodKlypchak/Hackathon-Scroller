class Monster{

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.changeX = 15;
    }

    display(canvas){
        let monster = c.getContext("2d");
        const monsterColor = "blue";
        monster.fillStyle = monsterColor;
        monster.fillRect(this.x, this.y, 25, 25);
    }

    update(arrayHoles, arrayPlatforms, canvas){
        this.x -= this.changeX;
        for(let i = 0; i < arrayHoles.length; i++){
            if(this.x <= (arrayHoles[i].getX() + arrayHoles[i].getWidth() + 10) && this.x >= (arrayHoles[i].getX() - 10)){
                this.changeX *= -1;
            }
        }
        if(this.x >= canvas.width - 10 || this.x <= 10){
            this.changeX *= -1;
        }
    }
}
