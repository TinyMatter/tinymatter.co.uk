var nav = document.querySelector("nav");

window.addEventListener(
  "tinyScroll",
  function() {
    var scroll = window.scrollY;
    if (scroll >= 1) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
  },
  false
);
