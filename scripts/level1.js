function createLevel1(canvas) {
    let level = new Array();

    for (let i = 0; i < 4; i++) {
        level[i] = new Array();
    }
    //Holes
    addHoles1(level, canvas);

    //Platform
    addPlatforms1(level, canvas);

    //Monster
    addMonsters1(level, canvas);

    //Coins
    addCoins1(level, canvas);

    //Return level
    return level;
}

function addHoles1(level, canvas) {
    level[0].push(new Hole(canvas, canvas + 50, 50));
    level[0].push(new Hole(canvas, canvas + 200, 50));
    level[0].push(new Hole(canvas, canvas + 350, 50));
    level[0].push(new Hole(canvas, canvas + 200, 700));
}

function addPlatforms1(level, canvas) {
    level[1].push(new Platform(canvas.width + 50, 300, 100));
    level[1].push(new Platform(canvas.width + 200, 300, 100));
    level[1].push(new Platform(canvas.width + 400, 300, 100));
    level[1].push(new Platform(canvas.width + 600, 400, 20, -50));

    level[1].push(new Platform(canvas.width * 2 + 200, 350, 200));
    level[1].push(new Platform(canvas.width * 2 + 500, 350, 200));
    level[1].push(new Platform(canvas.width * 2 + 425, 250, 50));
    level[1].push(new Platform(canvas.width * 2 + 425, 150, 50));
    level[1].push(new Platform(canvas.width * 2 + 425, 50, 50));
}



function addMonsters1(level, canvas) {
    level[2].push(new Monster(800, 375));
    level[2].push(new Monster(750, 375));
    level[2].push(new Monster(50, 275));

    level[2].push(new Monster(1105, 324));
    level[2].push(new Monster(1160, 324));
    level[2].push(new Monster(1200, 324));
    level[2].push(new Monster(1405, 324));
    level[2].push(new Monster(1460, 324));
    level[2].push(new Monster(1500, 324));
}

function addCoins1(level, canvas) {
    level[3].push(new Coin(canvas + 200, 200));
    level[3].push(new Coin(canvas + 350, 240));
}