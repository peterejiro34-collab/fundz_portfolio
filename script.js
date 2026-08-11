// ========================================
// FUNDZ PORTFOLIO - V3.1
// Navigation + Mobile Menu
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    // Open / close mobile menu
    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.toggle("active");

            menuButton.classList.toggle("active", isOpen);
            menuButton.setAttribute("aria-expanded", isOpen);
            document.body.classList.toggle("menu-open", isOpen);
        });
    }

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            menuButton.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            document.body.classList.remove("menu-open");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (
            mobileMenu &&
            menuButton &&
            mobileMenu.classList.contains("active") &&
            !mobileMenu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            mobileMenu.classList.remove("active");
            menuButton.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            document.body.classList.remove("menu-open");
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Update active navigation item while scrolling
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".mobile-menu a");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove("active-link");

                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {
                            link.classList.add("active-link");
                        }
                    });
                }
            });
        },
        {
            threshold: 0.35
        }
    );

    sections.forEach(section => observer.observe(section));

});