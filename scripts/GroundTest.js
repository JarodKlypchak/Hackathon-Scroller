main();

function main(){
    let canvas = document.getElementById("c");
    setUpCanvas(canvas);
    let arrayHoles = [];
    let arrayPlatforms = [];
    setupGround(canvas, arrayHoles, arrayPlatforms);
    let goomba = new Monster(800, 375);
    setInterval(game, 1000, goomba, canvas, arrayHoles, arrayPlatforms);
}

function game(goomba, canvas, arrayHoles, arrayPlatforms){
    goomba.update(arrayHoles, arrayPlatforms, canvas);
    setUpCanvas(canvas);
    goomba.display();
    displayGround(canvas, arrayHoles, arrayPlatforms);
}

function setUpCanvas(canvas) {
    canvas.width = 1500;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
}

function setupGround(canvas, arrayHoles, arrayPlatforms){
    let hole = new Hole(canvas, 50, 50);
    arrayHoles.push(hole);
    let hole2 = new Hole(canvas, 200, 50);
    arrayHoles.push(hole2);
    let hole3 = new Hole(canvas, 350, 50);
    arrayHoles.push(hole3);
    let platform = new Platform(50, 300, 100);
    arrayPlatforms.push(platform);
    let platform1 = new Platform(150, 300, 100);
    arrayPlatforms.push(platform1);
}

function displayGround(canvas, arrayHoles, arrayPlatforms){
    let ground = new Ground();
    ground.display(canvas);
    for(let i = 0; i < arrayHoles.length; i++){
        arrayHoles[i].display();
    }
    for(let i = 0; i < arrayPlatforms; i++){
        arrayPlatforms[i].display();
    }
}
