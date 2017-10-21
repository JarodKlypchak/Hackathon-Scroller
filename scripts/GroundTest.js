main();

function main(){
    let canvas = document.getElementById("c");
    setUpCanvas(canvas);
    setupGround(canvas);
    let goomba = new Monster(800, 375);
    setInterval(game, 1000, goomba, canvas);
}

function game(goomba, canvas){
    goomba.update();
    setUpCanvas(canvas);
    goomba.display();
    setupGround(canvas);
}

function setUpCanvas(canvas) {
    canvas.width = 1500;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
}

function setupGround(canvas){
    let ground = new Ground();
    ground.display(canvas);
    let hole = new Hole(canvas, 50, 50);
    hole.display();
    let hole2 = new Hole(canvas, 200, 50);
    hole2.display();
    let hole3 = new Hole(canvas, 350, 50);
    hole3.display();
    let platform = new Platform(50, 300, 100);
}
