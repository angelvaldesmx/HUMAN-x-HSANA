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
document.addEventListener('DOMContentLoaded', () => {
  const bubbles = document.querySelectorAll('.bubble');

  // Reemplaza esta URL con la de tu backend privado
  const API_URL = "https://js.puter.com/v2/";

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

  // Mostrar manifiesto
  function showManifesto(targetPage) {
    const manifesto = document.getElementById('manifesto');
    manifesto.classList.remove('hidden');
    manifesto.setAttribute('data-target', targetPage);

    const lang = localStorage.getItem('selectedLanguage') || 'es';

    // Aquí se genera el mensaje vía API externa con prompt incluido
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

  // Continuar a la página objetivo
  window.proceedToPage = function() {
    const manifesto = document.getElementById('manifesto');
    const targetPage = manifesto.getAttribute('data-target');
    window.location.href = targetPage;
  };

  // Crea partículas decorativas
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

  // Texto repetido flotante tipo "plana"
  const welcomeContainer = document.getElementById('language-loop-text');
  if (welcomeContainer) {
    const welcomeMessage = "Selecciona tu idioma • Choose your language • Sélectionnez votre langue • 选择你的语言 • اختر لغتك • भाषा चुनें";
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('p');
      p.textContent = welcomeMessage;
      welcomeContainer.appendChild(p);
    }
  }
});