function createLevel0(canvas) {
    let level = new Array();

    for (let i = 0; i < 4; i++) {
        level[i] = new Array();
    }
    //Holes
    addHoles0(level, canvas);

    //Platform
    addPlatforms0(level, canvas);

    //Monster
    addMonsters0(level, canvas);

    //Coins
    addCoins0(level, canvas);

    //Return level
    return level;
}

/*
 * adds holes to sections of level 1
 */
function addHoles0(level, canvas) {
    //section 1
    level[0].push(new Hole(canvas, 400, 100));

    //section 2



}

/*
 * adds platforms to sections of level 1
 */
function addPlatforms0(level, canvas) {

    //section 2
    level[1].push(new Platform(canvas.width + 200, 300, 100));
    level[1].push(new Platform(canvas.width + 600, 300, 100));
    level[1].push(new Platform(canvas.width + 400, 200, 100));
    level[1].push(new Platform(canvas.width + 425, 400, 50, -50));

}

/*
 * adds monsters to sections of level 1
 */
function addMonsters0(level, canvas) {
    level[2].push(new Monster(canvas.width * 2 + 450, 375));
    level[2].push(new JumpMonster(canvas.width * 3 + 450, 375));
    level[2].push(new ShootingMonster(canvas.width * 3 + 800, 375));
}

/*
 * adds coins to sections of level 1
 */
function addCoins0(level, canvas) {
    //section 1
    level[3].push(new Coin(700, 300));
    level[3].push(new Coin(canvas.width + 425, 150));
    level[3].push(new Coin(canvas.width * 2 + 700, 350));


}