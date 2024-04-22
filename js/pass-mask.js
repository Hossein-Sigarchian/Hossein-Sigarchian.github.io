const INPUT = document.querySelectorAll(".password");
const BTN = document.querySelectorAll("button");


BTN[0].addEventListener("click", function () {
    INPUT[1].value = INPUT[0].value;
    INPUT[1].style.left = "0px";
  });

  BTN[1].addEventListener("click", function () {
    INPUT[0].value = INPUT[1].value;
    INPUT[1].style.left = "";
    INPUT[1].style.left = "400px";
  });