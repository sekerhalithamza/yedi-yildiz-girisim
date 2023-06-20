"use strict";

const linkArray = document.getElementsByClassName("vcard__content");

for (const links of linkArray) {
  links.addEventListener("click", function () {
    links.classList.toggle("open");
  });
}
