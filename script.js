console.log("Portfolio Loaded 🚀");

// =======================
// ✨ TYPING ANIMATION
// =======================
const text = "AI Engineer";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 150);
  }
}
typing();


// =======================
// 📜 SCROLL REVEAL
// =======================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    let top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});


// =======================
// 🌌 THREE.JS BACKGROUND
// =======================
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg")
});

renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe:true });

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

function animate(){
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.005;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();


// =======================
// 🔗 GITHUB API AUTO LOAD
// =======================
fetch("https://api.github.com/users/rasulbekdeveloper907")
.then(res => res.json())
.then(data => {
  document.getElementById("github-card").innerHTML = `
    <p>Username: ${data.login}</p>
    <p>Repos: ${data.public_repos}</p>
    <p>Followers: ${data.followers}</p>
    <a href="${data.html_url}" target="_blank">Open GitHub</a>
  `;
});