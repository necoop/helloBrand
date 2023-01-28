// Слайдер 1
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Слайдер 2
const swiper__foto = new Swiper(".swiper__foto", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Блокируем скролл при активации гамбургера
let hamburgerClick = document.querySelector("#menu__btn");
hamburgerClick.addEventListener("click", scrollBlock);
function scrollBlock() {
  document.body.classList.toggle("noscrolling");
}

// Закрываем гамбургер при нажатии на пункт меню
let menuBox = document.querySelectorAll(".nav__item");
for (let i = 0; i < menuBox.length; i++) {
  menuBox[i].addEventListener("click", menuClose);
}
function menuClose(click) {
  let menuTouggle = document.querySelector("#menu__toggle");
  menuTouggle.checked = false;
  document.body.classList.toggle("noscrolling");
}
