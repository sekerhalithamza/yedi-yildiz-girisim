"use strict";

const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideBar = document.getElementById("sideBar");
const languageBtn = document.getElementById("languageBtn");
const textList = document.getElementsByClassName("text");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("active");
  sideBar.classList.toggle("active");
});

languageBtn.addEventListener("click", function () {
  for (let textElement of textList) {
    let oldText = textElement.innerText;
    textElement.innerText = textElement.getAttribute("data-language");
    textElement.setAttribute("data-language", oldText);
  }

  if (document.documentElement.lang === "tr") document.documentElement.lang = "en";
  else document.documentElement.lang = "tr";
});

(function () {
  for (let textElement of textList) {
    let oldText = textElement.innerText;
    textElement.innerText = textElement.getAttribute("data-language");
    textElement.setAttribute("data-language", oldText);
  }
})();
