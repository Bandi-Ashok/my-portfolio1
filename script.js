document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded!");

    // Scroll Reveal Effect
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check Local Storage for Theme Preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "☀";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "☀";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙";
        }
    });
});
