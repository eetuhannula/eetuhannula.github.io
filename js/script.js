
var menustate = false; 
const menu = document.getElementById('menu-overlay');

function menuClick() {
 
    if (menustate == false) {
        menu.style.top = "0";
        menu.style.left = "0";
        menu.style.transform = "rotate(360deg)"
        menustate = true;
        console.log("SHOW");
    }
    else if (menustate == true) {
        menu.style.top = "-100%";
        menu.style.left = "-100%";
        menu.style.transform = "rotate(-360deg)"
        menustate = false;
        console.log("HIDE");
    }
}