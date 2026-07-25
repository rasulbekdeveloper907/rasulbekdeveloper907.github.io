/* ==========================================
   AI PORTFOLIO 2026
   Rasulbek Ruzmetov
========================================== */


document.addEventListener("DOMContentLoaded",()=>{


typingEffect();

scrollReveal();

headerEffect();

activeNavigation();

currentYear();

externalLinks();


});


/* ==========================================
   TYPING EFFECT
========================================== */


function typingEffect(){


const typing=document.querySelector(".typing");


if(!typing) return;



const words=[


"AI Engineer",

"Machine Learning Engineer",

"Deep Learning Engineer",

"Computer Vision Engineer",

"Python Instructor"


];



let wordIndex=0;

let charIndex=0;

let deleting=false;



function type(){



let currentWord=words[wordIndex];



if(!deleting){


typing.textContent=
currentWord.substring(0,charIndex++);



if(charIndex>currentWord.length){


deleting=true;


setTimeout(type,1500);


return;


}


}

else{


typing.textContent=
currentWord.substring(0,charIndex--);



if(charIndex<0){


deleting=false;


wordIndex++;


if(wordIndex>=words.length){

wordIndex=0;

}


}


}



setTimeout(

type,

deleting ? 50 : 100

);



}



type();



}

/* ==========================================
   SCROLL REVEAL
========================================== */


function scrollReveal(){



const elements=document.querySelectorAll(

".card, .project-card, .skill, .stat-card, .contact-card"

);



const observer=new IntersectionObserver(

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



elements.forEach(element=>{


observer.observe(element);


});



}

/* ==========================================
   HEADER EFFECT
========================================== */


function headerEffect(){


const header=document.querySelector("header");



window.addEventListener("scroll",()=>{


if(window.scrollY>50){


header.style.boxShadow=

"0 10px 30px rgba(0,0,0,.08)";


}


else{


header.style.boxShadow="none";


}



});


}

/* ==========================================
   ACTIVE NAVIGATION
========================================== */


function activeNavigation(){


const sections=document.querySelectorAll("section");


const links=document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


let current="";



sections.forEach(section=>{


const sectionTop=
section.offsetTop-150;



if(scrollY>=sectionTop){


current=section.id;


}



});



links.forEach(link=>{


link.classList.remove("active");



if(link.getAttribute("href")
===
"#"+current){


link.classList.add("active");


}



});



});



}


/* ==========================================
   CURRENT YEAR
========================================== */


function currentYear(){


const year=document.querySelector("#year");



if(year){


year.textContent=
new Date().getFullYear();


}



}

/* ==========================================
   EXTERNAL LINKS
========================================== */


function externalLinks(){


const links=document.querySelectorAll(

'a[target="_blank"]'

);



links.forEach(link=>{


link.setAttribute(

"rel",

"noopener noreferrer"

);


});


}

