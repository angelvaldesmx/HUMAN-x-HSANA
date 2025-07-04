// Oculta selector de idioma y muestra las burbujas cuando se elige uno
function setLanguage(lang) {
  localStorage.setItem("hsanaLang", lang);
  document.querySelector(".language-selector").classList.add("hidden");
  document.querySelector(".bubble-container").classList.remove("hidden");
}

// Efecto al hacer clic en burbuja
document.querySelectorAll(".bubble").forEach((bubble) => {
  bubble.addEventListener("click", function () {
    const page = this.getAttribute("data-page");
    animateBubbleExplosion(this, () => {
      showManifesto(page);
    });
  });
});

// Efecto de "explosión"
function animateBubbleExplosion(bubble, callback) {
  bubble.classList.add("explode");
  setTimeout(() => {
    callback();
  }, 700); // Espera para animación
}

// Muestra manifiesto
function showManifesto(destinationPage) {
  const modal = document.getElementById("manifesto");
  modal.classList.remove("hidden");

  // Traducción simple basada en idioma guardado
  const lang = localStorage.getItem("hsanaLang") || "es";
  const messages = {
    es: "Sanar con dignidad es un acto revolucionario. Este token es solo una excusa para crear comunidad. 🕊️",
    en: "Healing with dignity is a revolutionary act. This token is just an excuse to build community. 🕊️",
    fr: "Guérir avec dignité est un acte révolutionnaire. Ce jeton n'est qu'un prétexte pour créer une communauté. 🕊️",
    zh: "有尊严地疗愈是一种革命行为。这个代币只是建立社区的借口。🕊️",
    ar: "الشفاء بكرامة هو فعل ثوري. هذا الرمز مجرد ذريعة لبناء المجتمع. 🕊️",
    hi: "गरिमा के साथ उपचार एक क्रांतिकारी कार्य है। यह टोकन केवल समुदाय बनाने का बहाना है। 🕊️"
  };

  document.getElementById("manifesto-text").innerText = messages[lang];
  modal.dataset.destination = destinationPage;
}

// Redirige después del manifiesto
function proceedToPage() {
  const modal = document.getElementById("manifesto");
  const destination = modal.dataset.destination || "index.html";
  window.location.href = destination;
}

// Animación loop del texto tipo "plana"
document.addEventListener("DOMContentLoaded", () => {
  const loop = document.querySelector(".overlay-text-loop p");
  if (loop) {
    loop.innerHTML += " • " + loop.innerHTML;
  }
});
