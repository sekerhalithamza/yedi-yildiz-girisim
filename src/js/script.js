let currentLang = localStorage.getItem("lang");
if (currentLang == null) {
  currentLang = "EN";
  localStorage.setItem("lang", currentLang);
  console.log("changed the lang to EN because 'lang' is null");
}

console.log("currentlang", currentLang);

document.addEventListener("DOMContentLoaded", () => {
  console.log(currentLang);
  if (currentLang == "EN") {
  } else if (currentLang == "TR") {
    currentLang = "EN";
    applyLang();
  }
});

const languageBtn = document.getElementById("languageBtn");
const textElements = document.getElementsByClassName("text");

languageBtn.addEventListener("click", applyLang);

function applyLang() {
  if (currentLang === "EN") {
    currentLang = "TR";
  } else if (currentLang === "TR") {
    currentLang = "EN";
  }
  for (const element of textElements) {
    let oldText = element.innerText;
    element.innerText = element.getAttribute("data-language");
    element.setAttribute("data-language", oldText);
  }
  if (document.documentElement.lang === "en") document.documentElement.lang = "tr";
  else document.documentElement.lang = "en";
  localStorage.setItem("lang", currentLang);
  console.log(currentLang);
}
