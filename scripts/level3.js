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
function addHoles(level, canvas) {
    let hole = new Hole(canvas, 100, 50);
    level[0].push(hole);
    let hole2 = new Hole(canvas, 200, 200);
    level[0].push(hole2);
}
function addPlatforms(level, canvas) {

}
function addMonsters(level, canvas) {

}
function addCoins() {

}