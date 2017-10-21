let canvas = document.getElementById("c");
let person = new Person(50, 50);
main();

function main() {
    setUpCanvas();
    //<<<<<<< HEAD
    var person = Person(50, 50);
    person.display();
    let ground = Ground(50);
    ground.display();
    //=======


    var temp = setInterval(test, 10);
>>>>>>> 6daf9f10f387cf043efea5feef9c5a792efed8fb
}

function setUpCanvas() {
    canvas.width = 1000;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
}

function test() {
    canvas.clearRec
    person.moveX(5);
    person.display();
}