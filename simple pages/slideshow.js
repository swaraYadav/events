let
function slideshow(n){
let i;
let slides=document.getElementsByClassName("myslide");

}
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  let slides = document.getElementsByClassName("mySlide")
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
