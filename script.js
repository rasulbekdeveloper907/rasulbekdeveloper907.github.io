console.log("Portfolio Loaded 🚀");

// =================
// ⌨️ Typing effect
// =================
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

// =================
// 📜 Scroll reveal
// =================
const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});

// =================
// 🔗 GitHub API
// =================
fetch("https://api.github.com/users/rasulbekdeveloper907")
.then(res => res.json())
.then(data => {
  document.getElementById("github").innerHTML = `
    <p>Username: <b>${data.login}</b></p>
    <p>Repos: <b>${data.public_repos}</b></p>
    <p>Followers: <b>${data.followers}</b></p>
    <a href="${data.html_url}" target="_blank" style="color:#00d4ff">Open GitHub →</a>
  `;
});