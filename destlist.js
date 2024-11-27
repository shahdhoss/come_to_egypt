const destinations = {
    Cairo: [
      { name: "The Egyptian Museum", image: "images/egyptian_museum.jpg", link: "egyptian_museum.html" },
      { name: "Cairo Tower", image: "images/cairo_tower.jpeg", link: "cairo_tower.html" },
      { name: "Down Town", image: "images/downtown.jpg", link: "down_town.html" },
      { name: "Moez Street", image: "images/moez.jpg", link: "moez_street.html" },
      { name: "Cairo Citadel", image: "images/cairo_citadel.png", link: "cairo_citadel.html" },
      { name: "El-Azhar Park", image: "images/Al-Azhar-Park.jpg", link: "azhar_park.html" },
      { name: "The Nile", image: "images/nile.jpg", link: "the_nile.html" },
      { name: "Maadi", image: "images/maadi.jfif", link: "maadi.html" },
      { name: "New Capital", image: "images/newcap.jpeg", link: "new_cap.html" },
    ],
    Luxor: [
      { name: "Karnak Temple", image: "images/karnak.jpg", link: "karnak_temple.html" },
      { name: "Valley of the Kings", image: "images/Valley of the Kings.jfif", link: "valley_of_the_kings.html" },
      { name: "The Temble of Hatshepsut", image: "images/hatemble.jpg", link: "hatemble.html" },
      { name: "Luxor Temble", image: "images/luxortemble.jpg", link: "luxortemble.html" },
      { name: "Hot air balloon", image: "images/hotair.jpg", link: "hotair.html" },
    ],
    Aswan: [
      { name: "Abu Simbel Temples", image: "images/abutembel.jfif", link: "abu_simbel.html" },
      { name: "Philae Temple", image: "images/philae.jfif", link: "philae.html" },
      { name: "Nile Cruise", image: "images/nilecruise.jfif", link: "nilecruise.html" },
      { name: "Nubian Museum", image: "images/nubian.jpeg", link: "nubian.html" },
    ],
    Giza: [
        { name: "The pyramids", image: "images/pyramids.jfif", link: "pyramids.html" },
        { name: "Sphinx", image: "images/sphinx.jfif", link: "sphinx.html" },
        { name: "The New Grand Egyptian Museum", image: "images/newmuseum.jfif", link: "newmuseum.html" },
        { name: "Pharaonic village", image: "images/village.jpg", link: "village.html" },
      ],
  };
  
  const searchBar = document.getElementById('searchBar');
  const destinationList = document.getElementById('destinationList');
  
  // Function to display destinations
  const displayDestinations = (governorate) => {
    destinationList.innerHTML = ''; // Clear existing content
    if (destinations[governorate]) {
      destinations[governorate].forEach((place) => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.innerHTML = `
          <div class="card">
            <img src="${place.image}" class="card-img-top" alt="${place.name}">
            <div class="card-body">
              <h5 class="card-title">${place.name}</h5>
              <a href="${place.link}" class="btn btn-primary">Discover More</a>
            </div>
          </div>
        `;
        destinationList.appendChild(col);
      });
    } else {
      destinationList.innerHTML = '<p class="text-center">No destinations found for this governorate.</p>';
    }
  };
  
  // Event listener for search bar
  searchBar.addEventListener('input', (e) => {
    const searchText = e.target.value.trim();
    displayDestinations(searchText);
  });
  
  // Default view
  displayDestinations('Cairo');
  
