 // Code JavaScript pour faire défiler les images
 const imageList = document.querySelector('.image-list');

 // Fonction pour déplacer les images vers la gauche
 function scrollLeft() {
   const firstFigure = imageList.querySelector('figure:first-child');
   imageList.style.transform = `translateX(- --{firstFigure.offsetWidth}px)`;
   imageList.appendChild(firstFigure);
   imageList.style.transition = 'transform 0s';
   setTimeout(() => {
     imageList.style.transition = 'transform 0.5s ease-in-out';
   }, 0);
 }

 // Fonction pour déplacer les images vers la droite
 function scrollRight() {
   const lastFigure = imageList.querySelector('figure:last-child');
   imageList.style.transform = `translateX( --{lastFigure.offsetWidth}px)`;
   imageList.insertBefore(lastFigure, imageList.firstChild);
   imageList.style.transition = 'transform 0s';
   setTimeout(() => {
     imageList.style.transition = 'transform 0.5s ease-in-out';
     imageList.style.transform = 'translateX(0)';
   }, 0);
 }
  