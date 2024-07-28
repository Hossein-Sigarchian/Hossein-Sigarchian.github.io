function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    var fader = document.getElementById('fader');
fader.classList.add('fade-out');
}
fadeInPage();

window.onscroll = function() {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100) {
        document.getElementById("scroller").style.display = "flex";
    }
    else {
        document.getElementById("scroller").style.display = "none";
    }
}

function OpenImg() {
    if (screen.width > 1199) {
        document.getElementById('frame').style.display = "flex";
    }
}

function CloseImg() {
    document.getElementById('frame').style.display = "none";
}

