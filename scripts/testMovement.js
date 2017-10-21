let canvas = document.getElementById("c");
let person = new Person(0, 250);
main();

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

function test() {
    document.body.onkeydown = function(e) {
        checkKey(e);
    }
    setUpCanvas();
    person.display(canvas);
}

function checkKey(e) {


    if (e.keyCode == "39") {
        person.moveX(5);
    } else if (e.keyCode == "37") {
        person.moveX(-5);
    }
    if (e.keyCode == "32") {
        person.moveY(-5);
    }
}