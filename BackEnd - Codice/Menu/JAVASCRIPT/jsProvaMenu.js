const backgrounds = [
  "../ImmaginiPagineMenu/Antipasti.png",
  "../ImmaginiPagineMenu/Primi.png",
  "../ImmaginiPagineMenu/Secondi.png",
  "../ImmaginiPagineMenu/Dolci.png",
  "../ImmaginiPagineMenu/Bibite.png"
];

const pages = [
  [
    { image: "../img/Spaghetti-al-pesto-52558-3.png", alt: "Immagine antipasto 1", description: "Descrizione Antipasto 1", allergens: ["🌾"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto2.png", alt: "Immagine antipasto 2", description: "Descrizione Antipasto 2", allergens: ["🥛"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto3.png", alt: "Immagine antipasto 3", description: "Descrizione Antipasto 3", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto4.png", alt: "Immagine antipasto 4", description: "Descrizione Antipasto 4", allergens: ["🥚"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto5.png", alt: "Immagine antipasto 5", description: "Descrizione Antipasto 5", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto6.png", alt: "Immagine antipasto 6", description: "Descrizione Antipasto 6", allergens: ["🥜"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto7.png", alt: "Immagine antipasto 7", description: "Descrizione Antipasto 7", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "../img/image.png", alt: "Immagine antipasto 8", description: "Descrizione Antipasto 8", allergens: ["🐟"], allergenDescription: "Inserisci eventuali allergeni" }
  ],
  [
    { image: "./immagini/piatto9.png", alt: "Immagine primo 1", description: "Descrizione Primo 1", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto10.png", alt: "Immagine primo 2", description: "Descrizione Primo 2", allergens: ["🥚"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto11.png", alt: "Immagine primo 3", description: "Descrizione Primo 3", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto12.png", alt: "Immagine primo 4", description: "Descrizione Primo 4", allergens: ["🥜"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto13.png", alt: "Immagine primo 5", description: "Descrizione Primo 5", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto14.png", alt: "Immagine primo 6", description: "Descrizione Primo 6", allergens: ["🌾"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto15.png", alt: "Immagine primo 7", description: "Descrizione Primo 7", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto16.png", alt: "Immagine primo 8", description: "Descrizione Primo 8", allergens: ["🥛"], allergenDescription: "Inserisci eventuali allergeni" }
  ],
  [
    { image: "./immagini/piatto9.png", alt: "Immagine secondo 1", description: "Descrizione secondo 1", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto10.png", alt: "Immagine secondo 2", description: "Descrizione secondo 2", allergens: ["🥚"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto11.png", alt: "Immagine secondo 3", description: "Descrizione secondo 3", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto12.png", alt: "Immagine secondo 4", description: "Descrizione secondo 4", allergens: ["🥜"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto13.png", alt: "Immagine secondo 5", description: "Descrizione secondo 5", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto14.png", alt: "Immagine secondo 6", description: "Descrizione secondo 6", allergens: ["🌾"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto15.png", alt: "Immagine secondo 7", description: "Descrizione secondo 7", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto16.png", alt: "Immagine secondo 8", description: "Descrizione secondo 8", allergens: ["🥛"], allergenDescription: "Inserisci eventuali allergeni" }
  ],
  [
    { image: "./immagini/piatto9.png", alt: "Immagine dolce 1", description: "Descrizione dolce 1", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto10.png", alt: "Immagine dolce 2", description: "Descrizione dolce 2", allergens: ["🥚"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto11.png", alt: "Immagine dolce 3", description: "Descrizione dolce 3", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto12.png", alt: "Immagine dolce 4", description: "Descrizione dolce 4", allergens: ["🥜"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto13.png", alt: "Immagine dolce 5", description: "Descrizione dolce 5", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto14.png", alt: "Immagine dolce 6", description: "Descrizione dolce 6", allergens: ["🌾"], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto15.png", alt: "Immagine dolce 7", description: "Descrizione dolce 7", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto16.png", alt: "Immagine dolce 8", description: "Descrizione dolce 8", allergens: ["🥛"], allergenDescription: "Inserisci eventuali allergeni" }
  ],
  [
    { image: "./immagini/piatto9.png", alt: "Immagine bibita 1", description: "Descrizione bibita 1", allergens: [], allergenDescription: "Inserisci eventuali allergeni" },
    { image: "./immagini/piatto10.png", alt: "Immagine bibita 2", description: "Descrizione bibita 2", allergens: ["🥚"], allergenDescription: "Inserisci eventuali allergeni" },
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