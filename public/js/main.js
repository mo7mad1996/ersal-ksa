"use strict";

const options = {
  containers: ["#swupMain", "#swupMenu"],
  animateHistoryBrowsing: true,
  linkSelector: "a:not([data-no-swup])",
  animationSelector: '[className="mil-main-transition"]',
};
const swup = new Swup(options);

/***************************

    register gsap plugins

    ***************************/
gsap.registerPlugin(Scrolltrigger, ScrollToPlugin);
/***************************

    color variables

    ***************************/

var accent = "rgba(255, 152, 0, 1)";
var dark = "#000";
var light = "#fff";

/***************************

    anchor scroll

    ***************************/
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  var target = $($.attr(this, "href"));
  var offset = 0;

  if ($(window).width() < 1200) {
    offset = 90;
  }

  $("html, body").animate(
    {
      scrollTop: target.offset().top - offset,
    },
    400
  );
});

/***************************

    accordion

    ***************************/

let groups = gsap.utils.toArray(".mil-accordion-group");
let menus = gsap.utils.toArray(".mil-accordion-menu");
let menuToggles = groups.map(createAnimation);

menus.forEach((menu) => {
  menu.addEventListener("click", () => toggleMenu(menu));
});

function toggleMenu(clickedMenu) {
  menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
}

function createAnimation(element) {
  let menu = element.querySelector(".mil-accordion-menu");
  let box = element.querySelector(".mil-accordion-content");
  let symbol = element.querySelector(".mil-symbol");
  let minusElement = element.querySelector(".mil-minus");
  let plusElement = element.querySelector(".mil-plus");

  gsap.set(box, {
    height: "auto",
  });

  let animation = gsap
    .timeline()
    .from(box, {
      height: 0,
      duration: 0.4,
      ease: "sine",
    })
    .from(
      minusElement,
      {
        duration: 0.4,
        autoAlpha: 0,
        ease: "none",
      },
      0
    )
    .to(
      plusElement,
      {
        duration: 0.4,
        autoAlpha: 0,
        ease: "none",
      },
      0
    )
    .to(
      symbol,
      {
        background: accent,
        ease: "none",
      },
      0
    )
    .reverse();

  return function (clickedMenu) {
    if (clickedMenu === menu) {
      animation.reversed(!animation.reversed());
    } else {
      animation.reverse();
    }
  };
}
/***************************

    cursor

    ***************************/
const cursor = document.querySelector(".mil-ball");

gsap.set(cursor, {
  xPercent: -50,
  yPercent: -50,
});

document.addEventListener("pointermove", movecursor);

function movecursor(e) {
  gsap.to(cursor, {
    duration: 0.6,
    ease: "sine",
    x: e.clientX,
    y: e.clientY,
  });
}

$(".mil-drag, .mil-more, .mil-choose").mouseover(function () {
  gsap.to($(cursor), 0.2, {
    width: 90,
    height: 90,
    opacity: 1,
    ease: "sine",
  });
});

$(".mil-drag, .mil-more, .mil-choose").mouseleave(function () {
  gsap.to($(cursor), 0.2, {
    width: 20,
    height: 20,
    opacity: 0.1,
    ease: "sine",
  });
});

$(".mil-accent-cursor").mouseover(function () {
  gsap.to($(cursor), 0.2, {
    background: accent,
    ease: "sine",
  });
  $(cursor).addClass("mil-accent");
});

$(".mil-accent-cursor").mouseleave(function () {
  gsap.to($(cursor), 0.2, {
    background: dark,
    ease: "sine",
  });
  $(cursor).removeClass("mil-accent");
});

$(".mil-drag").mouseover(function () {
  gsap.to($(".mil-ball .mil-icon-1"), 0.2, {
    scale: "1",
    ease: "sine",
  });
});

$(".mil-drag").mouseleave(function () {
  gsap.to($(".mil-ball .mil-icon-1"), 0.2, {
    scale: "0",
    ease: "sine",
  });
});

$(".mil-more").mouseover(function () {
  gsap.to($(".mil-ball .mil-more-text"), 0.2, {
    scale: "1",
    ease: "sine",
  });
});

$(".mil-more").mouseleave(function () {
  gsap.to($(".mil-ball .mil-more-text"), 0.2, {
    scale: "0",
    ease: "sine",
  });
});

$(".mil-choose").mouseover(function () {
  gsap.to($(".mil-ball .mil-choose-text"), 0.2, {
    scale: "1",
    ease: "sine",
  });
});

$(".mil-choose").mouseleave(function () {
  gsap.to($(".mil-ball .mil-choose-text"), 0.2, {
    scale: "0",
    ease: "sine",
  });
});

