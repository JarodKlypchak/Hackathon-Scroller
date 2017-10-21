class Monster{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    display(canvas){
        let monster = c.getContext("2d");
        const monsterColor = "blue";
        monster.fillStyle = monsterColor;
        monster.fillRect(this.x, this.y, 64, 64);
    }

    update(){
        let flop = ture;
        if(flop){
            this.x -= 20;
        }else{
            this.x += 20;
        }
        if(this.x < 450){
            flop = flase;   
        }
        if(this.x > 900){
            flop = true;
        }
       
        
    }
}
