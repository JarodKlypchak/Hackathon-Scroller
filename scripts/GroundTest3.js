const charWidth = 32;
const baseHeight = 400 - charWidth;
let h = baseHeight;
let jumping = false;
let person = new Person(5, baseHeight, 5);
const moveDistance = 5;

let time = 0;
const jumpDuration = 75;
let jumpDistance = 8;
main(person.lives);
let score = 0;
function main(lives) {
    if (person.lives > 0) {
        person = new Person(5, baseHeight, person.lives);
        jumpDistance = 8;
        jump(0.5);
        let canvas = document.getElementById("c");
        let level=createLevel3(canvas);
        let arrayMonsters = level[2];
        let arrayHoles = level[0];
        let arrayPlatforms = level[1];
        let arrayCoins = level[3];
        
        setUpCanvas(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms);
        reset = setInterval(game, 50, arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms);
    }
}

/*
 * game function loop that is called in main displays monster and calls everything else
 */

function game(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms, ) {

    for (let i = 0; i < arrayMonsters.length; i++) {
        arrayMonsters[i].update(arrayHoles, arrayPlatforms, arrayMonsters, canvas);
        arrayMonsters[i].offScreen(person, canvas);
    }
    person.handleJump(arrayPlatforms);
    person.handleGaps(arrayHoles, arrayPlatforms);
    person.moveX(moveDistance, arrayPlatforms);

    for (let i = 0; i < arrayCoins.length; i++) {
        let collected = arrayCoins[i].coinCollected(person);
        if (collected) {
            delete arrayCoins[i];
            arrayCoins.splice(i, 1);
            score += 50;
        }
    }

    for (let i = 0; i < arrayMonsters.length; i++) {
        let killed = arrayMonsters[i].stomped(person);
        if (killed) {
            delete arrayMonsters[i];
            arrayMonsters.splice(i, 1);
            score += 100;
        }
    }
    if (person.shouldDie(arrayMonsters)) {
        clearInterval(reset);
        main(person.lives);
    }
    if (person.x >= canvas.width) {
        person.x = 10;
        updateArray(arrayCoins, 900);
        updateArray(arrayMonsters, 900);
        updateArray(arrayHoles, 900);
        updateArray(arrayPlatforms, 900);
        console.log(arrayHoles);
    } else if (person.x + charWidth <= 0) {
        person.x = canvas.width - 10;
        updateArray(arrayCoins, -900);
        updateArray(arrayMonsters, -900);
        updateArray(arrayHoles, -900)
        updateArray(arrayPlatforms, -900);
        console.log(arrayHoles);
    }
    setUpCanvas(arrayCoins, arrayMonsters, canvas, arrayHoles, arrayPlatforms);
    displayStats(person.lives, canvas);
}

/*
 * setup coins
 */
function setupCoins(arrayCoins) {
    let temp = new Coin(200, 200);
    arrayCoins.push(temp);
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
 * creates holes and platforms and pushes them to arrays
 */
function setupGround(canvas, arrayHoles, arrayPlatforms) {
    let hole = new Hole(canvas, 50, 50);
    arrayHoles.push(hole);
    let hole2 = new Hole(canvas, 200, 50);
    arrayHoles.push(hole2);
    let hole3 = new Hole(canvas, 350, 50);
    arrayHoles.push(hole3);
    let platform = new Platform(50, 300, 100);
    arrayPlatforms.push(platform);
    let platform1 = new Platform(200, 300, 100);
    arrayPlatforms.push(platform1);
    let platform2 = new Platform(400, 300, 100);
    arrayPlatforms.push(platform2);
    let wall = new Platform(600, 400, 20, -50);
    arrayPlatforms.push(wall);
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
 * creates monster and appends them to array
 */
function setupMonsters(arrayMonsters) {
    let goomba = new Monster(800, 375);
    arrayMonsters.push(goomba);
    let goomba1 = new Monster(750, 375);
    arrayMonsters.push(goomba1);
    let goomba2 = new Monster(50, 275);
    arrayMonsters.push(goomba2);
}

/*
 * shows lives to user
 */
function displayStats(lives, canvas) {
    var context = canvas.getContext("2d");
    context.font = "25px serif";
    context.fillStyle = "black";
    context.fillText("Lives: " + lives, canvas.width - 100, 21);
    context.fillText("Score: " + score, 0, 21);
}


function jump(time) {

    if (time <= jumpDuration) {
        person.moveY(-jumpDistance);
    } else {

        person.moveY(jumpDistance);

    }
}

/*
 * detect user input
 */
document.body.onkeydown = function(e) {
    if (e.keyCode == "68" || e.keyCode == "39") {
        person.movingRight = true;
    } else if (e.keyCode == "65" || e.keyCode == "37") {
        person.movingLeft = true;
    } else if ((e.keyCode == "87" && !person.jumping) || (e.keyCode == "38" && !person.jumping) || (e.keyCode == "32" && !person.jumping)) {
        jump(time);
        person.jumping = true;
    }
}

document.body.onkeyup = function(e) {
    if (e.keyCode == "68" || e.keyCode == "39") {
        person.movingRight = false;
    } else if (e.keyCode == "65" || e.keyCode == "37") {
        person.movingLeft = false;
    }
}

function updateArray(array, distance) {
    for (let i = 0; i < array.length; i++) {
        array[i].x -= distance;
    }
}