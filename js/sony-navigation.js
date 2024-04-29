const SCREEN_W = document.documentElement.clientWidth;

const Business = document.querySelector(".business");
const Business_UL = document.querySelector(".business ul");
const Business_LI = document.querySelectorAll(".business li");
const Business_LI_I = document.querySelectorAll(".business li i");
const Business_SUB_li = document.querySelectorAll(".sub-list li");
const NAV = document.querySelector("nav");
const NAV_a = document.querySelectorAll("nav a");
const NAV_LI = document.querySelectorAll("nav li");
const NAV_LI_Lines = document.querySelectorAll(".nav-li-toggler div");
const NAV_WINDOWS = document.querySelectorAll(".ordinary-list");
const CLOSE_BTN = document.querySelectorAll(".close");
const SM_MENUE_ICON = document.querySelector(".menue-toggler");
const SM_MENUE_ICON_LINES = document.querySelectorAll(".menue-toggler div");

const SEARCH_BTN = document.querySelector("#search");
const SEARCH_LG_X = document.querySelector(".search-window-X")
const SEARCH_WINDOW = document.querySelector(".search-window-parent");
const SEARCH_SM_X = document.querySelector(".search-sm-x");

window.addEventListener("resize", function () {
    if (SCREEN_W>=992) {
        Business.classList.add("hidden");
        for (i=0;i<6;i++) {
            NAV_WINDOWS[i].classList.add("hidden");
        }
    }
    else {
        Business.classList.remove("hidden");
        for (i=0;i<6;i++) {
            NAV_WINDOWS[i].classList.remove("hidden");
        }
    }
});

window.addEventListener("load", function () {
    if (SCREEN_W>=992) {
        Business.classList.add("hidden");
        for (i=0;i<6;i++) {
            NAV_WINDOWS[i].classList.add("hidden");
        }
    }
    else {
        Business.classList.remove("hidden");
        for (i=0;i<6;i++) {
            NAV_WINDOWS[i].classList.remove("hidden");
        }
    }
});


