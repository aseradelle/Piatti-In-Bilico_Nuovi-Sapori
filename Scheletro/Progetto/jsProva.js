document.addEventListener("DOMContentLoaded", () => {
  const sliderImage = document.getElementById('sliderImage');
  const prevArrow = document.getElementById('prevArrow');
  const nextArrow = document.getElementById('nextArrow');

  // Array delle immagini da mostrare nello slider
  const imageSources = [
    './img/a.png',
    './img/b.png',
    './img/image.png',
    './img/Spaghetti-al-pesto-52558-3.png'
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