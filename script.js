const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});






const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click' , function(){
    const items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click' , function(){
    const items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length -1])
})



// JavaScript for Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Dot navigation event
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});










const slider = document.getElementById('slider');
let index = 0;
const totalImages = slider.children.length;
const slideWidth = 100; // width as percentage

function startSlider() {
    setInterval(() => {
        index = (index + 1) % totalImages;
        slider.style.transform = `translateX(-${index * slideWidth}%)`;
    }, 3000); // Adjust the interval as needed
}

function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    lightboxImg.src = src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

document.addEventListener('DOMContentLoaded', startSlider);





