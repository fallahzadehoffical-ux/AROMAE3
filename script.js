/* AROMAÉ — نسخه‌ی نمایشی فروشگاه؛ داده‌ها و تعامل‌ها همگی در مرورگر اجرا می‌شوند. */
(() => {
  "use strict";

  const products = [
    { id: 1, name: "ماه‌چهره", subtitle: "ادوپرفیوم زنانه · ۵۰ میل", description: "رز لطیف و یاس سپید، با پایانی نرم از مشک و چوب صندل؛ مثل نوری آرام در پایان یک روز بلند.", category: "women", categoryLabel: "عطر زنانه", price: 2480000, image: "1.jpg", badge: "پرفروش", notes: "رز دمشقی · یاس · مشک سفید", volume: "۵۰ میلی‌لیتر", rating: "۴٫۹" },
    { id: 2, name: "چوبِ شب", subtitle: "ادوپرفیوم مردانه · ۵۰ میل", description: "رایحه‌ای عمیق و آرام با رگه‌هایی از فلفل سیاه، چوب سدر و کهربا؛ برای حضوری که بی‌صدا به یاد می‌ماند.", category: "men", categoryLabel: "عطر مردانه", price: 2950000, image: "2.jpg", badge: "محبوب", notes: "فلفل سیاه · سدر · کهربا", volume: "۵۰ میلی‌لیتر", rating: "۴٫۸" },
    { id: 3, name: "خاک و خورشید", subtitle: "ادوپرفیوم یونیسکس · ۵۰ میل", description: "ترنج تازه، خاک نم‌خورده و گرمای چوب؛ عطری مشترک برای آدم‌هایی که انتخاب‌های خودشان را دارند.", category: "unisex", categoryLabel: "عطر یونیسکس", price: 2890000, image: "3.jpg", badge: "امضای آرومائه", notes: "ترنج · خاک باران‌خورده · چوب سدر", volume: "۵۰ میلی‌لیتر", rating: "۴٫۹" },
    { id: 4, name: "کهربای کویر", subtitle: "ادکلن مردانه · ۱۰۰ میل", description: "شروعی مرکباتی و روشن که به رایحه‌ای گرم و کهربایی می‌رسد؛ همراهی خوش‌ساخت برای استفاده‌ی هر روز.", category: "men", categoryLabel: "عطر مردانه", price: 1890000, image: "4.jpg", badge: "", notes: "نارنج · هل · عنبر", volume: "۱۰۰ میلی‌لیتر", rating: "۴٫۷" },
    { id: 5, name: "نسیمِ شیراز", subtitle: "بادی اسپلش زنانه · ۲۰۰ میل", description: "سبک و خنک، با لمس گل‌های بهاری و میوه‌های لطیف؛ انتخابی دوست‌داشتنی برای تازه‌کردن حال‌وهوا.", category: "women", categoryLabel: "عطر زنانه", price: 680000, image: "5.jpg", badge: "سبک و روزانه", notes: "شکوفه‌ی پرتقال · گلابی · مشک", volume: "۲۰۰ میلی‌لیتر", rating: "۴٫۶" },
    { id: 6, name: "شمع سپیده‌دم", subtitle: "شمع معطر · ۱۸۰ گرم", description: "موم کرمی، ظرف سرامیکی مینیمال و رایحه‌ای ملایم از گل یاس و چوب؛ برای لحظه‌های آهسته‌تر.", category: "candle-diffuser", categoryLabel: "شمع و دیفیوزر", price: 850000, image: "6.jpg", badge: "ساخته‌ی دست", notes: "یاس · چای سفید · چوب صندل", volume: "۱۸۰ گرم", rating: "۴٫۸" },
    { id: 7, name: "دیفیوزر سروستان", subtitle: "دیفیوزر خوشبوکننده · ۱۰۰ میل", description: "رایحه‌ی سبز و تمیز سرو، آرام‌آرام در فضای خانه پخش می‌شود؛ بی‌نیاز از شعله و مناسب هر گوشه‌ی دنج.", category: "candle-diffuser", categoryLabel: "شمع و دیفیوزر", price: 1150000, image: "7.jpg", badge: "پرفروش", notes: "برگ سرو · چوب خیس · مشک", volume: "۱۰۰ میلی‌لیتر", rating: "۴٫۹" },
    { id: 8, name: "بارانِ خانه", subtitle: "اسپری خوشبوکننده‌ی محیط · ۲۵۰ میل", description: "ترکیبی تمیز و آرام از رایحه‌ی هوای باران‌خورده، برای اتاق خواب، نشیمن و لحظه‌های استراحت.", category: "home", categoryLabel: "خوشبوکننده منزل", price: 980000, image: "8.jpg", badge: "انتخاب خانه", notes: "باران · برگ بنفشه · مشک", volume: "۲۵۰ میلی‌لیتر", rating: "۴٫۷" },
    { id: 9, name: "باکس هدیه‌ی مهر", subtitle: "ست هدیه · عطر و شمع", description: "یک ادوپرفیوم خوش‌پوش در کنار شمعی آرامش‌بخش؛ آماده برای هدیه‌دادن با جعبه‌ای به رنگ روزهای روشن.", category: "gift", categoryLabel: "ست هدیه", price: 3950000, image: "9.jpg", badge: "هدیه‌ی محبوب", notes: "عطر ماه‌چهره · شمع سپیده‌دم", volume: "۲ قلم در جعبه‌ی هدیه", rating: "۵٫۰" },
    { id: 10, name: "رازِ شکوفه", subtitle: "ادوپرفیوم زنانه · ۵۰ میل", description: "لطافت گل‌های سپید با شیرینی ملایم میوه و پایانی گرم؛ زنانه، ظریف و مناسب لحظه‌های خاص.", category: "women", categoryLabel: "عطر زنانه", price: 3280000, image: "10.jpg", badge: "تازه‌رسیده", notes: "شکوفه‌ی پرتقال · هلو · وانیل", volume: "۵۰ میلی‌لیتر", rating: "۴٫۸" },
    { id: 11, name: "سایه‌ی سرو", subtitle: "ادوپرفیوم مردانه · ۷۵ میل", description: "چوب‌های معطر و ادویه‌ی گرم در ترکیبی کلاسیک اما امروزی؛ رایحه‌ای برای روزهایی که با اعتمادبه‌نفس شروع می‌شوند.", category: "men", categoryLabel: "عطر مردانه", price: 2640000, image: "11.jpg", badge: "چوبی و گرم", notes: "سرو · فلفل · چرم نرم", volume: "۷۵ میلی‌لیتر", rating: "۴٫۸" },
    { id: 12, name: "بهار نارنج", subtitle: "ادوپرفیوم زنانه · ۳۰ میل", description: "عصاره‌ای از بهار شیراز در شیشه‌ای کوچک؛ روشن، گل‌دار و سرشار از حس شروع دوباره.", category: "women", categoryLabel: "عطر زنانه", price: 2190000, image: "12.jpg", badge: "الهام از شیراز", notes: "بهارنارنج · یاس · چوب کشمیری", volume: "۳۰ میلی‌لیتر", rating: "۴٫۷" },
    { id: 13, name: "ساحلِ آبی", subtitle: "ادوپرفیوم یونیسکس · ۵۰ میل", description: "مرکبات آفتابی و نسیم خنک دریا کنار هم می‌نشینند؛ عطری روشن که روی پوست هر کسی داستانی تازه می‌سازد.", category: "unisex", categoryLabel: "عطر یونیسکس", price: 2790000, image: "13.jpg", badge: "تازه و دریایی", notes: "برگاموت · نمک دریا · چوب روشن", volume: "۵۰ میلی‌لیتر", rating: "۴٫۸" },
    { id: 14, name: "صبحِ آرام", subtitle: "اسپری پارچه و اتاق · ۲۰۰ میل", description: "برای پرده‌ها، رخت‌خواب و هوای تازه‌ی اول صبح؛ رایحه‌ای سبک با حس تمیزی و برگ‌های سبز.", category: "home", categoryLabel: "خوشبوکننده منزل", price: 790000, image: "14.jpg", badge: "برای خانه", notes: "پنبه‌ی تازه · برگ انجیر · مشک", volume: "۲۰۰ میلی‌لیتر", rating: "۴٫۶" },
    { id: 15, name: "شمعِ کهربا", subtitle: "شمع معطر · ۲۲۰ گرم", description: "شعله‌ای کوچک و رایحه‌ای گرم با مرکبات خشک، دارچین و چوب؛ برای شب‌هایی که خانه را دنج‌تر می‌خواهی.", category: "candle-diffuser", categoryLabel: "شمع و دیفیوزر", price: 1020000, image: "15.jpg", badge: "گرم و دلنشین", notes: "پوست پرتقال · دارچین · کهربا", volume: "۲۲۰ گرم", rating: "۴٫۸" },
    { id: 16, name: "دیفیوزر باغ ایرانی", subtitle: "دیفیوزر سرامیکی · ۱۲۰ میل", description: "ظرفی سرامیکی با الهام از بافت‌های طبیعی و رایحه‌ی آرام برگ زیتون و چوب؛ جزئی کوچک با تأثیری بزرگ.", category: "candle-diffuser", categoryLabel: "شمع و دیفیوزر", price: 1390000, image: "16.jpg", badge: "ظرف سرامیکی", notes: "برگ زیتون · چوب سدر · خزه", volume: "۱۲۰ میلی‌لیتر", rating: "۴٫۹" },
    { id: 17, name: "سرو و مرکبات", subtitle: "اسپری خوشبوکننده‌ی محیط · ۲۵۰ میل", description: "شروعی شاداب از ترنج و مرکبات با پایانی نرم از چوب سدر؛ چند پاف برای تازه‌شدن فضای خانه.", category: "home", categoryLabel: "خوشبوکننده منزل", price: 820000, oldPrice: 980000, image: "17.jpg", badge: "۱۶٪ تخفیف", notes: "ترنج · لیموی شیرازی · چوب سدر", volume: "۲۵۰ میلی‌لیتر", rating: "۴٫۸" },
    { id: 18, name: "ست هدیه‌ی آرامش", subtitle: "ست هدیه · دیفیوزر و عطر", description: "دو رایحه برای دو حال‌وهوا؛ عطری برای همراه‌داشتن و دیفیوزری برای ساختن گوشه‌ای آرام در خانه.", category: "gift", categoryLabel: "ست هدیه", price: 4450000, image: "18.jpg", badge: "هدیه‌ی ویژه", notes: "عطر خاک و خورشید · دیفیوزر سروستان", volume: "۲ قلم در جعبه‌ی هدیه", rating: "۴٫۹" },
    { id: 19, name: "رزِ صورتی", subtitle: "بادی اسپلش زنانه · ۲۰۰ میل", description: "رایحه‌ی گل رز تازه با لطافتی میوه‌ای؛ سبک و دلنشین برای تجدید طراوت در هر ساعت از روز.", category: "women", categoryLabel: "عطر زنانه", price: 720000, image: "19.jpg", badge: "رایحه‌ی گلی", notes: "رز · تمشک · مشک سفید", volume: "۲۰۰ میلی‌لیتر", rating: "۴٫۷" },
    { id: 20, name: "مینیاتورِ سفر", subtitle: "ست عطر سفری · سه رایحه", description: "سه عطر کوچک برای کیف دستی و سفر؛ راهی ساده برای اینکه رایحه‌ی محبوبت همیشه همراهت باشد.", category: "gift", categoryLabel: "ست هدیه", price: 1680000, image: "20.jpg", badge: "همراه سفر", notes: "سه رایحه‌ی منتخب AROMAÉ", volume: "۳ × ۱۰ میلی‌لیتر", rating: "۴٫۸" }
  ];

  const categoryNames = {
    all: "همه‌ی رایحه‌ها، یک‌جا",
    women: "عطرهای زنانه",
    men: "عطرهای مردانه",
    unisex: "رایحه‌های یونیسکس",
    home: "خوشبوکننده‌های خانه",
    "candle-diffuser": "شمع و دیفیوزر",
    gift: "ست‌های هدیه"
  };
  const bestSellerIds = [1, 3, 7, 9];
  const faNumber = new Intl.NumberFormat("fa-IR", { useGrouping: true });
  const moneyDigits = (amount) => faNumber.format(amount).replace(/[٬٫]/g, (mark) => mark === "٬" ? "," : ".");
  const formatPrice = (amount) => `${moneyDigits(amount)} تومان`;
  const productById = new Map(products.map((product) => [product.id, product]));

  const productGrid = document.getElementById("productGrid");
  const bestsellerGrid = document.getElementById("bestsellersGrid");
  const resultCount = document.getElementById("resultCount");
  const activeFilterText = document.getElementById("activeFilterText");
  const emptyState = document.getElementById("emptyState");
  const sortSelect = document.getElementById("sortSelect");
  const searchInput = document.getElementById("searchInput");
  const searchPanel = document.getElementById("searchPanel");
  const searchButton = document.getElementById("searchButton");
  const cartButton = document.getElementById("cartButton");
  const cartDrawer = document.getElementById("cartDrawer");
  const pageOverlay = document.getElementById("pageOverlay");
  const cartItemsElement = document.getElementById("cartItems");
  const cartCountElement = document.getElementById("cartCount");
  const cartEmpty = document.getElementById("cartEmpty");
  const drawerFooter = document.getElementById("drawerFooter");
  const quickView = document.getElementById("quickView");
  const quickViewContent = document.getElementById("quickViewContent");
  const body = document.body;
  let selectedCategory = "all";
  let searchTerm = "";
  let toastTimer;
  let lastFocusedElement = null;
  const wished = new Set();

  let cart = {};
  try {
    const savedCart = JSON.parse(localStorage.getItem("aromae-demo-cart") || "{}");
    if (savedCart && typeof savedCart === "object" && !Array.isArray(savedCart)) {
      cart = Object.fromEntries(Object.entries(savedCart).filter(([id, qty]) => productById.has(Number(id)) && Number.isFinite(qty) && qty > 0).map(([id, qty]) => [id, Math.floor(qty)]));
    }
  } catch (_) {
    cart = {};
  }

  function registerRevealElements(root = document) {
    const items = root.querySelectorAll(".reveal:not([data-reveal-ready])");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    if (!registerRevealElements.observer) {
      registerRevealElements.observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    }
    items.forEach((item) => {
      item.dataset.revealReady = "true";
      registerRevealElements.observer.observe(item);
    });
  }

  function createProductCard(product) {
    const badgeClass = product.oldPrice ? "product-badge badge-sale" : "product-badge";
    const badge = product.badge ? `<span class="${badgeClass}">${product.badge}</span>` : "";
    const oldPrice = product.oldPrice ? `<del class="old-price">${moneyDigits(product.oldPrice)}</del>` : "";
    return `
      <article class="product-card reveal" data-product-id="${product.id}">
        <button class="product-photo" type="button" data-action="view" data-id="${product.id}" aria-label="مشاهده‌ی ${product.name}">
          <img src="${product.image}" alt="${product.name}؛ ${product.subtitle}" loading="lazy" width="1254" height="1254">
          ${badge}
        </button>
        <button class="wish-button" type="button" data-action="wish" data-id="${product.id}" aria-label="افزودن ${product.name} به علاقه‌مندی‌ها" aria-pressed="false"><svg class="icon"><use href="#i-heart"/></svg></button>
        <div class="product-info">
          <div class="product-meta"><span class="product-category">${product.categoryLabel}</span><span class="mini-rating"><svg class="icon"><use href="#i-star"/></svg>${product.rating}</span></div>
          <button class="product-title" type="button" data-action="view" data-id="${product.id}">${product.name}</button>
          <p class="product-description">${product.subtitle}</p>
          <div class="price-row"><strong class="product-price">${moneyDigits(product.price)}<small>تومان</small></strong>${oldPrice}</div>
          <div class="card-actions"><button class="card-details" type="button" data-action="view" data-id="${product.id}">مشاهده</button><button class="card-add" type="button" data-action="add" data-id="${product.id}"><svg class="icon"><use href="#i-bag"/></svg> افزودن به سبد</button></div>
        </div>
      </article>`;
  }

  function renderBestsellers() {
    bestsellerGrid.innerHTML = bestSellerIds.map((id) => createProductCard(productById.get(id))).join("");
    registerRevealElements(bestsellerGrid);
  }

  function filteredProducts() {
    let list = products.filter((product) => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
      const searchable = `${product.name} ${product.subtitle} ${product.description} ${product.categoryLabel} ${product.notes}`.toLocaleLowerCase("fa-IR");
      const queryMatch = !searchTerm || searchable.includes(searchTerm.toLocaleLowerCase("fa-IR"));
      return categoryMatch && queryMatch;
    });
    if (sortSelect.value === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortSelect.value === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortSelect.value === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name, "fa"));
    return list;
  }

  function updateCategoryCounts() {
    document.querySelectorAll("[data-count-key]").forEach((counter) => {
      const key = counter.dataset.countKey;
      const count = key === "all" ? products.length : products.filter((product) => product.category === key).length;
      counter.textContent = `${faNumber.format(count)} محصول`;
    });
  }

  function updateFilterControls() {
    document.querySelectorAll(".filter-chip").forEach((button) => {
      const isSelected = button.dataset.filter === selectedCategory;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });
    document.querySelectorAll(".category-card").forEach((button) => {
      const isSelected = button.dataset.filter === selectedCategory;
      button.classList.toggle("is-active", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });
    activeFilterText.textContent = categoryNames[selectedCategory] || categoryNames.all;
  }

  function renderCollection() {
    const list = filteredProducts();
    productGrid.innerHTML = list.map(createProductCard).join("");
    productGrid.hidden = list.length === 0;
    emptyState.hidden = list.length !== 0;
    resultCount.textContent = `${faNumber.format(list.length)} محصول`;
    registerRevealElements(productGrid);
    updateFilterControls();
  }

  function selectCategory(category, scrollToCollection = false) {
    selectedCategory = Object.hasOwn(categoryNames, category) ? category : "all";
    renderCollection();
    if (scrollToCollection) {
      window.setTimeout(() => document.getElementById("collection").scrollIntoView({ behavior: "smooth", block: "start" }), 40);
    }
  }

  function saveCart() {
    try { localStorage.setItem("aromae-demo-cart", JSON.stringify(cart)); } catch (_) { /* مرور خصوصی یا file:// */ }
  }

  function cartLineCount() {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  }

  function renderCart() {
    const entries = Object.entries(cart).filter(([id, qty]) => productById.has(Number(id)) && qty > 0);
    const totalCount = entries.reduce((sum, [, qty]) => sum + qty, 0);
    const subtotal = entries.reduce((sum, [id, qty]) => sum + productById.get(Number(id)).price * qty, 0);
    cartCountElement.textContent = faNumber.format(totalCount);
    document.getElementById("drawerItemCount").textContent = `(${faNumber.format(totalCount)})`;
    document.getElementById("cartSubtotal").textContent = formatPrice(subtotal);
    cartEmpty.hidden = entries.length !== 0;
    drawerFooter.hidden = entries.length === 0;
    cartItemsElement.hidden = entries.length === 0;
    cartItemsElement.innerHTML = entries.map(([id, qty]) => {
      const product = productById.get(Number(id));
      return `
        <article class="cart-line">
          <img src="${product.image}" alt="${product.name}" loading="lazy" width="78" height="88">
          <div class="cart-line-main"><span class="cart-line-category">${product.categoryLabel}</span><strong class="cart-line-title">${product.name}</strong><span class="cart-line-price">${formatPrice(product.price * qty)}</span>
            <div class="quantity-controls" aria-label="تعداد ${product.name}"><button type="button" data-action="decrease" data-id="${product.id}" aria-label="کم کردن تعداد"><svg class="icon"><use href="#i-minus"/></svg></button><span>${faNumber.format(qty)}</span><button type="button" data-action="increase" data-id="${product.id}" aria-label="زیاد کردن تعداد"><svg class="icon"><use href="#i-plus"/></svg></button></div>
          </div>
          <button class="remove-button" type="button" data-action="remove" data-id="${product.id}" aria-label="حذف ${product.name} از سبد"><svg class="icon"><use href="#i-trash"/></svg></button>
        </article>`;
    }).join("");
    saveCart();
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    document.getElementById("toastMessage").textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3100);
  }

  function updateLockState() {
    const cartOpen = cartDrawer.classList.contains("is-open");
    const modalOpen = !quickView.hidden;
    body.classList.toggle("is-locked", cartOpen || modalOpen);
  }

  function openCart() {
    closeSearch();
    closeMobileMenu();
    lastFocusedElement = document.activeElement;
    pageOverlay.hidden = false;
    cartDrawer.classList.add("is-open");
    cartDrawer.setAttribute("aria-hidden", "false");
    renderCart();
    updateLockState();
    window.setTimeout(() => cartDrawer.focus(), 30);
  }

  function closeCart() {
    cartDrawer.classList.remove("is-open");
    cartDrawer.setAttribute("aria-hidden", "true");
    pageOverlay.hidden = true;
    updateLockState();
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
  }

  function openQuickView(id) {
    const product = productById.get(Number(id));
    if (!product) return;
    closeSearch();
    lastFocusedElement = document.activeElement;
    quickViewContent.innerHTML = `
      <div class="quick-content">
        <div class="quick-image"><img src="${product.image}" alt="${product.name}؛ ${product.subtitle}" width="1254" height="1254"></div>
        <div class="quick-details"><span class="quick-category">${product.categoryLabel} · ${product.volume}</span><h2 id="quickViewTitle">${product.name}</h2><p>${product.description}</p><div class="quick-notes"><strong>نت‌های رایحه:</strong> ${product.notes}</div><div class="quick-price">${formatPrice(product.price)}</div><button class="button button-dark" type="button" data-action="add" data-id="${product.id}">افزودن به سبد خرید <svg class="icon"><use href="#i-bag"/></svg></button></div>
      </div>`;
    quickView.hidden = false;
    updateLockState();
    window.setTimeout(() => quickView.querySelector(".quick-modal").focus(), 20);
  }

  function closeQuickView() {
    quickView.hidden = true;
    updateLockState();
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
  }

  function closeSearch() {
    searchPanel.hidden = true;
    searchButton.setAttribute("aria-expanded", "false");
  }

  function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.hidden = true;
    document.getElementById("menuButton").setAttribute("aria-expanded", "false");
  }

  function toggleSearch() {
    closeMobileMenu();
    const willOpen = searchPanel.hidden;
    searchPanel.hidden = !willOpen;
    searchButton.setAttribute("aria-expanded", String(willOpen));
    if (willOpen) window.setTimeout(() => searchInput.focus(), 20);
  }

  function addToCart(id) {
    const product = productById.get(Number(id));
    if (!product) return;
    cart[id] = (cart[id] || 0) + 1;
    renderCart();
    showToast(`${product.name} به سبد خرید اضافه شد.`);
  }

  function handleAction(action, id, button) {
    const numericId = Number(id);
    if (action === "add") addToCart(numericId);
    if (action === "view") openQuickView(numericId);
    if (action === "close-cart") closeCart();
    if (action === "close-modal") closeQuickView();
    if (action === "increase" && productById.has(numericId)) { cart[numericId] = (cart[numericId] || 0) + 1; renderCart(); }
    if (action === "decrease" && productById.has(numericId)) {
      cart[numericId] = (cart[numericId] || 0) - 1;
      if (cart[numericId] <= 0) delete cart[numericId];
      renderCart();
    }
    if (action === "remove" && productById.has(numericId)) {
      const product = productById.get(numericId);
      delete cart[numericId];
      renderCart();
      showToast(`${product.name} از سبد خرید حذف شد.`);
    }
    if (action === "wish" && productById.has(numericId)) {
      if (wished.has(numericId)) wished.delete(numericId); else wished.add(numericId);
      button.classList.toggle("is-wished", wished.has(numericId));
      button.setAttribute("aria-pressed", String(wished.has(numericId)));
      showToast(wished.has(numericId) ? "به علاقه‌مندی‌ها اضافه شد." : "از علاقه‌مندی‌ها برداشته شد.");
    }
  }

  document.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      event.preventDefault();
      const shouldScroll = filterButton.classList.contains("category-card") || filterButton.hasAttribute("data-scroll-collection") || filterButton.closest(".empty-state");
      selectCategory(filterButton.dataset.filter, Boolean(shouldScroll));
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      event.preventDefault();
      handleAction(actionButton.dataset.action, actionButton.dataset.id, actionButton);
    }
  });

  document.getElementById("searchButton").addEventListener("click", toggleSearch);
  document.getElementById("closeSearch").addEventListener("click", closeSearch);
  document.getElementById("cartButton").addEventListener("click", openCart);
  document.getElementById("pageOverlay").addEventListener("click", closeCart);
  document.getElementById("menuButton").addEventListener("click", () => {
    closeSearch();
    const menu = document.getElementById("mobileMenu");
    const willOpen = menu.hidden;
    menu.hidden = !willOpen;
    document.getElementById("menuButton").setAttribute("aria-expanded", String(willOpen));
  });
  document.getElementById("mobileMenu").addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMobileMenu();
  });
  document.getElementById("sortSelect").addEventListener("change", renderCollection);
  document.getElementById("searchInput").addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    if (searchTerm && selectedCategory !== "all") selectedCategory = "all";
    renderCollection();
  });
  document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    closeSearch();
    document.getElementById("collection").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("checkoutButton").addEventListener("click", () => {
    closeCart();
    showToast("این یک دمو است؛ ثبت سفارش و پرداخت واقعی فعال نیست.");
  });
  document.getElementById("quickView").addEventListener("click", (event) => {
    if (event.target === quickView) closeQuickView();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!quickView.hidden) closeQuickView();
      else if (cartDrawer.classList.contains("is-open")) closeCart();
      else if (!searchPanel.hidden) closeSearch();
      else closeMobileMenu();
    }
  });
  document.getElementById("newsletterForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.getElementById("newsletterMessage");
    message.textContent = "ممنون از همراهی‌ات؛ عضویت نمایشی انجام شد.";
    message.style.color = "#d7bd8f";
    event.currentTarget.reset();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMobileMenu();
  });

  updateCategoryCounts();
  renderBestsellers();
  renderCollection();
  renderCart();
  registerRevealElements();
})();
