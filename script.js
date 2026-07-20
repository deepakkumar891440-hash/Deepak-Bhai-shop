// Function to generate 100 Products automatically
function generate100Products() {
    const categoriesList = [
        { cat: "Saree", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500" },
        { cat: "Kurtis", img: "https://images.unsplash.com/photo-1583391733975-ac821034c4f0?w=500" },
        { cat: "Jewellery", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500" },
        { cat: "Electronics", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
        { cat: "Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
        { cat: "Kids", img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500" }
    ];

    let items = [];
    for (let i = 1; i <= 100; i++) {
        let type = categoriesList[i % categoriesList.length];
        items.push({
            id: i,
            name: `${type.cat} Item #${i}`,
            category: type.cat,
            price: Math.floor(Math.random() * 900) + 199,
            rating: (Math.random() * (5 - 3.8) + 3.8).toFixed(1) + " ★",
            image: type.img
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

// Search Logic
function searchProducts() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    const query = searchInput.value.toLowerCase().trim();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    renderProducts(filtered);
}

// Category Filter Logic
function filterByCategory(cat) {
    if (cat === 'All') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category.toLowerCase() === cat.toLowerCase());
        renderProducts(filtered);
    }
}

// Sorting Logic
function sortProducts(type) {
    let sorted = [...products];
    if (type === 'low-high') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (type === 'high-low') {
        sorted.sort((a, b) => b.price - a.price);
    }
    renderProducts(sorted);
}

// Cart Functions
function addToCart(id) {
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
        cartItems.innerHTML += `<p style="margin:8px 0; font-size:14px;">${item.name} - <b>₹${item.price}</b></p>`;
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

// User Sign-up
function saveUser() {
    const name = document.getElementById("userName").value;
    if (name) {
        isLoggedIn = true;
        const navUser = document.getElementById("navUserText");
        if (navUser) navUser.innerText = name;
        closeModal("signupModal");
        alert("Account Successfully Ban Gaya!");
    } else {
        alert("Kripya apna naam daalein!");
    }
}

// Checkout & Order Placement
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

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
});
