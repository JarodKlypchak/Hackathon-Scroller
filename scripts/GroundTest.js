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

function main(lives) {

    if (person.lives > 0) {
        person = new Person(5, baseHeight, person.lives);
        jumpDistance = 8;
        jump(0.5);
        let canvas = document.getElementById("c");
        let arrayMonsters = [];
        let arrayHoles = [];
        let arrayPlatforms = [];
        setupMonsters(arrayMonsters);
        setupGround(canvas, arrayHoles, arrayPlatforms);
        setUpCanvas(arrayMonsters, canvas, arrayHoles, arrayPlatforms);
        reset = setInterval(game, 50, arrayMonsters, canvas, arrayHoles, arrayPlatforms);

    }
}

/*
 * game function loop that is called in main displays monster and calls everything else
 */
function game(arrayMonsters, canvas, arrayHoles, arrayPlatforms) {
    for (let i = 0; i < arrayMonsters.length; i++) {
        arrayMonsters[i].update(arrayHoles, arrayPlatforms, arrayMonsters, canvas);
    }
    person.handleJump(arrayPlatforms);
    person.handleGaps(arrayHoles, arrayPlatforms);
    person.moveX(moveDistance, arrayPlatforms);
    setUpCanvas(arrayMonsters, canvas, arrayHoles, arrayPlatforms);
    showLives(person.lives, canvas);
    for (let i = 0; i < arrayMonsters.length; i++) {
        killed = arrayMonsters[i].stomped(person);
        if (killed){
            delete arrayMonsters[i];
            arrayMonsters.splice(i, 1);
        }
    }
    if (person.shouldDie(arrayMonsters)) {
        clearInterval(reset);
        main(person.lives);
    }
}

/*
 * setup canvas
 */
function setUpCanvas(arrayMonsters, canvas, arrayHoles, arrayPlatforms) {
    canvas.width = 900;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
    displayGround(canvas, arrayHoles, arrayPlatforms);
    for (let i = 0; i < arrayMonsters.length; i++) {
        arrayMonsters[i].display();
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
function showLives(lives, canvas){
    var context = canvas.getContext("2d");
    context.font = "25px serif";
    context.fillStyle = "black";
    context.fillText("Lives: " + lives, canvas.width - 100, 21);
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
    if (e.keyCode == "68") {
        person.movingRight = true;
    } else if (e.keyCode == "65") {
        person.movingLeft = true;
    } else if (e.keyCode == "87" && !person.jumping) {
        jump(time);
        person.jumping = true;
    }
}

document.body.onkeyup = function(e) {
    if (e.keyCode == "68") {
        person.movingRight = false;
    } else if (e.keyCode == "65") {
        person.movingLeft = false;
    }
}