class Ground{
    display(canvas){
        let grass = c.getContext("2d");
        const grassColor = "green";
        grass.fillStyle = grassColor;
        grass.fillRect(0, canvas.height-100, canvas.width, 10);

        let dirt = c.getContext("2d");
        const dirtColor = "#542614";
        dirt.fillStyle = dirtColor;
        dirt.fillRect(0, canvas.height-90, canvas.width, 55);

        let sediment = c.getContext("2d");
        const sedimentColor = "#262728";
        sediment.fillStyle = sedimentColor;
        sediment.fillRect(0, canvas.height-40, canvas.width, 45);
    }
}
