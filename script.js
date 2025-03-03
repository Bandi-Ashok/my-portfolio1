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
/* Resume Section */
.resume-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.resume-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 15px;
    width: 350px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
}

.resume-card:hover {
    transform: translateY(-5px);
}

/* Skill Bars */
.skill {
    margin: 10px 0;
}

.progress-bar {
    width: 100%;
    height: 10px;
    background: #333;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 5px;
}

.progress {
    height: 100%;
    background: linear-gradient(to right, #ff6600, #ffcc00);
    width: 0%;
    transition: width 2s ease-in-out;
}

/* Skill Level Animation */
.aws { width: 90%; }
.devops { width: 85%; }
.linux { width: 80%; }

/* Resume Download Button */
.resume-btn {
    display: inline-block;
    padding: 10px 20px;
    background: linear-gradient(to right, #ff6600, #ffcc00);
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    transition: transform 0.3s ease, background 0.3s ease;
}

.resume-btn:hover {
    transform: scale(1.05);
    background: linear-gradient(to right, #ffcc00, #ff6600);
}
