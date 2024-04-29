const THEME_BTN = document.querySelector(".button-parent");
const THEME_BTN_BLUE = document.querySelector(".button");
const STYLE_SHEET = document.querySelectorAll("link");
const MODAL = document.querySelector(".modal");
const NAV_MODAL_BTN = document.querySelector(".nav-bar button");
const SHEET_CLOSER = document.querySelector(".modal-closer");
const CLOSER_X = document.querySelector(".modal-box button");

THEME_BTN.addEventListener("click", function () {
    if (!THEME_BTN_BLUE.classList.contains("right")) {
        THEME_BTN_BLUE.classList.add("right");
            STYLE_SHEET[1].setAttribute("href", "../css/ThemeChanger_Modal/dark.css");
    }
    else {
        THEME_BTN_BLUE.classList.remove("right");
            STYLE_SHEET[1].setAttribute("href", "../css/ThemeChanger_Modal/light.css");
    };
});

NAV_MODAL_BTN.addEventListener("click", function() {
    MODAL.classList.toggle("hidden");
    setTimeout(function(){
        MODAL.classList.toggle("opacity");
    }, 50)
});

SHEET_CLOSER.addEventListener("click", function(){
    MODAL.classList.add("hidden");
    MODAL.classList.add("opacity");
});

CLOSER_X.addEventListener("click", function(){
    MODAL.classList.add("hidden");
    MODAL.classList.add("opacity");
});