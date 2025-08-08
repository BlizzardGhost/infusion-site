document.addEventListener("DOMContentLoaded", () => {
  const footerLines = [
    "Made with ☕, AI, and questionable amounts of pizza.",
    "No pixels were harmed in the making of this site.",
    "Handcrafted by RASS & Ms Devil, quality-checked by Kiba, Emi & Yue 🐾",
    "Powered by caffeine, sarcasm, and the occasional dance break.",
    "We asked AI to make this footer. It said: 'You're welcome.'",
    "Somewhere in Medellín, a pup is watching you read this.",
    "99% AI, 1% pure human stubbornness.",
    "Warning: May cause sudden urges to start a project."
  ];

  const jokeElement = document.getElementById("footer-joke");
  if (jokeElement) {
    const randomJoke = footerLines[Math.floor(Math.random() * footerLines.length)];
    jokeElement.textContent = `© ${new Date().getFullYear()} INFUSION. ${randomJoke}`;
  }
});