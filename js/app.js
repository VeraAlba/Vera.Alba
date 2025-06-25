// Detectar el scroll y aplicar los cambios de fondo
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // Si el scroll es mayor a 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let currentIndex = 0;

const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

function moveToSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    
    updateCarousel();
}

function updateCarousel() {
    const newTransform = `translateX(-${currentIndex * 100}%)`;
    document.querySelector(".carousel-container").style.transform = newTransform;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

nextButton.addEventListener("click", () => {
    moveToSlide(currentIndex + 1);
});

prevButton.addEventListener("click", () => {
    moveToSlide(currentIndex - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => moveToSlide(index));
});
