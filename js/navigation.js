const NAV = document.querySelector(".navigation");
const LI_GALLERY = document.querySelectorAll("li")[1];
const LI_PRODUCT = document.querySelectorAll("li")[7];
const LI_CONTACT = document.querySelectorAll("li")[11];
const SUB_M_G = document.querySelectorAll("ol")[0];
const SUB_M_P = document.querySelectorAll("ol")[1];
const HIDE_ICON = document.querySelector(".pro-ga-hide-icon");
const MENUE_ICON = document.querySelector(".nav-sm-icon");

let screen_width = document.documentElement.clientWidth;

let key;


window.addEventListener("load", function () {
    if (screen_width >= 576) {

    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 100) {
            NAV.classList.replace("nav-scroll-bg-black", "nav-scroll-bg-gray")
            SUB_M_G.classList.replace("nav-scroll-bg-black", "nav-scroll-bg-gray")
            SUB_M_P.classList.replace("nav-scroll-bg-black", "nav-scroll-bg-gray")
        }
        else {
            NAV.classList.replace("nav-scroll-bg-gray", "nav-scroll-bg-black")
            SUB_M_G.classList.replace("nav-scroll-bg-gray", "nav-scroll-bg-black")
            SUB_M_P.classList.replace("nav-scroll-bg-gray", "nav-scroll-bg-black")
    
        }
    })

    /* ..............gallery............... */

    LI_GALLERY.addEventListener("mouseover", function () {
        SUB_M_G.classList.remove("hidden");
        clearTimeout(key);
        setTimeout(function () {
            SUB_M_G.classList.add("show")
        }, 1)
    });
    LI_GALLERY.addEventListener("mouseleave", function () {
        SUB_M_G.classList.remove("show");
        key = setTimeout(function () {
            SUB_M_G.classList.add("hidden")
        }, 400);
    });
    SUB_M_G.addEventListener("mouseover", function () {
        clearTimeout(key);
        SUB_M_G.classList.remove("hidden");
        setTimeout(function () {
            SUB_M_G.classList.add("show")
        }, 1);
    });
    SUB_M_G.addEventListener("mouseleave", function () {
        clearTimeout(key);
        key = setTimeout(function () {
            SUB_M_G.classList.remove("show");
            SUB_M_G.classList.add("hidden")
        }, 400);
    });

    /*.............produt.............*/

    LI_PRODUCT.addEventListener("mouseover", function () {
        clearTimeout(key);
        SUB_M_P.classList.remove("hidden");
        setTimeout(function () {
            SUB_M_P.classList.add("show")
        }, 1)
    });
    LI_PRODUCT.addEventListener("mouseout", function () {
        SUB_M_P.classList.remove("show");
        key = setTimeout(function () {
            SUB_M_P.classList.add("hidden")
        }, 401);
    });
    SUB_M_P.addEventListener("mouseover", function () {
        clearTimeout(key);
        SUB_M_P.classList.remove("hidden");
        setTimeout(function () {
            SUB_M_P.classList.add("show")
        }, 1);
    })
    SUB_M_P.addEventListener("mouseover", function () {
        clearTimeout(key);
        SUB_M_P.classList.remove("show");
        key = setTimeout(function () {
            SUB_M_P.classList.add("hidden")
        }, 1);
    })

    /* ................. Contact ................. */

    LI_CONTACT.addEventListener("click", function () {
        document.querySelector(".contact-form-box").classList.toggle("contact-hidden");
    });

    document.querySelector("button").addEventListener("click", function () {
        document.querySelector(".contact-form-box").classList.add("contact-hidden");
    });
}

else {

    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 100) {
            NAV.classList.replace("nav-scroll-bg-black", "nav-scroll-bg-gray")
        }
        else {
            NAV.classList.replace("nav-scroll-bg-gray", "nav-scroll-bg-black")    
        }
    })

    /* ..............gallery............... */

    LI_GALLERY.addEventListener("click", function () {
        SUB_M_G.classList.remove("hide-absolute");
        HIDE_ICON.classList.remove("hide-absolute");
    });
    HIDE_ICON.addEventListener("click", function () {
        SUB_M_G.classList.add("hide-absolute");
        HIDE_ICON.classList.add("hide-absolute");
    });

    /*.............produt.............*/

    LI_PRODUCT.addEventListener("click", function () {
        SUB_M_P.classList.remove("hide-absolute");
        HIDE_ICON.classList.remove("hide-absolute");
    });
    HIDE_ICON.addEventListener("click", function () {
        SUB_M_P.classList.add("hide-absolute");
        HIDE_ICON.classList.add("hide-absolute");
    });
    MENUE_ICON.addEventListener("click", function () {
        NAV.classList.toggle("nav-full")
        MENUE_ICON.classList.toggle("rotate")
    })

    /* ................. Contact ................. */

    LI_CONTACT.addEventListener("click", function () {
        document.querySelector(".contact-form-box").classList.toggle("contact-hidden");
    });

    document.querySelector("button").addEventListener("click", function () {
        document.querySelector(".contact-form-box").classList.add("contact-hidden");
    });
}});