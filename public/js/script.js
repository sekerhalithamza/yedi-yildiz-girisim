"use strict";

// Change url

// Mevcut sayfanın URL'sini al
var url = window.location.href;

// ".html" uzantısını kontrol et ve kaldır
if (url.endsWith(".html")) {
  var newUrl = url.slice(0, -5); // Son 5 karakteri (".html") kaldır
  window.history.replaceState({}, document.title, newUrl);
}

// Vcard function

const linkArray = document.getElementsByClassName("vcard__content");

for (const links of linkArray) {
  links.addEventListener("click", function () {
    links.classList.toggle("open");
  });
}
