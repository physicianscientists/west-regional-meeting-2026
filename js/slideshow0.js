// Script for cycling through the slideshow

// Default slideshow starts at intex 1
let slideIndex = 1;
let slideshowInterval; //variable to store the timer interval
showSlides(slideIndex);

// Starting the slideshow timer
startSlideshowTimer();

// Next/previous controls
function plusSlides(n) {
  clearInterval(slideshowInterval); //clear timer interval when user interacts with controls
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(slideshowInterval); //clear timer interval when user interacts with controls
  showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("slideshow-dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshow-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slideshow-active";

  // Restart slideshow timer
  startSlideshowTimer();
} 

// Function to start the slideshow timer
function startSlideshowTimer() {
  clearInterval(slideshowInterval); // Clear interval to prevent multiple intervals
  
  // Set interval to change slides every 5 seconds
  slideshowInterval = setInterval(function() {
    plusSlides(1); // Advance to the next slide
  }, 5000); // 5000 milliseconds = 5 seconds
}

