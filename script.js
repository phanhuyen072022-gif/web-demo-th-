// ===== Đọc dữ liệu từ config =====
const products = SITE_CONFIG.products;
let cart = JSON.parse(localStorage.getItem('phanhuyen_cart') || '[]');
let activeFilter = 'all';

// ===== Format Price =====
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + '₫';
}

// ===== Render tất cả nội dung từ Config =====
function renderSiteContent() {
    const S = SITE_CONFIG.shop;
    const C = SITE_CONFIG.contact;

    // Header & Footer shop name
    document.getElementById('header-shop-name').textContent = S.name;
    document.getElementById('footer-shop-name').textContent = S.name;

    // Hero
    document.getElementById('hero-slogan').textContent = '✿ ' + S.slogan;
    document.getElementById('hero-title').textContent = S.heroTitle;
    document.getElementById('hero-highlight').textContent = S.heroHighlight;
    document.getElementById('hero-desc').textContent = S.heroDescription;

    // About
    document.getElementById('about-title').textContent = 'Về ' + S.name;
    document.getElementById('about-years').textContent = S.yearExperience;
    document.getElementById('about-desc1').textContent = S.aboutDescription1;
    document.getElementById('about-desc2').textContent = S.aboutDescription2;
    document.getElementById('stat-customers').textContent = S.totalCustomers;
    document.getElementById('stat-designs').textContent = S.totalDesigns;
    document.getElementById('stat-satisfaction').textContent = S.satisfactionRate;

    // Contact
    document.getElementById('contact-address').textContent = C.address;
    document.getElementById('contact-phone').textContent = C.phone;
    document.getElementById('contact-email').textContent = C.email;
    document.getElementById('contact-hours').textContent = C.workingHours;

    // Footer
    document.getElementById('footer-desc').textContent = S.footerDescription;
    document.getElementById('footer-copyright').innerHTML = S.copyright + ' Made with <i class="fas fa-heart text-rose-500"></i>';

    // Social links
    document.getElementById('social-facebook').href = SITE_CONFIG.social.facebook;
    document.getElementById('social-instagram').href = SITE_CONFIG.social.instagram;
    document.getElementById('social-tiktok').href = SITE_CONFIG.social.tiktok;

    // Footer services
    const servicesEl = document.getElementById('footer-services');
    servicesEl.innerHTML = SITE_CONFIG.services.map(s => `<li>${s}</li>`).join('');

    // Filter tabs
    renderFilterTabs();

    // Testimonials
    renderTestimonials();
}

// ===== Render Filter Tabs =====
function renderFilterTabs() {
    const container = document.getElementById('filter-tabs');
    container.innerHTML = Object.entries(SITE_CONFIG.categories).map(([key, label], i) =>
        `<button class="filter-btn ${i === 0 ? 'active' : ''} px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300" data-filter="${key}">${label}</button>`
    ).join('');

    // Bind filter events
    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderProducts(activeFilter);
        });
    });
}

// ===== Render Testimonials =====
function renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    grid.innerHTML = SITE_CONFIG.testimonials.map(t => {
        const stars = Array(t.stars).fill('<i class="fas fa-star"></i>').join('');
        return `
        <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex text-amber-400 mb-4">${stars}</div>
            <p class="text-gray-600 italic mb-6">"${t.text}"</p>
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-${t.color}-100 rounded-full flex items-center justify-center">
                    <span class="font-semibold text-${t.color}-500">${t.initial}</span>
                </div>
                <div>
                    <p class="font-semibold text-sm">${t.name}</p>
                    <p class="text-xs text-gray-400">${t.role}</p>
                </div>
            </div>
        </div>`;
    }).join('');
}

