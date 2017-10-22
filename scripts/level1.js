function createLevel1(canvas){
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
    let level[0] = new Hole(canvas, 50, 50);
    let level[1] = new Hole(canvas, 200, 50);
    let level[2] = new Hole(canvas, 350, 50);
}
function addPlatforms(level, canvas) {
    let level[0] = new Platform(50, 300, 100);
    let platformScreen12 = new Platform(200, 300, 100);
    let platformScreen13 = new Platform(400, 300, 100);
    let wallScreen11 = new Platform(600, 400, 20, -50);

}
function addMonsters(level, canvas) {
    let level[0] = new Monster(800, 375);
    let level[1] = new Monster(750, 375);
    let level[2] = new Monster(50, 275);
    let level[3] = new Monster(1105, 324);
    let level[4] = new Monster(1160, 324);
    let level[5] = new Monster(1200, 324);
    let level[6] = new Monster(1405, 324);
    let level[7] = new Monster(1460, 324);
    let level[8] = new Monster(1500, 324);
}
function addCoins() {

}
