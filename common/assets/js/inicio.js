document.addEventListener('DOMContentLoaded', () => {
  const bubbles = document.querySelectorAll('.bubble');

  // Listener para seleccionar idioma
  window.setLanguage = function(lang) {
    localStorage.setItem('selectedLanguage', lang);

    document.querySelector('.language-selector').classList.add('hidden');
    document.querySelector('.bubble-container').classList.remove('hidden');

    generateParticleText();
  };

  // Listener para cada burbuja
  bubbles.forEach(bubble => {
    bubble.addEventListener('click', () => {
      const targetPage = bubble.getAttribute('data-page');
      showManifesto(targetPage);
    });
  });
});

// Mostrar manifiesto con mensaje aleatorio
function showManifesto(targetPage) {
  const manifesto = document.getElementById('manifesto');
  manifesto.classList.remove('hidden');
  manifesto.setAttribute('data-target', targetPage);

  const messages = {
    es: [
      "Sanar con dignidad es un acto revolucionario. Este token es solo una excusa para crear comunidad. 🕊️",
      "El sistema no nos define. Nos levantamos con propósito y humanidad. 💫",
      "HSANA no es solo un token. Es un abrazo colectivo. 🤍"
    ],
    en: [
      "Healing with dignity is a revolutionary act. This token is just an excuse to build community. 🕊️",
      "We are not defined by the system. We rise with purpose and humanity. 💫",
      "HSANA is more than a token. It's a collective embrace. 🤍"
    ],
    fr: [
      "Guérir avec dignité est un acte révolutionnaire. Ce token est une excuse pour créer une communauté. 🕊️",
      "Le système ne nous définit pas. Nous nous élevons avec humanité. 💫",
      "HSANA est plus qu'un token. C'est une étreinte collective. 🤍"
    ]
  };

  const lang = localStorage.getItem('selectedLanguage') || 'es';
  const text = messages[lang] || messages['es'];

  document.getElementById('manifesto-text').textContent =
    text[Math.floor(Math.random() * text.length)];
}

// Redirige después del manifiesto
function proceedToPage() {
  const manifesto = document.getElementById('manifesto');
  const targetPage = manifesto.getAttribute('data-target');
  window.location.href = targetPage;
}

// Crea partículas de texto flotante
function generateParticleText() {
  const container = document.querySelector('.bubble-container');
  const labels = ["HSANA", "TOKEN", "HUMAN", "HSN"];
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle-text';
    particle.style.top = `${Math.random() * 90}%`;
    particle.style.left = `${Math.random() * 90}%`;
    particle.textContent = labels[Math.floor(Math.random() * labels.length)];
    container.appendChild(particle);
  }
      }
// Llenar múltiples copias del texto de bienvenida
const welcomeContainer = document.getElementById('language-loop-text');
const welcomeMessage = "Selecciona tu idioma • Choose your language • Sélectionnez votre langue • 选择你的语言 • اختر لغتك • भाषा चुनें";
const copies = Math.ceil(window.innerHeight / 40); // Aproximadamente 1 cada 40px

for (let i = 0; i < copies; i++) {
  const p = document.createElement('p');
  p.textContent = welcomeMessage;
  welcomeContainer.appendChild(p);
}
