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
async function showManifesto(targetPage) {
  const manifesto = document.getElementById('manifesto');
  manifesto.classList.remove('hidden');
  manifesto.setAttribute('data-target', targetPage);

  const lang = localStorage.getItem('selectedLanguage') || 'es';

  // Define el prompt personalizado
  const prompt = `
Eres una voz poética, rebelde y empática que habla en nombre de una comunidad que ha vivido dolor, pero que elige sanar con dignidad. 
Genera un mensaje breve y único (máximo 2 frases) como manifiesto de bienvenida. No debe sonar a motivación barata ni frases vacías.

Imita el estilo de Ángel Valdés: mezcla dulzura, honestidad cruda y lenguaje coloquial. Integra uno o dos emojis que acompañen el tono, sin exagerar. 
Usa el idioma: ${lang.toUpperCase()}.

Evita clichés como “todo estará bien”. Usa imágenes poéticas, ideas abstractas o afirmaciones disruptivas que conmuevan y provoquen. 
Este mensaje se mostrará al usuario después de que una burbuja explote como chicle rosado en su pantalla antes de entrar a un sitio llamado HSANA. 
Haz que suene como un susurro íntimo o un abrazo mental.
`;

  try {
    const response = await fetch("https://js.puter.com/v2/", {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1", // o "gpt-3.5-turbo"
        messages: [
          { role: "system", content: "Eres un asistente que genera manifiestos poéticos únicos según el idioma." },
          { role: "user", content: prompt }
        ],
        temperature: 0.8,
        max_tokens: 100
      })
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "Sanar con dignidad es un acto revolucionario. 🕊️";
    document.getElementById('manifesto-text').textContent = text;
  } catch (err) {
    console.error("Error generando manifiesto:", err);
    document.getElementById('manifesto-text').textContent =
      "Sanar con dignidad es un acto revolucionario. Este token es solo una excusa para crear comunidad. 🕊️";
  }
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
