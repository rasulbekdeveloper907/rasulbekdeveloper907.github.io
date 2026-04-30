console.log("Portfolio loaded 🚀");

// ===================
// ⌨️ TYPING EFFECT
// ===================
const text = "AI Engineer";
let i = 0;

function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(type, 150);
  }
}
type();


// ===================
// 📜 SCROLL REVEAL
// ===================
const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});


// ===================
// 🔗 GITHUB API
// ===================
fetch("https://api.github.com/users/rasulbekdeveloper907")
.then(res => res.json())
.then(data => {
  document.getElementById("github").innerHTML = `
    <p>Username: ${data.login}</p>
    <p>Repos: ${data.public_repos}</p>
    <p>Followers: ${data.followers}</p>
    <a href="${data.html_url}" target="_blank" style="color:#00d4ff">Open GitHub</a>
  `;
});