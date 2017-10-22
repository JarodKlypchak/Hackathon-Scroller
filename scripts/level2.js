function createLevel2(canvas) {
    let level = new Array();

    for (let i = 0; i < 4; i++) {
        level[i] = new Array();
    }
    //Holes
    addHoles2(level, canvas);

    //Platform
    addPlatforms2(level, canvas);

    //Monster
    addMonsters2(level, canvas);

    //Coins
    addCoins2(level, canvas);

    //Return level
    return level;
}

function addHoles2(level, canvas) {
    let hole = new Hole(canvas, 100, 50);
    level[0].push(hole);
    let hole2 = new Hole(canvas, 200, 200);
    level[0].push(hole2);
    let hole3 = new Hole(canvas, 600, 100);
    level[0].push(hole3);
    let hole4 = new Hole(canvas, canvas.width, 50);
    level[0].push(hole4);
    let hole5 = new Hole(canvas, canvas.width + 500, 300);
    level[0].push(hole5);
    let hole6 = new Hole(canvas, canvas.width * 2 + 50, 800);
    level[0].push(hole6);
}

function addPlatforms2(level, canvas) {
    let platform = new Platform(250, 300, 100);
    level[1].push(platform);
    let platform2 = new Platform(canvas.width + 150, 400, 10, -50);
    level[1].push(platform2);
    let platform3 = new Platform(canvas.width + 550, 300, 100);
    level[1].push(platform3);
<<<<<<< HEAD
    let platform4 = new Platform(canvas.width * 2 + 150, 300, 50);
    level[1].push(platform4);
    let platform5 = new Platform(canvas.width * 2 + 300, 200, 50);
=======
    let platform4 = new Platform(canvas.width * 2 + 100,300,50);
    level[1].push(platform4);
    let platform5 = new Platform(canvas.width * 2 + 200,200, 50);
>>>>>>> f1fc9195df205a0e0a0d2ca3ea8838b8870fbbcc
    level[1].push(platform5);
    let platform6 = new Platform(canvas.width * 2 + 300,100, 50);
    level[1].push(platform6);
    let platform7 = new Platform(canvas.width * 2 + 400,200, 50);
    level[1].push(platform7);
    let platform8 = new Platform(canvas.width * 2 + 500,100, 100);
    level[1].push(platform8);
}

function addMonsters2(level, canvas) {
    let monster = new Monster(500, 375);
    level[2].push(monster);
    let monster2 = new Monster(175, 375);
    level[2].push(monster2);
    let monster3 = new Monster(75, 375);
    level[2].push(monster3);
    let monster4 = new Monster(canvas.width + 200, 375);
    level[2].push(monster4);
    let monster5 = new Monster(canvas.width + 600, 275);
    level[2].push(monster5);
    let monster6 = new Monster(canvas.width * 2 + 550, 75);
    level[2].push(monster6);
}

function addCoins2(level, canvas) {
    let coin = new Coin(650, 250);
    level[3].push(coin);
    let coin2 = new Coin(300, 150);
    level[3].push(coin2);
    let coin3 = new Coin(canvas.width + 300, 300);
    level[3].push(coin3);
    let coin4 = new Coin(canvas.width + 750, 300);
    level[3].push(coin4);
    for (let i = 0; i < 9; i++) {
        let coin5 = new Coin(canvas.width * 3 + (i*100) + 50, 325);
        level[3].push(coin5);
    }
    let coin6 = new Coin(canvas.width * 2 + 450, 175);
    level[3].push(coin6);
}