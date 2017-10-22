const charWidth = 32;
const baseHeight = 400 - charWidth;
let h = baseHeight;
let jumping = false;
let score = 0;
let person = new Person(5, baseHeight, 5, score);
const moveDistance = 5;
let levelNum = 3;
let time = 0;
const jumpDuration = 75;
let jumpDistance = 8;
main(person.lives, person.score);

function main(lives) {

    if (person.lives > 0) {
        let level;
        person = new Person(5, baseHeight, person.lives, person.score);

        jumpDistance = 8;
        person.jump(0.5);
        let canvas = document.getElementById("c");
        canvas.width = 900;
        if (levelNum == 1) {
            level = createLevel1(canvas);
        } else if (levelNum == 2) {
            level = createLevel2(canvas);
        } else if (levelNum == 3) {
            level = createLevel3(canvas);
        }
        let arrayHoles = level[0];
        let arrayPlatforms = level[1];
        let arrayMonsters = level[2];
        let arrayCoins = level[3];

        for(let i = 0; i < arrayMonsters.length; i++){
            arrayMonsters[i].closestPlatform(arrayPlatforms);
        }

        setUpCanvas(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms);
        reset = setInterval(game, 50, arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms, levelNum);
    }
}

/*
 * game function loop that is called in main displays monster and calls everything else
 */

function game(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms, level) {

    /*
     *Updates monsters
     */
    for (let i = 0; i < arrayMonsters.length; i++) {
        arrayMonsters[i].update(arrayHoles, arrayPlatforms, canvas);
        arrayMonsters[i].offScreen(person, canvas);
    }
    /**
     * Handles User Movement
     */
    person.handleJump(arrayPlatforms);
    person.handleGaps(arrayHoles, arrayPlatforms);
    person.moveX(moveDistance, arrayPlatforms);

    /**
     * Checks if Coins are collected.
     */
    for (let i = 0; i < arrayCoins.length; i++) {
        let collected = arrayCoins[i].coinCollected(person);
        if (collected) {
            delete arrayCoins[i];
            arrayCoins.splice(i, 1);
            person.score += 50;
            if (person.score % 550 == 0) {
                person.lives++;
            } else if (person.score % 500 == 0) {
                person.lives++;
            }
        }
    }

    /**
     * Checks if a each monster has been killed.
     */
    for (let i = 0; i < arrayMonsters.length; i++) {
        let killed = arrayMonsters[i].stomped(person);
        if (killed) {
            delete arrayMonsters[i];
            person.jump(10);
            arrayMonsters.splice(i, 1);
            person.score += 100;
            if (person.score % 550 == 0) {
                person.lives++;
            } else if (person.score % 500 == 0) {
                person.lives++;
            }
        }
    }
    /**
     * Checks if the Character is above the screen, or intersecting a monster.
     */
    if (person.shouldDie(arrayMonsters)) {
        clearInterval(reset);
        main(person.lives, person.score);
    }

    /**
     * Handles when user goes off the right of the screen
     */
    for(let i = 0; i < arrayMonsters.length; i++){
        arrayMonsters[i].closestPlatform(arrayPlatforms);
    }
    if (person.x >= canvas.width) {
        person.x = 10;
        person.screen++;
        if (person.screen < 4) {
            updateArray(arrayCoins, 900);
            updateArray(arrayMonsters, 900);
            updateArray(arrayHoles, 900);
            updateArray(arrayPlatforms, 900);
        } else if(person.screen == 4 && level == 3){
            youWin(canvas, person.score);
        } else {
            clearInterval(reset);
            levelNum++;
            displayLoadingScreen(canvas, levelNum);
            person.screen = 0;
            main(person.lives);
        }
        /**
         * Handles when user goes off the left of the screen
         */
    } else if (person.x + charWidth <= 0) {
        person.x = canvas.width - 10;
        updateArray(arrayCoins, -900);
        updateArray(arrayMonsters, -900);
        updateArray(arrayHoles, -900)
        updateArray(arrayPlatforms, -900);
    }

    //Update Canvas
    setUpCanvas(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms);
    displayStats(person.lives, canvas);
}

/*
 * setup canvas
 */
function setUpCanvas(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms) {
    canvas.width = 900;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
    displayGround(canvas, arrayHoles, arrayPlatforms);
    for (let i = 0; i < arrayMonsters.length; i++) {
        arrayMonsters[i].display();
    }
    for (let i = 0; i < arrayCoins.length; i++) {
        arrayCoins[i].display();
    }
    person.display(canvas);
}

/*
 * displays ground, holes, platforms
 */
function displayGround(canvas, arrayHoles, arrayPlatforms) {
    let ground = new Ground();
    ground.display(canvas);
    for (let i = 0; i < arrayHoles.length; i++) {
        arrayHoles[i].display();
    }
    for (let i = 0; i < arrayPlatforms.length; i++) {
        arrayPlatforms[i].display();
    }
}

/*
 * shows lives to user
 */
function displayStats(lives, canvas) {
    var context = canvas.getContext("2d");
    context.font = "25px serif";
    context.fillStyle = "black";
    context.fillText("Lives: " + person.lives, canvas.width - 100, 21);
    context.fillText("Score: " + person.score, 0, 21);
}

/*
 * detect user input in the event of the spacebar, left arrow, and right arrow are pressed down.
 */
document.body.onkeydown = function(e) {
    if (e.keyCode == "68" || e.keyCode == "39") {
        person.movingRight = true;
    } else if (e.keyCode == "65" || e.keyCode == "37") {
        person.movingLeft = true;
    } else if ((e.keyCode == "87" && !person.jumping) || (e.keyCode == "38" && !person.jumping) || (e.keyCode == "32" && !person.jumping)) {
        person.jump(time);
        person.jumping = true;
    }
}

/**
 * Detects when keys for finishing moving left and right.
 */
document.body.onkeyup = function(e) {
    if (e.keyCode == "68" || e.keyCode == "39") {
        person.movingRight = false;
    } else if (e.keyCode == "65" || e.keyCode == "37") {
        person.movingLeft = false;
    }
}

/*
 * Updates array, in the event of moving off of a screen.
 * Moves Each Element Backwards by distance.
 */
function updateArray(array, distance) {
    for (let i = 0; i < array.length; i++) {
        array[i].x -= distance;
    }


}

/*
 * Displays loading screen for 5 seconds.
 */
function displayLoadingScreen(canvas, level) {
    canvas.style.display = "none";
    let movingToLevel = document.getElementById("movingToLevel");
    movingToLevel.innerHTML = "Moving to Level " + level;
    let loader = document.getElementById("loader");
    loader.style.display = "block";
    setTimeout(function() {
        loader.style.display = "none";
        movingToLevel.innerHTML = "";
        canvas.style.display = "block";
    }, 5000);
}

function youWin(canvas, score){
    canvas.style.display = "none";
    let displayScore = document.getElementById("movingToLevel");
    movingToLevel.innerHTML = "Score: " + score;
}