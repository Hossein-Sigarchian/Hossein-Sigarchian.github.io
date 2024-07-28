const GALLERY_LINKS = document.querySelectorAll(".gallery-links a");
const I_Frame = document.querySelector("iframe");

function fadeInPage() {
  if (!window.AnimationEvent) {
    return;
  }
  var fader = document.getElementById("fader", "scroller");
  fader.classList.add("fade-out");
}
fadeInPage();

function scroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("scroller").style.display = "flex";
  } else {
    document.getElementById("scroller").style.display = "none";
  }
}

window.onscroll = function () {
  scroll();
};

GALLERY_LINKS[0].addEventListener("click", function () {
  if (
    I_Frame.classList.contains("graphic-height") ||
    I_Frame.classList.contains("oil-height")
  ) {
    I_Frame.classList.remove("graphic-height");
    I_Frame.classList.remove("oil-height");
    I_Frame.classList.add("illust-height");
  }
});

GALLERY_LINKS[1].addEventListener("click", function () {
  if (
    I_Frame.classList.contains("illust-height") ||
    I_Frame.classList.contains("oil-height")
  ) {
    I_Frame.classList.remove("illust-height");
    I_Frame.classList.remove("oil-height");
    I_Frame.classList.add("graphic-height");
  }
});

GALLERY_LINKS[2].addEventListener("click", function () {
  if (
    I_Frame.classList.contains("illust-height") ||
    I_Frame.classList.contains("graphic-height")
  ) {
    I_Frame.classList.remove("illust-height");
    I_Frame.classList.remove("graphic-height");
    I_Frame.classList.add("oil-height");
  }
});
