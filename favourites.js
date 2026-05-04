const favGrid = document.getElementById("favGrid");

function loadFavourites() {
  let favs = JSON.parse(localStorage.getItem("favourites")) || [];

  if (favs.length === 0) {
    favGrid.innerHTML = `<p style="text-align:center;color:#444;">No favourites saved yet.</p>`;
    return;
  }

  favGrid.innerHTML = "";

  favs.forEach(id => {
    const property = properties.find(p => p.id === id);

    if (property) {
      favGrid.innerHTML += `
        <div class="card" onclick="viewProperty(${property.id})">
          <img src="${property.img}">
          <div class="info">
            <h3>${property.title}</h3>
            <p>${property.location}</p>
            <p class="price">R${property.price.toLocaleString()}</p>
            <button onclick="removeFavourite(event, ${property.id})" style="margin-top:10px;background:red;">
              Remove
            </button>
          </div>
        </div>
      `;
    }
  });
}

function viewProperty(id) {
  window.location.href = `property.html?id=${id}`;
}

function removeFavourite(event, id) {
  event.stopPropagation();

  let favs = JSON.parse(localStorage.getItem("favourites")) || [];
  favs = favs.filter(f => f !== id);

  localStorage.setItem("favourites", JSON.stringify(favs));
  loadFavourites();
}

loadFavourites();