
// LOADER
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

// CURSOR
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

// TYPING
const text="AI / ML Engineer";
let i=0;

function typing(){
if(i<text.length){
document.querySelector(".typing").innerHTML+=text[i];
i++;
setTimeout(typing,100);
}
}
typing();

// SCROLL REVEAL
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
});

// SOUND EFFECT (hover)
const audio=new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

document.querySelectorAll("a,.card").forEach(el=>{
el.addEventListener("mouseenter",()=>{
audio.currentTime=0;
audio.play();
});
});

// THREE JS BACKGROUND
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.getElementById("three-container").appendChild(renderer.domElement);

const geometry=new THREE.TorusGeometry(10,3,16,100);
const material=new THREE.MeshBasicMaterial({color:0x00ffff,wireframe:true});
const torus=new THREE.Mesh(geometry,material);

scene.add(torus);
camera.position.z=30;

function animate(){
requestAnimationFrame(animate);
torus.rotation.x+=0.01;
torus.rotation.y+=0.01;
renderer.render(scene,camera);
}

animate();