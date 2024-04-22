const BTN = document.querySelectorAll("button")
const LIGHTS = document.querySelectorAll(".off div")

BTN[0].addEventListener("click", function() {
    if (LIGHTS[1].classList.contains("show")) {
        LIGHTS[1].classList.remove("show")
        LIGHTS[0].classList.add("show") 
    }
    else if (LIGHTS[2].classList.contains("show")) {
        LIGHTS[2].classList.remove("show")
        LIGHTS[0].classList.add("show") 
    }
    else {
        LIGHTS[0].classList.add("show") 
    }
})

BTN[1].addEventListener("click", function() {
    if (LIGHTS[0].classList.contains("show")) {
        LIGHTS[0].classList.remove("show")
        LIGHTS[1].classList.add("show") 
    }
    else if (LIGHTS[2].classList.contains("show")) {
        LIGHTS[2].classList.remove("show")
        LIGHTS[1].classList.add("show") 
    }
    else {
        LIGHTS[1].classList.add("show") 
    }
})

BTN[2].addEventListener("click", function() {
    if (LIGHTS[0].classList.contains("show")) {
        LIGHTS[0].classList.remove("show")
        LIGHTS[2].classList.add("show") 
    }
    else if (LIGHTS[1].classList.contains("show")) {
        LIGHTS[1].classList.remove("show")
        LIGHTS[2].classList.add("show") 
    }
    else {
        LIGHTS[2].classList.add("show") 
    }
})