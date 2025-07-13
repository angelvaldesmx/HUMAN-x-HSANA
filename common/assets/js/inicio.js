document.addEventListener('DOMContentLoaded', () => {
  const bubbles = document.querySelectorAll('.bubble');
  const languageSelector = document.querySelector('.language-selector');
  const bubbleContainer = document.querySelector('.bubble-container');
  const manifesto = document.getElementById('manifesto');
  const welcomeContainer = document.getElementById('language-loop-text');

  const API_URL = "https://js.puter.com/v2/";

  // Mostrar selector si no hay lenguaje guardado
  if (!localStorage.getItem('selectedLanguage')) {
    languageSelector.classList.remove('hidden');
    bubbleContainer.classList.add('hidden');
  }

  // Crear texto flotante de bienvenida
  if (welcomeContainer) {
    const welcomeMessage = "Selecciona tu idioma • Choose your language • Sélectionnez votre langue • 选择你的语言 • اختر لغتك • भाषा चुनें";
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('p');
      p.textContent = welcomeMessage;
      welcomeContainer.appendChild(p);
    }
  }

  // Función para establecer idioma
  window.setLanguage = function (lang) {
    localStorage.setItem('selectedLanguage', lang);
    languageSelector.classList.add('hidden');
    bubbleContainer.classList.remove('hidden');
    generateParticleText();
  };

  // Función para generar partículas decorativas
  function generateParticleText() {
    const labels = ["HSANA", "TOKEN", "HUMAN", "HSN"];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle-text';
      particle.style.top = `${Math.random() * 90}%`;
      particle.style.left = `${Math.random() * 90}%`;
      particle.textContent = labels[Math.floor(Math.random() * labels.length)];
      bubbleContainer.appendChild(particle);
    }
  }

  // Mostrar manifiesto con mensaje aleatorio
  function showManifesto(targetPage) {
    manifesto.classList.remove('hidden');
    manifesto.setAttribute('data-target', targetPage);

    const lang = localStorage.getItem('selectedLanguage') || 'es';
    const prompt = encodeURIComponent(`
Genera un manifiesto conciso, emotivo y contundente que refleje el espíritu de sanar con dignidad a través de comunidad, no desde la autoayuda, sino desde la resiliencia real. No uses frases genéricas, debe parecer escrito por alguien emocionalmente involucrado. Usa emojis sutiles como 🕊️, 💫, 🤍. Estilo directo, humano, empático, parecido al de Ángel Valdés. El idioma debe ser ${lang}.
    `);

    fetch(`${API_URL}?lang=${lang}&prompt=${prompt}`)
      .then(res => res.json())
      .then(response => {
        document.getElementById('manifesto-text').textContent = response.text;
      })
      .catch(error => {
        console.error("Error al generar el manifiesto:", error);
        document.getElementById('manifesto-text').textContent =
          "Sanar con dignidad es un acto revolucionario. Este token es solo una excusa para crear comunidad. 🕊️";
      });
  }

  // Listener de las burbujas
  bubbles.forEach(bubble => {
    bubble.addEventListener('click', () => {
      const targetPage = bubble.getAttribute('data-page');
      showManifesto(targetPage);
    });
  });

  // Función global para continuar
  window.proceedToPage = function () {
    const targetPage = manifesto.getAttribute('data-target');
    if (targetPage) window.location.href = targetPage;
  };
});