main();

function main(){
    let canvas = document.getElementById("c");
    setUpCanvas(canvas);
    let ground = new Ground();
    ground.display(canvas);
    let hole = ground.hole(canvas, 50, 50);
    let hole2 = ground.hole(canvas, 200, 50);
    let hole3 = ground.hole(canvas, 350, 50);
    let platform = ground.platform(50, 300, 100);
    setInterval(game(), 1000);
}

function game(){
    let goomba = new Monster(850, 100);
    goomba.display();
    gommba.update();


}

function setUpCanvas(canvas) {
    canvas.width = 900;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
}
