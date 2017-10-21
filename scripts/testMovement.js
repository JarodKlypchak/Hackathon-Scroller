let canvas = document.getElementById("c");
let charWidth = 32;
let baseHeight = 400 - charWidth;
let person = new Person(0, baseHeight, lives);
main();

let moveDistance = 5;

let time = 0;
let jumpDuration = 100;
let jumpDistance = 8;

function main() {
    alert(this.person)
    jumpDistance = 8;
    setUpCanvas();


    var temp = setInterval(test, 10);

}

function setUpCanvas() {
    canvas.width = 1000;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 400, 1000, 100);
    platform.display();
    person.display(canvas);

}

let jumping = false;
let h = baseHeight;

function test() {
    if (person.x <= platform.x + platform.width && person.x + 32 >= platform.x && person.y < platform.y) {
        h = platform.y - charWidth;
    } else {
        h = baseHeight;
    }
    if (jumping) {
        if (person.x <= platform.x + platform.width && person.x + 32 >= platform.x && person.y > platform.y) {
            if (person.belowObject(platform.y)) {
                time = jumpDuration;
            }
        }
        time += 5;
        jump(time);

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
    if (movingLeft) {
        person.moveX(-moveDistance);
    }

    //Moves Right 5 pixels
    if (movingRight) {
        person.moveX(moveDistance);
    }

    //Handles Display
    setUpCanvas();

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