$(
  'a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input , textarea, .mil-accordion-menu'
).mouseover(function () {
  gsap.to($(cursor), 0.2, {
    scale: 0,
    ease: "sine",
  });
  gsap.to($(".mil-ball svg"), 0.2, {
    scale: 0,
  });
});

$(
  'a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input, textarea, .mil-accordion-menu'
).mouseleave(function () {
  gsap.to($(cursor), 0.2, {
    scale: 1,
    ease: "sine",
  });

  gsap.to($(".mil-ball svg"), 0.2, {
    scale: 1,
  });
});

$("body").mousedown(function () {
  gsap.to($(cursor), 0.2, {
    scale: 0.1,
    ease: "sine",
  });
});
$("body").mouseup(function () {
  gsap.to($(cursor), 0.2, {
    scale: 1,
    ease: "sine",
  });
});

/***************************

    main menu

    ***************************/
$(".mil-has-children a").on("click", function () {
  $(".mil-has-children ul").removeClass("mil-active");
  $(".mil-has-children a").removeClass("mil-active");
  $(this).toggleClass("mil-active");
  $(this).next().toggleClass("mil-active");
});
/***************************

    progressbar

    ***************************/
gsap.to(".mil-progress", {
  height: "100%",
  ease: "sine",
  Scrolltrigger: {
    scrub: 0.3,
  },
});
/***************************

    scroll animations

    ***************************/

const appearance = document.querySelectorAll(".mil-up");

appearance.forEach((section) => {
  gsap.fromTo(
    section,
    {
      opacity: 0,
      y: 40,
      scale: 0.98,
      ease: "sine",
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.4,
      Scrolltrigger: {
        trigger: section,
        toggleActions: "play none none reverse",
      },
    }
  );
});

const scaleImage = document.querySelectorAll(".mil-scale");

