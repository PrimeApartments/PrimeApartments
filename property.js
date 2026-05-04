const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const property = properties.find(p => p.id === id);
const container = document.getElementById("propertyDetails");

if (!property) {
  container.innerHTML = "<h2>❌ Property not found</h2>";
} else {
  container.innerHTML = `
    <img src="${property.img}" alt="${property.title}">
    <h2>${property.title}</h2>
    <p><b>📍 Location:</b> ${property.location}</p>
    <p><b>💰 Price:</b> R${property.price.toLocaleString()}</p>
    <p><b>🛏 Bedrooms:</b> ${property.bedrooms}</p>
    <p><b>🛁 Bathrooms:</b> ${property.bathrooms}</p>
    <p><b>🏠 Type:</b> ${property.type}</p>
    <p><b>Description:</b> ${property.desc}</p>
    <br>
    <button onclick="window.location.href='contact.html'">Contact Agent</button>
  `;
}