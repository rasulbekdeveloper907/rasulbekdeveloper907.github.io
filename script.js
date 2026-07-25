/* ==========================================
   AI Portfolio
   Rasulbek Ruzmetov
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    typingEffect();

    activeNavbar();

    revealAnimation();

    scrollButton();

    headerShadow();

});


/* ==========================================
   Typing Effect
========================================== */

const words = [

    "AI Engineer",

    "Machine Learning Engineer",

    "Deep Learning Engineer",

    "Computer Vision Engineer",

    "Python Instructor"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect(){

    const typing = document.querySelector(".typing");

    if(!typing) return;

    function type(){

        const current = words[wordIndex];

        if(!deleting){

            typing.textContent =
                current.substring(0,charIndex++);

            if(charIndex > current.length){

                deleting = true;

                setTimeout(type,1500);

                return;

            }

        }

        else{

            typing.textContent =
                current.substring(0,charIndex--);

            if(charIndex < 0){

                deleting = false;

                wordIndex++;

                if(wordIndex >= words.length){

                    wordIndex = 0;

                }

            }

        }

        setTimeout(type,deleting ? 40 : 80);

    }

    type();

}

/* ==========================================
   Active Navbar
========================================== */

function activeNavbar(){

    const links = document.querySelectorAll("nav a");

    links.forEach(link=>{

        link.addEventListener("click",()=>{

            links.forEach(item=>{

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });

}

/* ==========================================
   Smooth Scroll
========================================== */

document.querySelectorAll('nav a').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
   Header Shadow
========================================== */

function headerShadow(){

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>40){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    });

}


/* ==========================================
   Active Menu On Scroll
========================================== */

window.addEventListener("scroll",()=>{

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll("nav a");

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.offsetHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
   Reveal Animation
========================================== */

function revealAnimation(){

    const elements = document.querySelectorAll(

        ".card, .project-card, .contact-card, .skill, .stat-card"

    );

    function reveal(){

        elements.forEach(element=>{

            const top = element.getBoundingClientRect().top;

            const visible = window.innerHeight - 100;

            if(top < visible){

                element.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

}


/* ==========================================
   Scroll To Top Button
========================================== */

function scrollButton(){

    const button = document.createElement("button");

    button.className = "top-button";

    button.innerHTML =

        '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(button);

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 500){

            button.style.display = "flex";

        }

        else{

            button.style.display = "none";

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}



/* ==========================================
   Fade Sections
========================================== */

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

}

);

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});


/* ==========================================
   REVEAL ANIMATION
========================================== */

.card,
.project-card,
.contact-card,
.skill,
.stat-card{

    opacity:0;

    transform:translateY(40px);

    transition:.7s ease;

}

.show{

    opacity:1;

    transform:translateY(0);

}

/* ==========================================
   REVEAL ANIMATION
========================================== */

.card,
.project-card,
.contact-card,
.skill,
.stat-card{

    opacity:0;

    transform:translateY(40px);

    transition:.7s ease;

}

.show{

    opacity:1;

    transform:translateY(0);

}

/* ==========================================
   GitHub API
========================================== */

fetch("https://api.github.com/users/rasulbekdeveloper907")

.then(response => response.json())

.then(data => {

    const repo = document.getElementById("repo-count");

    const followers = document.getElementById("followers-count");

    if(repo){

        repo.textContent = data.public_repos;

    }

    if(followers){

        followers.textContent = data.followers;

    }

})

.catch(error => {

    console.log(error);

});


<p class="copyright">

© <span id="year"></span>
Ro'zmetov Rasulbek

</p>

/* ==========================================
   Current Year
========================================== */

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

/* ==========================================
   External Links
========================================== */

document

.querySelectorAll('a[target="_blank"]')

.forEach(link=>{

    link.setAttribute(

        "rel",

        "noopener noreferrer"

    );

});


/* ==========================================
   Scroll Performance
========================================== */

window.addEventListener(

"scroll",

()=>{},

{

passive:true

}

);

/* ==========================================
   Console
========================================== */

console.log(

"%cWelcome to Rasulbek Portfolio",

"color:#0057D9;font-size:18px;font-weight:bold;"

);

console.log(

"AI Engineer Portfolio"

);

