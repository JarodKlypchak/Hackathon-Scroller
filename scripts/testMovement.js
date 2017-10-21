let canvas = document.getElementById("c");

main();

function main() {
    setUpCanvas();
    var person = new Person(50, 50);

    var temp = setInterval(test, 10);
}

function setUpCanvas() {
    canvas.width = 1000;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
}

function test() {
    person.moveX(5);
    person.display();
    console.log("hi");
}