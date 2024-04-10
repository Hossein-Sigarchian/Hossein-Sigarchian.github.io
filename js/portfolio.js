function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    var fader = document.getElementById('fader', 'scroller');
    fader.classList.add('fade-out');
}
fadeInPage();

function iframeLoaded() {
    var iFrameID = document.getElementById('idIframe');
    if (iFrameID) {
        iFrameID.height = "";
        iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
    }
}
function scroll() {
    if (document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100) {
        document.getElementById("scroller").style.display = "flex";
    }
    else {
        document.getElementById("scroller").style.display = "none";
    }
}

window.onscroll = function () {
    scroll()
};