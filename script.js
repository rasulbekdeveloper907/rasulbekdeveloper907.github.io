const text = [
  "AI/ML Engineer 🤖",
  "Data Scientist 📊",
  "Deep Learning Developer 🧠"
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  const el = document.querySelector(".typing");
  const current = text[i];

  if (!isDeleting) {
    el.textContent = current.substring(0, j++);
  } else {
    el.textContent = current.substring(0, j--);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 90);
}

type();