// Reliable Photos Array
const photos = [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
    "https://images.unsplash.com/photo-1583391733975-ac821034c4f0?w=500",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500"
];

function generate100Products() {
    const categories = ["Saree", "Kurtis", "Kids", "Electronics", "Jewellery", "Shoes", "Makeup"];
    let items = [];
    for (let i = 1; i <= 100; i++) {
        let index = (i - 1) % categories.length;
        items.push({
            id: i,
            name: `${categories[index]} Item #${i}`,
            category: categories[index],
            price: Math.floor(Math.random() * 800) + 199,
            rating: (Math.random() * (4.8 - 3.8) + 3.8).toFixed(1) + " ★",
            image: photos[index]
        });
    }
    return items;
}

const products = generate100Products();
let cart = [];
let isLoggedIn = false;

// Render Products
function renderProducts(items) {
    const container = document.getElementById("productsContainer");
    if (!container) return;
    container.innerHTML = "";

    if (items.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 30px; color: #888;">Koi product nahi mila!</p>`;
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

// Search
function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    renderProducts(filtered);
}

// Category Filter
function filterByCategory(cat) {
    if (cat === 'All') renderProducts(products);
    else renderProducts(products.filter(p => p.category.toLowerCase() === cat.toLowerCase()));
}

// Sorting
function sortProducts(type) {
    let sorted = [...products];
    if (type === 'low-high') sorted.sort((a, b) => a.price - b.price);
    else if (type === 'high-low') sorted.sort((a, b) => b.price - a.price);
    renderProducts(sorted);
}

// Add to Cart (Trigger Login Modal if not logged in)
function addToCart(id) {
    if (!isLoggedIn) {
        openModal("signupModal");
        return;
    }
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
    alert(`${item.name} Cart me add ho gaya!`);
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) cartCount.innerText = cart.length;

    const cartItems = document.getElementById("cartItems");
    if (!cartItems) return;

    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<p style="margin:8px 0; font-size:13px;">${item.name} - <b>₹${item.price}</b></p>`;
    });

    const cartTotal = document.getElementById("cartTotal");
    if (cartTotal) cartTotal.innerText = total;
}

function toggleCart() {
    const modal = document.getElementById("cartModal");
    if (modal) modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "flex";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
}

// User Login Save
function saveUser() {
    const email = document.getElementById("userEmail").value;
    const pass = document.getElementById("userPassword").value;

    if (email && pass) {
        isLoggedIn = true;
        document.getElementById("navUserText").innerText = email.split('@')[0];
        closeModal("signupModal");
        alert("🎉 Successfully Logged In!");
    } else {
        alert("Kripya Email aur Password dono bharein!");
    }
}

// Checkout
function buyNow(id) {
    if (!isLoggedIn) {
        openModal("signupModal");
        return;
    }
    addToCart(id);
    checkout();
}

function checkout() {
    if (cart.length === 0) {
        alert("Aapka Cart khali hai!");
        return;
    }
    alert("🎉 Order Confirmed! Deepak Bhai Shop se khareedne ke liye shukriya.");
    cart = [];
    updateCartUI();
    closeModal("cartModal");
}

// Page Load
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
});
