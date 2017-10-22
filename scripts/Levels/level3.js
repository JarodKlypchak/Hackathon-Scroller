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
}

function addPlatforms3(level, canvas) {
    let platform = new Platform(50, 300, 100);
    level[1].push(platform);
    let platform2 = new Platform(canvas.width + 150, 300, 300);
    level[1].push(platform2);
}

function addMonsters3(level, canvas) {
    let monster = new Monster(800, 375);
    level[2].push(monster);

}

function addCoins3(level) {
    let coin = new Coin(600, 300);
    level[3].push(coin);
    let coin2 = new Coin(900 + 150, 275);
    level[3].push(coin2);
    let coin3 = new Coin(900 + 200, 275);
    level[3].push(coin3);
    let coin4 = new Coin(900 + 250, 275);
    level[3].push(coin4);
    let coin5 = new Coin(900 + 300, 275);
    level[3].push(coin5);
}