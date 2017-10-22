let hammenu = document.getElementById("hamburgermenu");
hammenu.addEventListener("click", animate);

function animate(){
    document.getElementById("navbar").classList.toggle("animate");
    let dropdown = document.getElementById("dropdown");
    if(dropdown.style.top == "52px")
        dropdown.style.top = "-100%";
    else
        dropdown.style.top = "52px";
}
