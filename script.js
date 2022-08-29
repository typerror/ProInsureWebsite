// NAVBAR

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navlinks');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// SLIDER

var btn = document.getElementsByClassName("choose-btn");
var slide = document.getElementById("slide");

btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
    for (i=0; i<3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = function(){
    slide.style.transform = "translateX(-400px)";
    for (i=0; i<3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = function(){
    slide.style.transform = "translateX(-800px)";
    for (i=0; i<3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

// FLOAT BUTTON

function actionToggle() {
    var flt = document.querySelector('.float-container');
    flt.classList.toggle('active')
}