$(document).ready(function() {
const PLAYER_STAFF_BTN = $(".under-banner-grey ul li");
const BLUE_NAV_BAR = $(".associative-nav");
const WHITE_NAV_BAR = $(".main-nav");
const MENU_BTN = $(".main-nav-sidebar>div");
const MENU_BTN_T = $(".sidbar-menu span");
const MENU_BTN_LINES = $(".sidbar-lines div");
const MAIN_NAV = $(".main-nav-1st");
const MAIN_MENU = $(".menu-content");
const ACCORDION_BTN = $(".accordion-btn");
const ACCORDION_ROTATE = $(".rotating-plus");
const ACCORDION_content = $(".munue-sub-ul");
const MENU_RIGHT_BTN = $(".main-nav-2nd ul li a");
const MENU_RIGHT_BTN_i = $(".main-nav-2nd ul li a i");
const LANGUAGE_HOLDER = $(".languages");
const LANGUAGE_LIST = $(".languages ul");
const SEARCH_MODAL = $(".search-bar-holder");
const SEARCH_BAR = $(".search-bar");

window.addEventListener("resize", function () {
    let screen_w = document.documentElement.clientWidth;
    if (screen_w>=1700) {
        $("body").css("width", "1700px");
        $(".main-nav").css("width", "1700px");
        MAIN_MENU.css("width", "1700px");
        SEARCH_MODAL.css("width", "1700px");
        SEARCH_BAR.css("width", "1700px");
        LANGUAGE_HOLDER.css("right", "5%");
    }
    else if (992>=screen_w>350) {
        $("body").css("width", "100%");
        $(".main-nav").css("width", "100%")
        MAIN_MENU.css("width", "320px");
        SEARCH_MODAL.css("width", "100%");
        SEARCH_BAR.css("width", "100%");
        LANGUAGE_HOLDER.css("right", "0");
    }
    else if (screen_w<=350) {
        $("body").css("width", "100%");
        $(".main-nav").css("width", "100%")
        MAIN_MENU.css("width", "300px");
        SEARCH_MODAL.css("width", "100%");
        SEARCH_BAR.css("width", "100%");
        LANGUAGE_HOLDER.css("right", "0");
    }
    else {
        $("body").css("width", "100%");
        $(".main-nav").css("width", "100%")
        MAIN_MENU.css("width", "100%");
        SEARCH_MODAL.css("width", "100%");
        SEARCH_BAR.css("width", "100%");
        LANGUAGE_HOLDER.css("right", "0");
        }
});

window.addEventListener("load", function () {
    let screen_w = document.documentElement.clientWidth;
    if (screen_w>=1700) {
        $("body").css("width", "1700px");
        $(".main-nav").css("width", "1700px");
        MAIN_MENU.css("width", "1700px");
        SEARCH_MODAL.css("width", "1700px");
        SEARCH_BAR.css("width", "1700px");
        LANGUAGE_HOLDER.css("right", "5%");
    }
    else if (992>=screen_w>350) {
        $("body").css("width", "100%");
        $(".main-nav").css("width", "100%")
        MAIN_MENU.css("width", "320px");
        SEARCH_MODAL.css("width", "100%");
        SEARCH_BAR.css("width", "100%");
        LANGUAGE_HOLDER.css("right", "0");
    }
    else if (screen_w<=350) {
        $("body").css("width", "100%");
        $(".main-nav").css("width", "100%")
        MAIN_MENU.css("width", "300px");
        SEARCH_MODAL.css("width", "100%");
        SEARCH_BAR.css("width", "100%");
        LANGUAGE_HOLDER.css("right", "0");
    }
    else {
        $("body").css("width", "100%");
        $(".main-nav").css("width", "100%")
        MAIN_MENU.css("width", "100%");
        SEARCH_MODAL.css("width", "100%");
        SEARCH_BAR.css("width", "100%");
        LANGUAGE_HOLDER.css("right", "0");
        }
        });

//................fading image.....................

setTimeout(function() {
    $(".img-parent-top img").removeClass("c-opacity-0");
}, 300);

// ...............scrolling functions.................

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 100 && !(MAIN_NAV.hasClass("d-none") || $(MENU_RIGHT_BTN_i[0]).hasClass("bi-x-lg") || $(MENU_RIGHT_BTN_i[2]).hasClass("bi-x-lg"))) {
        WHITE_NAV_BAR.addClass("top-135"); 
        BLUE_NAV_BAR.addClass("top-135");
    }
    else {
        WHITE_NAV_BAR.removeClass("top-135");
        BLUE_NAV_BAR.removeClass("top-135");
    };
})

// ..............left menu openning.....................

