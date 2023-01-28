//Countdown Start
function countdown() {
  //maakt hier het verschil tussen vandaag en de offerdate oftewel het einde van de countdown
  const today = new Date();
  var offerDate = new Date('29 dec 2023');


  if (today.getSeconds() == offerDate.getSeconds()) {
    offerDate = resetOfferDate();
}
  const offerTime = offerDate - today;

  //Hieronder word berekend hoelang iets duurt 1000 milliseconden is 1 seconden
  const offerDays = Math.floor(offerTime / (1000 * 60 * 60 * 24));
  const offerHours = Math.floor((offerTime / (1000 * 60 * 60) % 24));
  const offerMins = Math.floor((offerTime / (1000 * 60) % 60));
  const offerSecs = Math.floor((offerTime / 1000) % 60); // 1000 milliseconden is 1 seconden en er zijn 60 seconden

  //Hier word het toegevoegd aan het gedeelte in de html file
  const days_el = document.getElementById("days_left");
  days_el.innerHTML = offerDays;
  const hours_el = document.getElementById("hours_left");
  hours_el.innerHTML = offerHours;
  const mins_el = document.getElementById("mins_left");
  mins_el.innerHTML = offerMins;
  const secs_el = document.getElementById("secs_left");
  secs_el.innerHTML = offerSecs;
}


setInterval(countdown, 1000); // De tijd tussen het opnieuw bereken wanneer de countdown klaar is oftewel hij doet de countdown function weer opnieuw
//Countdown Einde

//Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actief", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " actief";
  setTimeout(showSlides, 4500); //4,5 seconden
}
//slideshow einde
