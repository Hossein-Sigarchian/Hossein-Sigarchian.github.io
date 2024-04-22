const BTN = document.querySelectorAll("button");
const IMG = document.querySelector("img");
let show = 1;
let opacity_0;
let opacity_1;


BTN[0].addEventListener("click", function () {
    if (show == 0) {
        clearInterval(opacity_1)
        let initial = 0;
        opacity_0 = setInterval(function () {
            if (initial == 100) {
                clearInterval(opacity_0)
            }
            IMG.style.filter = `opacity(${initial}%)`;
            initial++;
        }, 50);
    }
    show = 1
    })

BTN[1].addEventListener("click", function () {
    if (show == 1) {
        clearInterval(opacity_0)
        let initial = 100;
        opacity_1 = setInterval(function () {
            if (initial == 0) {
                clearInterval(opacity_1)
            }
            IMG.style.filter = `opacity(${initial}%)`;
            initial--;
        }, 50);
    }
    show = 0;
    })
