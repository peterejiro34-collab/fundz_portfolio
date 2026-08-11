/* =========================================
   FUNDZ V4 JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            mobileMenu.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );


        if (isOpen) {

            menuButton.classList.add("open");

        } else {

            menuButton.classList.remove("open");

        }

    });


    /* CLOSE MENU WHEN LINK IS CLICKED */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            menuButton.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (
            !targetId ||
            targetId === "#"
        ) {

            return;

        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();


            const header =
                document.querySelector(".site-header");


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .project-card, .book-card, .about-grid, .contact-form"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();


            const email =
                document.getElementById("email").value.trim();


            const service =
                document.getElementById("service").value;


            const message =
                document.getElementById("message").value.trim();


            if (
                !name ||
                !email ||
                !service ||
                !message
            ) {

                formStatus.textContent =
                    "Please complete all fields.";

                return;

            }


            /*
                We use mailto here so the form
                works on a static Render website
                without requiring a backend.
            */


            const subject =
                encodeURIComponent(
                    `Fundz Project Enquiry - ${service}`
                );


            const body =
                encodeURIComponent(
                    `Hello Fundz,

Name: ${name}
Email: ${email}
Service: ${service}

Project Details:
${message}

Sent from the Fundz website.`
                );


            const emailLink =
                `mailto:peterejiro34@gmail.com?subject=${subject}&body=${body}`;


            formStatus.textContent =
                "Opening your email app...";


            window.location.href =
                emailLink;

        }
    );

}


/* =========================================
   CURRENT YEAR
========================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);


/* =========================================
   IMAGE ERROR HANDLING
========================================= */

document.querySelectorAll(
    "img"
).forEach((image) => {

    image.addEventListener(
        "error",
        () => {

            image.style.display =
                "none";

            console.warn(
                `Image could not be loaded: ${image.src}`
            );

        }
    );

});
