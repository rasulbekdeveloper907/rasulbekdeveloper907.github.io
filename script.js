const text = [
  "AI/ML Engineer 🤖",
  "Data Scientist 📊",
  "Deep Learning Developer 🧠"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];

  if (!isDeleting) {
    document.querySelector(".typing").textContent =
      currentText.substring(0, j++);
  } else {
    document.querySelector(".typing").textContent =
      currentText.substring(0, j--);
  }

  if (j === currentText.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();