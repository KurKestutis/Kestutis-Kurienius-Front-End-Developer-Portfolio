"use strict";

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

const intro = document.querySelector(".intro");
const cookiesMessage = document.querySelector(".cookies");
const cookiesMessageTimmer = document.querySelector(".cookies__text__seconds");
const btnCloseCookie = document.querySelector(".btn--close-cookies");

setTimeout(() => {
  intro.remove();
}, 2000);

btnCloseCookie.addEventListener("click", function () {
  cookiesMessage.remove();
});

let time = 8;
const showCookiesMessage = () => {
  if (time >= 1) {
    console.log(time);
    cookiesMessageTimmer.textContent = `${time}`;
    time--;
  } else {
    cookiesMessage.remove();
  }
};

showCookiesMessage(time);
setInterval(showCookiesMessage, 1000);
