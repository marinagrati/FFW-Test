/////// #1

(function () {
  function onTabClick(event) {
    var actives = document.querySelectorAll(".active");

    // deactivate existing active tab and panel
    for (var i = 0; i < actives.length; i++) {
      actives[i].className = actives[i].className.replace("active", "");
    }

    // activate new tab and panel
    event.target.parentElement.className += " active";
    document.getElementById(event.target.href.split("#")[1]).className +=
      " active";
  }

  var el = document.getElementById("nav-tab");

  el.addEventListener("click", onTabClick, false);
})();

/////// burger menu

const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".header_box ul");
const navLinks = document.querySelectorAll(".header_box a");

allEventListners();

function allEventListners() {
  navToggler.addEventListener("click", togglerClick);

  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}
