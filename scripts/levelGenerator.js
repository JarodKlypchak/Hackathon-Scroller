function generateLevel(canvas, difficulty) {

    let level = new Array();

    //Holes
    level[0] = new Array();

    //Platforms
    level[1] = new Array();

    //Monsters
    level[2] = new Array();

    //Coins
    level[3] = new Array();

    generateHoles(canvas, level[0], difficulty);
    generatePlatforms(level[1], difficulty);
    return level;
}

function randomNum(start, distance) {
    let i = Math.floor(Math.random() * distance) + start;
    return i;
}

function generateHoles(canvas, holes, difficulty) {
    let safeDistance = 300 - difficulty * 50;

    let numberOfHoles = difficulty * 5 + 15;

    let currentHoles = 0;

    while (currentHoles < numberOfHoles) {
        let width = randomNum(50, difficulty * 50);
        let startingX = randomNum(safeDistance, 900 * 4 - width);
        let canPlace = true;
        for (let i = 0; i < holes.length; i++) {
            let currentHole = holes[i];
            if (startingX - (5 - difficulty) * 10 >= currentHole.x && startingX + (5 - difficulty) * 10 <= currentHole.x + currentHole.width || startingX + width - (5 - difficulty) * 10 >= currentHole.x && startingX + width + (5 - difficulty) * 10 <= currentHole.x + currentHole.width) {

                canPlace = false;
            }
        }
        if (canPlace) {
            currentHoles++;
            holes.push(new Hole(canvas, startingX, width));
        }
    }
    return holes;

}

function generatePlatforms(platforms, difficulty) {
    let safeDistance = 300 - difficulty * 50;

    let numberOfPlatforms = 20 - difficulty * 3;

    let currentPlatforms = 0;

    while (currentPlatforms < numberOfPlatforms) {
        let y;
        let x;
        let width;
        let height;
        if (randomNum(1, 10) == 3) {
            y = 400;
        } else {
            y = randomNum(100, 300);
        }
        width = randomNum(50, 300 - Math.pow(difficulty, 3));
        x = randomNum(0, 900 * 4 - width);
        if (y == 400) {
            height = -1 * randomNum(50, difficulty * 50);
        } else {
            height = 25;
        }
        platforms.push(new Platform(x, y, width, height));
        currentPlatforms++;
    }
    return platforms;

}