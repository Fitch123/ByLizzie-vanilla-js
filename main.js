//HAMBURGER NAVBAR 
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navLinks.classList.toggle('show');
});


//inventory object array
const inventory = [
  {id: 1, type: "Pulsera", name: "Pulsera Dorada 24k", price: 1500, img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg", href: "Pulsera Dorada 24k"},
  {id: 2, type: "Pulsera", name: "Pulsera Dorada 12k", price: 1200, img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg", href: "Pulsera Dorada 12k"},
  {id: 3, type: "Pulsera", name: "Pulsera Dorada 4k", price: 800, img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg", href: "Pulsera Dorada 4k"},
  {id: 4, type: "Pulsera", name: "Pulsera Plata", price: 600, img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg", href: "Pulsera Plata"},
  {id: 5, type: "Collar", name: "Collar de Oro 24k", price: 2000, img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg", href: "Collar de Oro 24k"},
  {id: 6, type: "Arete", name: "Arete 24k", price: 1000, img: "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg", href: "24k Arete"},
];

const inventoryMap = Object.fromEntries(inventory.map(item => [item.id, item]));

//test
console.log(inventoryMap[3].name);
console.log(inventoryMap[3].price);

//image/inventory injection
function renderGallery(type, containerId) {
  const gallery = document.getElementById(containerId);
  if (!gallery) return;

  inventory.forEach(item => {
    if (item.type === type) {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price} MXN</p>
      `;
      gallery.appendChild(li);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery("Pulsera", "pulseras-gallery");
  renderGallery("Collar", "collares-gallery");
  renderGallery("Arete", "aretes-gallery"); 
});



