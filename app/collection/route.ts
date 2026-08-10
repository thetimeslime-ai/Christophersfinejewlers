const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Collection — Christopher's Fine Jewelers</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            gold: {
              50:  '#fdf9ee',
              100: '#f7edcc',
              200: '#eed98a',
              300: '#e5c456',
              400: '#d4a82a',
              500: '#A16207',
              600: '#8a5205',
              700: '#8a6218',
              800: '#6b4c14',
              900: '#4d370f',
            },
            cream: '#FAF8F3',
            charcoal: '#1a1a1a',
          },
          fontFamily: {
            serif: ['Cormorant Garamond', 'Georgia', 'serif'],
            sans:  ['Montserrat', 'system-ui', 'sans-serif'],
          },
          letterSpacing: {
            display: '-0.03em',
            wide:    '0.18em',
            widest:  '0.28em',
          },
        },
      },
    };
  </script>

  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { background: #FAF8F3; }

    .divider {
      width: 48px;
      height: 1px;
      background: linear-gradient(90deg, transparent, #A16207, transparent);
    }

    .nav-link {
      position: relative;
      letter-spacing: 0.14em;
      font-size: 0.7rem;
      text-transform: uppercase;
      color: #1a1a1a;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      transition: color 0.25s ease;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 1px;
      background: #A16207;
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .nav-link:hover { color: #A16207; }
    .nav-link:hover::after { width: 100%; }

    .product-card { transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
    .product-card:hover { transform: translateY(-6px); }
    .product-card:hover .card-img { transform: scale(1.04); }
    .card-img { transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }

    .btn-gold {
      display: inline-block;
      padding: 0.75rem 2rem;
      background: #A16207;
      color: #FAF8F3;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      text-decoration: none;
      transition: background 0.25s ease, transform 0.2s ease;
    }
    .btn-gold:hover { background: #8a5205; transform: translateY(-1px); }

    .btn-outline {
      display: inline-block;
      padding: 0.75rem 2rem;
      border: 1px solid #A16207;
      color: #A16207;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      text-decoration: none;
      transition: background 0.25s ease, color 0.25s ease;
    }
    .btn-outline:hover { background: #A16207; color: #FAF8F3; }

    /* Filter tabs */
    .filter-btn {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.65rem;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      padding: 0.5rem 1.5rem;
      border: 1px solid rgba(161,98,7,0.3);
      color: #A16207;
      background: transparent;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .filter-btn:hover, .filter-btn.active {
      background: #A16207;
      color: #FAF8F3;
      border-color: #A16207;
    }

    /* Fade-in animation */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.7s ease both; }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }

    /* Scroll reveal */
    .sr { opacity: 0; transform: translateY(20px); transition: opacity 0.65s ease, transform 0.65s ease; }
    .sr.visible { opacity: 1; transform: none; }
    .sr-d1 { transition-delay: 0.05s; }
    .sr-d2 { transition-delay: 0.12s; }
    .sr-d3 { transition-delay: 0.19s; }
    .sr-d4 { transition-delay: 0.26s; }

    /* Hidden card */
    .card-hidden { display: none; }

    /* Mobile menu */
    #mobile-menu {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease;
    }
    #mobile-menu.menu-open {
      max-height: 360px;
      opacity: 1;
    }

    /* Collection hero */
    .collection-hero {
      background: linear-gradient(135deg, #1a1a1a 0%, #2a1f0a 100%);
      position: relative;
      overflow: hidden;
    }
    .collection-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(161,98,7,0.12) 0%, transparent 70%);
    }

    /* Lightbox */
    #lightbox {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 200;
      background: rgba(0,0,0,0.92);
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    #lightbox.open { display: flex; }
    #lightbox img {
      max-width: 90vw;
      max-height: 85vh;
      object-fit: contain;
      cursor: default;
    }
    #lightbox-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.6);
      cursor: pointer;
      background: none;
      border: none;
      padding: 0.5rem 1rem;
      border: 1px solid rgba(255,255,255,0.2);
      transition: color 0.2s, border-color 0.2s;
    }
    #lightbox-close:hover { color: #E5C456; border-color: #E5C456; }
    #lightbox-info {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
    #lightbox-category {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.6rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: #E5C456;
      margin-bottom: 0.25rem;
    }
    #lightbox-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.4rem;
      font-weight: 300;
      color: rgba(255,255,255,0.9);
    }
  </style>