MENU_BTN.click(function(){
    if (MAIN_MENU.hasClass("d-none")){
        MAIN_MENU.removeClass("d-none");
        MAIN_NAV.addClass("d-none");
        setTimeout(function(){
            MAIN_MENU.toggleClass("custom-height-0");
            MAIN_MENU.toggleClass("custom-height");
            $(MENU_BTN_LINES[0]).toggleClass("c-rotate-45");
            $(MENU_BTN_LINES[1]).toggleClass("c-opacity-0");
            $(MENU_BTN_LINES[2]).toggleClass("c-rotate--45");
            MENU_BTN_T.text("Close");
        }, 20);
    }
    else {
        MAIN_MENU.toggleClass("custom-height-0");
        MAIN_MENU.toggleClass("custom-height");
        $(MENU_BTN_LINES[0]).toggleClass("c-rotate-45");
        $(MENU_BTN_LINES[1]).toggleClass("c-opacity-0");
        $(MENU_BTN_LINES[2]).toggleClass("c-rotate--45");
        MENU_BTN_T.text("Menu");
        setTimeout(function(){
            MAIN_MENU.addClass("d-none")
            MAIN_NAV.removeClass("d-none");
        }, 20);
    }
});

$(ACCORDION_BTN[0]).click(function() {
    let screen_w = document.documentElement.clientWidth;
    if(screen_w<992) {
        $(ACCORDION_ROTATE[0]).toggleClass("c-rotate--315");
        $(ACCORDION_content[0]).toggleClass("custom-h0-sm-sub-ul");
        $(ACCORDION_content[0]).toggleClass("custom-h150-sm-sub-ul");
    }
});

$(ACCORDION_BTN[1]).click(function() {
    let screen_w = document.documentElement.clientWidth;
    if(screen_w<992) {
        $(ACCORDION_ROTATE[1]).toggleClass("c-rotate--315");
        $(ACCORDION_content[1]).toggleClass("custom-h0-sm-sub-ul");
        $(ACCORDION_content[1]).toggleClass("custom-h150-sm-sub-ul");
    }
});

$(ACCORDION_BTN[2]).click(function() {
    let screen_w = document.documentElement.clientWidth;
    if(screen_w<992) {
        $(ACCORDION_ROTATE[2]).toggleClass("c-rotate--315");
        $(ACCORDION_content[2]).toggleClass("custom-h0-sm-sub-ul");
        $(ACCORDION_content[2]).toggleClass("custom-h150-sm-sub-ul");
    }
});

$(ACCORDION_BTN[3]).click(function() {
    let screen_w = document.documentElement.clientWidth;
    if(screen_w<992) {
        $(ACCORDION_ROTATE[3]).toggleClass("c-rotate--315");
        $(ACCORDION_content[3]).toggleClass("custom-h0-sm-sub-ul");
        $(ACCORDION_content[3]).toggleClass("custom-h90-sm-sub-ul");
    }
});

$(ACCORDION_BTN[4]).click(function() {
    let screen_w = document.documentElement.clientWidth;
    if(screen_w<992) {
        $(ACCORDION_ROTATE[4]).toggleClass("c-rotate--315");
        $(ACCORDION_content[4]).toggleClass("custom-h0-sm-sub-ul");
        $(ACCORDION_content[4]).toggleClass("custom-h120-sm-sub-ul");
    }
});

$(ACCORDION_BTN[5]).click(function() {
    let screen_w = document.documentElement.clientWidth;
    if(screen_w<992) {
        $(ACCORDION_ROTATE[5]).toggleClass("c-rotate--315");
        $(ACCORDION_content[5]).toggleClass("custom-h0-sm-sub-ul");
        $(ACCORDION_content[5]).toggleClass("custom-h120-sm-sub-ul");
    }
});

$(ACCORDION_BTN[6]).click(function() {
    let screen_w = document.documentElement.clientWidth;
    if(screen_w<992) {
        $(ACCORDION_ROTATE[6]).toggleClass("c-rotate--315");
        $(ACCORDION_content[6]).toggleClass("custom-h0-sm-sub-ul");
        $(ACCORDION_content[6]).toggleClass("custom-h120-sm-sub-ul");
    }
});

$(ACCORDION_BTN[7]).click(function() {
    let screen_w = document.documentElement.clientWidth;
    if(screen_w<992) {
        $(ACCORDION_ROTATE[7]).toggleClass("c-rotate--315");
        $(ACCORDION_content[7]).toggleClass("custom-h0-sm-sub-ul");
        $(ACCORDION_content[7]).toggleClass("custom-h90-sm-sub-ul");
    }
});

$(ACCORDION_BTN[8]).click(function() {
    let screen_w = document.documentElement.clientWidth;
    if(screen_w<992) {
        $(ACCORDION_ROTATE[8]).toggleClass("c-rotate--315");
        $(ACCORDION_content[8]).toggleClass("custom-h0-sm-sub-ul");
        $(ACCORDION_content[8]).toggleClass("custom-h120-sm-sub-ul");
    }
});

//..............lg search bar openning................

