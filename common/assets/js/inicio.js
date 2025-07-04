// /common/assets/js/inicio.js

// Función para establecer el idioma y mostrar las burbujas function setLanguage(lang) { localStorage.setItem('selectedLanguage', lang); document.querySelector('.language-selector').classList.add('hidden'); document.querySelector('.bubble-container').classList.remove('hidden'); generateParticleText(); }

// Cuando se hace clic en una burbuja const bubbles = document.querySelectorAll('.bubble'); bubbles.forEach(bubble => { bubble.addEventListener('click', () => { const targetPage = bubble.getAttribute('data-page'); showManifesto(targetPage); }); });

// Mostrar el manifiesto con animación function showManifesto(targetPage) { const manifesto = document.getElementById('manifesto'); manifesto.classList.remove('hidden'); manifesto.setAttribute('data-target', targetPage);

const messages = { es: [ "Sanar con dignidad es un acto revolucionario. Este token es solo una excusa para crear comunidad. 🕊️", "El sistema no nos define. Nos levantamos con propósito y humanidad. 💫", "HSANA no es solo un token. Es un abrazo colectivo. 🤍" ], en: [ "Healing with dignity is a revolutionary act. This token is just an excuse to build community. 🕊️", "We are not defined by the system. We rise with purpose and humanity. 💫", "HSANA is more than a token. It's a collective embrace. 🤍" ], fr: [ "Guérir avec dignité est un acte révolutionnaire. Ce token est une excuse pour créer une communauté. 🕊️", "Le système ne nous définit pas. Nous nous élevons avec humanité. 💫", "HSANA est plus qu'un token. C'est une étreinte collective. 🤍" ] };

const lang = localStorage.getItem('selectedLanguage') || 'es'; const text = messages[lang] || messages['es']; document.getElementById('manifesto-text').textContent = text[Math.floor(Math.random() * text.length)]; }

// Redireccionar luego de cerrar el manifiesto function proceedToPage() { const manifesto = document.getElementById('manifesto'); const targetPage = manifesto.getAttribute('data-target'); // Aquí puedes agregar una animación de "chicle derritiéndose" window.location.href = targetPage; }

// Partículas con texto decorativo flotante function generateParticleText() { const container = document.querySelector('.bubble-container'); const labels = ["HSANA", "TOKEN", "HUMAN", "HSN"]; for (let i = 0; i < 8; i++) { const particle = document.createElement('div'); particle.className = 'particle-text'; particle.style.top = ${Math.random() * 90}%; particle.style.left = ${Math.random() * 90}%; particle.textContent = labels[Math.floor(Math.random() * labels.length)]; container.appendChild(particle); } }

