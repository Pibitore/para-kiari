window.onload = () => {
  setTimeout(() => {
    // Activar animaciones
    document.body.classList.remove("not-loaded");

    // Mensaje romántico
    const msg = document.createElement("div");
    msg.className = "love-message";
    msg.innerText =
      "Kiari, amor mío:\n\n" +
      "Dicen que algunas flores tardan en florecer,\n" +
      "que necesitan tiempo, paciencia y cuidado.\n" +
      "Así es la amarilis.\n\n" +
      "Nuestro amor se parece a eso:\n" +
      "no se apura, no se rinde,\n" +
      "elige quedarse.\n\n" +
      "Si estos meses son solo el comienzo,\n" +
      "quiero seguir floreciendo con vos.\n\n" +
      "Te amo 💖";

    document.body.appendChild(msg);
  }, 1000);
};
