let index = 0;
const imgs = [
    "1.png",
    "2.png",
    "3.png",
    "4.png"
];

function createDots() {
    let dotContainer = document.getElementById("dots-menu");
    dotContainer.innerHTML = "";
    for (let i = 0; i < imgs.length; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", function() {
            currentSlide(i);
        });
        dotContainer.appendChild(dot);
    }
}

createDots();


function showSlides(n) {
    let dotslide = document.getElementsByClassName("dot");
    let slideImage = document.getElementById("slide-img");

    if (n < 0) {
        index = imgs.length - 1;
    } else if (n >= imgs.length) {
        index = 0;
    }
    slideImage.src = imgs[index];

    for (let i = 0; i < dotslide.length; i++) {
        dotslide[i].classList.remove("active");
    }
    dotslide[index].classList.add("active");
}

showSlides(index);

function prevSlide() {
    showSlides(index -= 1);
}

function nextSlide() {
    showSlides(index += 1);
}

function currentSlide(n) {
    showSlides(index = n);
}

setInterval(nextSlide, 5000);