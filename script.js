let currentUser = null;

const categories = [
  { name: "All Categories", img: "https://picsum.photos/100?random=1" },
  { name: "Kurtis & Suits", img: "https://picsum.photos/100?random=2" },
  { name: "Kids", img: "https://picsum.photos/100?random=3" },
  { name: "Home", img: "https://picsum.photos/100?random=4" },
  { name: "Beauty", img: "https://picsum.photos/100?random=5" },
  { name: "Saree", img: "https://picsum.photos/100?random=6" },
  { name: "Western Wear", img: "https://picsum.photos/100?random=7" },
  { name: "Jewellery", img: "https://picsum.photos/100?random=8" }
];

const products = [
  { id: 1, name: "Charvi Voguish Sarees", price: "₹451", offer: "₹421 with 1 Special Offer", rating: "4.2", reviews: "5,991", image: "https://picsum.photos/300/400?random=21", isAd: false },
  { id: 2, name: "Banita Ensemble Sarees", price: "₹546", offer: "₹485 with 1 Special Offer", rating: "4.4", reviews: "1,200", image: "https://picsum.photos/300/400?random=22", isAd: true },
  { id: 3, name: "Designer Printed Suit", price: "₹699", offer: "₹649 with Offer", rating: "4.5", reviews: "3,410", image: "https://picsum.photos/300/400?random=23", isAd: false },
  { id: 4, name: "Trendy Top & Jeans", price: "₹299", offer: "₹250 with Offer", rating: "4.1", reviews: "890", image: "https://picsum.photos/300/400?random=24", isAd: false }
];

// Splash Screen Timer (2.5 Seconds)
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    const app = document.getElementById("app");
    splash.classList.add("opacity-0");
    setTimeout(() => {
      splash.style.display = "none";
      app.classList.remove("hidden");
    }, 700);
  }, 2500);

  renderCategories();
  renderProducts(products);
});

// Render Categories
function renderCategories() {
  const container = document.getElementById("category-container");
  container.innerHTML = categories.map(cat => `
    <div onclick="showMessage('Category: ${cat.name}')" class="flex flex-col items-center min-w-[65px] text-center cursor-pointer active:scale-95 transition">
      <div class="w-14 h-14 rounded-full bg-pink-100 overflow-hidden border border-pink-200 p-0.5">
        <img src="${cat.img}" alt="${cat.name}" class="w-full h-full object-cover rounded-full" />
      </div>
      <span class="text-[11px] text-gray-700 font-medium mt-1 truncate w-16">${cat.name}</span>
    </div>
  `).join('');
}

// Render Products
function renderProducts(items) {
  const grid = document.getElementById("product-grid");
  if(items.length === 0) {
    grid.innerHTML = `<p class="col-span-2 text-center text-gray-500 py-6">Koi product nahi mila!</p>`;
    return;
  }
  grid.innerHTML = items.map(item => `
    <div onclick="openProductDetails('${item.name}', '${item.price}')" class="bg-white rounded-md border overflow-hidden relative shadow-sm cursor-pointer hover:shadow-md transition">
      <div class="relative">
        <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover" />
        <button onclick="event.stopPropagation(); toggleHeart(this)" class="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full shadow hover:bg-white active:scale-90 transition">
          <i class="fa-regular fa-heart text-gray-600 text-xs"></i>
        </button>
      </div>
      <div class="p-2">
        <span class="text-xs text-gray-600 font-medium block truncate">
          ${item.isAd ? '<span class="bg-gray-200 text-gray-700 text-[9px] px-1 rounded mr-1 font-bold">Ad</span>' : ''}
          ${item.name}
        </span>
        <div class="text-base font-bold text-gray-900 mt-0.5">${item.price}</div>
        <div class="text-[10px] text-meeshoGreen font-semibold bg-emerald-50 px-1 py-0.5 rounded w-max mt-1">
          ${item.offer}
        </div>
        <div class="flex items-center mt-2 space-x-1">
          <span class="bg-meeshoGreen text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
            ${item.rating} <i class="fa-solid fa-star text-[8px]"></i>
          </span>
          <span class="text-[10px] text-gray-400">(${item.reviews})</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Product Details Notice
function openProductDetails(name, price) {
  alert(`📦 Product: ${name}\n💰 Price: ${price}\n\n⚠️ Notice: Yeh website sirf showcase ke liye hai. Yahan se khareeda nahi ja sakta.`);
}

// Search Filter
function filterProducts() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
}

// Wishlist Heart Toggle
function toggleHeart(btn) {
  const icon = btn.querySelector('i');
  if(icon.classList.contains('fa-regular')) {
    icon.classList.remove('fa-regular', 'text-gray-600');
    icon.classList.add('fa-solid', 'text-meesho');
    showMessage('Saved to Wishlist!');
  } else {
    icon.classList.remove('fa-solid', 'text-meesho');
    icon.classList.add('fa-regular', 'text-gray-600');
    showMessage('Removed from Wishlist!');
  }
}

// User Profile / Login Modal
function openLoginModal() {
  const modal = document.getElementById("login-modal");
  const content = document.getElementById("modal-content");

  if(currentUser) {
    content.innerHTML = `
      <div class="text-center">
        <div class="w-16 h-16 bg-meesho text-white font-extrabold text-2xl rounded-full flex items-center justify-center mx-auto mb-3 shadow">
          ${currentUser.name.charAt(0).toUpperCase()}
        </div>
        <h2 class="text-lg font-bold text-gray-800">Hello, ${currentUser.name}!</h2>
        <p class="text-xs text-gray-500 mb-4">${currentUser.phone}</p>
        <div class="bg-pink-50 text-meesho text-xs font-semibold p-2 rounded-lg mb-4">
          Deepak BHAI shop Member
        </div>
        <button onclick="logoutUser()" class="w-full bg-red-500 text-white font-semibold py-2 rounded-lg text-sm hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="text-center mb-4">
        <h2 class="text-xl font-bold text-meesho">Deepak BHAI shop</h2>
        <p class="text-xs text-gray-500 mt-1">Sign Up / Login to Profile</p>
      </div>
      <form onsubmit="handleLogin(event)" class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">Your Name</label>
          <input id="login-name" type="text" placeholder="Enter name" required class="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-meesho" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">Mobile Number</label>
          <input id="login-phone" type="tel" placeholder="10-digit number" required pattern="[0-9]{10}" class="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-meesho" />
        </div>
        <button type="submit" class="w-full bg-meesho text-white font-bold py-2 rounded-lg text-sm hover:bg-meeshoDark transition">
          Login / Continue
        </button>
      </form>
    `;
  }

  modal.classList.remove("hidden");
}

function closeLoginModal() {
  document.getElementById("login-modal").classList.add("hidden");
}

function handleLogin(e) {
  e.preventDefault();
  const name = document.getElementById("login-name").value;
  const phone = document.getElementById("login-phone").value;

  currentUser = { name, phone };
  closeLoginModal();
  alert(`Welcome ${name}! Aapka Deepak BHAI shop me login ho gaya hai.`);
}

function logoutUser() {
  currentUser = null;
  closeLoginModal();
  alert("Logout successful!");
}

function showMessage(msg) {
  alert(msg);
}

function navClick(section) {
  alert(`Navigating to ${section}...`);
}