</head>
<body class="font-sans text-charcoal">

  <!-- ═══════════════════════════════ NAV ═══════════════════════════════ -->
  <header id="top" class="fixed top-0 left-0 right-0 z-50" style="background: rgba(250,248,243,0.92); backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); border-bottom: 1px solid rgba(255,255,255,0.6); box-shadow: 0 4px 32px rgba(0,0,0,0.08), inset 0 -0.5px 0 rgba(161,98,7,0.2);">
    <div class="max-w-7xl mx-auto px-8 flex items-center justify-between" style="height: 72px;">
      <!-- Left nav -->
      <nav class="hidden md:flex items-center gap-10">
        <a href="/" class="nav-link">← Home</a>
        <a href="/collection" class="nav-link" style="color:#A16207;">Collection</a>
      </nav>

      <!-- Logo -->
      <a href="/" class="flex-shrink-0 mx-auto md:mx-0">
        <img src="/brand-assets/christopher_logo_transparent_gold.png" alt="Christopher's Fine Jewelers" style="height: 52px; width: auto; filter: brightness(1.15) contrast(1.1) drop-shadow(0 1px 6px rgba(161,98,7,0.22));" />
      </a>

      <!-- Right nav -->
      <nav class="hidden md:flex items-center gap-10">
        <a href="/faq" class="nav-link">FAQs</a>
        <a href="/#services" class="nav-link">Services</a>
        <a href="/#testimonials" class="nav-link">Reviews</a>
        <a href="/#contact" class="nav-link">Contact</a>
      </nav>

      <!-- Mobile menu button -->
      <button class="md:hidden p-2 -mr-2 focus-visible:outline-none" aria-label="Menu" onclick="toggleMenu()">
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
          <line x1="0" y1="1" x2="22" y2="1" stroke="#A16207" stroke-width="1.5"/>
          <line x1="0" y1="8" x2="22" y2="8" stroke="#A16207" stroke-width="1.5"/>
          <line x1="0" y1="15" x2="22" y2="15" stroke="#A16207" stroke-width="1.5"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="md:hidden px-4 pb-6 pt-2 flex flex-col gap-5" style="border-top: 1px solid rgba(161,98,7,0.12);" aria-hidden="true">
      <a href="/" class="nav-link">← Home</a>
      <a href="/collection" class="nav-link" style="color:#A16207;">Collection</a>
      <a href="/faq" class="nav-link">FAQs</a>
      <a href="/#services" class="nav-link">Services</a>
      <a href="/#testimonials" class="nav-link">Reviews</a>
      <a href="/#contact" class="nav-link">Contact</a>
    </div>
  </header>

  <!-- ════════════════════════ COLLECTION HERO ════════════════════════ -->
  <section class="collection-hero" style="padding-top: 72px; padding-bottom: 80px;">
    <div class="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-4 text-center">
      <p class="fade-up font-sans text-gold-300 mb-4" style="font-size:0.65rem; letter-spacing:0.32em; text-transform:uppercase;">Christopher's Fine Jewelers</p>
      <h1 class="fade-up delay-1 font-serif text-white" style="font-size: clamp(2.8rem, 6vw, 5rem); font-weight:300; letter-spacing:-0.02em; line-height:1.1; margin-bottom: 1.25rem;">
        The Collection
      </h1>
      <div class="fade-up delay-2 divider mx-auto" style="background: linear-gradient(90deg, transparent, #E5C456, transparent); margin-bottom: 1.5rem;"></div>
      <p class="fade-up delay-3 font-serif text-white/60" style="font-size: clamp(1rem, 1.8vw, 1.2rem); font-weight:300; font-style:italic; max-width: 480px; margin: 0 auto; line-height: 1.7;">
        Each piece handcrafted with intention — a wearable legacy built to be passed down.
      </p>
    </div>
  </section>

  <!-- ═══════════════════════ FILTER + GRID ════════════════════════════ -->
  <section class="py-20 px-8">
    <div class="max-w-7xl mx-auto">

      <!-- Filter tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-16 sr visible">
        <button class="filter-btn active" onclick="filterCards('all', this)">All Pieces</button>
        <button class="filter-btn" onclick="filterCards('rings', this)">Rings</button>
        <button class="filter-btn" onclick="filterCards('necklaces', this)">Necklaces</button>
        <button class="filter-btn" onclick="filterCards('earrings', this)">Earrings</button>
        <button class="filter-btn" onclick="filterCards('brooches', this)">Brooches</button>
      </div>

      <!-- Product grid -->
      <div id="collection-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        <!-- Rings -->
        <div class="sr sr-d1 product-card group cursor-pointer" data-category="rings" onclick="openLightbox('/product-images/Queen Ring.webp','Rings','The Queen Ring')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/Queen Ring.webp" alt="The Queen Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">The Queen Ring</h3>
        </div>

        <div class="sr sr-d2 product-card group cursor-pointer" data-category="rings" onclick="openLightbox('/product-images/big diamond ring.webp','Rings','Heirloom Diamond Ring')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/big diamond ring.webp" alt="Heirloom Diamond Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Heirloom Diamond Ring</h3>
        </div>

        <div class="sr sr-d3 product-card group cursor-pointer" data-category="rings" onclick="openLightbox('/product-images/Blue Ring.webp','Rings','Sapphire Wave Ring')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/Blue Ring.webp" alt="Sapphire Wave Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Sapphire Wave Ring</h3>
        </div>

        <div class="sr sr-d4 product-card group cursor-pointer" data-category="rings" onclick="openLightbox('/product-images/yellow diamond ring.webp','Rings','Canary Diamond Band')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/yellow diamond ring.webp" alt="Canary Diamond Band" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Canary Diamond Band</h3>
        </div>

        <div class="sr sr-d1 product-card group cursor-pointer" data-category="rings" onclick="openLightbox('/product-images/DIamond and Blue Ring.webp','Rings','Diamond & Sapphire Ring')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/DIamond and Blue Ring.webp" alt="Diamond and Blue Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Diamond & Sapphire Ring</h3>
        </div>

        <div class="sr sr-d2 product-card group cursor-pointer" data-category="rings" onclick="openLightbox('/product-images/cool alien ring.webp','Rings','Sculptural Statement Ring')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/cool alien ring.webp" alt="Sculptural Statement Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Sculptural Statement Ring</h3>
        </div>

        <div class="sr sr-d3 product-card group cursor-pointer" data-category="rings" onclick="openLightbox('/product-images/green orb ring.webp','Rings','Green Tourmaline Orb Ring')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/green orb ring.webp" alt="Green Tourmaline Orb Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Green Tourmaline Orb Ring</h3>
        </div>

        <div class="sr sr-d4 product-card group cursor-pointer" data-category="rings" onclick="openLightbox('/product-images/mama wedding ring.webp','Rings','Vintage Wedding Band')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/mama wedding ring.webp" alt="Vintage Wedding Band" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Vintage Wedding Band</h3>
        </div>

        <div class="sr sr-d1 product-card group cursor-pointer" data-category="rings" onclick="openLightbox('/product-images/mama anniversary ring.webp','Rings','Anniversary Diamond Ring')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/mama anniversary ring.webp" alt="Anniversary Diamond Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Anniversary Diamond Ring</h3>
        </div>

        <div class="sr sr-d3 product-card group cursor-pointer" data-category="rings" onclick="openLightbox('/product-images/herbalife ring.webp','Rings','Gold Crest Ring')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/herbalife ring.webp" alt="Gold Crest Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Gold Crest Ring</h3>
        </div>

        <!-- Necklaces -->
        <div class="sr sr-d4 product-card group cursor-pointer" data-category="necklaces" onclick="openLightbox(\"/product-images/Mama's necklace.webp\",'Necklaces','Beginnings Necklace')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/Mama's necklace.webp" alt="Beginnings Necklace" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Necklaces</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Beginnings Necklace</h3>
        </div>

        <div class="sr sr-d1 product-card group cursor-pointer" data-category="necklaces" onclick="openLightbox('/product-images/emerald necklace.webp','Necklaces','Emerald & Diamond Pendant')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/emerald necklace.webp" alt="Emerald & Diamond Pendant" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Necklaces</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Emerald & Diamond Pendant</h3>
        </div>

        <div class="sr sr-d2 product-card group cursor-pointer" data-category="necklaces" onclick="openLightbox(\"/product-images/mama's necklace 2.webp\",'Necklaces','Cascade Diamond Necklace')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/mama's necklace 2.webp" alt="Cascade Diamond Necklace" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Necklaces</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Cascade Diamond Necklace</h3>
        </div>

        <div class="sr sr-d3 product-card group cursor-pointer" data-category="necklaces" onclick="openLightbox('/product-images/colorful necklace.webp','Necklaces','Rainbow Gemstone Necklace')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/colorful necklace.webp" alt="Rainbow Gemstone Necklace" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Necklaces</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Rainbow Gemstone Necklace</h3>
        </div>

        <!-- Earrings -->
        <div class="sr sr-d4 product-card group cursor-pointer" data-category="earrings" onclick="openLightbox('/product-images/AI Rainbow earrings.JPG','Earrings','Boulder Opal Drops')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/AI Rainbow earrings.JPG" alt="Boulder Opal Drops" class="card-img w-full h-full object-contain" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Earrings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Boulder Opal Drops</h3>
        </div>

        <div class="sr sr-d1 product-card group cursor-pointer" data-category="earrings" onclick="openLightbox('/product-images/Emerald droop earings.webp','Earrings','Emerald Drop Earrings')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/Emerald droop earings.webp" alt="Emerald Drop Earrings" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Earrings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Emerald Drop Earrings</h3>
        </div>

        <div class="sr sr-d2 product-card group cursor-pointer" data-category="earrings" onclick="openLightbox('/product-images/purple droop earings.webp','Earrings','Amethyst Drop Earrings')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/purple droop earings.webp" alt="Amethyst Drop Earrings" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Earrings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Amethyst Drop Earrings</h3>
        </div>

        <!-- Brooches -->
        <div class="sr sr-d3 product-card group cursor-pointer" data-category="brooches" onclick="openLightbox('/product-images/gold ram.webp','Brooches','Gold Ram Brooch')">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/gold ram.webp" alt="Gold Ram Brooch" class="card-img w-full h-full object-cover object-top" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.63rem; letter-spacing:0.22em; text-transform:uppercase;">Brooches</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.1rem; font-weight:400;">Gold Ram Brooch</h3>
        </div>

      </div>

      <!-- CTA -->
      <div class="text-center mt-20 sr">
        <div class="divider mx-auto mb-10"></div>
        <p class="font-serif text-charcoal/60 mb-6" style="font-size:1.1rem; font-weight:300; font-style:italic;">Interested in a custom piece or have a question about our work?</p>
        <a href="/#contact" class="btn-gold">Book a Consultation</a>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════ LIGHTBOX ══════════════════════════════ -->
  <div id="lightbox" onclick="closeLightbox(event)">
    <button id="lightbox-close" onclick="closeLightbox()">Close &times;</button>
    <img id="lightbox-img" src="" alt="" />
    <div id="lightbox-info">
      <p id="lightbox-category"></p>
      <p id="lightbox-name"></p>
    </div>
  </div>

  <!-- ════════════════════════════ FOOTER ══════════════════════════════ -->
  <footer style="background: #1a1a1a; padding: 48px 32px; text-align: center;">
    <img src="/brand-assets/christopher_logo_transparent_gold.png" alt="Christopher's Fine Jewelers" style="height: 44px; width: auto; opacity: 0.8; margin-bottom: 1.5rem; filter: brightness(1.1);" />
    <div class="divider mx-auto mb-5" style="background: linear-gradient(90deg, transparent, rgba(229,196,86,0.5), transparent);"></div>
    <p class="font-sans text-white/30" style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;">Creating Wearable Art Since 1979</p>
  </footer>

  <script>
    // Mobile menu
    function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('menu-open');
    }

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.sr').forEach(el => observer.observe(el));

    // Category filter
    function filterCards(category, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('#collection-grid .product-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Lightbox
    function openLightbox(src, category, name) {
      document.getElementById('lightbox-img').src = src;
      document.getElementById('lightbox-img').alt = name;
      document.getElementById('lightbox-category').textContent = category;
      document.getElementById('lightbox-name').textContent = name;
      document.getElementById('lightbox').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox(event) {
      if (!event || event.target === document.getElementById('lightbox') || event.currentTarget === document.getElementById('lightbox-close')) {
        document.getElementById('lightbox').classList.remove('open');
        document.body.style.overflow = '';
      }
    }

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  </script>
</body>
</html>`;

export async function GET() {
  return new Response(HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
