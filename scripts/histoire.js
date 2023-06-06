// On récupère tous les éléments à animer
const animateElements = document.querySelectorAll('.animate');

// On ajoute un écouteur d'événement pour détecter le défilement de la page
window.addEventListener('scroll', () => {

  // On boucle sur tous les éléments à animer
  animateElements.forEach((element) => {

    // On calcule la position de l'élément à partir du haut de la page
    const elementPosition = element.getBoundingClientRect().top;

    // On calcule la hauteur de la fenêtre
    const windowHeight = window.innerHeight;

    // Si l'élément est visible dans la fenêtre
    if (elementPosition < windowHeight) {
      
      // On ajoute la classe "visible" pour le rendre visible
      element.classList.add('visible');
    }
  });
});