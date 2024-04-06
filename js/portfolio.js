"use strict";

function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    var fader = document.getElementById('fader', 'scroller');
    fader.classList.add('fade-out');
}
fadeInPage();

window.onscroll = function () {
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
function illustration() {
    let link_1 = document.getElementById("link-1")
    document.getElementById('idIframe').height = "3900px";
} 
function Graphic() {
    document.getElementById('idIframe').height = "3000px";
    } 
function photo() {
    document.getElementById('idIframe').height = "1220px";
    } 
function portrait() {
    document.getElementById('idIframe').height = "1000px";
    } 