// ===== Render Products =====
function renderProducts(filter = 'all') {
    const grid = document.getElementById('product-grid');
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    grid.innerHTML = filtered.map((p, i) => `
        <div class="product-card reveal" style="transition-delay: ${i * 0.1}s">
            <div class="img-wrapper">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                <div class="overlay">
                    <button onclick="addToCart(${p.id})" class="px-6 py-3 bg-white text-rose-500 rounded-full font-semibold text-sm hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-lg">
                        <i class="fas fa-cart-plus mr-2"></i>Thêm vào giỏ
                    </button>
                </div>
                ${p.badge ? `<span class="badge badge-${p.badge}">${p.badge === 'hot' ? '🔥 Hot' : p.badge === 'new' ? '✨ Mới' : '🏷️ Sale'}</span>` : ''}
            </div>
            <div class="card-body">
                <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">${SITE_CONFIG.categories[p.category] || p.category}</p>
                <h3 class="font-display font-semibold text-lg text-gray-900 mb-1">${p.name}</h3>
                <p class="text-gray-500 text-sm mb-3">${p.desc}</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span class="price-current">${formatPrice(p.price)}</span>
                        ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
                    </div>
                    <button onclick="addToCart(${p.id})" class="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    requestAnimationFrame(() => {
        document.querySelectorAll('.product-card.reveal').forEach(el => el.classList.add('visible'));
    });
}

// ===== Cart Functions =====
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) { existing.qty++; }
    else { cart.push({ ...product, qty: 1 }); }
    updateCart();
    saveCart();
    showToast(`Đã thêm "${product.name}" vào giỏ hoa!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    saveCart();
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) removeFromCart(id);
        else { updateCart(); saveCart(); }
    }
}

function updateCart() {
    const countEl = document.getElementById('cart-count');
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

    countEl.textContent = totalQty;
    countEl.classList.toggle('hidden', totalQty === 0);
    totalEl.textContent = formatPrice(totalPrice);

    if (cart.length === 0) {
        itemsEl.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-gray-400">
                <i class="fas fa-shopping-bag text-4xl mb-4 text-rose-200"></i>
                <p class="font-medium">Giỏ hoa đang trống</p>
                <p class="text-sm">Hãy chọn những bó hoa yêu thích!</p>
            </div>`;
        return;
    }

    itemsEl.innerHTML = cart.map(item => `
        <div class="cart-item flex gap-4 p-3 bg-cream-50 rounded-2xl">
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-xl">
            <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-sm truncate">${item.name}</h4>
                <p class="text-rose-500 font-display font-bold text-sm">${formatPrice(item.price)}</p>
                <div class="flex items-center gap-2 mt-1">
                    <button onclick="updateQty(${item.id},-1)" class="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-gray-500 hover:text-rose-500 border text-xs"><i class="fas fa-minus"></i></button>
                    <span class="text-sm font-semibold w-6 text-center">${item.qty}</span>
                    <button onclick="updateQty(${item.id},1)" class="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-gray-500 hover:text-rose-500 border text-xs"><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-gray-300 hover:text-rose-500 transition-colors self-start"><i class="fas fa-trash-alt text-sm"></i></button>
        </div>
    `).join('');
}

// ===== Cart Sidebar Toggle =====
function openCart() {
    document.getElementById('cart-overlay').classList.remove('hidden');
    setTimeout(() => document.getElementById('cart-overlay').classList.remove('opacity-0'), 10);
    document.getElementById('cart-sidebar').classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
}
function closeCart() {
    document.getElementById('cart-overlay').classList.add('opacity-0');
    document.getElementById('cart-sidebar').classList.add('translate-x-full');
    document.body.style.overflow = '';
    setTimeout(() => document.getElementById('cart-overlay').classList.add('hidden'), 300);
}

// ===== Toast =====
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 2500);
}

// ===== Header Scroll =====
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Cart Buttons =====
document.getElementById('cart-btn').addEventListener('click', openCart);
document.getElementById('close-cart').addEventListener('click', closeCart);
document.getElementById('cart-overlay').addEventListener('click', closeCart);

// ===== Mobile Menu =====
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// ===== Contact Form =====
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.');
    e.target.reset();
});

// ===== Checkout =====
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) { showToast('Giỏ hoa đang trống!'); return; }
    saveCart();
    closeCart();
    window.location.href = 'checkout.html';
});

// ===== Lưu giỏ hàng vào localStorage =====
function saveCart() {
    localStorage.setItem('phanhuyen_cart', JSON.stringify(cart));
}

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// ===== KHỞI CHẠY =====
renderSiteContent();
renderProducts();
updateCart();
