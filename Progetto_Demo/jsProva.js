document.addEventListener("DOMContentLoaded", () => {
  const sliderImage = document.getElementById('sliderImage');
  const prevArrow = document.getElementById('prevArrow');
  const nextArrow = document.getElementById('nextArrow');

  // Array delle immagini da mostrare nello slider
  const imageSources = [
    './img/Brown_Simple_Circle_Restaurant_Logo__1_-removebg-preview.png',
    './img/image2.png',
    './img/image.png',
    './BackEnd - Immagini/Menu/Antipasto/Terra/Bruschetta_Pomodoro.jpeg',
    './BackEnd - Immagini/Menu/Dolce/Cheesechake_FruttiBosco.jpeg',
    './BackEnd - Immagini/Pagina_Tavolo/Sala.png'
  ];

  let currentIndex = 0;

  function showImage(index) {
    sliderImage.classList.remove('visible');
    setTimeout(() => {
      sliderImage.src = imageSources[index];
      sliderImage.classList.add('visible');
    }, 200);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    showImage(currentIndex);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    showImage(currentIndex);
  }

  prevArrow.addEventListener('click', prevImage);
  nextArrow.addEventListener('click', nextImage);

  // inizializza slider
  showImage(currentIndex);
});