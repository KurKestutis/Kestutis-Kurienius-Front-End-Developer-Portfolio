"use strict";

const cookiesMessage = document.querySelector(".cookies");
const cookiesMessageTimmer = document.querySelector(".cokies__text__seconds");

let time = 10;
const showCookiesMessage = () => {
  if (time > 1) {
    time--;
    console.log(time);
    cookiesMessageTimmer.textContent = `${time}`;
  } else {
    cookiesMessage.remove();
  }
};

showCookiesMessage(time);
setInterval(showCookiesMessage, 1000);
