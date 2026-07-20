<!DOCTYPE html>
<html>
<head>
<title>Deepak Bhai Shop</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:sans-serif}
.header{background:#e91e63;color:white;text-align:center;padding:15px;font-size:22px;font-weight:bold;position:sticky;top:0}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:10px;background:#f5f5f5}
.card{background:white;border-radius:12px;padding:8px;box-shadow:0 2px 6px rgba(0,0,0,0.1)}
.card img{width:100%;border-radius:10px;height:160px;object-fit:cover}
.title{font-size:13px;margin:5px 0;height:32px;overflow:hidden}
.price{color:#e91e63;font-weight:bold;font-size:15px}
.old{text-decoration:line-through;color:gray;font-size:11px;margin-left:4px}
.discount{color:green;font-size:11px;font-weight:bold;margin-left:4px}
.btn{background:#e91e63;color:white;border:none;width:100%;padding:8px;border-radius:8px;margin-top:5px;font-weight:bold}
</style>
</head>
<body>
<div class="header">Deepak Bhai Shop 🛍️</div>
<div class="grid">
<div class="card">
<img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400">
<p class="title">Banarasi Silk Saree</p>
<p class="price">₹899 <span class="old">₹1999</span> <span class="discount">55% OFF</span></p>
<button class="btn" onclick="window.open('https://wa.me/91XXXXXXXXXX')">Order on WhatsApp</button>
</div>
<div class="card">
<img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400">
<p class="title">Anarkali Kurti Set</p>
<p class="price">₹699 <span class="old">₹1499</span> <span class="discount">53% OFF</span></p>
<button class="btn" onclick="window.open('https://wa.me/91XXXXXXXXXX')">Order on WhatsApp</button>
</div>
</div>
</body>
</html>
