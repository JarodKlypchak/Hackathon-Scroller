main();

function main(){
    let canvas = document.getElementById("c");
    setUpCanvas(canvas);
    let ground = new Ground();
    ground.display(canvas);
    let hole = ground.hole(canvas, 50, 100);
}

function setUpCanvas(canvas) {
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.backgroundColor = "lightgray";
    canvas.style.border = "1px solid black";
}
