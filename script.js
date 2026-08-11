/* ================= MOBILE MENU ================= */

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");


menu.addEventListener("click", function () {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {

        menu.textContent = "×";

    } else {

        menu.textContent = "☰";

    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll("#nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("open");

        menu.textContent = "☰";

    });

});


/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.08
    }

);


document
    .querySelectorAll(".reveal")
    .forEach(function (element) {

        observer.observe(element);

    });


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("#nav a");


window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});
