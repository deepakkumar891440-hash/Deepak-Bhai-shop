// Meesho Style Products Data
const products = [
    { id: 1, name: "Charvi Voguish Sarees", price: 451, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500", rating: "4.2 ★" },
    { id: 2, name: "Banita Ensemble Sarees", price: 546, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500", rating: "4.4 ★" },
    { id: 3, name: "Designer Pink Saree", price: 620, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500", rating: "4.1 ★" },
    { id: 4, name: "Traditional Gold Jewellery Set", price: 299, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500", rating: "4.5 ★" }
];

let cart = [];
let isLoggedIn = false;

// Render Products
function renderProducts(items) {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";
    items.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="p-info">
                    <div class="p-title">${product.name}</div>
                    <div class="p-price">₹${product.price}</div>
                    <span class="rating">${product.rating}</span>
                    <div class="card-btns">
                        <button class="btn-cart-sm" onclick="addToCart(${product.id})">Add</button>
                        <button class="btn-buy-sm" onclick="buyNow(${product.id})">Buy</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Search Function
function searchProducts() {
    const text = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(text));
    renderProducts(filtered);
}

// Cart Management
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
    alert(`${item.name} added to cart!`);
}

function updateCartUI() {
    document.getElementById("cartCount").innerText = cart.length;
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<p style="margin:5px 0;">${item.name} - <b>₹${item.price}</b></p>`;
    });
    document.getElementById("cartTotal").innerText = total;
}

function toggleCart() {
    const modal = document.getElementById("cartModal");
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function openModal(id) { document.getElementById(id).style.display = "flex"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }

// Login Management
function saveUser() {
    const name = document.getElementById("userName").value;
    if(name) {
        isLoggedIn = true;
        document.getElementById("navUserText").innerText = name;
        closeModal("signupModal");
        alert("Account Created Successfully!");
    } else {
        alert("Please enter details!");
    }
}

// Checkout Logic
function buyNow(id) {
    addToCart(id);
    checkout();
}

function checkout() {
    if (!isLoggedIn) {
        alert("Pehle Sign-Up / Login karein!");
        toggleCart();
        openModal("signupModal");
        return;
    }
    if (cart.length === 0) {
        alert("Aapka Cart khali hai!");
        return;
    }

    alert("🎉 Order Confirmed! Deepak Bhai Shop se khareedne ke liye shukriya.");
    cart = [];
    updateCartUI();
    closeModal("cartModal");
}

renderProducts(products);
