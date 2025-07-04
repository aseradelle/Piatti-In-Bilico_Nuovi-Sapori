const backgrounds = [
  "../ImmaginiPagineMenu/Antipasti.png",
  "../ImmaginiPagineMenu/Primi.png",
  "../ImmaginiPagineMenu/Secondi.png",
  "../ImmaginiPagineMenu/Dolci.png",
  "../ImmaginiPagineMenu/Bibite.png"
];

const pages = [
  [
    { image: "../BackEnd - Immagini/Menu/Antipasto/Terra/Bruschetta_Pomodoro.jpeg", alt: "Bruschette al pomodoro", description: "Bruschette al pomodoro", allergens: ["🌾"], allergenDescription: "Glutine" },
    { image: "../BackEnd - Immagini/Menu/Antipasto/Mare/Carpaccio_SpadaSenape.jpeg", alt: "Immagine antipasto 2", description: "Carpaccio di pesce spada", allergens: ["🥛"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "../BackEnd - Immagini/Menu/Antipasto/Terra/Coni_BresaolaFormaggio.jpeg", alt: "Immagine antipasto 3", description: "Coni di bresaola", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "../BackEnd - Immagini/Menu/Antipasto/Mare/Cocktail_Gamberi.jpeg", alt: "Immagine antipasto 4", description: "Cocktail di gamberi", allergens: ["🥚"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "../BackEnd - Immagini/Menu/Antipasto/Terra/Involtini_PeperoniCaprino.jpeg", alt: "Immagine antipasto 5", description: "Involtini di peperoni", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "../BackEnd - Immagini/Menu/Antipasto/Mare/Tartare_Salmone.jpeg", alt: "Immagine antipasto 6", description: "Tartare di salmone", allergens: ["🥜"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "../BackEnd - Immagini/Menu/Antipasto/Terra/Rotolo_Mozzarella.jpeg", alt: "Immagine antipasto 7", description: "Rotolo di mozzarella", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "../BackEnd - Immagini/Menu/Antipasto/Mare/Tartare_Tonno.jpeg", alt: "Immagine antipasto 8", description: "Tartare di tonno", allergens: ["🐟"], allergenDescription: "Inserisci eventuali allergeni" }
  ],
  [
    { image: "/BackEnd - Immagini/Menu/Primo/Terra/Penne_SpeckZucchine.jpeg", alt: "Immagine primo 1", description: "Penne con speck e zucchine", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "/BackEnd - Immagini/Menu/Primo/Mare/Pasta_Polpo.jpeg", alt: "Immagine primo 2", description: "Pasta con polpo", allergens: ["🥚"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "/BackEnd - Immagini/Menu/Primo/Terra/Risotto_Asparagi.jpeg", alt: "Immagine primo 3", description: "Risotto agli asparagi", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "/BackEnd - Immagini/Menu/Primo/Mare/Pasta_Salmone.jpeg", alt: "Immagine primo 4", description: "Pasta con salmone", allergens: ["🥜"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "/BackEnd - Immagini/Menu/Primo/Terra/Risotto_Zucca.jpeg", alt: "Immagine primo 5", description: "Risotto alla zucca", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "/BackEnd - Immagini/Menu/Primo/Mare/Ravioli_SogliolaOrata.jpeg", alt: "Immagine primo 6", description: "Ravioli con sogliola e orata", allergens: ["🌾"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "/BackEnd - Immagini/Menu/Primo/Terra/Spaghetti_Carbonara.jpeg", alt: "Immagine primo 7", description: "Spaghetti alla carbonara", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "/BackEnd - Immagini/Menu/Primo/Mare/Spaghetti_Cozze.jpeg", alt: "Immagine primo 8", description: "Spaghetti alle cozze", allergens: ["🥛"], allergenDescription: "Inserisci eventuali allergeni" }
  ],
  [
    { image: "/BackEnd - Immagini/Menu/Secondo/Terra/Brasato_Barolo.jpeg", alt: "Immagine secondo 1", description: "Brasato al barolo", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "/BackEnd - Immagini/Menu/Secondo/Mare/Calamari_Ripieni.jpeg", alt: "Immagine secondo 2", description: "Calamari ripieni", allergens: ["🥚"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto11.png", alt: "Immagine secondo 3", description: "Descrizione secondo 3", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto12.png", alt: "Immagine secondo 4", description: "Descrizione secondo 4", allergens: ["🥜"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto13.png", alt: "Immagine secondo 5", description: "Descrizione secondo 5", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto14.png", alt: "Immagine secondo 6", description: "Descrizione secondo 6", allergens: ["🌾"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto15.png", alt: "Immagine secondo 7", description: "Descrizione secondo 7", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto16.png", alt: "Immagine secondo 8", description: "Descrizione secondo 8", allergens: ["🥛"], allergenDescription: "Inserisci eventuali allergeni" }
  ],
  [
    { image: "/BackEnd - Immagini/Menu/Dolce/Sorbetto_FruttoPassione.jpeg", alt: "Immagine dolce 1", description: "Sorbetto al Maracuja", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "/BackEnd - Immagini/Menu/Dolce/Tiramisu.jpeg", alt: "Immagine dolce 2", description: "Tiramisu", allergens: ["🥚"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto11.png", alt: "Immagine dolce 3", description: "Descrizione dolce 3", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto12.png", alt: "Immagine dolce 4", description: "Descrizione dolce 4", allergens: ["🥜"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto13.png", alt: "Immagine dolce 5", description: "Descrizione dolce 5", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto14.png", alt: "Immagine dolce 6", description: "Descrizione dolce 6", allergens: ["🌾"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto15.png", alt: "Immagine dolce 7", description: "Descrizione dolce 7", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto16.png", alt: "Immagine dolce 8", description: "Descrizione dolce 8", allergens: ["🥛"], allergenDescription: "Inserisci eventuali allergeni" }
  ],
  [
    { image: "/BackEnd - Immagini/Menu/Bibite/image.png", alt: "Immagine bibita 1", description: "Coca Cola", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "/BackEnd - Immagini/Menu/Bibite/image2.png", alt: "Immagine bibita 2", description: "EstaTHE Pesca", allergens: ["🥚"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto11.png", alt: "Immagine bibita 3", description: "Descrizione bibita 3", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto12.png", alt: "Immagine bibita 4", description: "Descrizione bibita 4", allergens: ["🥜"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto13.png", alt: "Immagine bibita 5", description: "Descrizione bibita 5", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto14.png", alt: "Immagine bibita 6", description: "Descrizione bibita 6", allergens: ["🌾"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto15.png", alt: "Immagine bibita 7", description: "Descrizione bibita 7", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto16.png", alt: "Immagine bibita 8", description: "Descrizione bibita 8", allergens: ["🥛"], allergenDescription: "Inserisci eventuali allergeni" }
  ]
];

let currentPage = 0;

function loadPage(pageIndex) {
  document.getElementById("backgroundImage").src = backgrounds[pageIndex % backgrounds.length];

  const dishes = pages[pageIndex] || [];
  document.querySelectorAll('.dish-slot').forEach((slot, index) => {
    if (dishes[index]) {
      slot.style.display = "flex";
      slot.querySelector('.dish-image').src = dishes[index].image;
      slot.querySelector('.dish-description').textContent = dishes[index].description;

      slot.querySelector('.dish-image').onclick = () => {
        showAllergenModal(
          dishes[index].allergens,
          dishes[index].allergenDescription,
          dishes[index].image
        );
      }

    } else {
      slot.style.display = "none";
    }
  });
}

function showAllergenModal(icons, desc, dishImage) {
  document.getElementById('allergen-icons').innerHTML = icons.join(" ");
  document.getElementById('allergen-description').textContent = desc;
  document.getElementById('allergen-dish-image').src = dishImage;
  document.getElementById('allergenModal').style.display = "block";
}

document.querySelector('.close-btn').onclick = () => {
  document.getElementById('allergenModal').style.display = "none";
}

document.querySelector('.next-page-btn').onclick = () => {
  const page = document.getElementById("pageContainer");

  // start flip
  page.style.transform = "rotateY(-180deg)";

  setTimeout(() => {
    currentPage = (currentPage + 1) % pages.length;
    loadPage(currentPage);
    // reset flip
    page.style.transform = "rotateY(0deg)";
  }, 500);
}

// inizializza
loadPage(0);