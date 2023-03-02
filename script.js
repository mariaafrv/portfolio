const linksAncora = document.querySelectorAll('header a[href^="#"]');

// Para cada link de ancora, adicione um manipulador de eventos de clique
linksAncora.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Impedir que o link funcione normalmente

    // Obtenha o elemento que corresponde ao link de ancora clicado
    const destino = document.querySelector(link.hash);

    // Role suavemente até o elemento correspondente
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});