$(MENU_RIGHT_BTN[0]).click(function() {
    if ($(MENU_RIGHT_BTN_i[0]).hasClass("bi-search")) {
        $(MENU_RIGHT_BTN_i[0]).removeClass("bi-search");
        $(MENU_RIGHT_BTN_i[0]).css("color", "#ff1541");
        $(MENU_RIGHT_BTN_i[0]).addClass("bi-x-lg fw-bold");
        SEARCH_MODAL.removeClass("d-none");
        setTimeout(function(){
            SEARCH_MODAL.removeClass("c-opacity-0");
        }, 20)
        $("body").css("overflow", "hidden")
    }
    else {
        $(MENU_RIGHT_BTN_i[0]).removeClass("bi-x-lg fw-bold");
        $(MENU_RIGHT_BTN_i[0]).css("color", "#1a2434");
        $(MENU_RIGHT_BTN_i[0]).addClass("bi-search");
        SEARCH_MODAL.addClass("d-none");
        setTimeout(function(){
            SEARCH_MODAL.addClass("c-opacity-0");
        }, 20) 
        $("body").css("overflow", "visible")
    }
});

// .............lenguage menu openning ................

$(MENU_RIGHT_BTN[2]).click(function() {
    if ($(MENU_RIGHT_BTN_i[2]).hasClass("bi-globe")) {
        $(MENU_RIGHT_BTN_i[2]).removeClass("bi-globe");
        $(MENU_RIGHT_BTN_i[2]).css("color", "#ff1541");
        $(MENU_RIGHT_BTN_i[2]).addClass("bi-x-lg fw-bold");
        LANGUAGE_HOLDER.removeClass("d-none");
        setTimeout(function(){
            LANGUAGE_LIST.removeClass("c-opacity-0");
            LANGUAGE_LIST.addClass("c-margin-30");
        }, 20)
    }
    else {
        $(MENU_RIGHT_BTN_i[2]).removeClass("bi-x-lg fw-bold");
        $(MENU_RIGHT_BTN_i[2]).css("color", "#1a2434");
        $(MENU_RIGHT_BTN_i[2]).addClass("bi-globe");
        LANGUAGE_HOLDER.addClass("d-none");
        setTimeout(function(){
            LANGUAGE_LIST.removeClass("c-margin-30");
            LANGUAGE_LIST.addClass("c-opacity-0");
        }, 20) 
    }
});

// ..........staff or player view................

$(PLAYER_STAFF_BTN[0]).click(function(){
    if($(PLAYER_STAFF_BTN[1]).hasClass("active")) {
        $(PLAYER_STAFF_BTN[1]).removeClass("active");
        $($(".under-banner-grey ul li a")[1]).removeClass("dotted");
        $(".staff-view").addClass("hidden");
        $(".staff-view").addClass("custom-margin");
        $(PLAYER_STAFF_BTN[0]).addClass("active");
        $($(".under-banner-grey ul li a")[0]).addClass("dotted");
        $(".players-view").removeClass("hidden");
        setTimeout(function () {
            $(".players-view").removeClass("custom-margin");
          }, 50);
    }
});

$(PLAYER_STAFF_BTN[1]).click(function(){
    if($(PLAYER_STAFF_BTN[0]).hasClass("active")) {
        $(PLAYER_STAFF_BTN[0]).removeClass("active");
        $($(".under-banner-grey ul li a")[0]).removeClass("dotted");
        $(".players-view").addClass("hidden");
        $(".players-view").addClass("custom-margin");
        $(PLAYER_STAFF_BTN[1]).addClass("active");
        $($(".under-banner-grey ul li a")[1]).addClass("dotted");
        $(".staff-view").removeClass("hidden");
        setTimeout(function () {
            $(".staff-view").removeClass("custom-margin");
          }, 50);
    }
});

// ................Modals.....................

let language_list = document.querySelector(".languages ul");
let close_a = document.querySelectorAll(".main-nav-2nd ul li a");
let close_i = document.querySelectorAll(".main-nav-2nd ul li a i");
let search_bar = document.querySelector(".search-bar");

window.addEventListener("click", function (x) {
    if (!(x.target == language_list) && !(x.target == close_a[2]) && !(x.target == close_i[2])) {
        if(close_i[2].classList.contains("bi-x-lg")) {
            $(MENU_RIGHT_BTN_i[2]).removeClass("bi-x-lg fw-bold");
            $(MENU_RIGHT_BTN_i[2]).css("color", "#1a2434");
            $(MENU_RIGHT_BTN_i[2]).addClass("bi-globe");
            LANGUAGE_HOLDER.addClass("d-none");
            setTimeout(function(){
                LANGUAGE_LIST.removeClass("c-margin-30");
                LANGUAGE_LIST.addClass("c-opacity-0");
            }, 20) 
        }
    }

    if (!(x.target == search_bar) && !(x.target == close_a[0]) && !(x.target == close_i[0])) {
        if(close_i[0].classList.contains("bi-x-lg")) {
            $(MENU_RIGHT_BTN_i[0]).removeClass("bi-x-lg fw-bold");
            $(MENU_RIGHT_BTN_i[0]).css("color", "#1a2434");
            $(MENU_RIGHT_BTN_i[0]).addClass("bi-search");
            SEARCH_MODAL.addClass("d-none");
            setTimeout(function(){
                SEARCH_MODAL.addClass("c-opacity-0");
            }, 20) 
            $("body").css("overflow", "visible");
        }
    }


});

});