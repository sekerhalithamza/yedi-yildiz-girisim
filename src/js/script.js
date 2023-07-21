const languageBtn = document.getElementById("languageBtn");
const textElements = document.getElementsByClassName("text");

languageBtn.addEventListener("click", () => {
  for (const element of textElements) {
    let oldText = element.innerText;
    element.innerText = element.getAttribute("data-language");
    element.setAttribute("data-language", oldText);
  }
  if (document.documentElement.lang === "en") document.documentElement.lang = "tr";
  else document.documentElement.lang = "en";
});
