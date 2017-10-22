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
<<<<<<< HEAD
document.getElementById("play").addEventListener("click", function() {
=======
/*document.getElementById("play").addEventListener("click", function() {
    console.log("display");
>>>>>>> ed55f388de05cea849049199de818d5775651e37
    document.getElementById("c").style.display = "block";
    document.getElementById("play").style.display = "none";
    document.getElementById("movingToLevel").innerHTML = "";

}); */