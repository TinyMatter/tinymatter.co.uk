var tinyScrollEvent = new Event("tinyScroll");

var last_known_scroll_position = 0;

window.addEventListener("scroll", function() {
  if (last_known_scroll_position === window.scrollY) {
    return;
  }

  last_known_scroll_position = window.scrollY;

  window.dispatchEvent(tinyScrollEvent);
});
