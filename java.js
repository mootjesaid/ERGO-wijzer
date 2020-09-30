/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide2");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}



var slideIndex3 = 1;
showSlides3(slideIndex);
function plusSlides3(n) {
    showSlides3(slideIndex += n);
}
function currentSlide3(n) {
    showSlides3(slideIndex = n);
}
function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("slides3");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

}


var slideIndex4 = 1;
showSlides4(slideIndex);

function plusSlides4(n) {
    showSlides4(slideIndex += n);
}

function currentSlide4(n) {
    showSlides4(slideIndex = n);
}

function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("slides4");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

}

var slideIndex5 = 1;
showSlides5(slideIndex);

function plusSlides5(n) {
    showSlides5(slideIndex += n);
}

function currentSlide5(n) {
    showSlides5(slideIndex = n);
}

function showSlides5(n) {
    var i;
    var slides = document.getElementsByClassName("slides5");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


