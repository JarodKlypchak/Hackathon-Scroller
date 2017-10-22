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

});
=======
    document.getElementById("pause").style.display = "block";
});
>>>>>>> 3cf7a46b70937324d961a75efc1f5e8dbcba48a2
