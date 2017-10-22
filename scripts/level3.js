function createLevel3(canvas){
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
//for the second page add canves width * k that you need(canvas.width())
function addHoles(level, canvas) {
    let hole = new Hole(canvas, 100, 50);
    level[0].push(hole);
    let hole2 = new Hole(canvas, 200, 180);
    level[0].push(hole2);
    let hole3 = new Hole(canvas, 400, 107);
    level[0].push(hole3);
}
function addPlatforms(level, canvas) {
    let platform = new Platform(50,300,100);
    level[1].push(platform);

}
function addMonsters(level, canvas) {
    let monster = new Monster(800,375);
    level[2].push(monster);
}
function addCoins(level) {
    let coin = new Coin(600,300);
    level[3].push(coin);

}