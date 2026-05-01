const text = [
  "AI/ML Engineer 🤖",
  "Data Scientist 📊",
  "Deep Learning Developer 🧠"
];

let i = 0, j = 0, del = false;

function type() {
  const el = document.querySelector(".typing");
  const current = text[i];

  el.textContent = current.substring(0, j);

  if (!del) j++;
  else j--;

  if (j === current.length) {
    del = true;
    setTimeout(type, 1200);
    return;
  }

  if (j === 0) {
    del = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, del ? 50 : 90);
}

type();