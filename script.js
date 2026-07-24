/* ======================================================
   AI Portfolio
   Rasulbek 2026
====================================================== */


/* ======================================================
   Typing Animation
====================================================== */

const typingElement = document.querySelector(".typing");

const words = [

    "Machine Learning Engineer",

    "Deep Learning Engineer",

    "Computer Vision Engineer",

    "AI Engineer",

    "Python Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect(){

    if(!typingElement) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typingEffect,1500);

            return;

        }

    }

    else{

        typingElement.textContent =
        currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 45 : 80
    );

}

typingEffect();


/* ======================================================
   Scroll Reveal
====================================================== */

const revealItems = document.querySelectorAll(

".about-card,.project-card,.contact-card,.stats-grid div,.skills-grid div"

);

function revealOnScroll(){

    revealItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-80){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

window.addEventListener(

"scroll",

revealOnScroll

);

revealOnScroll();

/* ======================================================
   Navbar Shadow
====================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

/* ======================================================
   Back To Top
====================================================== */

const topButton = document.createElement("button");

topButton.innerHTML="⬆";

topButton.classList.add("top-button");

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* ======================================================
   PROJECT TABS
====================================================== */

function showCategory(category){

    // Barcha bo'limlarni yashirish
    const sections = document.querySelectorAll(".project-category");

    sections.forEach(section => {

        section.classList.remove("active-category");

    });

    // Tanlangan bo'limni ko'rsatish
    const selected = document.getElementById(category);

    if(selected){

        selected.classList.add("active-category");

    }

    // Tugmalar holatini yangilash
    const buttons = document.querySelectorAll(".tab-btn");

    buttons.forEach(button=>{

        button.classList.remove("active");

    });

    // Bosilgan tugmani active qilish
    const clickedButton = document.querySelector(
        `.tab-btn[onclick="showCategory('${category}')"]`
    );

    if(clickedButton){

        clickedButton.classList.add("active");

    }

}

/* ======================================================
   GITHUB API
====================================================== */

fetch("https://api.github.com/users/rasulbekdeveloper907")

.then(response => response.json())

.then(data => {

    console.log("GitHub Profile");

    console.log("Username :", data.login);

    console.log("Repositories :", data.public_repos);

    console.log("Followers :", data.followers);

});

/* ======================================================
   ACTIVE NAVBAR
====================================================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",function(){

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});

/* ======================================================
   INITIAL CARD STATE
====================================================== */

const animatedCards = document.querySelectorAll(

".about-card,.project-card,.contact-card,.stats-grid div,.skills-grid div"

);

animatedCards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(30px)";

    card.style.transition="all .6s ease";

});

revealOnScroll();

/* ======================================================
   PAGE LOADED
====================================================== */

window.addEventListener("load",()=>{

    console.log("🚀 Rasulbek Portfolio Loaded Successfully");

});

