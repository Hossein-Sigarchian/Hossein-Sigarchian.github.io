const BTN = document.querySelectorAll("button");
const TXT = document.querySelector("p");
const FS_VALUE = window.getComputedStyle(TXT, null);

BTN[0].addEventListener("click", function () {
    let font_size = parseInt(FS_VALUE.getPropertyValue("font-size"));
    TXT.style.fontSize = (font_size + 1) + "px";
});

BTN[1].addEventListener("click", function () {
    let font_size = parseInt(FS_VALUE.getPropertyValue("font-size"));
    TXT.style.fontSize = (font_size - 1) + "px";
});