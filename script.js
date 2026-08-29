

AOS.init();


// 1. On récupère la boîte et l'image agrandie
const boite = document.getElementById('ma-boite');
const imageAgrandie = document.getElementById('image-agrandie');

// 2. On récupère TOUTES les petites images de la galerie
const petitesImages = document.querySelectorAll('.galerie-image');

// 3. Pour CHAQUE petite image, on ajoute un clic
petitesImages.forEach(function(image) {
  image.addEventListener('click', function() {
    imageAgrandie.src = image.src;   // on copie l'URL de l'image cliquée
    boite.style.display = 'flex';    // on affiche la boîte
  });
});

// 4. Si on clique sur la boîte (le fond noir), on la referme
boite.addEventListener('click', function() {
  boite.style.display = 'none';
});