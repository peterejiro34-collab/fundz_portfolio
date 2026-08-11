/* =========================================
   FUNDZ V3 JAVASCRIPT
========================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


// =========================================
// MOBILE MENU
// =========================================

menuButton.addEventListener("click", () => {

  const isOpen = mobileMenu.classList.toggle("active");

  menuButton.setAttribute(
    "aria-expanded",
    isOpen
  );

  menuButton.setAttribute(
    "aria-label",
    isOpen
      ? "Close menu"
      : "Open menu"
  );

});


// =========================================
// CLOSE MENU AFTER CLICKING A LINK
// =========================================

const mobileLinks =
  document.querySelectorAll(
    ".mobile-menu a"
  );

mobileLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.setAttribute(
      "aria-label",
      "Open menu"
    );

  });

});


// =========================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =========================================

document.addEventListener("click", (event) => {

  const clickedInsideMenu =
    mobileMenu.contains(event.target);

  const clickedButton =
    menuButton.contains(event.target);

  if (
    !clickedInsideMenu &&
    !clickedButton &&
    mobileMenu.classList.contains("active")
  ) {

    mobileMenu.classList.remove("active");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  }

});


// =========================================
// SCROLL HEADER EFFECT
// =========================================

const header =
  document.querySelector(".site-header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.boxShadow =
      "0 10px 40px rgba(0,0,0,0.18)";

  } else {

    header.style.boxShadow = "none";

  }

});


// =========================================
// CURRENT YEAR
// =========================================

const year =
  document.querySelector(".copyright");

if (year) {

  year.innerHTML =
    `© ${new Date().getFullYear()} Fundz. All rights reserved.`;

}