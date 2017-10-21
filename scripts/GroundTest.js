main();

function main(){
    let canvas = document.getElementById("c");
    setUpCanvas(canvas);
    let arrayHoles = [];
    setupGround(canvas, arrayHoles);
    let goomba = new Monster(800, 375, arrayHoles);
    setInterval(game, 1000, goomba, canvas, arrayHoles);
}

function game(goomba, canvas, arrayHoles){
    goomba.update(arrayHoles);
    setUpCanvas(canvas);
    goomba.display();
    displayGround(canvas, arrayHoles);
}

function setUpCanvas(canvas) {
    canvas.width = 1500;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
}

function setupGround(canvas, arrayHoles){
    let hole = new Hole(canvas, 50, 50);
    arrayHoles.push(hole);
    let hole2 = new Hole(canvas, 200, 50);
    arrayHoles.push(hole2);
    let hole3 = new Hole(canvas, 350, 50);
    arrayHoles.push(hole3);
}

function displayGround(canvas, arrayHoles){
    let ground = new Ground();
    ground.display(canvas);
    for(let i = 0; i < arrayHoles.length; i++){
        arrayHoles[i].display();
    }
    let platform = new Platform(50, 300, 100);
    platform.display();
}
