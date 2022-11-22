"use strict";

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

const intro = document.querySelector(".intro");

setTimeout(() => {
  intro.remove();
}, 1800);
