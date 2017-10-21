main();

function main(){
    let canvas = document.getElementById("c");
    setUpCanvas(canvas);
    setupGround(canvas);
    let goomba = new Monster(800, 336);
    setInterval(game, 1000, goomba, canvas);
}

function game(goomba, canvas){
    goomba.update();
    setUpCanvas(canvas);
    goomba.display();
    setupGround(canvas);
}

function setUpCanvas(canvas) {
    canvas.width = 900;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
}

function setupGround(canvas){
    let ground = new Ground();
    ground.display(canvas);
    let hole = ground.hole(canvas, 50, 50);
    let hole2 = ground.hole(canvas, 200, 50);
    let hole3 = ground.hole(canvas, 350, 50);
    let platform = ground.platform(50, 300, 100);
}
