// Deepak Bhai Shop - Updated Products Data
const products = [
    { id: 1, name: "Charvi Voguish Sarees", price: 451, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500", rating: "4.2 ★" },
    { id: 2, name: "Banita Ensemble Sarees", price: 546, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500", rating: "4.4 ★" },
    { id: 3, name: "Designer Pink Saree", price: 620, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500", rating: "4.1 ★" },
    { id: 4, name: "Traditional Gold Jewellery Set", price: 299, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500", rating: "4.5 ★" },
    { id: 5, name: "Smart Bluetooth Headphones", price: 899, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", rating: "4.3 ★" },
    { id: 6, name: "Casual Running Shoes", price: 799, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", rating: "4.0 ★" },
    { id: 7, name: "Stylish Smart Watch", price: 1299, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", rating: "4.6 ★" },
    { id: 8, name: "Kids Wear Dress Combo", price: 499, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500", rating: "4.2 ★" },
    { id: 9, name: "Beauty Lipstick Set", price: 349, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", rating: "4.3 ★" },
    { id: 10, name: "Men Cotton Shirt", price: 599, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500", rating: "4.1 ★" }
];

let cart = [];
let isLoggedIn = false;

// Render Products
function renderProducts(items) {
    const container = document.getElementById("productsContainer");
    if(!container) return;
    
    container.innerHTML = "";
    
    if(items.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 20px; color: #888;">Koi product nahi mila!</p>`;
        return;
    }

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

// Fixed Search Function (Proper Filter)
function searchProducts() {
    const searchInput = document.getElementById("searchInput");
    if(!searchInput) return;

    const query = searchInput.value.toLowerCase().trim();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );
    
    renderProducts(filtered);
}

// Cart Management
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
    alert(`${item.name} Cart me add ho gaya hai!`);
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    if(cartCount) cartCount.innerText = cart.length;

    const cartItems = document.getElementById("cartItems");
    if(!cartItems) return;

    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<p style="margin:8px 0; font-size:14px;">${item.name} - <b>₹${item.price}</b></p>`;
    });

    const cartTotal = document.getElementById("cartTotal");
    if(cartTotal) cartTotal.innerText = total;
}

function toggleCart() {
    const modal = document.getElementById("cartModal");
    if(modal) modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function openModal(id) {
    const modal = document.getElementById(id);
    if(modal) modal.style.display = "flex";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if(modal) modal.style.display = "none";
}

// Login Management
function saveUser() {
    const name = document.getElementById("userName").value;
    if(name) {
        isLoggedIn = true;
        const navUser = document.getElementById("navUserText");
        if(navUser) navUser.innerText = name;
        closeModal("signupModal");
        alert("Account Successfully Ban Gaya!");
    } else {
        alert("Kripya apna naam daalein!");
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

// Page Load Event
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    
    // Connect Search Event Listener
    const searchInput = document.getElementById("searchInput");
    if(searchInput) {
        searchInput.addEventListener("input", searchProducts);
    }
});
