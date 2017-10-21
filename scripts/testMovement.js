let canvas = document.getElementById("c");

main();

function main() {
    setUpCanvas();
    var person = Person(50, 50);
    person.display();
}

function setUpCanvas() {
    canvas.width = 1000;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
}