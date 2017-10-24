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
    document.getElementById("jump").style.visibility = "visible";
    document.getElementById("left").style.visibility = "visible";
    document.getElementById("right").style.visibility = "visible";
});

/*
 * event listener for left button pressed down
 */
document.getElementById("left").addEventListener("mousedown", function(event){
    person.movingLeft = true;
});

/*
 * event listener for left button not down
 */
document.getElementById("left").addEventListener("mouseup", function(event){
    person.movingLeft = false;
});

/*
 * event listener for right button pressed down
 */
document.getElementById("right").addEventListener("mousedown", function(event){
    person.movingRight = true;
});

/*
 * event listener for right button not pressed
 */
document.getElementById("right").addEventListener("mouseup", function(event){
    person.movingRight = false;
});

/*
 * event listener for jump button
 */
document.getElementById("jump").addEventListener("click", function(event){
    if(!person.jumping){
        person.velocity = 10;
        person.jumping = true;
    }
});