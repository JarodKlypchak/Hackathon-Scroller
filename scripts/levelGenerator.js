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
    generatePlatforms(level[1], difficulty, level[0]);
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

function generatePlatforms(platforms, difficulty, holes) {
    let safeDistance = 300 - difficulty * 50;

    let numberOfPlatforms = 20 - difficulty * 3;

    let currentPlatforms = 0;

    while (currentPlatforms < numberOfPlatforms) {
        let y;
        let x;
        let width;
        let height;
        if (randomNum(1, 4) == 3) {
            y = 400;
        } else {
            y = randomNum(50, 300);
        }
        width = randomNum(50, 300 - Math.pow(difficulty, 3));
        x = randomNum(0, 900 * 4 - width);
        if (y == 400) {
            height = -1 * randomNum(50, difficulty * 50);
        } else {
            height = 10;
        }

        let canPlace = true;
        for (let i = 0; i < platforms.length; i++) {
            let obj = platforms[i];

            if (x >= obj.x && x <= obj.x + obj.width || x + width >= obj.x && x + width <= obj.x + obj.width) {
                if (y >= obj.y && y <= obj.y + obj.height || (y + height >= obj.y && y + height <= obj.y + obj.height)) {
                    canPlace = false;
                }
            }
            if (obj.x >= x && obj.x <= x + width || (obj.x + obj.width >= x && obj.x + obj.width <= x + width)) {
                if (obj.y >= y && obj.y <= y + height || (obj.y + obj.height >= y && obj.y + obj.height <= y + height)) {
                    canPlace = false;
                }
            }
        }
        if (height < 0) {
            for (let i = 0; i < holes.length; i++) {
                let obj = holes[i];
                if (x >= obj.x && x <= obj.x + obj.width || x + width >= obj.x && x + width <= obj.x + obj.width) {
                    canPlace = false;

                }
                if (obj.x >= x && obj.x <= x + width || (obj.x + obj.width >= x && obj.x + obj.width <= x + width)) {

                    canPlace = false;

                }
            }
        }
        if (canPlace) {
            platforms.push(new Platform(x, y, width, height));
            currentPlatforms++;
        }
    }
    return platforms;

}