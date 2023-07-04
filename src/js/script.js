"use strict";

const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideBar = document.getElementById("sideBar");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("active");
  sideBar.classList.toggle("active");
});
