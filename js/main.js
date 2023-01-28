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
let menuBox = document.querySelectorAll(".nav__mobile__item");
for (let i = 0; i < menuBox.length; i++) {
  menuBox[i].addEventListener("click", menuClose);
}
function menuClose(click) {
  let menuTouggle = document.querySelector("#menu__toggle");
  menuTouggle.checked = false;
  document.body.classList.toggle("noscrolling");
}

let modal = document.querySelector("#modal");
let modalBackground = document.querySelector("#modal__background");
let reserve = document.querySelector("#reserve");
reserve.addEventListener("click", startReserve);
function startReserve(event) {
  modal.classList.toggle("_hidden");
  modalBackground.addEventListener("click", closeModal);
  document.body.classList.toggle("noscrolling");
}

function closeModal(event) {
  if (event.target.id === "modal__background" || event.target.id === "close") {
    document.body.classList.toggle("noscrolling");
    modal.classList.toggle("_hidden");
    modalBackground.removeEventListener("click", closeModal);
  }
}

function closeModalBySubmit(){
  modal.classList.toggle("_hidden");
}

// Отправка формы
$("document").ready(function () {
  $("#feedback").on("submit", function () {
    let dataForm = $(this).serialize();
    $.ajax({
      url: "./query.php",
      method: "post",
      dataType: "html",
      data: dataForm,
      success: function (data) {
        console.log(data);
      },
    });
  });
});

// Отправка модальной формы
$("document").ready(function () {
  $("#modal__feedback").on("submit", function () {
    let dataForm = $(this).serialize();
    $.ajax({
      url: "./query.php",
      method: "post",
      dataType: "html",
      data: dataForm,
      success: function (data) {
        console.log(data);
        closeModalBySubmit();
      },
    });
  });
});
