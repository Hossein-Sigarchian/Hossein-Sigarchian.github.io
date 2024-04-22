const MAIN_ROW = document.querySelectorAll(".accordion>button");
const PASSAGE = document.querySelectorAll(".content-hid");
const HIDDEN_E = document.querySelectorAll(".content-hid");
const ARROW = document.querySelectorAll(".accordion i");

MAIN_ROW[0].addEventListener("click", function() {
    if (HIDDEN_E[1].classList.contains("show")) {
        HIDDEN_E[1].classList.remove("show");
        ARROW[1].classList.remove("rotate");
        MAIN_ROW[1].classList.remove("open");
        MAIN_ROW[0].classList.toggle("open");
        HIDDEN_E[0].classList.toggle("show");
        ARROW[0].classList.toggle("rotate");
    }
    else if (HIDDEN_E[2].classList.contains("show")) {
        HIDDEN_E[2].classList.remove("show");
        ARROW[2].classList.remove("rotate");
        MAIN_ROW[2].classList.remove("open");
        MAIN_ROW[0].classList.toggle("open");
        HIDDEN_E[0].classList.toggle("show");
        ARROW[0].classList.toggle("rotate");
    }
    else {
        HIDDEN_E[0].classList.toggle("show");
        ARROW[0].classList.toggle("rotate");
        MAIN_ROW[0].classList.toggle("open");
    };
});

MAIN_ROW[1].addEventListener("click", function() {
    if (HIDDEN_E[0].classList.contains("show")) {
        HIDDEN_E[0].classList.remove("show");
        ARROW[0].classList.remove("rotate");
        MAIN_ROW[0].classList.remove("open");
        MAIN_ROW[1].classList.toggle("open");
        HIDDEN_E[1].classList.toggle("show");
        ARROW[1].classList.toggle("rotate");
    }
    else if (HIDDEN_E[2].classList.contains("show")) {
        HIDDEN_E[2].classList.remove("show");
        ARROW[2].classList.remove("rotate");
        MAIN_ROW[2].classList.remove("open");
        MAIN_ROW[1].classList.toggle("open");
        HIDDEN_E[1].classList.toggle("show");
        ARROW[1].classList.toggle("rotate");
    }
    else {
        HIDDEN_E[1].classList.toggle("show");
        ARROW[1].classList.toggle("rotate");
        MAIN_ROW[1].classList.toggle("open");
    };
});

MAIN_ROW[2].addEventListener("click", function() {
    if (HIDDEN_E[0].classList.contains("show")) {
        HIDDEN_E[0].classList.remove("show");
        ARROW[0].classList.remove("rotate");
        MAIN_ROW[0].classList.remove("open");
        MAIN_ROW[2].classList.toggle("open");
        HIDDEN_E[2].classList.toggle("show");
        ARROW[2].classList.toggle("rotate");
    }
    else if (HIDDEN_E[1].classList.contains("show")) {
        HIDDEN_E[1].classList.remove("show");
        ARROW[1].classList.remove("rotate");
        MAIN_ROW[1].classList.remove("open");
        MAIN_ROW[2].classList.toggle("open");
        HIDDEN_E[2].classList.toggle("show");
        ARROW[2].classList.toggle("rotate");
    }
    else {
        HIDDEN_E[2].classList.toggle("show");
        ARROW[2].classList.toggle("rotate");
        MAIN_ROW[2].classList.toggle("open");
    };
});

MAIN_ROW[0].addEventListener("click", function () {
    if (MAIN_ROW[1].classList.contains("focused")) {
        MAIN_ROW[1].classList.remove("focused");
        MAIN_ROW[0].classList.add("focused");
    }
    else if (MAIN_ROW[2].classList.contains("focused")) {
        MAIN_ROW[2].classList.remove("focused");
        MAIN_ROW[0].classList.add("focused");
    }
    else {
        MAIN_ROW[0].classList.add("focused");
    }
});

MAIN_ROW[1].addEventListener("click", function () {
    if (MAIN_ROW[0].classList.contains("focused")) {
        MAIN_ROW[0].classList.remove("focused");
        MAIN_ROW[1].classList.add("focused");
    }
    else if (MAIN_ROW[2].classList.contains("focused")) {
        MAIN_ROW[2].classList.remove("focused");
        MAIN_ROW[1].classList.add("focused");
    }
    else {
        MAIN_ROW[1].classList.add("focused");
    }
});

MAIN_ROW[2].addEventListener("click", function () {
    if (MAIN_ROW[0].classList.contains("focused")) {
        MAIN_ROW[0].classList.remove("focused");
        MAIN_ROW[2].classList.add("focused");
    }
    else if (MAIN_ROW[1].classList.contains("focused")) {
        MAIN_ROW[1].classList.remove("focused");
        MAIN_ROW[2].classList.add("focused");
    }
    else {
        MAIN_ROW[2].classList.add("focused");
    }
});

