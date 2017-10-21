let canvas = document.getElementById("c");
let charWidth = 32;
let baseHeight = 400 - charWidth;
let person = new Person(0, baseHeight);
main();
let time = 0;

function main() {
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

}

let jumping = false;
let h = baseHeight;

function test() {
    if (person.x <= platform.x + platform.width && person.x + 32 >= platform.x && person.y < platform.y) {
        h = platform.y - 32;
    } else {
        h = baseHeight;
    }
    if (jumping) {
        if (person.x <= platform.x + platform.width && person.x + 32 >= platform.x && person.y > platform.y) {
            if (person.belowObject(platform.y)) {

                time = 150;
            }
        }
        time += 5;
        jump(time);

        if (person.onObject(h)) {
            time = 0;
            jumping = false;
        }

    }

    if (person.y < h && !jumping) {
        jumping = true;
        time = 150;
    }
    if (movingLeft) {
        person.moveX(-5);
    }
    if (movingRight) {
        person.moveX(5);
    }
    setUpCanvas();
    platform.display();
    person.display(canvas);
}

function jump(time) {

    if (time <= 150) {
        person.moveY(-10);
    } else {

        person.moveY(10);

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