scaleImage.forEach((section) => {
  var value1 = $(section).data("value-1");
  var value2 = $(section).data("value-2");
  gsap.fromTo(
    section,
    {
      ease: "sine",
      scale: value1,
    },
    {
      scale: value2,
      Scrolltrigger: {
        trigger: section,
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );
});

const parallaxImage = document.querySelectorAll(".mil-parallax");

if ($(window).width() > 960) {
  parallaxImage.forEach((section) => {
    var value1 = $(section).data("value-1");
    var value2 = $(section).data("value-2");
    gsap.fromTo(
      section,
      {
        ease: "sine",
        y: value1,
      },
      {
        y: value2,
        Scrolltrigger: {
          trigger: section,
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

const rotate = document.querySelectorAll(".mil-rotate");

rotate.forEach((section) => {
  var value = $(section).data("value");
  gsap.fromTo(
    section,
    {
      ease: "sine",
      rotate: 0,
    },
    {
      rotate: value,
      Scrolltrigger: {
        trigger: section,
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );
});
/***************************

    fancybox

    ***************************/
$('[data-fancybox="gallery"]').fancybox({
  buttons: ["slideShow", "zoom", "fullScreen", "close"],
  loop: false,
  protect: true,
});
$.fancybox.defaults.hash = false;
/***************************

    reviews slider

    ***************************/

var menu = [
  '<div className="mil-custom-dot mil-slide-1"></div>',
  '<div className="mil-custom-dot mil-slide-2"></div>',
  '<div className="mil-custom-dot mil-slide-3"></div>',
  '<div className="mil-custom-dot mil-slide-4"></div>',
  '<div className="mil-custom-dot mil-slide-5"></div>',
  '<div className="mil-custom-dot mil-slide-6"></div>',
  '<div className="mil-custom-dot mil-slide-7"></div>',
];
var mySwiper = new Swiper(".mil-reviews-slider", {
  // If we need pagination
  pagination: {
    el: ".mil-revi-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + menu[index] + "</span>";
    },
  },
  speed: 800,
  effect: "fade",
  parallax: true,
  navigation: {
    nextEl: ".mil-revi-next",
    prevEl: ".mil-revi-prev",
  },
});

/***************************

    infinite slider

    ***************************/
var swiper = new Swiper(".mil-infinite-show", {
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 5000,
  autoplay: true,
  autoplay: {
    delay: 0,
  },
  loop: true,
  freeMode: true,
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
  },
});

/***************************

    portfolio slider

    ***************************/
var swiper = new Swiper(".mil-portfolio-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,
  parallax: true,
  mousewheel: {
    enable: true,
  },
  navigation: {
    nextEl: ".mil-portfolio-next",
    prevEl: ".mil-portfolio-prev",
  },
  pagination: {
    el: ".swiper-portfolio-pagination",
    type: "fraction",
  },
});
/***************************

    1 item slider

    ***************************/
var swiper = new Swiper(".mil-1-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 800,
  parallax: true,
  navigation: {
    nextEl: ".mil-portfolio-next",
    prevEl: ".mil-portfolio-prev",
  },
  pagination: {
    el: ".swiper-portfolio-pagination",
    type: "fraction",
  },
});
/***************************

    2 item slider

    ***************************/
var swiper = new Swiper(".mil-2-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 800,
  parallax: true,
  navigation: {
    nextEl: ".mil-portfolio-next",
    prevEl: ".mil-portfolio-prev",
  },
  pagination: {
    el: ".swiper-portfolio-pagination",
    type: "fraction",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
});

/*----------------------------------------------------------
    ------------------------------------------------------------

    REINIT

    ------------------------------------------------------------
    ----------------------------------------------------------*/
document.addEventListener("swup:contentReplaced", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    0
  );

  gsap.to(".mil-progress", {
    height: 0,
    ease: "sine",
    onComplete: () => {
      Scrolltrigger.refresh();
    },
  });

  /***************************

        accordion

        ***************************/

  let groups = gsap.utils.toArray(".mil-accordion-group");
  let menus = gsap.utils.toArray(".mil-accordion-menu");
  let menuToggles = groups.map(createAnimation);

  menus.forEach((menu) => {
    menu.addEventListener("click", () => toggleMenu(menu));
  });

  function toggleMenu(clickedMenu) {
    menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
  }

  function createAnimation(element) {
    let menu = element.querySelector(".mil-accordion-menu");
    let box = element.querySelector(".mil-accordion-content");
    let symbol = element.querySelector(".mil-symbol");
    let minusElement = element.querySelector(".mil-minus");
    let plusElement = element.querySelector(".mil-plus");

    gsap.set(box, {
      height: "auto",
    });

    let animation = gsap
      .timeline()
      .from(box, {
        height: 0,
        duration: 0.4,
        ease: "sine",
      })
      .from(
        minusElement,
        {
          duration: 0.4,
          autoAlpha: 0,
          ease: "none",
        },
        0
      )
      .to(
        plusElement,
        {
          duration: 0.4,
          autoAlpha: 0,
          ease: "none",
        },
        0
      )
      .to(
        symbol,
        {
          background: accent,
          ease: "none",
        },
        0
      )
      .reverse();

    return function (clickedMenu) {
      if (clickedMenu === menu) {
        animation.reversed(!animation.reversed());
      } else {
        animation.reverse();
      }
    };
  }

  /***************************

        cursor

        ***************************/

  $(".mil-drag, .mil-more, .mil-choose").mouseover(function () {
    gsap.to($(cursor), 0.2, {
      width: 90,
      height: 90,
      opacity: 1,
      ease: "sine",
    });
  });

  $(".mil-drag, .mil-more, .mil-choose").mouseleave(function () {
    gsap.to($(cursor), 0.2, {
      width: 20,
      height: 20,
      opacity: 0.1,
      ease: "sine",
    });
  });

  $(".mil-accent-cursor").mouseover(function () {
    gsap.to($(cursor), 0.2, {
      background: accent,
      ease: "sine",
    });
    $(cursor).addClass("mil-accent");
  });

  $(".mil-accent-cursor").mouseleave(function () {
    gsap.to($(cursor), 0.2, {
      background: dark,
      ease: "sine",
    });
    $(cursor).removeClass("mil-accent");
  });

  $(".mil-drag").mouseover(function () {
    gsap.to($(".mil-ball .mil-icon-1"), 0.2, {
      scale: "1",
      ease: "sine",
    });
  });

  $(".mil-drag").mouseleave(function () {
    gsap.to($(".mil-ball .mil-icon-1"), 0.2, {
      scale: "0",
      ease: "sine",
    });
  });

  $(".mil-more").mouseover(function () {
    gsap.to($(".mil-ball .mil-more-text"), 0.2, {
      scale: "1",
      ease: "sine",
    });
  });

  $(".mil-more").mouseleave(function () {
    gsap.to($(".mil-ball .mil-more-text"), 0.2, {
      scale: "0",
      ease: "sine",
    });
  });

  $(".mil-choose").mouseover(function () {
    gsap.to($(".mil-ball .mil-choose-text"), 0.2, {
      scale: "1",
      ease: "sine",
    });
  });

  $(".mil-choose").mouseleave(function () {
    gsap.to($(".mil-ball .mil-choose-text"), 0.2, {
      scale: "0",
      ease: "sine",
    });
  });

  $(
    'a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input , textarea, .mil-accordion-menu'
  ).mouseover(function () {
    gsap.to($(cursor), 0.2, {
      scale: 0,
      ease: "sine",
    });
    gsap.to($(".mil-ball svg"), 0.2, {
      scale: 0,
    });
  });

  $(
    'a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input, textarea, .mil-accordion-menu'
  ).mouseleave(function () {
    gsap.to($(cursor), 0.2, {
      scale: 1,
      ease: "sine",
    });

    gsap.to($(".mil-ball svg"), 0.2, {
      scale: 1,
    });
  });

  $("body").mousedown(function () {
    gsap.to($(cursor), 0.2, {
      scale: 0.1,
      ease: "sine",
    });
  });
  $("body").mouseup(function () {
    gsap.to($(cursor), 0.2, {
      scale: 1,
      ease: "sine",
    });
  });
  /***************************

        main menu

        ***************************/
  $(".mil-has-children a").on("click", function () {
    $(".mil-has-children ul").removeClass("mil-active");
    $(".mil-has-children a").removeClass("mil-active");
    $(this).toggleClass("mil-active");
    $(this).next().toggleClass("mil-active");
  });
  /***************************

        scroll animations

        ***************************/

  const appearance = document.querySelectorAll(".mil-up");

  appearance.forEach((section) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 40,
        scale: 0.98,
        ease: "sine",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        Scrolltrigger: {
          trigger: section,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  const scaleImage = document.querySelectorAll(".mil-scale");

  scaleImage.forEach((section) => {
    var value1 = $(section).data("value-1");
    var value2 = $(section).data("value-2");
    gsap.fromTo(
      section,
      {
        ease: "sine",
        scale: value1,
      },
      {
        scale: value2,
        Scrolltrigger: {
          trigger: section,
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  const parallaxImage = document.querySelectorAll(".mil-parallax");

  if ($(window).width() > 960) {
    parallaxImage.forEach((section) => {
      var value1 = $(section).data("value-1");
      var value2 = $(section).data("value-2");
      gsap.fromTo(
        section,
        {
          ease: "sine",
          y: value1,
        },
        {
          y: value2,
          Scrolltrigger: {
            trigger: section,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }

  const rotate = document.querySelectorAll(".mil-rotate");

  rotate.forEach((section) => {
    var value = $(section).data("value");
    gsap.fromTo(
      section,
      {
        ease: "sine",
        rotate: 0,
      },
      {
        rotate: value,
        Scrolltrigger: {
          trigger: section,
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  /***************************

        fancybox

        ***************************/
  $('[data-fancybox="gallery"]').fancybox({
    buttons: ["slideShow", "zoom", "fullScreen", "close"],
    loop: false,
    protect: true,
  });
  $.fancybox.defaults.hash = false;
  /***************************

        reviews slider

        ***************************/

  var menu = [
    '<div className="mil-custom-dot mil-slide-1"></div>',
    '<div className="mil-custom-dot mil-slide-2"></div>',
    '<div className="mil-custom-dot mil-slide-3"></div>',
    '<div className="mil-custom-dot mil-slide-4"></div>',
    '<div className="mil-custom-dot mil-slide-5"></div>',
    '<div className="mil-custom-dot mil-slide-6"></div>',
    '<div className="mil-custom-dot mil-slide-7"></div>',
  ];
  var mySwiper = new Swiper(".mil-reviews-slider", {
    // If we need pagination
    pagination: {
      el: ".mil-revi-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span className="' + className + '">' + menu[index] + "</span>";
      },
    },
    speed: 800,
    effect: "fade",
    parallax: true,
    navigation: {
      nextEl: ".mil-revi-next",
      prevEl: ".mil-revi-prev",
    },
  });

  /***************************

        infinite slider

        ***************************/
  var swiper = new Swiper(".mil-infinite-show", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 5000,
    autoplay: true,
    autoplay: {
      delay: 0,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
      992: {
        slidesPerView: -4,
      },
    },
  });

  /***************************

        portfolio slider

        ***************************/
  var swiper = new Swiper(".mil-portfolio-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    parallax: true,
    mousewheel: {
      enable: true,
    },
    navigation: {
      nextEl: ".mil-portfolio-next",
      prevEl: ".mil-portfolio-prev",
    },
    pagination: {
      el: ".swiper-portfolio-pagination",
      type: "fraction",
    },
  });
  /***************************

        1 item slider

        ***************************/
  var swiper = new Swiper(".mil-1-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      nextEl: ".mil-portfolio-next",
      prevEl: ".mil-portfolio-prev",
    },
    pagination: {
      el: ".swiper-portfolio-pagination",
      type: "fraction",
    },
  });
  /***************************

        2 item slider

        ***************************/
  var swiper = new Swiper(".mil-2-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      nextEl: ".mil-portfolio-next",
      prevEl: ".mil-portfolio-prev",
    },
    pagination: {
      el: ".swiper-portfolio-pagination",
      type: "fraction",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
    },
  });
});
