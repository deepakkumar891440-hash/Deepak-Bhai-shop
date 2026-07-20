// Deepak Bhai Shop - 100 Unique Products Generator
function generate100Products() {
    const categories = [
        { name: "Saree", query: "indian-saree-fashion" },
        { name: "Kurti", query: "indian-kurti-dress" },
        { name: "Jewellery", query: "indian-gold-jewellery" },
        { name: "Electronics", query: "gadget-headphone-tech" },
        { name: "Shoes", query: "sneakers-footwear" },
        { name: "Kids", query: "kids-clothing-fashion" },
        { name: "Makeup", query: "cosmetics-beauty-product" },
        { name: "Handbag", query: "women-handbag-fashion" },
        { name: "Watch", query: "wrist-watch-fashion" },
        { name: "MenShirt", query: "men-shirt-fashion" }
    ];

    let items = [];
    for (let i = 1; i <= 100; i++) {
        let type = categories[i % categories.length];
        items.push({
            id: i,
            name: `${type.name} Collection #${i}`,
            category: type.name,
            price: Math.floor(Math.random() * 800) + 199,
            rating: (Math.random() * (4.8 - 3.5) + 3.5).toFixed(1) + " ★",
            // &sig=${i} is the trick: ye har photo ko alag dikhayega
            image: `https://source.unsplash.com/500x500/?${type.query}&sig=${i}`
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
    
    items.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
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

// Search & Filter Logic
function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    renderProducts(filtered);
}

function filterByCategory(cat) {
    if (cat === 'All') renderProducts(products);
    else renderProducts(products.filter(p => p.category === cat));
}

// Cart Logic
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
    alert(`${item.name} Cart me add ho gaya!`);
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) cartCount.innerText = cart.length;
}

function toggleCart() {
    const modal = document.getElementById("cartModal");
    if (modal) modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function openModal(id) { document.getElementById(id).style.display = "flex"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }

// Checkout & User Logic
function buyNow(id) {
    addToCart(id);
    checkout();
}

function checkout() {
    if (!isLoggedIn) {
        alert("Pehle Sign-Up / Login karein!");
        openModal("signupModal");
        return;
    }
    alert("🎉 Order Confirmed! Deepak Bhai Shop se khareedne ke liye shukriya.");
    cart = [];
    updateCartUI();
    closeModal("cartModal");
}

function saveUser() {
    const name = document.getElementById("userName").value;
    if (name) {
        isLoggedIn = true;
        document.getElementById("navUserText").innerText = name;
        closeModal("signupModal");
        alert("Account Successfully Ban Gaya!");
    }
}

// Initial Load
document.addEventListener("DOMContentLoaded", () => renderProducts(products));
