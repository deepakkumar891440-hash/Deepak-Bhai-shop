// Deepak Bhai Shop - Total 30 Products List
const products = [
    // Sarees & Women Fashion
    { id: 1, name: "Charvi Voguish Sarees", price: 451, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500", rating: "4.2 ★" },
    { id: 2, name: "Banita Ensemble Sarees", price: 546, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500", rating: "4.4 ★" },
    { id: 3, name: "Designer Pink Saree", price: 620, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500", rating: "4.1 ★" },
    { id: 4, name: "Kanjeevaram Silk Saree", price: 899, image: "https://images.unsplash.com/photo-1610030469668-98e550d6193c?w=500", rating: "4.6 ★" },
    { id: 5, name: "Printed Cotton Kurti Set", price: 399, image: "https://images.unsplash.com/photo-1583391733975-ac821034c4f0?w=500", rating: "4.3 ★" },
    { id: 6, name: "Partywear Anarkali Suit", price: 799, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500", rating: "4.5 ★" },

    // Jewellery & Accessories
    { id: 7, name: "Traditional Gold Jewellery Set", price: 299, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500", rating: "4.5 ★" },
    { id: 8, name: "Silver Choker Necklace", price: 199, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", rating: "4.2 ★" },
    { id: 9, name: "Stylish Bangle Set", price: 149, image: "https://images.unsplash.com/photo-1611591475824-28a113d077c5?w=500", rating: "4.0 ★" },

    // Electronics & Watches
    { id: 10, name: "Smart Bluetooth Headphones", price: 899, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", rating: "4.3 ★" },
    { id: 11, name: "Wireless Earbuds TWS", price: 699, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", rating: "4.4 ★" },
    { id: 12, name: "Stylish Smart Watch", price: 1299, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", rating: "4.6 ★" },
    { id: 13, name: "Digital Sports Watch", price: 349, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500", rating: "4.1 ★" },

    // Footwear
    { id: 14, name: "Casual Running Shoes", price: 799, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", rating: "4.0 ★" },
    { id: 15, name: "Men White Sneakers", price: 649, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500", rating: "4.3 ★" },
    { id: 16, name: "Women Ethnic Jutti", price: 299, image: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=500", rating: "4.2 ★" },

    // Beauty & Cosmetics
    { id: 17, name: "Beauty Lipstick Set (Pack of 4)", price: 349, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", rating: "4.3 ★" },
    { id: 18, name: "Face Makeup Kit Combo", price: 499, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500", rating: "4.5 ★" },
    { id: 19, name: "Matte Nail Polish Combo", price: 199, image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500", rating: "4.1 ★" },

    // Men Fashion
    { id: 20, name: "Men Cotton Casual Shirt", price: 599, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500", rating: "4.1 ★" },
    { id: 21, name: "Men Slim Fit Denim Jeans", price: 799, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500", rating: "4.4 ★" },
    { id: 22, name: "Printed T-Shirt for Men", price: 299, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500", rating: "4.2 ★" },

    // Kids Wear
    { id: 23, name: "Kids Wear Dress Combo", price: 499, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500", rating: "4.2 ★" },
    { id: 24, name: "Baby Boy Frock & Shorts Set", price: 399, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500", rating: "4.5 ★" },

    // Home & Kitchen
    { id: 25, name: "3D Printed Bed sheet Set", price: 449, image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500", rating: "4.3 ★" },
    { id: 26, name: "Non-Stick Cookware Set", price: 999, image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=500", rating: "4.6 ★" },
    { id: 27, name: "Designer Cushion Covers", price: 249, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500", rating: "4.0 ★" },

    // Handbags & Wallets
    { id: 28, name: "Women Shoulder Handbag", price: 499, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500", rating: "4.4 ★" },
    { id: 29, name: "Men Genuine Leather Wallet", price: 299, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500", rating: "4.3 ★" },
    { id: 30, name: "Travel Backpack Bag", price: 699, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", rating: "4.5 ★" }
];

let cart = [];
let isLoggedIn = false;

// Display Products Logic
function renderProducts(items) {
    const container = document.getElementById("productsContainer");
    if(!container) return;
    
    container.innerHTML = "";
    
    if(items.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 30px; color: #888; font-weight: bold;">Koi product nahi mila!</p>`;
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

// Instant Live Search Function
function searchProducts() {
    const searchInput = document.getElementById("searchInput");
    if(!searchInput) return;

    const query = searchInput.value.toLowerCase().trim();
    
    // Filter products matching name
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );
    
    renderProducts(filtered);
}

// Cart Functions
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

// User Sign-up
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
