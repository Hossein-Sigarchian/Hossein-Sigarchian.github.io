const INPUT = document.querySelectorAll("input");
const PARAGRAPH = document.querySelectorAll("p");
const S_COLOR = document.querySelectorAll(".colors");
const FINAL_COLOR = document.querySelector(".final-color");

window.addEventListener("load", function() {
    INPUT[0].value = 255;
    INPUT[1].value = 255;
    INPUT[2].value = 255;
    INPUT[3].value = 100;
});

function final() {
    FINAL_COLOR.style.backgroundColor = `rgba(${INPUT[0].value},${INPUT[1].value},${INPUT[2].value},${INPUT[3].value/100})`
    PARAGRAPH[4].textContent = `rgba(${INPUT[0].value},${INPUT[1].value},${INPUT[2].value},${INPUT[3].value/100})`
};

INPUT[0].addEventListener("input", function(){
    S_COLOR[0].style.backgroundColor = `rgb(${INPUT[0].value},0,0)`
    PARAGRAPH[0].textContent = `${INPUT[0].value}`;
    final();
});

INPUT[1].addEventListener("input", function(){
    S_COLOR[1].style.backgroundColor = `rgb(1,${INPUT[1].value},0)`
    PARAGRAPH[1].textContent = `${INPUT[1].value}`;
    final();
});

INPUT[2].addEventListener("input", function(){
    S_COLOR[2].style.backgroundColor = `rgb(0,0,${INPUT[2].value})`
    PARAGRAPH[2].textContent = `${INPUT[2].value}`;
    final();
});

INPUT[3].addEventListener("input", function(){
    PARAGRAPH[3].textContent = `${INPUT[3].value/100}`;
    final();
});
