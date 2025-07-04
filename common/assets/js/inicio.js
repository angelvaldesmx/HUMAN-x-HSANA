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

  const lang = localStorage.getItem('selectedLanguage') || 'es';

  // 🎯 PROMPT incrustado directamente en el frontend
  const prompt = encodeURIComponent(`
    Eres un escritor de manifiestos filosóficos y poéticos con un estilo honesto, radical, empático, suave, emocional pero firme, y usas emojis con conciencia. 
    Escribe un manifiesto breve para una comunidad de un token que busca sanar con dignidad. 
    No uses frases motivacionales ni clichés. 
    No repitas “Sanar con dignidad es un acto revolucionario”. 
    El tono debe imitar a Angel Valdés. Idioma: ${lang}.
  `);

  // 🚀 Tu endpoint privado embebido
  const secureEndpoint = `https://js.puter.com/v2/?lang=${lang}&prompt=${prompt}`;

  fetch(secureEndpoint)
    .then(res => res.json())
    .then(data => {
      document.getElementById('manifesto-text').textContent = data.text;
    })
    .catch(err => {
      console.error("Error generando manifiesto:", err);

      // Mensaje fallback
      document.getElementById('manifesto-text').textContent =
        "Sanar con dignidad es un acto revolucionario. Este token es solo una excusa para crear comunidad. 🕊️";
    });
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
