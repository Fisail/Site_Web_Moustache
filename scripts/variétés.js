// CAROUSEL

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// EN SAVOIR PLUS

// SLIDE1 - Freddie Mercury
let button1 = document.getElementById("slide1");
let divInfos1 = document.getElementById("informations-supplémentaires1");
button1.addEventListener("click", () => {
  if (getComputedStyle(divInfos1).display != "none") {
    divInfos1.style.display = "none";
  } else {
    divInfos1.style.display = "flex";
  }
});

let bouton_close1 = document.getElementById("close1");
bouton_close1.addEventListener("click", () => {
  if (getComputedStyle(divInfos1).display != "none") {
    divInfos1.style.display = "none";
  } else {
    divInfos1.style.display = "block";
  }
});

// SLIDE2 - Charlie Chaplin
let button2 = document.getElementById("slide2");
let divInfos2 = document.getElementById("informations-supplémentaires2");
button2.addEventListener("click", () => {
  if (getComputedStyle(divInfos2).display != "none") {
    divInfos2.style.display = "none";
  } else {
    divInfos2.style.display = "flex";
  }
});

let bouton_close2 = document.getElementById("close2");
bouton_close2.addEventListener("click", () => {
  if (getComputedStyle(divInfos2).display != "none") {
    divInfos2.style.display = "none";
  } else {
    divInfos2.style.display = "block";
  }
});

// SLIDE3 - Salvador Dali
let button3 = document.getElementById("slide3");
let divInfos3 = document.getElementById("informations-supplémentaires3");
button3.addEventListener("click", () => {
  if (getComputedStyle(divInfos3).display != "none") {
    divInfos3.style.display = "none";
  } else {
    divInfos3.style.display = "flex";
  }
});

let bouton_close3 = document.getElementById("close3");
bouton_close3.addEventListener("click", () => {
  if (getComputedStyle(divInfos3).display != "none") {
    divInfos3.style.display = "none";
  } else {
    divInfos3.style.display = "block";
  }
});

// SLIDE4 - Christopher Lee
let button4 = document.getElementById("slide4");
let divInfos4 = document.getElementById("informations-supplémentaires4");
button4.addEventListener("click", () => {
  if (getComputedStyle(divInfos4).display != "none") {
    divInfos4.style.display = "none";
  } else {
    divInfos4.style.display = "flex";
  }
});

let bouton_close4 = document.getElementById("close4");
bouton_close4.addEventListener("click", () => {
  if (getComputedStyle(divInfos4).display != "none") {
    divInfos4.style.display = "none";
  } else {
    divInfos4.style.display = "block";
  }
});

// SLIDE5 - Arthur Conan Doyle
let button5 = document.getElementById("slide5");
let divInfos5 = document.getElementById("informations-supplémentaires5");
button5.addEventListener("click", () => {
  if (getComputedStyle(divInfos5).display != "none") {
    divInfos5.style.display = "none";
  } else {
    divInfos5.style.display = "flex";
  }
});

let bouton_close5 = document.getElementById("close5");
bouton_close5.addEventListener("click", () => {
  if (getComputedStyle(divInfos5).display != "none") {
    divInfos5.style.display = "none";
  } else {
    divInfos5.style.display = "block";
  }
});

// SLIDE6 - Ambroise Burnside
let button6 = document.getElementById("slide6");
let divInfos6 = document.getElementById("informations-supplémentaires6");
button6.addEventListener("click", () => {
  if (getComputedStyle(divInfos6).display != "none") {
    divInfos6.style.display = "none";
  } else {
    divInfos6.style.display = "flex";
  }
});

let bouton_close6 = document.getElementById("close6");
bouton_close6.addEventListener("click", () => {
  if (getComputedStyle(divInfos6).display != "none") {
    divInfos6.style.display = "none";
  } else {
    divInfos6.style.display = "block";
  }
});

// SLIDE7 - Brad Pitt
let button7 = document.getElementById("slide7");
let divInfos7 = document.getElementById("informations-supplémentaires7");
button7.addEventListener("click", () => {
  if (getComputedStyle(divInfos7).display != "none") {
    divInfos7.style.display = "none";
  } else {
    divInfos7.style.display = "flex";
  }
});

let bouton_close7 = document.getElementById("close7");
bouton_close7.addEventListener("click", () => {
  if (getComputedStyle(divInfos7).display != "none") {
    divInfos7.style.display = "none";
  } else {
    divInfos7.style.display = "block";
  }
});

// SLIDE8 - Dany Trejo
let button8 = document.getElementById("slide8");
let divInfos8 = document.getElementById("informations-supplémentaires8");
button8.addEventListener("click", () => {
  if (getComputedStyle(divInfos8).display != "none") {
    divInfos8.style.display = "none";
  } else {
    divInfos8.style.display = "flex";
  }
});

let bouton_close8 = document.getElementById("close8");
bouton_close8.addEventListener("click", () => {
  if (getComputedStyle(divInfos8).display != "none") {
    divInfos8.style.display = "none";
  } else {
    divInfos8.style.display = "block";
  }
});

// SLIDE9 - Jean Dujardin
let button9 = document.getElementById("slide9");
let divInfos9 = document.getElementById("informations-supplémentaires9");
button9.addEventListener("click", () => {
  if (getComputedStyle(divInfos9).display != "none") {
    divInfos9.style.display = "none";
  } else {
    divInfos9.style.display = "flex";
  }
});

let bouton_close9 = document.getElementById("close9");
bouton_close9.addEventListener("click", () => {
  if (getComputedStyle(divInfos9).display != "none") {
    divInfos9.style.display = "none";
  } else {
    divInfos9.style.display = "block";
  }
});

// SLIDE10 - Jean-paul Rouve
let button10 = document.getElementById("slide10");
let divInfos10 = document.getElementById("informations-supplémentaires10");
button10.addEventListener("click", () => {
  if (getComputedStyle(divInfos10).display != "none") {
    divInfos10.style.display = "none";
  } else {
    divInfos10.style.display = "flex";
  }
});

let bouton_close10 = document.getElementById("close10");
bouton_close10.addEventListener("click", () => {
  if (getComputedStyle(divInfos10).display != "none") {
    divInfos10.style.display = "none";
  } else {
    divInfos10.style.display = "block";
  }
});

// SLIDE11 - Nathan Hequet
let button11 = document.getElementById("slide11");
let divInfos11 = document.getElementById("informations-supplémentaires11");
button11.addEventListener("click", () => {
  if (getComputedStyle(divInfos11).display != "none") {
    divInfos11.style.display = "none";
  } else {
    divInfos11.style.display = "flex";
  }
});

let bouton_close11 = document.getElementById("close11");
bouton_close11.addEventListener("click", () => {
  if (getComputedStyle(divInfos11).display != "none") {
    divInfos11.style.display = "none";
  } else {
    divInfos11.style.display = "block";
  }
});
