<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>HUMAN x HSANA – Inicio</title>

  <link rel="stylesheet" href="./assets/css/style.css" />
  <link rel="icon" href="./assets/images/favicon.ico" />
  <meta name="description" content="Selecciona tu idioma para comenzar con HUMAN x HSANA – Sanar con dignidad." />
</head>
<body>

  <!-- FONDO DE PLANETA + IDIOMAS -->
  <div class="language-selector">
    <img src="./assets/images/globe.jpg" alt="Globo terráqueo" class="planet-background" />
    <div class="overlay-text-loop">
      <p>Selecciona tu idioma • Choose your language • Sélectionnez votre langue • 选择你的语言 • اختر لغتك • भाषा चुनें</p>
    </div>
    <div class="language-options">
      <button onclick="setLanguage('es')">Español</button>
      <button onclick="setLanguage('en')">English</button>
      <button onclick="setLanguage('fr')">Français</button>
      <button onclick="setLanguage('zh')">中文</button>
      <button onclick="setLanguage('ar')">العربية</button>
      <button onclick="setLanguage('hi')">हिन्दी</button>
    </div>
  </div>

  <!-- BURBUJAS DE NAVEGACIÓN -->
  <div class="bubble-container hidden">
    <div class="bubble" data-page="index.php">
      <span class="title">Inicio</span>
      <span class="desc">Página principal del proyecto</span>
    </div>
    <div class="bubble" data-page="airdrop.php">
      <span class="title">Airdrop</span>
      <span class="desc">Únete y gana tokens</span>
    </div>
    <div class="bubble" data-page="contacto.php">
      <span class="title">Contacto</span>
      <span class="desc">Comunícate con nosotros</span>
    </div>
    <div class="bubble" data-page="whitepaper.pdf">
      <span class="title">Whitepaper</span>
      <span class="desc">Lee el documento técnico</span>
    </div>
    <!-- Partículas decorativas -->
    <div class="particle-text">HSANA</div>
    <div class="particle-text">TOKEN</div>
    <div class="particle-text">HUMAN</div>
    <div class="particle-text">HSN</div>
  </div>

  <!-- MANIFIESTO EMERGENTE -->
  <div class="manifesto-modal hidden" id="manifesto">
    <div class="manifesto-content">
      <h2 id="manifesto-title">Manifiesto</h2>
      <p id="manifesto-text">Sanar con dignidad es un acto revolucionario. Este token es solo una excusa para crear comunidad. 🕊️</p>
      <button onclick="proceedToPage()">Entrar</button>
    </div>
  </div>

  <script src="./assets/js/main.js"></script>
</body>
</html>