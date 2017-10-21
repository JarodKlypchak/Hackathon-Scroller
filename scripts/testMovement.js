let canvas = document.getElementById("c");

let movingLeft = false;
let movingRight = false;
let baseHeight = 336;
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

function test() {

    if (jumping) {
        time += 5;
        jump(time);
        if (!person.onGround) {
            time = 0;
            jumping = false;
        }

    }
    if (movingLeft) {
        person.moveX(-10);
    }
    if (movingRight) {
        person.moveX(10);
    }
    setUpCanvas();
    person.display(canvas);
}

function jump(time) {
    if (time <= 100) {
        person.moveY(-10);
    } else {
        if (person.y < baseHeight) {
            person.moveY(10);
        }
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