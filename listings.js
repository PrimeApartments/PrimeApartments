const propertyGrid = document.getElementById("propertyGrid");

function displayProperties(list) {
  propertyGrid.innerHTML = "";

  if (list.length === 0) {
    propertyGrid.innerHTML = `<p style="text-align:center;color:#444;">No properties found.</p>`;
    return;
  }

  list.forEach(p => {
    propertyGrid.innerHTML += `
      <div class="card" onclick="viewProperty(${p.id})">
        <img src="${p.img}">
        <div class="info">
          <h3>${p.title}</h3>
          <p><i class="fa-solid fa-location-dot"></i> ${p.location}</p>
          <p class="price">R${p.price.toLocaleString()}</p>
          <p>${p.bedrooms} Bed | ${p.bathrooms} Bath</p>

          <button onclick="saveFavourite(event, ${p.id})" style="margin-top:10px;">
            ❤️ Save
          </button>
        </div>
      </div>
    `;
  });
}

function filterProperties() {
  const location = document.getElementById("searchLocation").value.toLowerCase();
  const type = document.getElementById("typeFilter").value;
  const beds = document.getElementById("bedFilter").value;
  const price = document.getElementById("priceFilter").value;

  let filtered = properties.filter(p => {
    const matchLocation = p.location.toLowerCase().includes(location);
    const matchType = type === "all" || p.type === type;
    const matchBeds = beds === "all" || (beds === "3" ? p.bedrooms >= 3 : p.bedrooms == beds);
    const matchPrice = price === "all" || p.price <= price;

    return matchLocation && matchType && matchBeds && matchPrice;
  });

  displayProperties(filtered);
}

function viewProperty(id) {
  window.location.href = `property.html?id=${id}`;
}

function saveFavourite(event, id) {
  event.stopPropagation();

  let favs = JSON.parse(localStorage.getItem("favourites")) || [];

  if (!favs.includes(id)) {
    favs.push(id);
    localStorage.setItem("favourites", JSON.stringify(favs));
    alert("✅ Saved to favourites!");
  } else {
    alert("⚠ Already in favourites!");
  }
}

displayProperties(properties);