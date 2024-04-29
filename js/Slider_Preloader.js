
const PIC = document.querySelector("img");
const ICON = document.querySelectorAll("button");
const IMG_SRC = ["../images/Slider_Preloader/0.jpg", "../images/Slider_Preloader/1.jpg", "../images/Slider_Preloader/2.jpg", "../images/Slider_Preloader/3.jpg", "../images/Slider_Preloader/4.jpg"]
let show_image = 0;
let opacity = 100;
let key_1;
let key_2;

window.addEventListener("load", function () {
  document.querySelectorAll("div")[0].classList.add("hidden")
});

ICON[0].addEventListener("click", function(){
    ICON[0].disabled = true;
    ICON[1].disabled = true;
    setTimeout(function(){
        ICON[0].disabled = false;
        ICON[1].disabled = false;
    },3600);
    key_1 = setInterval(function () {
      opacity--;
      if (opacity <= 0) {
        clearInterval(key_1);
      }
      PIC.style.opacity = `${opacity}%`;
    }, 10);

    setTimeout(function() {
        show_image++;
        if (show_image==5) {
            show_image =0;
        }
        PIC.setAttribute("src", IMG_SRC[show_image])
    }, 1500);

    setTimeout(function() {
    key_1 = setInterval(function () {
        opacity++;
        if (opacity >= 100) {
          clearInterval(key_1);
        }
        PIC.style.opacity = `${opacity}%`;
    }, 10);
    }, 1800);
});

ICON[1].addEventListener("click", function(){
    ICON[0].disabled = true;
    ICON[1].disabled = true;
    setTimeout(function(){
        ICON[0].disabled = false;
        ICON[1].disabled = false;
    },3600);
    key_2 = setInterval(function () {
        opacity--;
        if (opacity <= 0) {
          clearInterval(key_2);
        }
        PIC.style.opacity = `${opacity}%`;
      }, 10);

      setTimeout(function() {
        show_image--;
        if (show_image==-1) {
            show_image=4
        }
        PIC.setAttribute("src", IMG_SRC[show_image]);
    }, 1500);

    setTimeout(function() {
        key_2 = setInterval(function () {
            opacity++;
            if (opacity >= 100) {
              clearInterval(key_2);
            }
            PIC.style.opacity = `${opacity}%`;
        }, 10);
        }, 1800);
});