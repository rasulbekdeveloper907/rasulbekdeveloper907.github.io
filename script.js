// CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

// TYPING
const text = "AI / ML Engineer";
let i = 0;

function type(){
if(i < text.length){
document.querySelector(".typing").innerHTML += text[i];
i++;
setTimeout(type,100);
}
}
type();

// SCROLL REVEAL
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
let top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
});

// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<70;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x += p.dx;
p.y += p.dy;

if(p.x<0) p.x=canvas.width;
if(p.y<0) p.y=canvas.height;

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="#00ffff";
ctx.fill();
});

requestAnimationFrame(animate);
}

animate();