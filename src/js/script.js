"use strict";

// Vcard function

if (window.location.href.endsWith("hasanyediyildiz.html")) {
  const linkArray = document.getElementsByClassName("vcard__content");

  for (const links of linkArray) {
    links.classList.add("open");
  }

  const vcardDownloadBtn = document.getElementById("vcardDownloadBtn");

  vcardDownloadBtn.addEventListener("click", function () {
    var userName;
    var companyPos;
    var email;
    var tel;
    if (window.location.href.endsWith("hasanyediyildiz.html")) {
      userName = "Hasan Yediyıldız";
      companyPos = "Founder";
      email = "hyediyildiz@gmail.com";
      tel = "+905326517788";
    }
    var vcardContent =
      "BEGIN:VCARD\n" +
      "VERSION:3.0\n" +
      "FN:" +
      userName +
      "\n" +
      "ORG:Yediyıldız Girişim Ofisi\n" +
      "TITLE:" +
      companyPos +
      "\n" +
      "EMAIL:" +
      email +
      "\n" +
      "TEL;TYPE=cell,voice:" +
      tel +
      "\n" +
      "ADR;TYPE=work:;; Konaklar Mahallesi; İstanbul; Beşiktaş; 34330; Türkiye\n" +
      "END:VCARD";

    var fileName = userName + ".vcf";
    var blob = new Blob([vcardContent], { type: "text/vcard" });
    var downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = fileName;
    downloadLink.click();
    URL.revokeObjectURL(downloadLink.href);
  });
}
