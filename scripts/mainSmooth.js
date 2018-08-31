const charWidth = 32;
const baseHeight = 400 - charWidth;
let h = baseHeight;
let jumping = false;
let score = 0;
let person = new Person(5, baseHeight, 5, score);
const moveDistance = .25;
let levelNum = 0;
let jumpDistance = .5;
main(person.lives, person.score);


function main(lives) {

    if (person.lives > 0) {
        let level;
        person = new Person(5, baseHeight, lives, person.score);
        jumpDistance = 5;

        let canvas = document.getElementById("c");
        canvas.width = 900;
        if (levelNum == 0) {
            //level = generateLevel(canvas, 1);
            level = createLevel0(canvas);
        } else if (levelNum == 1) {
            level = createLevel1(canvas);
        } else if (levelNum == 2) {
            lives += 2;
            level = createLevel2(canvas);
        } else if (levelNum == 3) {
            level = createLevel3(canvas);
        } else {
            let difficulty = Math.floor(Math.random() * 3) + 1;
            level = generateLevel(difficulty);
        }
        let arrayHoles = level[0];
        let arrayPlatforms = level[1];
        let arrayMonsters = level[2];
        let arrayCoins = level[3];

        for (let i = 0; i < arrayMonsters.length; i++) {
            arrayMonsters[i].closestPlatform(arrayPlatforms);
        }
        setUpCanvas(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms);
        reset = setInterval(game, 10, arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms, levelNum);
    }
}

/*
 * game function loop that is called in main displays monster and calls everything else
 */

