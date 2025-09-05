<script>
    var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    const swiperEl = document.querySelector('swiper-container');
    const swiper = swiperEl.swiper;

    var appendNumber = 4;
    var prependNumber = 1;
    document
      .querySelector(".prepend-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
          '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
          '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
        ]);
      });
    document
      .querySelector(".prepend-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
          '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>"
        );
      });
    document
      .querySelector(".append-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
          '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>"
        );
      });
    document
      .querySelector(".append-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
          '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
          '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
        ]);
      });

    var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

   return direction;
    }
    </script>
    