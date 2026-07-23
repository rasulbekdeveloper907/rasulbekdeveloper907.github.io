/* ===================================================
   AI PORTFOLIO
   Author : Rasulbek
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       Typing Animation
    ===================================== */

    const typing = document.querySelector(".typing");

    const words = [
        "Machine Learning Engineer",
        "Deep Learning Engineer",
        "Computer Vision Engineer",
        "AI Engineer",
        "FastAPI Developer",
        "MLOps Engineer"
    ];

    let word = 0;
    let letter = 0;
    let deleting = false;

    function typeWriter() {

        if (!typing) return;

        const current = words[word];

        if (!deleting) {

            typing.textContent = current.substring(0, letter);

            letter++;

            if (letter > current.length) {

                deleting = true;

                setTimeout(typeWriter, 1500);

                return;

            }

        }

        else {

            typing.textContent = current.substring(0, letter);

            letter--;

            if (letter < 0) {

                deleting = false;

                word++;

                if (word >= words.length)
                    word = 0;

            }

        }

        setTimeout(typeWriter, deleting ? 45 : 85);

    }

    typeWriter();




    /* =====================================
       Navbar Shadow
    ===================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.boxShadow =
                "0 10px 40px rgba(0,0,0,.35)";

        }

        else {

            header.style.boxShadow = "none";

        }

    });




    /* =====================================
       Reveal Animation
    ===================================== */

    const reveals = document.querySelectorAll(

        ".project-card,.contact-card,.skills-grid div,.stats-grid div"

    );

    reveals.forEach(el => {

        el.style.opacity = "0";

        el.style.transform = "translateY(50px)";

        el.style.transition = ".7s";

    });

    function revealAnimation() {

        reveals.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                el.style.opacity = "1";

                el.style.transform = "translateY(0)";

            }

        });

    }

    revealAnimation();

    window.addEventListener("scroll", revealAnimation);




    /* =====================================
       Active Navbar
    ===================================== */

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            links.forEach(item => {

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });




    /* =====================================
       Scroll To Top Button
    ===================================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.className = "top-button";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.style.display = "flex";

        }

        else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});


/* =====================================
   ML / DL / CV Tabs
===================================== */

function showCategory(category) {

    // Barcha kategoriyalarni yashirish
    const categories = document.querySelectorAll(".project-category");

    categories.forEach(item => {

        item.classList.remove("active-category");

    });

    // Tanlangan kategoriyani ko'rsatish
    const active = document.getElementById(category);

    if (active) {

        active.classList.add("active-category");

    }

    // Tugmalar active holatini o'zgartirish
    const buttons = document.querySelectorAll(".tab-btn");

    buttons.forEach(btn => {

        btn.classList.remove("active");

        const text = btn.textContent.toLowerCase();

        if (
            (category === "ml" && text.includes("machine")) ||
            (category === "dl" && text.includes("deep")) ||
            (category === "cv" && text.includes("computer"))
        ) {

            btn.classList.add("active");

        }

    });

}


/* =====================================
   GitHub API
===================================== */

fetch("https://api.github.com/users/rasulbekdeveloper907")
.then(response => response.json())
.then(data => {

    console.log("GitHub User:", data.login);
    console.log("Repositories:", data.public_repos);
    console.log("Followers:", data.followers);

})
.catch(error => {

    console.log(error);

});


/* =====================================
   Project Card Hover Effect
===================================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


/* =====================================
   Smooth Scroll
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* =====================================
   Console Message
===================================== */

console.log("🚀 Rasulbek Portfolio Loaded Successfully");


console.log("🤖 Machine Learning Ready");


console.log("🧠 Deep Learning Ready");


console.log("👁 Computer Vision Ready");