function game(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms, level, arrayBullets) {
    /*
     *Updates monsters and bullets
     */
    for (let i = 0; i < arrayMonsters.length; i++) {
        //check to see if monster is offScreen
        //and updates them
        arrayMonsters[i].offScreen(person, canvas);
        if (arrayMonsters[i].canMove) {
            arrayMonsters[i].update(arrayHoles, arrayPlatforms, canvas);
            //if a ShootingMonster loop through and update bullets
            if (arrayMonsters[i] instanceof ShootingMonster) {
                for (let j = 0; j < arrayMonsters[i].bullets.length; j++) {
                    arrayMonsters[i].bullets[j].update(person);
                    //if bullet hits person lives-- splice all arrays
                    if (!arrayMonsters[i].bullets[j].leavesScreen() && person.hits(arrayMonsters[i].bullets[j])) {
                        person.lives--;
                        //splice all arrays of bullets
                        for (let k = 0; k < arrayMonsters.length; k++) {
                            if (arrayMonsters[k] instanceof ShootingMonster) {
                                arrayMonsters[k].bullets.splice(0, arrayMonsters[k].bullets.length);
                            }
                        }
                        clearInterval(reset);
                        main(person.lives, person.score);
                    }
                    //platform interaction
                    for (let k = 0; k < arrayPlatforms.length; k++) {
                        if (arrayMonsters[i].bullets[j] instanceof FireBall) {
                            if (arrayMonsters[i].bullets[j].hits(arrayPlatforms[k])) {
                                delete arrayMonsters[i].bullets[j];
                                arrayMonsters[i].bullets.splice(j, 1);
                            }
                        }
                    }
                }
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
            person.velocity = person.jumpVelocity / 2;
            arrayMonsters.splice(i, 1);
            person.updateScore(100);
            i--;
        }

    }

    /**
     * Checks if the Character is above the screen, or intersecting a monster.
     */

    if (person.shouldDie(arrayMonsters)) {
        for (let i = 0; i < arrayMonsters.length; i++) {
            if (arrayMonsters[i] instanceof ShootingMonster) {
                arrayMonsters[i].bullets.splice(0, arrayMonsters[i].bullets.length);
            }
        }
        clearInterval(reset);
        main(person.lives, person.score);
    }

    /**
     * Handles when user goes off the right of the screen
     */

    if (person.x > (person.abPosition / (canvas.width * 4)) * canvas.width / 2 && person.abPosition < canvas.width * 3) {
        person.x = (person.abPosition / (canvas.width * 4)) * canvas.width / 2 - 1;
        //person.screen++;
        if (person.screen < 4) {
            person.abPosition += person.movingDistance;
            for (let i = 0; i < arrayMonsters.length; i++) {
                if (arrayMonsters[i] instanceof ShootingMonster) {
                    updateArray(arrayMonsters[i].bullets, person.movingDistance);
                }

            }
            updateArray(arrayCoins, person.movingDistance);
            updateArray(arrayMonsters, person.movingDistance);
            updateArray(arrayHoles, person.movingDistance);
            updateArray(arrayPlatforms, person.movingDistance);
        } else if (person.screen == 4 && level == 3) {
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

    } else if (person.x < (person.abPosition / (canvas.width * 4)) * canvas.width / 2 - 50) {
        person.x = (person.abPosition / (canvas.width * 4)) * canvas.width / 2 - 50;
        person.abPosition -= person.movingDistance;
        for (let i = 0; i < arrayMonsters.length; i++) {
            if (arrayMonsters[i] instanceof ShootingMonster) {
                updateArray(arrayMonsters[i].bullets, -person.movingDistance);
            }

        }
        updateArray(arrayCoins, -person.movingDistance);
        updateArray(arrayMonsters, -person.movingDistance);
        updateArray(arrayHoles, -person.movingDistance)
        updateArray(arrayPlatforms, -person.movingDistance);
    } else if (person.x > canvas.width) {
        clearInterval(reset);
        levelNum++;
        displayLoadingScreen(canvas, levelNum);
        person.screen = 0;

        main(person.lives);
    }



    if (person.abPosition >= canvas.width * 4) {
        person.x = 5;
        person.screen = 4;
        if (person.screen < 4) {
            updateArray(arrayCoins, 900);
            updateArray(arrayMonsters, 900);
            updateArray(arrayHoles, 900);
            updateArray(arrayPlatforms, 900);
        } else if (person.screen == 4 && level == 3) {
            youWin(canvas, person.score);
        } else {
            //arrayBullets = new Array();
            clearInterval(reset);
            levelNum++;
            displayLoadingScreen(canvas, levelNum);
            person.screen = 0;

            main(person.lives);
        }
    }

    /**
     * Handles when user goes off the left of the screen
     */
    else if (person.x + charWidth <= 0) {
        if (person.screen != 0) {
            //arrayBullets = new Array();
            person.screen--;
            person.x = canvas.width - 10;
            updateArray(arrayCoins, -900);
            updateArray(arrayMonsters, -900);
            updateArray(arrayHoles, -900)
            updateArray(arrayPlatforms, -900);
        } else {
            person.x = 0;
        }
    }



    //Update Canvas
    person.update(arrayPlatforms, arrayHoles, arrayCoins);

    setUpCanvas(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms);

    displayStats(person.lives, canvas);
}

/*
 * setup canvas
 */
function setUpCanvas(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms) {
    canvas.width = 900;
    canvas.height = 500;
    canvas.style.backgroundColor = "#7EC0EE";
    canvas.style.border = "1px solid black";
    displayGround(canvas, arrayHoles, arrayPlatforms);
    for (let i = 0; i < arrayMonsters.length; i++) {
        if (arrayMonsters[i].canMove) {
            arrayMonsters[i].display();
        }
        if (arrayMonsters[i].canMove && arrayMonsters[i] instanceof ShootingMonster) {
            for (let j = 0; j < arrayMonsters[i].bullets.length; j++) {
                arrayMonsters[i].bullets[j].display();
            }
        }
    }
    for (let i = 0; i < arrayCoins.length; i++) {
        if (arrayCoins[i].displayed)
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
        if (arrayHoles[i].displayed)
            arrayHoles[i].display();
    }
    for (let i = 0; i < arrayPlatforms.length; i++) {
        if (arrayPlatforms[i].displayed)
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
document.addEventListener("keydown", function(event) {
    if (event.keyCode == "68" || event.keyCode == "39") {
        person.movingRight = true;
    } else if (event.keyCode == "65" || event.keyCode == "37") {
        person.movingLeft = true;
    } else if ((event.keyCode == "87" && !person.jumping) || (event.keyCode == "38" && !person.jumping) || (event.keyCode == "32" && !person.jumping)) {
        //person.jump(time);
        person.velocity = person.jumpVelocity;
        person.jumping = true;

    }
});

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

function youWin(canvas, score) {
    canvas.style.display = "none";
    let displayScore = document.getElementById("movingToLevel");
    movingToLevel.innerHTML = "Score: " + score;
}

function checkOffScreen() {

}

function writeToJson(level) {



}