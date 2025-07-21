const imageSources = [
    'images/0 (1).jpeg',
    'images/0 (2).jpeg',
    'images/0 (3).jpeg',
    'images/0 (4).jpeg'
];

const sliderContainer = document.querySelector('.slider-container');

// Add images to slider container
imageSources.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'img_mahalaxmi';
    img.style.display = 'none';
    sliderContainer.appendChild(img);
});

const slides = document.querySelectorAll('.img_mahalaxmi');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.querySelector('.prev').onclick = prevSlide;
document.querySelector('.next').onclick = nextSlide;

function startSlider() {
    slideInterval = setInterval(nextSlide, 3000); // Slide every 3 seconds
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Pause slider on hover
sliderContainer.addEventListener('mouseenter', stopSlider);
sliderContainer.addEventListener('mouseleave', startSlider);

// Start the slider
showSlide(currentSlide);
startSlider();
