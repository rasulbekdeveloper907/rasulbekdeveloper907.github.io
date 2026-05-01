const text = [
  "AI/ML Engineer 🤖",
  "Data Scientist 📊",
  "Deep Learning Developer 🧠"
];

let i = 0, j = 0, isDeleting = false;

function type() {
  const el = document.querySelector(".typing");
  const current = text[i];

  el.textContent = current.substring(0, j);

  if (!isDeleting) j++;
  else j--;

  if (j === current.length + 1) {
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