const featuredGrid = document.getElementById("featuredGrid");

function loadFeatured() {
  featuredGrid.innerHTML = "";

  properties.slice(0, 3).forEach(p => {
    featuredGrid.innerHTML += `
      <div class="card" onclick="viewProperty(${p.id})">
        <img src="${p.img}" alt="${p.title}">
        <div class="info">
          <h3>${p.title}</h3>
          <p><i class="fa-solid fa-location-dot"></i> ${p.location}</p>
          <p class="price">R${p.price.toLocaleString()}</p>
          <p>${p.bedrooms} Bed | ${p.bathrooms} Bath</p>
        </div>
      </div>
    `;
  });
}

function viewProperty(id) {
  window.location.href = `property.html?id=${id}`;
}

loadFeatured();