if (SCREEN_W>=992) {

    /* .........Business Hover............*/

    Business_LI[1].addEventListener("mouseenter", function () {
        Business_LI_I[2].classList.add("exsessive-hover");
        Business_LI_I[3].classList.add("exsessive-hover");
    });
    
    Business_LI[1].addEventListener("mouseleave", function () {
        Business_LI_I[2].classList.remove("exsessive-hover");
        Business_LI_I[3].classList.remove("exsessive-hover");
    });
    
    Business_LI[6].addEventListener("mouseenter", function () {
        Business_LI_I[7].classList.add("exsessive-hover");
        Business_LI_I[8].classList.add("exsessive-hover");
    });
    
    Business_LI[6].addEventListener("mouseleave", function () {
        Business_LI_I[7].classList.remove("exsessive-hover");
        Business_LI_I[8].classList.remove("exsessive-hover");
    });
    
    Business_SUB_li[0].addEventListener("mouseenter", function () {
        Business_LI_I[1].classList.add("exsessive-hover");
    });
    
    Business_SUB_li[0].addEventListener("mouseleave", function () {
        Business_LI_I[1].classList.remove("exsessive-hover");
    });
    
    Business_SUB_li[1].addEventListener("mouseenter", function () {
        Business_LI_I[1].classList.add("exsessive-hover");
    });
    
    Business_SUB_li[1].addEventListener("mouseleave", function () {
        Business_LI_I[1].classList.remove("exsessive-hover");
    });
    
    Business_SUB_li[2].addEventListener("mouseenter", function () {
        Business_LI_I[6].classList.add("exsessive-hover");
    });
    
    Business_SUB_li[2].addEventListener("mouseleave", function () {
        Business_LI_I[6].classList.remove("exsessive-hover");
    });
    
    Business_SUB_li[3].addEventListener("mouseenter", function () {
        Business_LI_I[6].classList.add("exsessive-hover");
    });
    
    Business_SUB_li[3].addEventListener("mouseleave", function () {
        Business_LI_I[6].classList.remove("exsessive-hover");
    });

    /* .........Sub Menue Closing and Openning............*/

    NAV_a[0].addEventListener("click", function(){
        Business.classList.toggle("hidden");
        for(i=0;i<6;i++) {
            if(!NAV_WINDOWS[i].classList.contains("hidden")) {
                NAV_WINDOWS[i].classList.add("hidden");
            };
        }
    });

    NAV_a[1].addEventListener("click", function(){
        NAV_WINDOWS[0].classList.toggle("hidden");
        if(!Business.classList.contains("hidden")) {
            Business.classList.add("hidden");
        };
        for(i=1;i<6;i++) {
            if(!NAV_WINDOWS[i].classList.contains("hidden")) {
                NAV_WINDOWS[i].classList.add("hidden");
            };
        }
    });
    
    NAV_a[2].addEventListener("click", function(){
        NAV_WINDOWS[1].classList.toggle("hidden");
        if(!Business.classList.contains("hidden")) {
            Business.classList.add("hidden");
        };
        for(i=0;i<6;i++) {
            if(i==1) {
                continue;
            };
            if(!NAV_WINDOWS[i].classList.contains("hidden")) {
                NAV_WINDOWS[i].classList.add("hidden");
            };
        }
    });

    NAV_a[3].addEventListener("click", function(){
        NAV_WINDOWS[2].classList.toggle("hidden");
        if(!Business.classList.contains("hidden")) {
            Business.classList.add("hidden");
        };
        for(i=0;i<6;i++) {
            if(i==2) {
                continue;
            };
            if(!NAV_WINDOWS[i].classList.contains("hidden")) {
                NAV_WINDOWS[i].classList.add("hidden");
            };
        }
    });

    NAV_a[4].addEventListener("click", function(){
        NAV_WINDOWS[3].classList.toggle("hidden");
        if(!Business.classList.contains("hidden")) {
            Business.classList.add("hidden");
        };
        for(i=0;i<6;i++) {
            if(i==3) {
                continue;
            };
            if(!NAV_WINDOWS[i].classList.contains("hidden")) {
                NAV_WINDOWS[i].classList.add("hidden");
            };
        }
    });

    NAV_a[5].addEventListener("click", function(){
        NAV_WINDOWS[4].classList.toggle("hidden");
        if(!Business.classList.contains("hidden")) {
            Business.classList.add("hidden");
        };
        for(i=0;i<6;i++) {
            if(i==4) {
                continue;
            };
            if(!NAV_WINDOWS[i].classList.contains("hidden")) {
                NAV_WINDOWS[i].classList.add("hidden");
            };
        }
    });

    NAV_a[6].addEventListener("click", function(){
        NAV_WINDOWS[5].classList.toggle("hidden");
        if(!Business.classList.contains("hidden")) {
            Business.classList.add("hidden");
        };
        for(i=0;i<6;i++) {
            if(i==5) {
                continue;
            };
            if(!NAV_WINDOWS[i].classList.contains("hidden")) {
                NAV_WINDOWS[i].classList.add("hidden");
            };
        }
    });

    CLOSE_BTN[0].addEventListener("click", function(){
        if(!Business.classList.contains("hidden")) {
            Business.classList.add("hidden");
        };
    });

    CLOSE_BTN[1].addEventListener("click", function(){
        if(!NAV_WINDOWS[0].classList.contains("hidden")) {
            NAV_WINDOWS[0].classList.add("hidden");
        };
    });

    CLOSE_BTN[2].addEventListener("click", function(){
        if(!NAV_WINDOWS[1].classList.contains("hidden")) {
            NAV_WINDOWS[1].classList.add("hidden");
        };
    });

    CLOSE_BTN[3].addEventListener("click", function(){
        if(!NAV_WINDOWS[2].classList.contains("hidden")) {
            NAV_WINDOWS[2].classList.add("hidden");
        };
    });

    CLOSE_BTN[4].addEventListener("click", function(){
        if(!NAV_WINDOWS[3].classList.contains("hidden")) {
            NAV_WINDOWS[3].classList.add("hidden");
        };
    });

    CLOSE_BTN[5].addEventListener("click", function(){
        if(!NAV_WINDOWS[4].classList.contains("hidden")) {
            NAV_WINDOWS[4].classList.add("hidden");
        };
    });

    CLOSE_BTN[6].addEventListener("click", function(){
        if(!NAV_WINDOWS[5].classList.contains("hidden")) {
            NAV_WINDOWS[5].classList.add("hidden");
        };
    });

    /* ..........search bar..................... */

    SEARCH_BTN.addEventListener("click", function() {
        SEARCH_BTN.classList.add("hidden");
        SEARCH_SM_X.classList.add("hidden");
        SEARCH_WINDOW.classList.remove("hidden");
        SEARCH_LG_X.classList.remove("hidden");
    });
    
    SEARCH_LG_X.addEventListener("click", function() {
        SEARCH_LG_X.classList.add("hidden");
        SEARCH_WINDOW.classList.add("hidden");
        SEARCH_BTN.classList.remove("hidden");
        SEARCH_SM_X.classList.remove("hidden");
    });
}

