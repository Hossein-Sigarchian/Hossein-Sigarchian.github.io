const BTN = document.querySelectorAll("button");
const IMG = document.querySelector("img");
let show = 1

BTN[0].addEventListener("click", function () {
    if (show == 0) {
        let initial = 0;
        let opacity = setInterval(function () {
            if (initial == 100) {
                clearInterval(opacity)
            }
            IMG.style.filter = `opacity(${initial}%)`;
            initial++;
        }, 50);
    }
    show = 1
    })

BTN[1].addEventListener("click", function () {
    if (show == 1) {
        let initial = 100;
        let opacity = setInterval(function () {
            if (initial == 0) {
                clearInterval(opacity)
            }
            IMG.style.filter = `opacity(${initial}%)`;
            initial--;
        }, 50);
    }
    show = 0;
    })
