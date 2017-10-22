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
<<<<<<< HEAD

/*document.getElementById("play").addEventListener("click", function() {
=======
document.getElementById("play").addEventListener("click", function() {
>>>>>>> parent of ed55f38... god damn
=======
document.getElementById("play").addEventListener("click", function() {
>>>>>>> parent of ed55f38... god damn
    console.log("display");

    document.getElementById("c").style.display = "block";
    document.getElementById("play").style.display = "none";
    document.getElementById("movingToLevel").innerHTML = "";

});