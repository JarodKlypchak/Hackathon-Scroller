class Ground{
    display(canvas){
        let grass = c.getContext("2d");
        grass.fillStyle = "green";
        grass.fillRect(0, canvas.height-100, canvas.width, 10);

        let dirt = c.getContext("2d");
        dirt.fillStyle = "#542614";
        dirt.fillRect(0, canvas.height-90, canvas.width, 55);

        let sediment = c.getContext("2d");
        sediment.fillStyle = "#262728";
        sediment.fillRect(0, canvas.height-40, canvas.width, 45);
    }

    hole(canvas, x, width){
        let hole = c.getContext("2d");
        hole.filStyle = "white";
        hole.fillRect(x, canvas.height-100, width, 100);
    }
}
