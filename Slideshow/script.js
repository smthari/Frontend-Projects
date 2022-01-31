var slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
  // console.log(showSlides(slideIndex))
  // console.log(slideIndex)
}

// we have to pass n as an parameter in function
// we'll get the value of n by calling function and passing slideIndex as an argument
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(typeof slides + " " + slides.length);

  // let's write condition to loop a slideshow
  // when n is greater then slides.length then value of slideIndex should be 1
  if (n > slides.length) {
    slideIndex = 1;
  }
  // when n is less then 1 then value of slideIndex should be equal to slides.length
  if (n < 1) {
    slideIndex = slides.length;
  }

  /* hiding all images by default using display none  */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // console.log(slides[i])
  }

  slides[slideIndex - 1].style.display = "block";
  // console.log(`slide index ${slideIndex - 1}`);
}

document.addEventListener("contextmenu", (event) => event.preventDefault());
document.onkeydown = function (e) {
  // disable F12 key
  if (e.keyCode == 123) {
    return false;
  }

  // disable I key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    return false;
  }

  // disable J key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    return false;
  }

  // disable U key
  if (e.ctrlKey && e.keyCode == 85) {
    return false;
  }
};
