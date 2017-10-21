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

<<<<<<< HEAD
    update(arrayHoles){
        this.x -= 15;
    }
=======
    update(){
<<<<<<< HEAD
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
       
        
=======
        this.x -= 15;
    }

    falling(){
        
    
>>>>>>> 3de135261c6ca982fc6627a6a4314d01ad3e8234
    }
>>>>>>> ce475b5ff2f0b5cc29d76f7fb9dbd44d738679ba
}
