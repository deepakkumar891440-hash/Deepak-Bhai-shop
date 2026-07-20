<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>दीपक भाई शॉप ऐप</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f4f4f4;
            padding-bottom: 70px;
        }

        /* 1. Splash Screen */
        #splash-screen {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-color: #000000;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }

        .logo-circle {
            width: 80px; height: 80px;
            background-color: #ffffff;
            color: #000000;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        #splash-screen h1 { font-size: 22px; margin-bottom: 8px; color: #ffffff; }
        #splash-screen p { font-size: 14px; color: #cccccc; }

        /* Header */
        header {
            background-color: #ffffff;
            padding: 10px 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky; top: 0;
            z-index: 100;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .header-logo {
            width: 35px; height: 35px;
            background-color: #000;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
        }

        .refer-btn {
            background-color: #f5f5f5;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            border: 1px solid #eee;
            cursor: pointer;
        }

        .header-icons {
            display: flex;
            gap: 15px;
            align-items: center;
            font-size: 18px;
            cursor: pointer;
        }

        .cart-icon { position: relative; }

        .cart-badge {
            position: absolute;
            top: -6px; right: -8px;
            background-color: #000;
            color: #fff;
            font-size: 10px;
            width: 16px; height: 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Search Bar */
        .search-container {
            padding: 10px 15px;
            background-color: #fff;
        }

        .search-box {
            background-color: #f0f2f5;
            border-radius: 8px;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .search-box input {
            border: none;
            background: transparent;
            width: 100%;
            outline: none;
            font-size: 13px;
        }

        /* Categories Section */
        .categories-container {
            display: flex;
            overflow-x: auto;
            padding: 15px;
            background-color: #fff;
            gap: 15px;
            scrollbar-width: none;
        }

        .categories-container::-webkit-scrollbar { display: none; }

        .category-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 65px;
            cursor: pointer;
        }

        .category-img {
            width: 55px; height: 55px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 5px;
            border: 1px solid #ddd;
        }

        .category-item span {
            font-size: 11px;
            color: #333;
            white-space: nowrap;
        }

        /* Filters Bar */
        .filter-bar {
            display: flex;
            justify-content: space-around;
            padding: 10px;
            background-color: #fff;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            font-size: 13px;
            color: #444;
            font-weight: 500;
        }

        .filter-bar div { cursor: pointer; }

        /* Products Grid */
        .products-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 10px;
        }

        .product-card {
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            position: relative;
            cursor: pointer;
        }

        .product-img-container {
            position: relative;
            width: 100%;
            height: 180px;
        }

        .product-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wishlist-btn {
            position: absolute;
            top: 8px; right: 8px;
            background: rgba(255,255,255,0.9);
            width: 28px; height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #555;
            transition: 0.2s;
        }

        .wishlist-btn.active {
            color: #e74c3c;
        }

        .product-info { padding: 8px; }

        .ad-tag {
            font-size: 10px;
            background: #e0e0e0;
            padding: 1px 4px;
            border-radius: 3px;
            font-weight: bold;
            margin-right: 4px;
        }

        .product-title {
            font-size: 12px;
            color: #333;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .price-row {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 4px;
        }

        .current-price { font-weight: bold; font-size: 14px; }
        .original-price { text-decoration: line-through; color: #888; font-size: 11px; }
        .discount { color: #d32f2f; font-size: 11px; font-weight: bold; }

        .offer-tag {
            background-color: #e8f5e9;
            color: #2e7d32;
            font-size: 10px;
            padding: 2px 4px;
            border-radius: 3px;
            display: inline-block;
            margin-bottom: 5px;
        }

        .rating-tag {
            background-color: #038d63;
            color: #fff;
            font-size: 10px;
            padding: 1px 5px;
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            gap: 2px;
        }

        .reviews-count { color: #777; font-size: 10px; }

        /* Bottom Nav */
        .bottom-nav {
            position: fixed;
            bottom: 0; left: 0;
            width: 100%;
            background-color: #fff;
            display: flex;
            justify-content: space-around;
            padding: 8px 0;
            border-top: 1px solid #ddd;
            z-index: 100;
        }

        .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #666;
            font-size: 10px;
            text-decoration: none;
            cursor: pointer;
        }

        .nav-item.active { color: #000; font-weight: bold; }
        .nav-item i { font-size: 18px; margin-bottom: 2px; }

        /* Login/Profile Popup (Black Theme) */
        .login-overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.85);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }

        .login-card {
            background-color: #1a1a1a;
            color: #ffffff;
            width: 90%;
            max-width: 380px;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            position: relative;
            border: 1px solid #333;
        }

        .close-btn {
            position: absolute;
            top: 12px; right: 15px;
            font-size: 20px;
            color: #aaa;
            cursor: pointer;
        }

        .login-card h2 {
            font-size: 22px;
            margin-bottom: 8px;
            color: #ffffff;
        }

        .login-card p {
            font-size: 12px;
            color: #aaa;
            margin-bottom: 20px;
        }

        .input-group {
            margin-bottom: 15px;
            text-align: left;
        }

        .input-group label {
            display: block;
            font-size: 12px;
            margin-bottom: 5px;
            color: #ddd;
        }

        .input-group input {
            width: 100%;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #444;
            background-color: #2a2a2a;
            color: #fff;
            outline: none;
        }

        .forgot-link {
            text-align: right;
            font-size: 11px;
            color: #ff6b35;
            margin-top: -8px;
            margin-bottom: 15px;
            cursor: pointer;
        }

        .login-btn {
            width: 100%;
            padding: 12px;
            background-color: #ff5722;
            color: #fff;
            border: none;
            border-radius: 6px;
            font-weight: bold;
            cursor: pointer;
            font-size: 14px;
        }

        .signup-text {
            text-align: center;
            margin-top: 15px;
            font-size: 12px;
            color: #aaa;
        }

        .signup-text span {
            color: #ff6b35;
            cursor: pointer;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <!-- Splash Screen -->
    <div id="splash-screen">
        <div class="logo-circle">DB</div>
        <h1>दीपक भाई शॉप ऐप</h1>
        <p>वेलकम टू शॉप ऐप</p>
    </div>

    <!-- Header -->
    <header>
        <div class="header-logo" onclick="openLogin()">DB</div>
        <div class="refer-btn">🎁 Refer and Earn</div>
        <div class="header-icons">
            <i class="far fa-heart" onclick="openLogin()"></i>
            <div class="cart-icon" onclick="openLogin()">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-badge" id="cart-count">0</span>
            </div>
        </div>
    </header>

    <!-- Search Bar -->
    <div class="search-container">
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" id="searchInput" onkeyup="filterProducts()" placeholder="Search by Keyword or Product ID">
            <i class="fas fa-microphone"></i>
            <i class="fas fa-camera"></i>
        </div>
    </div>

    <!-- Categories -->
    <div class="categories-container">
        <div class="category-item" onclick="filterCategory('all')">
            <img class="category-img" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=150&q=80" alt="All">
            <span>All Categ...</span>
        </div>
        <div class="category-item" onclick="filterCategory('saree')">
            <img class="category-img" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=150&q=80" alt="Saree">
            <span>Kurtis & S...</span>
        </div>
        <div class="category-item" onclick="filterCategory('kids')">
            <img class="category-img" src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=150&q=80" alt="Kids">
            <span>Kids</span>
        </div>
        <div class="category-item" onclick="filterCategory('home')">
            <img class="category-img" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=150&q=80" alt="Home">
            <span>Home De...</span>
        </div>
        <div class="category-item" onclick="filterCategory('beauty')">
            <img class="category-img" src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=150&q=80" alt="Beauty">
            <span>Beauty</span>
        </div>
    </div>

    <!-- Filters -->
    <div class="filter-bar">
        <div>⇅ Sort</div>
        <div>Category ▾</div>
        <div>Gender ▾</div>
        <div>⚙ Filters</div>
    </div>

    <!-- Dynamic 50 Products Grid -->
    <div class="products-grid" id="productsGrid"></div>

    <!-- Bottom Navigation -->
    <div class="bottom-nav">
        <div class="nav-item active" onclick="setActiveNav(this)">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </div>
        <div class="nav-item" onclick="setActiveNav(this)">
            <i class="fas fa-th-large"></i>
            <span>Categories</span>
        </div>
        <div class="nav-item" onclick="setActiveNav(this)">
            <i class="fas fa-store"></i>
            <span>Mall</span>
        </div>
        <div class="nav-item" onclick="setActiveNav(this)">
            <i class="fas fa-play-circle"></i>
            <span>Video Finds</span>
        </div>
        <div class="nav-item" onclick="openLogin()">
            <i class="fas fa-box"></i>
            <span>My Orders</span>
        </div>
    </div>

    <!-- Login Popup Modal (2nd Photo Page - Black Background) -->
    <div class="login-overlay" id="loginOverlay">
        <div class="login-card">
            <span class="close-btn" onclick="closeLogin()">&times;</span>
            <h2>Welcome back</h2>
            <p>Enter your email and password to access your account</p>
            
            <form onsubmit="event.preventDefault(); alert('लॉगिन सफल!'); closeLogin();">
                <div class="input-group">
                    <label>Email</label>
                    <input type="email" value="m.dhoni@example.com" required>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="••••••••" required>
                </div>
                <div class="forgot-link">Forgot password?</div>
                <button type="submit" class="login-btn">Login to your account</button>
            </form>

            <div class="signup-text">
                Don't have an account? <span>Sign up</span>
            </div>
        </div>
    </div>

    <!-- JavaScript Engine -->
    <script>
        // Splash screen hiding
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            splash.style.opacity = '0';
            setTimeout(() => splash.style.display = 'none', 500);
        }, 2000);

        // Sample product images bank
        const productImages = [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80"
        ];

        const productNames = [
            "Charvi Voguish Saree", "Banita Ensemble Saree", "Stylus Women Kurti", 
            "Aagyeyi Fashionable Dress", "Myra Attractive Kids Wear", "Kashvi Pretty Sarees",
            "Jivika Graceful Suits", "Trendy Silk Saree", "Traditional Designer Kurti"
        ];

        // Generate 50 Unique Products dynamically
        const productsData = [];
        for (let i = 1; i <= 50; i++) {
            const price = Math.floor(Math.random() * 400) + 200;
            const originalPrice = price + Math.floor(Math.random() * 200) + 100;
            const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
            
            productsData.push({
                id: i,
                name: `${productNames[i % productNames.length]} Vol. ${i}`,
                price: price,
                originalPrice: originalPrice,
                discount: discount,
                rating: (3.8 + Math.random() * 1.1).toFixed(1),
                reviews: Math.floor(Math.random() * 5000) + 100,
                image: productImages[i % productImages.length],
                isAd: i % 3 === 0
            });
        }

        // Render Products to Screen
        function renderProducts(items) {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';
            
            items.forEach(prod => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-img-container" onclick="openLogin()">
                        <img class="product-img" src="${prod.image}" alt="${prod.name}">
                        <div class="wishlist-btn" onclick="toggleWishlist(event, this)">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div class="product-info" onclick="openLogin()">
                        <div class="product-title">
                            ${prod.isAd ? '<span class="ad-tag">Ad</span>' : ''} ${prod.name}
                        </div>
                        <div class="price-row">
                            <span class="current-price">₹${prod.price}</span>
                            <span class="original-price">₹${prod.originalPrice}</span>
                            <span class="discount">${prod.discount}% OFF</span>
                        </div>
                        <div class="offer-tag">₹${prod.price - 30} with Special Offer</div>
                        <div>
                            <span class="rating-tag">${prod.rating} ★</span>
                            <span class="reviews-count">(${prod.reviews.toLocaleString()})</span>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Initialize products
        renderProducts(productsData);

        // Search Filter Functionality
        function filterProducts() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const filtered = productsData.filter(p => p.name.toLowerCase().includes(input));
            renderProducts(filtered);
        }

        // Like/Wishlist Toggle Button Click
        function toggleWishlist(e, btn) {
            e.stopPropagation(); // Prevents opening login screen on heart click
            btn.classList.toggle('active');
            const icon = btn.querySelector('i');
            if (btn.classList.contains('active')) {
                icon.className = 'fas fa-heart';
            } else {
                icon.className = 'far fa-heart';
            }
        }

        // Bottom Nav Active Toggle
        function setActiveNav(element) {
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            element.classList.add('active');
        }

        // Open/Close Login Modal (Black Background Login Screen)
        function openLogin() {
            document.getElementById('loginOverlay').style.display = 'flex';
        }

        function closeLogin() {
            document.getElementById('loginOverlay').style.display = 'none';
        }
    </script>
</body>
</html>
