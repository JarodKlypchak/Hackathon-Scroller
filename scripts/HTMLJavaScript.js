/*
 * event listener for menu button
 */
let hammenu = document.getElementById("hamburgermenu");
hammenu.addEventListener("click", animate);

function animate() {
    document.getElementById("navbar").classList.toggle("animate");
    let dropdown = document.getElementById("dropdown");
    if (dropdown.style.top == "52px")
        dropdown.style.top = "-100%";
    else
        dropdown.style.top = "52px";
}

/*
 * event listener for play button
 */
document.getElementById("play").addEventListener("click", function() {
    document.getElementById("c").style.display = "block";
    document.getElementById("play").style.display = "none";
    document.getElementById("movingToLevel").innerHTML = "";
<<<<<<< HEAD
=======

>>>>>>> 579518f1ed84181af4ea65329b0e9f1c54509348
});