var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);

if (isMobile) {
  document.write("This website is currently disabled on mobile devices");
}

const languageBtn = document.getElementById("languageBtn");
const textElements = document.getElementsByClassName("text");

languageBtn.addEventListener("click", () => {
  for (const element of textElements) {
    let oldText = element.innerText;
    element.innerText = element.getAttribute("data-language");
    element.setAttribute("data-language", oldText);
  }
});
