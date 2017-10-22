function createLevel3(canvas) {
    let level = new Array();

    for (let i = 0; i < 4; i++) {
        level[i] = new Array();
    }
    //Holes
    addHoles3(level, canvas);

    //Platform
    addPlatforms3(level, canvas);

    //Monster
    addMonsters3(level, canvas);

    //Coins
    addCoins3(level, canvas);

    //Return level
    return level;
}
//for the second page add canves width * k that you need(canvas.width())
function addHoles3(level, canvas) {
    let hole = new Hole(canvas, 100, 50);
    level[0].push(hole);
    let hole2 = new Hole(canvas, 450, 160);
    level[0].push(hole2);
    let hole3 = new Hole(canvas, canvas.width + 450, 200);
    level[0].push(hole3);

    hole3 = new Hole(canvas, canvas.width * 2 + 100, 150);
    level[0].push(hole3);
    hole3 = new Hole(canvas, canvas.width * 2 + 300, 150);
    level[0].push(hole3);
    hole3 = new Hole(canvas, canvas.width * 2 + 500, 150);
    level[0].push(hole3);
    hole3 = new Hole(canvas, canvas.width * 2 + 700, 150);
    level[0].push(hole3);
}

function addPlatforms3(level, canvas) {
    let platform = new Platform(50, 300, 100);
    level[1].push(platform);
    let platform2 = new Platform(canvas.width + 150, 300, 300);
    level[1].push(platform2);
    platform2 = new Platform(canvas.width + 100, 100, 300);
    level[1].push(platform2);
    platform2 = new Platform(canvas.width + 75, 200, 100);
    level[1].push(platform2);
    let platform3 = new Platform(canvas.width + 650, 400, 100, -200);
    level[1].push(platform3);
}

function addMonsters3(level, canvas) {
    let monster = new Monster(800, 375);
    level[2].push(monster);

    //screen Monsters
    monsterw = new Monster(canvas.width + 170, 275);
    level[2].push(monsterw);
    monsterw = new Monster(canvas.width + 70, 375);
    level[2].push(monsterw);

}

function addCoins3(level) {
    let coin = new Coin(600, 300);
    level[3].push(coin);
    let coin2 = new Coin(900 + 150, 200);
    level[3].push(coin2);
    let coin3 = new Coin(900 + 200, 200);
    level[3].push(coin3);
    let coin4 = new Coin(900 + 250, 200);
    level[3].push(coin4);
    let coin5 = new Coin(900 + 300, 200);
    level[3].push(coin5);
}