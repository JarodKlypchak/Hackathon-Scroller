function createLevel1(canvas) {
    let level = new Array();

    for (let i = 0; i < 4; i++) {
        level[i] = new Array();
    }
    //Holes
    addHoles(level, canvas);

    //Platform
    addPlatforms(level, canvas);

    //Monster
    addMonsters(level, canvas);

    //Coins
    addCoins(level, canvas);

    //Return level
    return level;
}

function addHoles(level, canvas) {
    level[0].push(new Hole(canvas, 50, 50));
    level[0].push(new Hole(canvas, 200, 50));
    level[0].push(new Hole(canvas, 350, 50));
    level[0].push(new Hole(canvas, 1000, 700));
}

function addPlatforms(level, canvas) {
    level[1].push(new Platform(50, 300, 100));
    level[1].push(new Platform(200, 300, 100));
    level[1].push(new Platform(400, 300, 100));
    level[1].push(new Platform(600, 400, 20, -50));
    level[1].push(new Platform(canvas.width + 200, 350, 200));
    level[1].push(new Platform(canvas.width + 500, 350, 200));
    level[1].push(new Platform(canvas.width + 425, 250, 50));
    level[1].push(new Platform(canvas.width + 425, 150, 50));
    level[1].push(new Platform(canvas.width + 425, 50, 50));
}

function addMonsters(level, canvas) {
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

function addCoins() {

}