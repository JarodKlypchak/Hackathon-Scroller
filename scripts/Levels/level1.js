function createLevel1(canvas){
    let level=new Array();

    for(let i=0;i<4;i++){
        level[i]=new Array();
    }
    //Holes
    addHoles1(level, canvas);

    //Platform
    addPlatforms1(level, canvas);

    //Monster
    addMonsters1(level, canvas);

    //Coins
    addCoins1(level,canvas);

    //Return level
    return level;
}

/*
 * adds holes to sections of level 1
 */
function addHoles1(level, canvas) {
    //section 1
    level[0].push(new Hole(canvas, 100, 50));
    level[0].push(new Hole(canvas, 250, 50));
    level[0].push(new Hole(canvas, 350, 50));
    level[0].push(new Hole(canvas, 650, 50));

    //section 2
    level[0].push(new Hole(canvas, canvas.width + 50, 50));
    level[0].push(new Hole(canvas, canvas.width + 200, 50));
    level[0].push(new Hole(canvas, canvas.width + 350, 50));
    level[0].push(new Hole(canvas, canvas.width + 650, 50));

    //section 3
    level[0].push(new Hole(canvas, canvas.width*2 + 150, 600));
}

/*
 * adds platforms to sections of level 1
 */
function addPlatforms1(level, canvas) {
    //section 1
    level[1].push(new Platform(canvas.width + 50, 300, 100));
    level[1].push(new Platform(canvas.width + 200, 300, 100));
    level[1].push(new Platform(canvas.width + 400, 300, 100));
    level[1].push(new Platform(canvas.width + 600, 400, 20, -50));

    //section 2
    level[1].push(new Platform(canvas.width * 2 + 200, 350, 200));
    level[1].push(new Platform(canvas.width * 2 + 500, 350, 200));
    level[1].push(new Platform(canvas.width * 2 + 425, 250, 50));
    level[1].push(new Platform(canvas.width * 2 + 425, 150, 50));
    level[1].push(new Platform(canvas.width * 2 + 425, 50, 50));
}

/*
 * adds monsters to sections of level 1
 */
function addMonsters1(level, canvas) {
    //section 1
    level[2].push(new Monster(canvas.width + 800, 375));
    level[2].push(new Monster(canvas.width + 750, 375));
    level[2].push(new Monster(canvas.width + 55, 275));
    level[2].push(new Monster(canvas.width + 250, 275));
    level[2].push(new Monster(canvas.width + 315, 375));

    //section 2
    level[2].push(new Monster(canvas.width * 2 + 205, 324));
    level[2].push(new Monster(canvas.width * 2 + 260, 324));
    level[2].push(new Monster(canvas.width * 2 + 300, 324));
    level[2].push(new Monster(canvas.width * 2 + 505, 324));
    level[2].push(new Monster(canvas.width * 2 + 560, 324));
    level[2].push(new Monster(canvas.width * 2 + 600, 324));
}

/*
 * adds coins to sections of level 1
 */
function addCoins1(level, canvas) {
    //section 1
    level[3].push(new Coin(120, 325));
    level[3].push(new Coin(260, 325));
    level[3].push(new Coin(360, 325));
    level[3].push(new Coin(666, 325));

    //section 2
    level[3].push(new Coin(canvas.width + 200, 200));
    level[3].push(new Coin(canvas.width + 350, 240));
}