else {

    // Business.classList.remove("hidden");
    // for (i=0;i<6;i++) {
    //     NAV_WINDOWS[i].classList.remove("hidden");
    // }

    /*..........Small menue icon functions.........*/

    SM_MENUE_ICON.addEventListener("click", function(){
        for (let i = 0; i <= 6; i++) {
            if (NAV_LI_Lines[i*2].classList.contains("opacity-custom")) {
            NAV_LI_Lines[i*2].classList.remove("rotate-custom-90");
            NAV_LI_Lines[i*2].classList.remove("opacity-custom");
            NAV_LI_Lines[i*2+1].classList.remove("rotate-custom-90");
            NAV_a[i].classList.remove("a-focus");
            NAV.classList.remove("nav-open-with-li-open");
            Business.classList.remove("business-height");
            NAV_LI[0].classList.remove("business-margin");
            NAV_WINDOWS[0].classList.remove("sony-g-height");
            NAV_LI[1].classList.remove("sony-g-margin");
            NAV_WINDOWS[1].classList.remove("technology-height");
            NAV_LI[2].classList.remove("technology-margin");
            NAV_WINDOWS[2].classList.remove("technology-height");
            NAV_LI[3].classList.remove("technology-margin");
            NAV_WINDOWS[3].classList.remove("design-height");
            NAV_LI[4].classList.remove("design-margin");
            NAV_WINDOWS[4].classList.remove("employees-height");
            NAV_LI[5].classList.remove("employees-margin");
            NAV_WINDOWS[5].classList.remove("Investor-height");
            NAV_LI[6].classList.remove("Investor-margin");
            NAV.classList.remove("Investor-margin-whole-menue-height");
          }};
        SM_MENUE_ICON_LINES[0].classList.toggle("rotate-custom-45");
        SM_MENUE_ICON_LINES[1].classList.toggle("opacity-custom");
        SM_MENUE_ICON_LINES[2].classList.toggle("rotate-custom--45");
        if(NAV.classList.contains("nav-open")) {
            setTimeout(function(){
                NAV.classList.remove("nav-open")
            }, 250)
        }
        else {
            NAV.classList.add("nav-open")
        }
        
    });

    /*..........Navigation links functions functions.........*/

    NAV_a[0].addEventListener("click", function() {
        for (let i = 1; i <= 6; i++) {
            if (NAV_LI_Lines[i*2].classList.contains("opacity-custom")) {
            NAV_LI_Lines[i*2].classList.remove("rotate-custom-90");
            NAV_LI_Lines[i*2].classList.remove("opacity-custom");
            NAV_LI_Lines[i*2+1].classList.remove("rotate-custom-90");
            NAV_a[i].classList.remove("a-focus");
            NAV.classList.remove("nav-open-with-li-open");
            NAV_WINDOWS[0].classList.remove("sony-g-height");
            NAV_LI[1].classList.remove("sony-g-margin");
            NAV_WINDOWS[1].classList.remove("technology-height");
            NAV_LI[2].classList.remove("technology-margin");
            NAV_WINDOWS[2].classList.remove("technology-height");
            NAV_LI[3].classList.remove("technology-margin");
            NAV_WINDOWS[3].classList.remove("design-height");
            NAV_LI[4].classList.remove("design-margin");
            NAV_WINDOWS[4].classList.remove("employees-height");
            NAV_LI[5].classList.remove("employees-margin");
            NAV_WINDOWS[5].classList.remove("Investor-height");
            NAV_LI[6].classList.remove("Investor-margin");
            NAV.classList.remove("Investor-margin-whole-menue-height");
          }};
        NAV_LI_Lines[0].classList.toggle("rotate-custom-90");
        NAV_LI_Lines[0].classList.toggle("opacity-custom");
        NAV_LI_Lines[1].classList.toggle("rotate-custom-90");
        NAV_a[0].classList.toggle("a-focus");
        setTimeout(function(){
            Business.classList.toggle("business-height");
            NAV_LI[0].classList.toggle("business-margin");
            NAV.classList.toggle("nav-open-with-li-open");
        }, 200);
    });
    
    NAV_a[1].addEventListener("click", function() {
        for (let i = 0; i <= 6; i++) {
            if (i == 1) {
                continue;
              };
            if (NAV_LI_Lines[i*2].classList.contains("opacity-custom")) {
            NAV_LI_Lines[i*2].classList.remove("rotate-custom-90");
            NAV_LI_Lines[i*2].classList.remove("opacity-custom");
            NAV_LI_Lines[i*2+1].classList.remove("rotate-custom-90");
            NAV_a[i].classList.remove("a-focus");
            NAV.classList.remove("nav-open-with-li-open");
            Business.classList.remove("business-height");
            NAV_LI[0].classList.remove("business-margin");
            NAV_WINDOWS[1].classList.remove("technology-height");
            NAV_LI[2].classList.remove("technology-margin");
            NAV_WINDOWS[2].classList.remove("technology-height");
            NAV_LI[3].classList.remove("technology-margin");
            NAV_WINDOWS[3].classList.remove("design-height");
            NAV_LI[4].classList.remove("design-margin");
            NAV_WINDOWS[4].classList.remove("employees-height");
            NAV_LI[5].classList.remove("employees-margin");
            NAV_WINDOWS[5].classList.remove("Investor-height");
            NAV_LI[6].classList.remove("Investor-margin");
            NAV.classList.remove("Investor-margin-whole-menue-height");
          }};
        NAV_LI_Lines[2].classList.toggle("rotate-custom-91");
        NAV_LI_Lines[2].classList.toggle("opacity-custom");
        NAV_LI_Lines[3].classList.toggle("rotate-custom-90");
        NAV_a[1].classList.toggle("a-focus");
        setTimeout(function(){
            NAV_WINDOWS[0].classList.toggle("sony-g-height");
            NAV_LI[1].classList.toggle("sony-g-margin");
            NAV.classList.toggle("nav-open-with-li-open");
        }, 200);
    });
    
    NAV_a[2].addEventListener("click", function() {
        for (let i = 0; i <= 6; i++) {
            if (i == 2) {
                continue;
              };
            if (NAV_LI_Lines[i*2].classList.contains("opacity-custom")) {
            NAV_LI_Lines[i*2].classList.remove("rotate-custom-90");
            NAV_LI_Lines[i*2].classList.remove("opacity-custom");
            NAV_LI_Lines[i*2+1].classList.remove("rotate-custom-90");
            NAV_a[i].classList.remove("a-focus");
            NAV.classList.remove("nav-open-with-li-open");
            Business.classList.remove("business-height");
            NAV_LI[0].classList.remove("business-margin");
            NAV_WINDOWS[0].classList.remove("sony-g-height");
            NAV_LI[1].classList.remove("sony-g-margin");
            NAV_WINDOWS[2].classList.remove("technology-height");
            NAV_LI[3].classList.remove("technology-margin");
            NAV_WINDOWS[3].classList.remove("design-height");
            NAV_LI[4].classList.remove("design-margin");
            NAV_WINDOWS[4].classList.remove("employees-height");
            NAV_LI[5].classList.remove("employees-margin");
            NAV_WINDOWS[5].classList.remove("Investor-height");
            NAV_LI[6].classList.remove("Investor-margin");
            NAV.classList.remove("Investor-margin-whole-menue-height");
          }};
        NAV_LI_Lines[4].classList.toggle("rotate-custom-91");
        NAV_LI_Lines[4].classList.toggle("opacity-custom");
        NAV_LI_Lines[5].classList.toggle("rotate-custom-90");
        NAV_a[2].classList.toggle("a-focus");
        setTimeout(function(){
            NAV_WINDOWS[1].classList.toggle("technology-height");
            NAV_LI[2].classList.toggle("technology-margin");
            NAV.classList.toggle("nav-open-with-li-open");
        }, 200);
    });
    
    NAV_a[3].addEventListener("click", function() {
        for (let i = 0; i <= 6; i++) {
            if (i == 3) {
                continue;
              };
            if (NAV_LI_Lines[i*2].classList.contains("opacity-custom")) {
            NAV_LI_Lines[i*2].classList.remove("rotate-custom-90");
            NAV_LI_Lines[i*2].classList.remove("opacity-custom");
            NAV_LI_Lines[i*2+1].classList.remove("rotate-custom-90");
            NAV_a[i].classList.remove("a-focus");
            NAV.classList.remove("nav-open-with-li-open");
            Business.classList.remove("business-height");
            NAV_LI[0].classList.remove("business-margin");
            NAV_WINDOWS[0].classList.remove("sony-g-height");
            NAV_LI[1].classList.remove("sony-g-margin");
            NAV_WINDOWS[1].classList.remove("technology-height");
            NAV_LI[2].classList.remove("technology-margin");
            NAV_WINDOWS[3].classList.remove("design-height");
            NAV_LI[4].classList.remove("design-margin");
            NAV_WINDOWS[4].classList.remove("employees-height");
            NAV_LI[5].classList.remove("employees-margin");
            NAV_WINDOWS[5].classList.remove("Investor-height");
            NAV_LI[6].classList.remove("Investor-margin");
            NAV.classList.remove("Investor-margin-whole-menue-height");
          }};
        NAV_LI_Lines[6].classList.toggle("rotate-custom-91");
        NAV_LI_Lines[6].classList.toggle("opacity-custom");
        NAV_LI_Lines[7].classList.toggle("rotate-custom-90");
        NAV_a[3].classList.toggle("a-focus");
        setTimeout(function(){
            NAV_WINDOWS[2].classList.toggle("technology-height");
            NAV_LI[3].classList.toggle("technology-margin");
            NAV.classList.toggle("nav-open-with-li-open");
        }, 200);
    });
    
    NAV_a[4].addEventListener("click", function() {
        for (let i = 0; i <= 6; i++) {
            if (i == 4) {
                continue;
              };
            if (NAV_LI_Lines[i*2].classList.contains("opacity-custom")) {
            NAV_LI_Lines[i*2].classList.remove("rotate-custom-90");
            NAV_LI_Lines[i*2].classList.remove("opacity-custom");
            NAV_LI_Lines[i*2+1].classList.remove("rotate-custom-90");
            NAV_a[i].classList.remove("a-focus");
            NAV.classList.remove("nav-open-with-li-open");
            Business.classList.remove("business-height");
            NAV_LI[0].classList.remove("business-margin");
            NAV_WINDOWS[0].classList.remove("sony-g-height");
            NAV_LI[1].classList.remove("sony-g-margin");
            NAV_WINDOWS[1].classList.remove("technology-height");
            NAV_LI[2].classList.remove("technology-margin");
            NAV_WINDOWS[2].classList.remove("technology-height");
            NAV_LI[3].classList.remove("technology-margin");
            NAV_WINDOWS[4].classList.remove("employees-height");
            NAV_LI[5].classList.remove("employees-margin");
            NAV_WINDOWS[5].classList.remove("Investor-height");
            NAV_LI[6].classList.remove("Investor-margin");
            NAV.classList.remove("Investor-margin-whole-menue-height");
          }};
        NAV_LI_Lines[8].classList.toggle("rotate-custom-91");
        NAV_LI_Lines[8].classList.toggle("opacity-custom");
        NAV_LI_Lines[9].classList.toggle("rotate-custom-90");
        NAV_a[4].classList.toggle("a-focus");
        setTimeout(function(){
            NAV_WINDOWS[3].classList.toggle("design-height");
            NAV_LI[4].classList.toggle("design-margin");
            NAV.classList.toggle("nav-open-with-li-open");
        }, 200);
    });
    
    NAV_a[5].addEventListener("click", function() {
        for (let i = 0; i <= 6; i++) {
            if (i == 5) {
                continue;
              };
            if (NAV_LI_Lines[i*2].classList.contains("opacity-custom")) {
            NAV_LI_Lines[i*2].classList.remove("rotate-custom-90");
            NAV_LI_Lines[i*2].classList.remove("opacity-custom");
            NAV_LI_Lines[i*2+1].classList.remove("rotate-custom-90");
            NAV_a[i].classList.remove("a-focus");
            NAV.classList.remove("nav-open-with-li-open");
            Business.classList.remove("business-height");
            NAV_LI[0].classList.remove("business-margin");
            NAV_WINDOWS[0].classList.remove("sony-g-height");
            NAV_LI[1].classList.remove("sony-g-margin");
            NAV_WINDOWS[1].classList.remove("technology-height");
            NAV_LI[2].classList.remove("technology-margin");
            NAV_WINDOWS[2].classList.remove("technology-height");
            NAV_LI[3].classList.remove("technology-margin");
            NAV_WINDOWS[3].classList.remove("design-height");
            NAV_LI[4].classList.remove("design-margin");
            NAV_WINDOWS[5].classList.remove("Investor-height");
            NAV_LI[6].classList.remove("Investor-margin");
            NAV.classList.remove("Investor-margin-whole-menue-height");
          }};
        NAV_LI_Lines[10].classList.toggle("rotate-custom-91");
        NAV_LI_Lines[10].classList.toggle("opacity-custom");
        NAV_LI_Lines[11].classList.toggle("rotate-custom-90");
        NAV_a[5].classList.toggle("a-focus");
        setTimeout(function(){
            NAV_WINDOWS[4].classList.toggle("employees-height");
            NAV_LI[5].classList.toggle("employees-margin");
            NAV.classList.toggle("nav-open-with-li-open");
        }, 200);
    });
    
    NAV_a[6].addEventListener("click", function() {
        for (let i = 0; i <= 6; i++) {
            if (i == 6) {
                continue;
              };
            if (NAV_LI_Lines[i*2].classList.contains("opacity-custom")) {
            NAV_LI_Lines[i*2].classList.remove("rotate-custom-90");
            NAV_LI_Lines[i*2].classList.remove("opacity-custom");
            NAV_LI_Lines[i*2+1].classList.remove("rotate-custom-90");
            NAV_a[i].classList.remove("a-focus");
            NAV.classList.remove("nav-open-with-li-open");
            Business.classList.remove("business-height");
            NAV_LI[0].classList.remove("business-margin");
            NAV_WINDOWS[0].classList.remove("sony-g-height")
            NAV_LI[1].classList.remove("sony-g-margin")
            NAV_WINDOWS[1].classList.remove("technology-height");
            NAV_LI[2].classList.remove("technology-margin");
            NAV_WINDOWS[2].classList.remove("technology-height");
            NAV_LI[3].classList.remove("technology-margin");
            NAV_WINDOWS[3].classList.remove("design-height");
            NAV_LI[4].classList.remove("design-margin");
            NAV_WINDOWS[4].classList.remove("employees-height");
            NAV_LI[5].classList.remove("employees-margin");
          }};
        NAV_LI_Lines[12].classList.toggle("rotate-custom-91");
        NAV_LI_Lines[12].classList.toggle("opacity-custom");
        NAV_LI_Lines[13].classList.toggle("rotate-custom-90");
        NAV_a[6].classList.toggle("a-focus");
        setTimeout(function(){
            NAV_WINDOWS[5].classList.toggle("Investor-height");
            NAV_LI[6].classList.toggle("Investor-margin");
            NAV.classList.toggle("nav-open-with-li-open");
        }, 200);
    });


    /* ..........search bar..................... */

    SEARCH_BTN.addEventListener("click", function() {
        for (let i = 0; i <= 6; i++) {
            if (NAV_LI_Lines[i*2].classList.contains("opacity-custom")) {
            NAV_LI_Lines[i*2].classList.remove("rotate-custom-90");
            NAV_LI_Lines[i*2].classList.remove("opacity-custom");
            NAV_LI_Lines[i*2+1].classList.remove("rotate-custom-90");
            NAV_a[i].classList.remove("a-focus");
            NAV.classList.remove("nav-open-with-li-open");
            Business.classList.remove("business-height");
            NAV_LI[0].classList.remove("business-margin");
            NAV_WINDOWS[0].classList.remove("sony-g-height");
            NAV_LI[1].classList.remove("sony-g-margin");
            NAV_WINDOWS[1].classList.remove("technology-height");
            NAV_LI[2].classList.remove("technology-margin");
            NAV_WINDOWS[2].classList.remove("technology-height");
            NAV_LI[3].classList.remove("technology-margin");
            NAV_WINDOWS[3].classList.remove("design-height");
            NAV_LI[4].classList.remove("design-margin");
            NAV_WINDOWS[4].classList.remove("employees-height");
            NAV_LI[5].classList.remove("employees-margin");
            NAV_WINDOWS[5].classList.remove("Investor-height");
            NAV_LI[6].classList.remove("Investor-margin");
            NAV.classList.remove("Investor-margin-whole-menue-height");
          }};
          SM_MENUE_ICON_LINES[0].classList.remove("rotate-custom-45");
          SM_MENUE_ICON_LINES[1].classList.remove("opacity-custom");
          SM_MENUE_ICON_LINES[2].classList.remove("rotate-custom--45");
          setTimeout(function(){
            NAV.classList.remove("nav-open")
        }, 250)
        SEARCH_WINDOW.classList.remove("hidden");
    });
    
    SEARCH_SM_X.addEventListener("click", function() {
        SEARCH_WINDOW.classList.add("hidden");
    });
}
