/* =====================================================
   AI Portfolio 2026
   Author : Rasulbek
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================================
       Typing Effect
    =========================================== */

    const typingElement = document.querySelector(".typing");

    const words = [
        "Machine Learning Engineer",
        "Deep Learning Developer",
        "Computer Vision Engineer",
        "MLOps Enthusiast",
        "FastAPI Developer"
    ];

    if (typingElement) {

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex++);

                if (charIndex > currentWord.length) {

                    deleting = true;

                    setTimeout(type, 1500);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length)
                        wordIndex = 0;

                }

            }

            setTimeout(type, deleting ? 40 : 90);

        }

        type();

    }

});


/* ===========================================
Reveal Animation
=========================================== */

const revealElements = document.querySelectorAll(

".card,.project,.stats div"

);

function reveal(){

    revealElements.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/* ===========================================
Navbar
=========================================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.background="rgba(0,0,0,.8)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}

else{

header.style.background="rgba(0,0,0,.35)";

header.style.boxShadow="none";

}

});

/* ===========================================
Active Navigation
=========================================== */

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

if(link.href===window.location.href){

link.style.color="#00e6ff";

link.style.fontWeight="700";

}

});

/* ===========================================
Top Button
=========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.classList.add("top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

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

/* ===========================================
GitHub API
=========================================== */

fetch("https://api.github.com/users/rasulbekdeveloper907")

.then(res=>res.json())

.then(data=>{

console.log(

"GitHub:",

data.login,

data.public_repos,

data.followers

);

});


