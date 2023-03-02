const linksAncora = document.querySelectorAll('header a[href^="#"]');
linksAncora.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 

    const destino = document.querySelector(link.hash);
    
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});