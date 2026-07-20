const photos = ["https://picsum.photos/id/1025/500/500", "https://picsum.photos/id/64/500/500", "https://picsum.photos/id/1062/500/500"];
const products = Array.from({length: 20}, (_, i) => ({
    id: i+1, name: `Product ${i+1}`, price: (i+1)*100, category: "Fashion", image: photos[i%3], rating: "4.5 ★"
}));

// Quick View Function
function viewProduct(id) {
    const p = products.find(prod => prod.id === id);
    const modal = document.getElementById('detailContent');
    modal.innerHTML = `
        <span class="close-card" onclick="closeModal('detailModal')">&times;</span>
        <img src="${p.image}" style="width:100%; border-radius:10px;">
        <h2>${p.name}</h2>
        <p>Price: ₹${p.price}</p>
        <button class="btn-card-login" onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    openModal('detailModal');
}

function renderProducts(items) {
    const container = document.getElementById("productsContainer");
    container.innerHTML = items.map(p => `
        <div class="product-card">
            <span class="discount-tag">20% OFF</span>
            <i class="fa-solid fa-heart wishlist-btn" onclick="this.classList.toggle('active')"></i>
            <img src="${p.image}" onclick="viewProduct(${p.id})">
            <div class="p-info">
                <div class="p-title">${p.name}</div>
                <div class="p-price">₹${p.price}</div>
                <button class="btn-buy-sm" onclick="addToCart(${p.id})">Add</button>
            </div>
        </div>
    `).join('');
}
// Baaki functions (addToCart, checkout) pehle jaise hi rahege.
document.addEventListener("DOMContentLoaded", () => renderProducts(products));
