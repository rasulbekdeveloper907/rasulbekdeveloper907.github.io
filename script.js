/* ==========================================
   AI Portfolio
   Rasulbek 2026
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       Typing Effect
    ========================== */

    const typing = document.querySelector(".typing");

    const words = [

        "Machine Learning Engineer",

        "Deep Learning Engineer",

        "Computer Vision Engineer",

        "AI Engineer",

        "MLOps Enthusiast"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function typeEffect() {

        if (!typing) return;

        const current = words[wordIndex];

        if (!deleting) {

            typing.textContent =
                current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(typeEffect, 1600);

                return;

            }

        }

        else {

            typing.textContent =
                current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length)
                    wordIndex = 0;

            }

        }

        setTimeout(typeEffect, deleting ? 40 : 80);

    }

    typeEffect();

});


/* ==========================
Reveal Animation
========================== */

const cards = document.querySelectorAll(

".project-card,.contact-card,.skills-grid div,.stats-grid div"

);

function revealCards(){

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",revealCards);

revealCards();


/* ==========================
Navbar Active
========================== */

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});

/* ==========================
Navbar Shadow
========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.boxShadow=

"0 10px 30px rgba(0,0,0,.35)";

}

else{

header.style.boxShadow="none";

}

});

/* ==========================
Top Button
========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.classList.add("top-button");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================
Projects Tabs
========================== */

function showCategory(category){

const sections=document.querySelectorAll(".project-category");

sections.forEach(sec=>{

sec.classList.remove("active-category");

});

document
.getElementById(category)
.classList.add("active-category");


const buttons=document.querySelectorAll(".tab-btn");

buttons.forEach(btn=>{

btn.classList.remove("active");

});

event.target.classList.add("active");

}


/* ==========================
GitHub
========================== */

fetch("https://api.github.com/users/rasulbekdeveloper907")

.then(res=>res.json())

.then(data=>{

console.log(

"Repositories:",

data.public_repos

);

console.log(

"Followers:",

data.followers

);

});


.top-button{

position:fixed;

right:30px;

bottom:30px;

width:60px;

height:60px;

border:none;

border-radius:50%;

background:#5be7ff;

color:#000;

font-size:22px;

cursor:pointer;

display:none;

transition:.3s;

box-shadow:0 0 25px rgba(91,231,255,.45);

z-index:999;

}

.top-button:hover{

transform:scale(1.1);

}

.active{

background:#5be7ff !important;

color:#000 !important;

}



