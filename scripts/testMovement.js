let canvas = document.getElementById("c");
let person = new Person(0, 250);
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
}
let jumping = false;

function test() {

    if (jumping) {
        time += 10;
        if (time == 500) {
            time = 0;
            jumping = false;
        }
        jump(time);
    }

    setUpCanvas();
    person.display(canvas);
}

function jump(time) {
    if (time < 100) {
        person.moveY(-10);
    } else {
        person.moveY(2);
    }
}

document.body.onkeydown = function(e) {
    if (e.keyCode == "39") {
        person.moveX(5);
    } else if (e.keyCode == "37") {
        person.moveX(-5);
    } else if (e.keyCode == "32") {
        jump(time);
        jumping = true;
    }
}