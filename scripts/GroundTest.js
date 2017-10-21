const charWidth = 32;
const baseHeight = 400 - charWidth;
let h = baseHeight;
let jumping = false;
let person = new Person(0, baseHeight);

const moveDistance = 5;

let time = 0;
const jumpDuration = 100;
const jumpDistance = 8;
main();

function main() {
    let canvas = document.getElementById("c");
    let goomba = new Monster(800, 375);
    let arrayHoles = [];
    let arrayPlatforms = [];
    setupGround(canvas, arrayHoles, arrayPlatforms);
    setUpCanvas(goomba, canvas, arrayHoles, arrayPlatforms);
    setInterval(game, 100, goomba, canvas, arrayHoles, arrayPlatforms);
}

/*
 * game function loop that is called in main displays monster and calls everything else
 */
function game(goomba, canvas, arrayHoles, arrayPlatforms) {
    goomba.update(arrayHoles, arrayPlatforms, canvas);
    let changed = false;
    for (let i = 0; i < arrayPlatforms.length; i++) {
        if (person.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && person.x + 32 >= arrayPlatforms[i].x && person.y < arrayPlatforms[i].y) {
            h = arrayPlatforms[i].y - charWidth;
            changed = true;
        }
    }
    if (jumping) {
        for (let i = 0; i < arrayPlatforms.length; i++) {
            if (person.x <= arrayPlatforms[i].x + arrayPlatforms[i].width && person.x + 32 >= arrayPlatforms[i].x && person.y > arrayPlatforms[i].y) {
                if (person.belowObject(arrayPlatforms[i].y)) {
                    time = jumpDuration;

                }
            }
        }
        time += 5;
        jump(time);
        if (!changed) {
            h = baseHeight;
        }
        if (person.onObject(h)) {
            time = 0;
            jumping = false;
            person.y = h;
        }
    }



    //Handles Falling when not jumping
    if (person.y < h && !jumping) {
        jumping = true;
        time = 150;
    }
    //Moves Left 5 pixels
    if (person.movingLeft) {
        person.moveX(-moveDistance);
    }

    //Moves Right 5 pixels
    if (person.movingRight) {
        person.moveX(moveDistance);
    }
    setUpCanvas(goomba, canvas, arrayHoles, arrayPlatforms);
}

/*
 * setup canvas
 */
function setUpCanvas(goomba, canvas, arrayHoles, arrayPlatforms) {
    canvas.width = 1000;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
    displayGround(canvas, arrayHoles, arrayPlatforms);
    goomba.display();
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


function jump(time) {

    if (time <= jumpDuration) {
        person.moveY(-jumpDistance);
    } else {

        person.moveY(jumpDistance);

    }
}

document.body.onkeydown = function(e) {
    if (e.keyCode == "39") {
        person.movingRight = true;
    } else if (e.keyCode == "37") {
        person.movingLeft = true;
    } else if (e.keyCode == "32") {
        jump(time);
        jumping = true;
    }
}

document.body.onkeyup = function(e) {
    if (e.keyCode == "39") {
        person.movingRight = false;
    } else if (e.keyCode == "37") {
        person.movingLeft = false;
    }
}