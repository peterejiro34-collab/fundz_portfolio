/* =========================================================
   FUNDZ V3
   JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mobileNav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );

            const originalText =
                submitButton.innerHTML;


            submitButton.disabled = true;

            submitButton.innerHTML =
                "Sending...";


            const formData =
                new FormData(contactForm);


            try {

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",
                            body: formData,
                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    formStatus.textContent =
                        "Thank you! Your project enquiry has been sent.";

                    formStatus.style.color =
                        "#63dcc9";

                    contactForm.reset();

                } else {

                    throw new Error(
                        "Form submission failed."
                    );

                }

            } catch (error) {

                formStatus.textContent =
                    "Something went wrong. Please try again or contact Fundz directly.";

                formStatus.style.color =
                    "#ff8b8b";

            }


            submitButton.disabled = false;

            submitButton.innerHTML =
                originalText;

        }
    );

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .project, .process-step, .about-content, .contact-form"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

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
            threshold: 0.1
        }
    );


revealElements.forEach((element) => {

    element.classList.add(
        "reveal"
    );

    observer.observe(element);

});


/* ================= SMOOTH ANCHOR OFFSET ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                const header =
                    document.querySelector(
                        ".site-header"
                    );

                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;

                const targetPosition =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });
// ========================================
// FUNDZ PROJECT ENQUIRY
// ========================================

const projectForm = document.getElementById("projectForm");

if (projectForm) {

    projectForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const projectType =
            document.getElementById("projectType").value;

        const clientName =
            document.getElementById("clientName").value;

        const clientEmail =
            document.getElementById("clientEmail").value;

        const projectMessage =
            document.getElementById("projectMessage").value;

        const phoneNumber = "2347048595463";

        const message =
`Hello Fundz 👋

I would like to start a project.

Name:
${clientName}

Email:
${clientEmail}

Project Type:
${projectType}

Project Details:
${projectMessage}

I found Fundz through your website.`;

        const whatsappURL =
            "https://wa.me/2347048595463" +
            phoneNumber +2349137511711
            "?text=" +2349137511711
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

}
