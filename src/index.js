import $ from "jquery";


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () {
  scrollFunction();
};

// scroll function
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("back-top").style.bottom = "4rem";
  } else {
    document.getElementById("navbar").style.top = "-90rem";
    document.getElementById("back-top").style.bottom = "-90rem";
  }
}

function activeLink(e) {
  var elems = document.querySelector(".active");
  console.log(e.target);
  if (elems !== null) {
    elems.classList.remove("active");
  }
  if (e.target.localName === "a") {
    e.target.className = "active nav-link";
  }
}
window.activeLink = activeLink;

function init() {
  var imgDefer = document.getElementsByTagName("img");
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute("data-src")) {
      imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
    }
  }
}
window.onload = init;
