const INPUT = document.querySelectorAll("input");
const PARAGRAPH = document.querySelector("p");
const EYE_BTN = document.querySelector("button");
const EYE_I = document.querySelector("i");
const BAR = document.querySelector(".strength div");


EYE_BTN.addEventListener("click", function(){
    if (INPUT[0].getAttribute("type")=="password") {
        INPUT[0].setAttribute("type", "text");
        EYE_I.classList.replace("bi-eye-slash", "bi-eye");
    }
    else {
        INPUT[0].setAttribute("type", "password");
        EYE_I.classList.replace("bi-eye", "bi-eye-slash");
    };
});

INPUT[0].addEventListener("input", function(){
let capital = false;
let small = false;
let int = false;
let other = false;
let ind = INPUT[0].value.length - 1;

for (let i = 0; i <= ind; i++) {
    if (INPUT[0].value[i].charCodeAt() >= 65 && INPUT[0].value[i].charCodeAt() <= 90) {
        capital = true;
    }
}

for (let i = 0; i <= ind; i++) {
    if (INPUT[0].value[i].charCodeAt() >= 97 && INPUT[0].value[i].charCodeAt() <= 122) {
        small = true;
    }
}

for (let i = 0; i <= ind; i++) {
    if (INPUT[0].value[i].charCodeAt() >= 48 && INPUT[0].value[i].charCodeAt() <= 57) {
        int = true;
    }
}

for (let i = 0; i <= ind; i++) {
    if (!(INPUT[0].value[i].charCodeAt() >= 65 && INPUT[0].value[i].charCodeAt() <= 90) &&
        !(INPUT[0].value[i].charCodeAt() >= 97 && INPUT[0].value[i].charCodeAt() <= 122) &&
        !(INPUT[0].value[i].charCodeAt() >= 48 && INPUT[0].value[i].charCodeAt() <= 57)) {
        other = true;
    }
}

if (capital || small || int || other) {
    BAR.classList.add("red");
    BAR.classList.remove("orange");
    BAR.classList.remove("blue");
    BAR.classList.remove("green"); 
    PARAGRAPH.textContent = "Weak"
}
else {
    BAR.classList.remove("red");
    BAR.classList.remove("orange");
    BAR.classList.remove("blue");
    BAR.classList.remove("green"); 
    PARAGRAPH.textContent = ""
}

if ((capital && small) || (capital && int) || (capital && other) || (small && int) || (small && other) || (int && other)) {
    BAR.classList.add("orange");
    BAR.classList.remove("red");
    BAR.classList.remove("blue");
    BAR.classList.remove("green"); 
    PARAGRAPH.textContent = "Not Bad"
}

if ((capital && small && int) || (capital && small && other) || (small && int && other) || (int && other && capital)) {
    BAR.classList.add("blue");
    BAR.classList.remove("red");
    BAR.classList.remove("orange");
    BAR.classList.remove("green"); 
    PARAGRAPH.textContent = "Good"
}

if (capital && small && int && other) {
    BAR.classList.add("green");
    BAR.classList.remove("red");
    BAR.classList.remove("orange");
    BAR.classList.remove("blue"); 
    PARAGRAPH.textContent = "Excellent"
}
});