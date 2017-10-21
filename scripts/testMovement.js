let canvas = document.getElementById("c");
let charWidth = 32;
let movingLeft = false;
let movingRight = false;
let baseHeight = 400 - charWidth;
let person = new Person(0, baseHeight);
let platform = new Platform(300, 200, 100);
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

        time += 5;
        jump(time);

        if (person.onObject(h)) {
            alert("hi");
            time = 0;
            jumping = false;
        }

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

    if (time <= 1200) {
        person.moveY(-1);
    } else {

        person.moveY(1);

    }
}

document.body.onkeydown = function(e) {
    if (e.keyCode == "39") {
        movingRight = true;
    } else if (e.keyCode == "37") {
        movingLeft = true;
    } else if (e.keyCode == "32") {
        jump(time);
        jumping = true;
    }
}

document.body.onkeyup = function(e) {
    if (e.keyCode == "39") {
        movingRight = false;
    } else if (e.keyCode == "37") {
        movingLeft = false;
    }
}