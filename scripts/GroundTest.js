const charWidth = 32;
const baseHeight = 400 - charWidth;
let h = baseHeight;
let jumping = false;
let person = new Person(895, baseHeight, 5);
const moveDistance = 5;

let time = 0;
const jumpDuration = 75;
let jumpDistance = 8;
main(person.lives);

function main(lives) {


    if (person.lives > 0) {
        person = new Person(895, baseHeight, person.lives);
        jumpDistance = 8;
        jump(0.5);
        let canvas = document.getElementById("c");
        canvas.width = 900;
        let level = createLevel1(canvas);
        let arrayHoles = level[0];
        let arrayPlatforms = level[1];
        let arrayMonsters = level[2];
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
            person.score += 50;
        }
    }

    for (let i = 0; i < arrayMonsters.length; i++) {
        let killed = arrayMonsters[i].stomped(person);
        if (killed) {
            delete arrayMonsters[i];
<<<<<<< HEAD
=======

            jump(10);

>>>>>>> 40d293f14e8e780812742fb978be13279da8af21
            arrayMonsters.splice(i, 1);
            person.score += 100;
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
    } else if (person.x + charWidth <= 0) {
        person.x = canvas.width - 10;
        updateArray(arrayCoins, -900);
        updateArray(arrayMonsters, -900);
        updateArray(arrayHoles, -900)
        updateArray(arrayPlatforms, -900);
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
    let holeScreen11 = new Hole(canvas, 50, 50);
    arrayHoles.push(holeScreen11);
    let holeScreen12 = new Hole(canvas, 200, 50);
    arrayHoles.push(holeScreen12);
    let holeScreen13 = new Hole(canvas, 350, 50);
    arrayHoles.push(holeScreen13);
    let platformScreen11 = new Platform(50, 300, 100);
    arrayPlatforms.push(platformScreen11);
    let platformScreen12 = new Platform(200, 300, 100);
    arrayPlatforms.push(platformScreen12);
    let platformScreen13 = new Platform(400, 300, 100);
    arrayPlatforms.push(platformScreen13);
    let wallScreen11 = new Platform(600, 400, 20, -50);
    arrayPlatforms.push(wallScreen11);

    let platformScreen21 = new Platform(1100, 350, 200);
    arrayPlatforms.push(platformScreen21);
    let platformScreen22 = new Platform(1400, 350, 200);
    arrayPlatforms.push(platformScreen22);
    let platformScreen23 = new Platform(1325, 250, 50);
    arrayPlatforms.push(platformScreen23);
    let platformScreen24 = new Platform(1325, 150, 50);
    arrayPlatforms.push(platformScreen24);
    let platformScreen25 = new Platform(1325, 50, 50);
    arrayPlatforms.push(platformScreen25);
    let holeScreen21 = new Hole(canvas, 1000, 700);
    arrayHoles.push(holeScreen21);
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
    let goombaScreen11 = new Monster(800, 375);
    arrayMonsters.push(goombaScreen11);
    let goombaScreen12 = new Monster(750, 375);
    arrayMonsters.push(goombaScreen12);
    let goombaScreen13 = new Monster(50, 275);
    arrayMonsters.push(goombaScreen13);

    let goombaScreen21 = new Monster(1105, 324);
    arrayMonsters.push(goombaScreen21);
    let goombaScreen22 = new Monster(1160, 324);
    arrayMonsters.push(goombaScreen22);
    let goombaScreen23 = new Monster(1200, 324);
    arrayMonsters.push(goombaScreen23);
    let goombaScreen24 = new Monster(1405, 324);
    arrayMonsters.push(goombaScreen24);
    let goombaScreen25 = new Monster(1460, 324);
    arrayMonsters.push(goombaScreen25);
    let goombaScreen26 = new Monster(1500, 324);
    arrayMonsters.push(goombaScreen26);
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