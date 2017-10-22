function createLevel2(canvas){
    let level=new Array();

    for(let i=0;i<4;i++){
        level[i]=new Array();
    }
    //Holes
    addHoles(level, canvas);

    //Platform
    addPlatforms(level, canvas);

    //Monster
    addMonsters(level, canvas);

    //Coins
    addCoins(level,canvas);

    //Return level
    return level;
}
function addHoles(level, canvas) {
    let hole = new Hole(canvas, 100, 50);
    level[0].push(hole);
    let hole2 = new Hole(canvas, 200, 200);
    level[0].push(hole2);
    let hole3 = new Hole(canvas, 600, 100);
    level[0].push(hole3);
    let hole4 = new Hole(canvas, canvas.width, 50);
    level[0].push(hole4);
}
function addPlatforms(level) {
    let platform = new Platform(250, 300, 100);
    level[1].push(platform);
}
function addMonsters(level) {
    let monster = new Monster(500,375);
    level[2].push(monster);
    let monster2 = new Monster(175, 375);
    level[2].push(monster2);
    let monster3 = new Monster(75,375);
    level[2].push(monster3);
    //let monster4 = new Monster(canvas.width+200, 375);
    //level[2].push(monster4);
}
function addCoins(level) {
    let coin = new Coin(650,250);
    level[3].push(coin);
    let coin2 = new Coin(300,150);
    level[3].push(coin2);
}