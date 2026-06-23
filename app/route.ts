const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher's Fine Jewelers</title>
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
          lineHeight: {
            body: '1.75',
          },
        },
      },
    };
  </script>

  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { background: #FAF8F3; }

    /* Gold shimmer divider */
    .divider {
      width: 48px;
      height: 1px;
      background: linear-gradient(90deg, transparent, #A16207, transparent);
    }

    /* Grain texture overlay */
    .grain::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 1;
    }

    /* Nav link hover */
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

    /* Product card hover */
    .product-card { transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
    .product-card:hover { transform: translateY(-6px); }
    .product-card:hover .card-img { transform: scale(1.04); }
    .card-img { transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }

    /* CTA button */
    .btn-gold {
      display: inline-block;
      padding: 14px 40px;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #FAF8F3;
      background: #A16207;
      border: 1px solid #A16207;
      transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
      box-shadow: 0 4px 24px rgba(161,98,7,0.18), 0 1px 4px rgba(161,98,7,0.1);
    }
    .btn-gold:hover {
      background: transparent;
      color: #A16207;
      box-shadow: 0 6px 32px rgba(161,98,7,0.22);
    }
    .btn-gold:focus-visible { outline: 2px solid #A16207; outline-offset: 3px; }
    .btn-gold:active { transform: translateY(1px); }

    .btn-outline {
      display: inline-block;
      padding: 13px 38px;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #A16207;
      border: 1px solid #A16207;
      transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
    }
    .btn-outline:hover {
      background: #A16207;
      color: #FAF8F3;
      box-shadow: 0 6px 32px rgba(161,98,7,0.22);
    }
    .btn-outline:focus-visible { outline: 2px solid #A16207; outline-offset: 3px; }
    .btn-outline:active { transform: translateY(1px); }

    /* Hero parallax shimmer */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.9s cubic-bezier(0.4, 0, 0.2, 1) both; }
    .delay-1 { animation-delay: 0.15s; }
    .delay-2 { animation-delay: 0.3s; }
    .delay-3 { animation-delay: 0.45s; }

    /* Section heading underline */
    .section-heading {
      display: inline-block;
      position: relative;
    }

    /* Contact input */
    .form-input {
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid #d6c8a8;
      padding: 10px 0;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.82rem;
      color: #1a1a1a;
      outline: none;
      transition: border-color 0.25s ease;
    }
    .form-input::placeholder { color: #a08f70; }
    .form-input:focus { border-bottom-color: #A16207; }

    /* Scroll indicator */
    @keyframes scrollBounce {
      0%, 100% { transform: translateY(0); opacity: 1; }
      50%       { transform: translateY(6px); opacity: 0.4; }
    }
    .scroll-indicator { animation: scrollBounce 1.8s ease-in-out infinite; }

    /* ── Testimonial columns ── */
    @keyframes scrollUp {
      0%   { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
    .t-track { display: flex; flex-direction: column; gap: 24px; padding-bottom: 24px; }
    .t-col-1 .t-track { animation: scrollUp 45s linear infinite; }
    .t-col-2 .t-track { animation: scrollUp 55s linear infinite; }
    .t-col-3 .t-track { animation: scrollUp 50s linear infinite; }
    .t-card {
      padding: 32px;
      background: #ffffff;
      border: 1px solid rgba(161,98,7,0.14);
      border-radius: 20px;
      box-shadow: 0 4px 24px rgba(161,98,7,0.07), 0 1px 4px rgba(0,0,0,0.04);
      width: 300px;
      flex-shrink: 0;
    }
    .t-fade-mask {
      -webkit-mask-image: linear-gradient(to bottom, transparent, black 18%, black 82%, transparent);
      mask-image: linear-gradient(to bottom, transparent, black 18%, black 82%, transparent);
    }

    /* ── Scroll reveal ── */
    .sr, .sr-left, .sr-right {
      opacity: 1;
      transform: none;
    }
    .js-sr .sr {
      opacity: 0;
      transform: translateY(32px);
      transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .js-sr .sr-left {
      opacity: 0;
      transform: translateX(-40px);
      transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .js-sr .sr-right {
      opacity: 0;
      transform: translateX(40px);
      transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .js-sr .sr.visible, .js-sr .sr-left.visible, .js-sr .sr-right.visible {
      opacity: 1;
      transform: none;
    }
    .sr-d1 { transition-delay: 0.1s; }
    .sr-d2 { transition-delay: 0.2s; }
    .sr-d3 { transition-delay: 0.3s; }
    .sr-d4 { transition-delay: 0.4s; }
    .sr-d5 { transition-delay: 0.5s; }
    .sr-d6 { transition-delay: 0.6s; }

    /* ── Mobile responsiveness ── */
    html, body { overflow-x: hidden; }

    @media (max-width: 767px) {
      /* ── Spacing & layout ── */
      .px-8 { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
      #collection { padding-left: 1.25rem; padding-right: 1.25rem; }
      .section-py { padding-top: 56px !important; padding-bottom: 56px !important; }
      .intro-strip { padding-top: 2.5rem !important; padding-bottom: 2.5rem !important; }
      .site-footer { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }

      /* ── Hero image: rotate 90° to fill portrait viewport ── */
      .hero-bg-img {
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        width: 100vh !important;
        height: 100vw !important;
        max-width: none !important;
        transform: translate(-50%, -50%) rotate(90deg) !important;
        object-fit: cover !important;
        object-position: center center !important;
      }

      /* ── Hero text ── */
      .hero-tagline { color: rgba(255,255,255,0.9) !important; text-shadow: 0 1px 8px rgba(0,0,0,0.5); font-size: 0.72rem !important; }
      .hero-logo { width: 140px !important; margin-bottom: 0.6rem !important; }
      .hero-h1 { font-size: clamp(2.1rem, 9vw, 4rem) !important; line-height: 1.08 !important; }
      .hero-sub { max-width: 100% !important; font-size: 0.87rem !important; }

      /* ── Hero CTA buttons: full-width stacked for easy tapping ── */
      .hero-btns { flex-direction: column; gap: 0.75rem; }
      .hero-btns a { text-align: center; display: block; width: 100%; box-sizing: border-box; }

      /* ── Nav: smaller height + logo on mobile ── */
      header .max-w-7xl { height: 52px !important; }
      .grain { padding-top: 52px !important; }
      header .flex-shrink-0 img { height: 38px !important; }

      /* ── About section: hide decorative accent line that overflows on mobile ── */
      .about-grid { gap: 2rem !important; }
      .about-accent-line { display: none !important; }

      /* ── Testimonials ── */
      .t-card { width: min(300px, 88vw); padding: 24px 20px; }

      /* ── Service cards ── */
      .service-card { padding: 28px 20px !important; }

      /* ── Form inputs: larger tap targets ── */
      .form-input { padding: 14px 0; font-size: 1rem; }

      /* ── Featured piece image: slightly less tall on small phones ── */
      @media (max-height: 700px) {
        .sr-right[style*="aspect-ratio: 1/1"] { aspect-ratio: 4/3 !important; }
      }
    }

    /* ── Mobile collection: show/hide extra cards ── */
    .mobile-show-more-btn { display: none; }
    @media (max-width: 767px) {
      .mobile-hidden-card { display: none; }
      .mobile-hidden-card.card-visible { display: block; }
      .mobile-show-more-btn { display: block; }
    }

    /* Disable stuck hover states on touch devices */
    @media (hover: none) {
      .product-card:hover            { transform: none !important; }
      .product-card:hover .card-img  { transform: none !important; }
      .service-card:hover            { transform: none !important; }
    }

  </style>
</head>
<body class="font-sans text-charcoal">

  <!-- ═══════════════════════════════ NAV ═══════════════════════════════ -->
  <header id="top" class="fixed top-0 left-0 right-0 z-50" style="background: rgba(250,248,243,0.92); backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); border-bottom: 1px solid rgba(255,255,255,0.6); box-shadow: 0 4px 32px rgba(0,0,0,0.08), inset 0 -0.5px 0 rgba(161,98,7,0.2);">
    <div class="max-w-7xl mx-auto px-8 flex items-center justify-between" style="height: 72px;">
      <!-- Left nav -->
      <nav class="hidden md:flex items-center gap-10">
        <a href="/collection" class="nav-link">Collection</a>
        <a href="#about" class="nav-link">Our Story</a>
      </nav>

      <!-- Logo -->
      <a href="#top" class="flex-shrink-0 mx-auto md:mx-0">
        <img src="/brand-assets/christopher_logo_transparent_gold.png" alt="Christopher's Fine Jewelers" style="height: 52px; width: auto; filter: brightness(1.15) contrast(1.1) drop-shadow(0 1px 6px rgba(161,98,7,0.22));" />
      </a>

      <!-- Right nav -->
      <nav class="hidden md:flex items-center gap-10">
        <a href="#services" class="nav-link">Services</a>
        <a href="#testimonials" class="nav-link">Reviews</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>

    </div>
  </header>

  <!-- ═══════════════════════════════ HERO ══════════════════════════════ -->
  <section class="relative overflow-hidden grain" style="padding-top: 72px; min-height: 100vh; display: flex; align-items: center;">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <picture style="width:100%; height:100%; display:block;">
        <source media="(max-width: 767px)" srcset="/product-images/mama%20anniversary%20ring.webp" />
        <img src="/product-images/Mama's necklace.webp" alt="" aria-hidden="true" class="hero-bg-img"
             style="width:100%; height:100%; object-fit:cover; object-position: center top;" />
      </picture>
      <!-- Dark overlay -->
      <div style="position:absolute; inset:0; background: linear-gradient(135deg, rgba(26,26,26,0.78) 0%, rgba(26,26,26,0.45) 60%, rgba(161,98,7,0.08) 100%);"></div>
      <!-- Radial glow -->
      <div style="position:absolute; inset:0; background: radial-gradient(ellipse 80% 60% at 20% 50%, rgba(161,98,7,0.07) 0%, transparent 70%);"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-8 w-full">
      <div class="max-w-xl">
        <img class="fade-up hero-logo" src="/brand-assets/christopher_logo_transparent_gold.png" alt="Christopher's Fine Jewelers"
             style="width:200px; height:auto; margin-bottom:1.5rem; filter: drop-shadow(0 0 20px rgba(229,196,86,0.4)) drop-shadow(0 2px 10px rgba(0,0,0,0.5));" />
        <p class="fade-up text-gold-400 font-sans mb-6 hero-tagline" style="font-size:0.68rem; letter-spacing:0.28em; text-transform:uppercase;">Creating wearable art since 1979</p>
        <h1 class="hero-h1 fade-up delay-1 font-serif text-white leading-none mb-6" style="font-size: clamp(3rem, 6vw, 5.5rem); font-weight:300; letter-spacing:-0.02em; line-height: 1.05;">
          Crafted for<br /><em style="font-style:italic; color:#E5C456;">Every Moment</em><br />That Matters
        </h1>
        <p class="hero-sub fade-up delay-2 font-sans text-white/70 mb-10" style="font-size:0.9rem; line-height:1.75; max-width: 380px;">
          Heirloom-quality fine jewelry — designed with intention, crafted with mastery, and worn for a lifetime.
        </p>
        <div class="hero-btns fade-up delay-3 flex flex-wrap gap-4">
          <a href="/collection" class="btn-gold">View Collection</a>
          <a href="#contact" class="btn-outline" style="color:#fff; border-color: rgba(255,255,255,0.45);" onmouseenter="this.style.background='rgba(255,255,255,0.1)'; this.style.color='#fff';" onmouseleave="this.style.background='transparent'; this.style.color='#fff';">
            Book a Consultation
          </a>
        </div>
      </div>
    </div>

  </section>

  <!-- ══════════════════════════ INTRO STRIP ════════════════════════════ -->
  <section class="intro-strip py-16 text-center" style="background: #1a1a1a;">
    <div class="max-w-3xl mx-auto px-8">
      <p class="sr font-serif text-white/80" style="font-size: clamp(1.15rem, 2.2vw, 1.5rem); font-weight:300; font-style:italic; line-height:1.7; letter-spacing:0.01em;">
        "Every piece we create carries a story — of love, of legacy, and of the master's hand behind it."
      </p>
      <div class="sr sr-d2 divider mx-auto mt-6"></div>
    </div>
  </section>

  <!-- ════════════════════════════ COLLECTION ══════════════════════════ -->
  <section id="collection" class="section-py py-24 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="sr font-sans text-gold-500 mb-3" style="font-size:0.68rem; letter-spacing:0.28em; text-transform:uppercase;">Handcrafted Pieces</p>
        <h2 class="sr sr-d1 font-serif text-charcoal" style="font-size: clamp(2rem, 4vw, 3.2rem); font-weight:300; letter-spacing:-0.02em;">The Collection</h2>
        <div class="sr sr-d2 divider mx-auto mt-5"></div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Card 1 -->
        <div class="sr sr-d1 product-card group cursor-pointer">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/Queen Ring.webp" alt="Queen Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.65rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.15rem; font-weight:400;">The Queen Ring</h3>
        </div>

        <!-- Card 2 -->
        <div class="sr sr-d2 product-card group cursor-pointer">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/big diamond ring.webp" alt="Diamond Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.65rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.15rem; font-weight:400;">Heirloom Diamond Ring</h3>
        </div>

        <!-- Card 3 -->
        <div class="sr sr-d3 product-card group cursor-pointer">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/emerald necklace.webp" alt="Emerald Necklace" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.65rem; letter-spacing:0.22em; text-transform:uppercase;">Necklaces</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.15rem; font-weight:400;">Emerald & Diamond Pendant</h3>
        </div>

        <!-- Card 4 -->
        <div class="sr sr-d1 product-card group cursor-pointer mobile-hidden-card">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/Colorful earrings.webp" alt="Opal Earrings" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.65rem; letter-spacing:0.22em; text-transform:uppercase;">Earrings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.15rem; font-weight:400;">Boulder Opal Drops</h3>
        </div>

        <!-- Card 5 -->
        <div class="sr sr-d2 product-card group cursor-pointer mobile-hidden-card">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/Blue Ring.webp" alt="Sapphire Ring" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.65rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.15rem; font-weight:400;">Sapphire Wave Ring</h3>
        </div>

        <!-- Card 6 -->
        <div class="sr sr-d3 product-card group cursor-pointer mobile-hidden-card">
          <div class="overflow-hidden mb-4" style="aspect-ratio: 4/5; background:#f0ebe0;">
            <img src="/product-images/yellow diamond ring.webp" alt="Yellow Diamond Band" class="card-img w-full h-full object-cover" loading="lazy" />
          </div>
          <p class="font-sans text-gold-500 mb-1" style="font-size:0.65rem; letter-spacing:0.22em; text-transform:uppercase;">Rings</p>
          <h3 class="font-serif text-charcoal" style="font-size:1.15rem; font-weight:400;">Canary Diamond Band</h3>
        </div>

      </div>

      <!-- Mobile-only: link to full collection page -->
      <div class="mobile-show-more-btn text-center mt-10" id="mobile-show-more-btn">
        <a href="/collection" class="btn-outline">View Collection</a>
      </div>

      <div class="sr text-center mt-14">
        <a href="#contact" class="btn-gold">Inquire About a Piece</a>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════ STORY ══════════════════════════════ -->
  <section id="about" class="section-py" style="background: #FAF8F3; padding: 96px 0;">
    <div class="max-w-7xl mx-auto px-8">
      <div class="about-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Image side -->
        <div class="sr-left relative">
          <div class="overflow-hidden relative" style="aspect-ratio: 4/5;">
            <img src="/product-images/Old Papa Photo.webp" alt="Jeweler at work" class="w-full h-full object-cover" loading="lazy" style="filter: sepia(0.12) contrast(1.05);" />
            <div style="position:absolute; inset:0; background: linear-gradient(to bottom, transparent 60%, rgba(161,98,7,0.06)); pointer-events:none;"></div>
          </div>
          <!-- Gold accent line -->
          <div class="about-accent-line" style="position:absolute; top: 24px; left: -16px; width: 3px; height: 120px; background: linear-gradient(to bottom, #A16207, transparent);"></div>
        </div>

        <!-- Text side -->
        <div class="sr-right">
          <p class="font-sans text-gold-500 mb-4" style="font-size:0.68rem; letter-spacing:0.28em; text-transform:uppercase;">Our Story</p>
          <h2 class="font-serif text-charcoal mb-6" style="font-size: clamp(2rem, 3.5vw, 3rem); font-weight:300; letter-spacing:-0.02em; line-height:1.15;">
            A Lifetime of<br /><em style="color:#A16207;">Mastery</em>
          </h2>
          <div class="divider mb-8"></div>
          <p class="font-sans text-charcoal/70 mb-5" style="font-size:0.9rem; line-height:1.8;">
            Since 1979, Christopher has been creating fine custom jewelry in gold, platinum, and rare gemstones—pieces that blend timeless craftsmanship with modern artistry. As the former President of the Hawaii Jewelers Association, Christopher brings over four decades of award-winning experience to every creation.
          </p>
          <p class="font-sans text-charcoal/70 mb-5" style="font-size:0.9rem; line-height:1.8;">
            Each design is handcrafted from start to finish, resulting in unique engagement rings, wedding bands, and wearable art that reflect your personal story and style. From restyling heirlooms to designing original statement pieces, every project is treated with the same precision, passion, and integrity that have defined his career.
          </p>
          <p class="font-sans text-charcoal/70 mb-5" style="font-size:0.9rem; line-height:1.8;">
            If you're looking for a master jeweler who creates bespoke jewelry that's truly one-of-a-kind, Christopher will turn your vision into a lasting masterpiece.
          </p>
          <p class="font-sans text-charcoal mb-10" style="font-size:0.9rem; line-height:1.8; font-weight:500; letter-spacing:0.04em;">
            Custom. Bespoke. Unparalleled.
          </p>
          <a href="#contact" class="btn-outline">Meet Christopher</a>
        </div>

      </div>
    </div>
  </section>

  <!-- ══════════════════════════════ SERVICES ═══════════════════════════ -->
  <section id="services" class="section-py" style="background: #1a1a1a; padding: 96px 0;">
    <div class="max-w-7xl mx-auto px-8">
      <div class="text-center mb-16">
        <p class="sr font-sans text-gold-400 mb-3" style="font-size:0.68rem; letter-spacing:0.28em; text-transform:uppercase;">What We Offer</p>
        <h2 class="sr sr-d1 font-serif text-white" style="font-size: clamp(2rem, 4vw, 3.2rem); font-weight:300; letter-spacing:-0.02em;">Our Services</h2>
        <div class="sr sr-d2 divider mx-auto mt-5"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- Service 1 -->
        <div class="service-card sr sr-d1 text-center" style="padding: 40px 24px; background: rgba(255,255,255,0.05); backdrop-filter: blur(16px) saturate(160%); -webkit-backdrop-filter: blur(16px) saturate(160%); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 8px 32px rgba(0,0,0,0.25), inset 0 0.5px 0 rgba(255,255,255,0.12); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);" onmouseenter="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 48px rgba(0,0,0,0.35), inset 0 0.5px 0 rgba(255,255,255,0.18)'" onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.25), inset 0 0.5px 0 rgba(255,255,255,0.12)'">
          <div class="mx-auto mb-6 flex items-center justify-center" style="width:56px; height:56px;">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="7" stroke="#A16207" stroke-width="1.2"/>
              <path d="M16 6V4M16 28v-2M6 16H4M28 16h-2" stroke="#A16207" stroke-width="1.2" stroke-linecap="round"/>
              <path d="M9.17 9.17L7.76 7.76M24.24 24.24l-1.41-1.41M9.17 22.83l-1.41 1.41M24.24 7.76l-1.41 1.41" stroke="#A16207" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="font-serif text-white mb-3" style="font-size:1.25rem; font-weight:400;">Custom Design</h3>
          <p class="font-sans text-white/50" style="font-size:0.82rem; line-height:1.75;">Bring your vision to life. We collaborate with you from sketch to finished piece, crafting something entirely your own.</p>
        </div>

        <!-- Service 2 -->
        <div class="service-card sr sr-d2 text-center" style="padding: 40px 24px; background: rgba(161,98,7,0.08); backdrop-filter: blur(16px) saturate(160%); -webkit-backdrop-filter: blur(16px) saturate(160%); border: 1px solid rgba(161,98,7,0.25); box-shadow: 0 8px 32px rgba(0,0,0,0.25), inset 0 0.5px 0 rgba(255,255,255,0.12); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);" onmouseenter="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 48px rgba(0,0,0,0.35), inset 0 0.5px 0 rgba(255,255,255,0.18)'" onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.25), inset 0 0.5px 0 rgba(255,255,255,0.12)'">
          <div class="mx-auto mb-6 flex items-center justify-center" style="width:56px; height:56px;">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 24l4-4 4 4 4-8 4 4" stroke="#A16207" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="4" y="4" width="24" height="24" rx="1" stroke="#A16207" stroke-width="1.2"/>
              <path d="M10 12h12M10 16h8" stroke="#A16207" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="font-serif text-white mb-3" style="font-size:1.25rem; font-weight:400;">Estate & Appraisals</h3>
          <p class="font-sans text-white/50" style="font-size:0.82rem; line-height:1.75;">We appraise, buy, and restore estate jewelry with the same care and expertise we bring to everything we make.</p>
        </div>

        <!-- Service 3 -->
        <div class="service-card sr sr-d3 text-center" style="padding: 40px 24px; background: rgba(255,255,255,0.05); backdrop-filter: blur(16px) saturate(160%); -webkit-backdrop-filter: blur(16px) saturate(160%); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 8px 32px rgba(0,0,0,0.25), inset 0 0.5px 0 rgba(255,255,255,0.12); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);" onmouseenter="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 48px rgba(0,0,0,0.35), inset 0 0.5px 0 rgba(255,255,255,0.18)'" onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.25), inset 0 0.5px 0 rgba(255,255,255,0.12)'">
          <div class="mx-auto mb-6 flex items-center justify-center" style="width:56px; height:56px;">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#A16207" stroke-width="1.2" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="font-serif text-white mb-3" style="font-size:1.25rem; font-weight:400;">Restoration</h3>
          <p class="font-sans text-white/50" style="font-size:0.82rem; line-height:1.75;">Restore family heirlooms and breathe new life into them — honoring the memories they carry while making them wearable for generations to come.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- ════════════════════════════ MORE PIECES ══════════════════════════ -->
  <section class="section-py" style="padding: 96px 0; background: #FAF8F3;">
    <div class="max-w-7xl mx-auto px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Text side -->
        <div class="sr-left">
          <p class="font-sans text-gold-500 mb-4" style="font-size:0.68rem; letter-spacing:0.28em; text-transform:uppercase;">Featured Piece</p>
          <h2 class="font-serif text-charcoal mb-6" style="font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight:300; letter-spacing:-0.02em; line-height:1.2;">
            "Beginnings"<br />Necklace
          </h2>
          <div class="divider mb-8"></div>
          <p class="font-sans text-charcoal/70 mb-8" style="font-size:0.9rem; line-height:1.8;">
            Set in 14k yellow gold, this sculptural pendant features a rare Australian boulder opal surrounded by a ribbon of pavé diamonds and a vivid tourmaline accent. A statement piece designed to be passed down.
          </p>
          <a href="#contact" class="btn-gold">Inquire About This Piece</a>
        </div>

        <!-- Image side -->
        <div class="sr-right overflow-hidden" style="aspect-ratio: 1/1; background:#f0ebe0;">
          <img src="/product-images/Mama's necklace.webp" alt="Beginnings Necklace" class="w-full h-full object-cover" style="object-position: center top;" loading="lazy" />
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════ TESTIMONIALS ════════════════════════ -->
  <section id="testimonials" class="section-py" style="background: #FAF8F3; padding: 96px 0; border-top: 1px solid rgba(161,98,7,0.12);">
    <div class="max-w-7xl mx-auto px-8">

      <!-- Header -->
      <div class="text-center mb-14">
        <p class="sr font-sans text-gold-500 mb-3" style="font-size:0.68rem; letter-spacing:0.28em; text-transform:uppercase;">Client Stories</p>
        <h2 class="sr sr-d1 font-serif text-charcoal" style="font-size: clamp(2rem, 4vw, 3.2rem); font-weight:300; letter-spacing:-0.02em;">What Our Clients Say</h2>
        <div class="sr sr-d2 divider mx-auto mt-5"></div>
      </div>

      <!-- Columns -->
      <div class="flex justify-center gap-6 t-fade-mask" style="max-height: 740px; overflow: hidden;">

        <!-- Column 1: Jim K., Thomas P., Zachary C., Patricia D. -->
        <div class="t-col-1" style="flex-shrink:0; width:300px;">
          <div class="t-track">
            <!-- set 1 -->
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"I wanted to have a custom gold pendant necklace made with our ranch logo on the front and inscription on the back for my wife's birthday. Chris was totally enthusiastic about this project and helped lead me through all the various decisions which resulted in a very beautiful piece of jewelry which I fully expect will become a family heirloom. My wife teared up when she opened the beautiful necklace. I highly recommend him for your custom jewelry design."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face" alt="Jim K." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Jim K.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Ranch Pendant</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Christopher was amazing to work with. My mom came to me asking for a 3 stone necklace with diamonds passed down from her family. All I can say is WOW. He is very responsive, very professional, and extremely punctual. I could not have asked for a better piece of jewelry for my mother."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face" alt="Thomas P." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Thomas P.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">3-Stone Diamond Necklace</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Christopher was a delight to work with. He offered critical advice about color, size, and composition regarding my wife's necklace and was very prompt with communicating updates and information regarding timeline and process completion. His work is exceptional and I would be happy to choose him every time for my custom jewelry needs."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=80&h=80&fit=crop&crop=face" alt="Zachary C." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Zachary C.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Necklace</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"My dad always wore a gold signet with a ruby like stone, handed down from my grandfather. When my dad passed, I wanted to create a remembrance. Christopher was great to work with from start to finish. We created a ring that was like my dad's and also mine. I will treasure it always. Thank you Christopher!"</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face" alt="Patricia D." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Patricia D.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Memorial Signet Ring</div>
                </div>
              </div>
            </div>
            <!-- set 2 (duplicate for seamless loop) -->
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"I wanted to have a custom gold pendant necklace made with our ranch logo on the front and inscription on the back for my wife's birthday. Chris was totally enthusiastic about this project and helped lead me through all the various decisions which resulted in a very beautiful piece of jewelry which I fully expect will become a family heirloom. My wife teared up when she opened the beautiful necklace. I highly recommend him for your custom jewelry design."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face" alt="Jim K." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Jim K.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Ranch Pendant</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Christopher was amazing to work with. My mom came to me asking for a 3 stone necklace with diamonds passed down from her family. All I can say is WOW. He is very responsive, very professional, and extremely punctual. I could not have asked for a better piece of jewelry for my mother."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face" alt="Thomas P." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Thomas P.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">3-Stone Diamond Necklace</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Christopher was a delight to work with. He offered critical advice about color, size, and composition regarding my wife's necklace and was very prompt with communicating updates and information regarding timeline and process completion. His work is exceptional and I would be happy to choose him every time for my custom jewelry needs."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=80&h=80&fit=crop&crop=face" alt="Zachary C." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Zachary C.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Necklace</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"My dad always wore a gold signet with a ruby like stone, handed down from my grandfather. When my dad passed, I wanted to create a remembrance. Christopher was great to work with from start to finish. We created a ring that was like my dad's and also mine. I will treasure it always. Thank you Christopher!"</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face" alt="Patricia D." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Patricia D.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Memorial Signet Ring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 2 (md+): Mark V., Tyler M., Susan B., Patrick S. -->
        <div class="hidden md:block t-col-2" style="flex-shrink:0; width:300px;">
          <div class="t-track">
            <!-- set 1 -->
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Oh, my gosh! It is SOOO pretty!" That was my wife's reaction when she opened the box with her new ring guard. Chris did an amazing job, taking the ring I sent him and customizing two pieces that completely complemented the original so they could be worn as a wedding band set. He is a master of his craft and the quality shows through in the work he produced. Thank you, Chris!"</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" alt="Mark V." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Mark V.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Ring Guard · Alexandria, VA</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"He's been great to work with the whole time — easy to understand things and very professional. I would recommend him to any and everyone!"</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Tyler M." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Tyler M.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Verified Client</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Chris Reese is a true artist! He designed our engagement and wedding bands back in 1992 — unique pieces that drew compliments for decades. After losing touch, we recently found him again after my husband lost his wedding band. No jeweler in Maryland would take on the challenge, but Chris recreated the 18K band flawlessly and upgraded my engagement ring with a stunning GIA triple excellent natural diamond. If you want jewelry that's one-of-a-kind and unforgettable, Chris is your guy."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="Susan B." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Susan B.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Engagement &amp; Wedding Bands</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"I trusted Chris to make a very personal piece of jewelry for me and he came through perfectly as I knew he would. We worked together to create the concept of making a ring out of a very important diamond pin and he delivered exactly what I wanted. I cannot recommend his work enough."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" alt="Patrick S." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Patrick S.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Diamond Ring</div>
                </div>
              </div>
            </div>
            <!-- set 2 -->
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Oh, my gosh! It is SOOO pretty!" That was my wife's reaction when she opened the box with her new ring guard. Chris did an amazing job, taking the ring I sent him and customizing two pieces that completely complemented the original so they could be worn as a wedding band set. He is a master of his craft and the quality shows through in the work he produced. Thank you, Chris!"</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" alt="Mark V." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Mark V.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Ring Guard · Alexandria, VA</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"He's been great to work with the whole time — easy to understand things and very professional. I would recommend him to any and everyone!"</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Tyler M." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Tyler M.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Verified Client</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Chris Reese is a true artist! He designed our engagement and wedding bands back in 1992 — unique pieces that drew compliments for decades. After losing touch, we recently found him again after my husband lost his wedding band. No jeweler in Maryland would take on the challenge, but Chris recreated the 18K band flawlessly and upgraded my engagement ring with a stunning GIA triple excellent natural diamond. If you want jewelry that's one-of-a-kind and unforgettable, Chris is your guy."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="Susan B." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Susan B.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Engagement &amp; Wedding Bands</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"I trusted Chris to make a very personal piece of jewelry for me and he came through perfectly as I knew he would. We worked together to create the concept of making a ring out of a very important diamond pin and he delivered exactly what I wanted. I cannot recommend his work enough."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" alt="Patrick S." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Patrick S.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Diamond Ring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 3 (lg+): Anita G., Mike E., James M., Chandra E. -->
        <div class="hidden lg:block t-col-3" style="flex-shrink:0; width:300px;">
          <div class="t-track">
            <!-- set 1 -->
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"I wish I could leave more stars because my experience with Chris was absolutely amazing! He really listened to me and came up with a gorgeous design. I'm wearing my new ring with so much joy — it's even better than I had hoped. Chris kept in touch with me every step of the way. He knows his craft and gave me remarkably accurate timing and pricing estimates. I can't wait for our next project!"</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="Anita G." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Anita G.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Ring Design</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"My wife &amp; I have had multiple pieces made that have turned out exquisitely — well beyond our expectations. Christopher found the perfect opal for an 18k gold pendant for our granddaughter. For my wife he found a stunning tanzanite, cast the perfect ring, and set a ruby alongside three high-quality diamonds. He is now working on split opal drop earrings for her Christmas gift. I cannot recommend Christopher enough."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face" alt="Mike E." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Mike E.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Multiple Custom Pieces</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Working with Christopher was absolutely extraordinary — his attention to detail and his execution of our vision just blew us away. If you're looking for something really special and unique, Christopher is your man!"</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&h=80&fit=crop&crop=face" alt="James M." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">James M.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Jewelry</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Everything that Chris has done for me I absolutely love and love showing off. We have had 3 and now 4 pieces done by him — they are treasures."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&h=80&fit=crop&crop=face" alt="Chandra E." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Chandra E.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Repeat Client · 4 Pieces</div>
                </div>
              </div>
            </div>
            <!-- set 2 -->
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"I wish I could leave more stars because my experience with Chris was absolutely amazing! He really listened to me and came up with a gorgeous design. I'm wearing my new ring with so much joy — it's even better than I had hoped. Chris kept in touch with me every step of the way. He knows his craft and gave me remarkably accurate timing and pricing estimates. I can't wait for our next project!"</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="Anita G." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Anita G.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Ring Design</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"My wife &amp; I have had multiple pieces made that have turned out exquisitely — well beyond our expectations. Christopher found the perfect opal for an 18k gold pendant for our granddaughter. For my wife he found a stunning tanzanite, cast the perfect ring, and set a ruby alongside three high-quality diamonds. He is now working on split opal drop earrings for her Christmas gift. I cannot recommend Christopher enough."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face" alt="Mike E." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Mike E.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Multiple Custom Pieces</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Working with Christopher was absolutely extraordinary — his attention to detail and his execution of our vision just blew us away. If you're looking for something really special and unique, Christopher is your man!"</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&h=80&fit=crop&crop=face" alt="James M." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">James M.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Custom Jewelry</div>
                </div>
              </div>
            </div>
            <div class="t-card">
              <p class="font-serif text-charcoal/80" style="font-size:0.93rem; line-height:1.75;">"Everything that Chris has done for me I absolutely love and love showing off. We have had 3 and now 4 pieces done by him — they are treasures."</p>
              <div class="flex items-center gap-3 mt-5">
                <img src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&h=80&fit=crop&crop=face" alt="Chandra E." style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
                <div>
                  <div class="font-sans text-charcoal" style="font-size:0.82rem;font-weight:500;letter-spacing:0.02em;">Chandra E.</div>
                  <div class="font-sans text-charcoal/50" style="font-size:0.75rem;">Repeat Client · 4 Pieces</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═════════════════════════════ CONTACT ════════════════════════════ -->
  <section id="contact" class="section-py" style="background: #FAF8F3; padding: 96px 0; border-top: 1px solid rgba(161,98,7,0.12);">
    <div class="max-w-3xl mx-auto px-8 text-center">
      <p class="sr font-sans text-gold-500 mb-3" style="font-size:0.68rem; letter-spacing:0.28em; text-transform:uppercase;">Get in Touch</p>
      <h2 class="sr sr-d1 font-serif text-charcoal mb-4" style="font-size: clamp(2rem, 4vw, 3.2rem); font-weight:300; letter-spacing:-0.02em;">Let's Create Something<br /><em style="color:#A16207;">Together</em></h2>
      <div class="sr sr-d2 divider mx-auto mb-6"></div>
      <p class="sr sr-d3 font-sans text-charcoal/60 mb-12" style="font-size:0.88rem; line-height:1.8;">
        Whether you have a vision in mind or need guidance, we'd love to hear from you. Reach out for custom orders, appraisals, or simply to start a conversation.
      </p>

      <form onsubmit="handleSubmit(event)" class="sr sr-d4 text-left" style="max-width: 520px; margin: 0 auto;">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div>
            <label for="first_name" class="font-sans text-charcoal/50 block mb-1" style="font-size:0.65rem; letter-spacing:0.15em; text-transform:uppercase;">First Name</label>
            <input id="first_name" name="first_name" type="text" placeholder="Jane" class="form-input" required autocomplete="given-name" />
          </div>
          <div>
            <label for="last_name" class="font-sans text-charcoal/50 block mb-1" style="font-size:0.65rem; letter-spacing:0.15em; text-transform:uppercase;">Last Name</label>
            <input id="last_name" name="last_name" type="text" placeholder="Smith" class="form-input" autocomplete="family-name" />
          </div>
        </div>
        <div class="mb-8">
          <label for="email" class="font-sans text-charcoal/50 block mb-1" style="font-size:0.65rem; letter-spacing:0.15em; text-transform:uppercase;">Email</label>
          <input id="email" name="email" type="email" placeholder="jane@example.com" class="form-input" required autocomplete="email" />
        </div>
        <div class="mb-8">
          <label for="message" class="font-sans text-charcoal/50 block mb-1" style="font-size:0.65rem; letter-spacing:0.15em; text-transform:uppercase;">How Can We Help?</label>
          <textarea id="message" name="message" placeholder="Tell us about your vision..." class="form-input" rows="4" style="resize:none;"></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="btn-gold w-full sm:w-auto">Send Message</button>
        </div>
      </form>

      <!-- Success message (hidden) -->
      <div id="form-success" class="hidden mt-8 py-5 px-8 font-sans text-charcoal/70" style="border: 1px solid rgba(161,98,7,0.3); font-size:0.85rem; line-height:1.7; background: rgba(161,98,7,0.04);">
        Thank you for reaching out. Christopher will be in touch with you personally within 1–2 business days.
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════ FOOTER ════════════════════════════ -->
  <footer class="site-footer" style="background: #111; padding: 56px 32px 32px; border-top: 1px solid rgba(161,98,7,0.12);">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        <!-- Brand -->
        <div>
          <img src="/brand-assets/christopher_logo_transparent_gold.png" alt="Christopher's Fine Jewelers" style="height:60px; width:auto; margin-bottom:16px; filter: brightness(1.1);" />
          <p class="font-sans text-white/40" style="font-size:0.8rem; line-height:1.8;">Heirloom-quality fine jewelry,<br />crafted by hand with intention.</p>
        </div>

        <!-- Links -->
        <div>
          <p class="font-sans text-white/30 mb-5" style="font-size:0.62rem; letter-spacing:0.22em; text-transform:uppercase;">Navigate</p>
          <ul class="space-y-3">
            <li><a href="#collection" class="font-sans text-white/50 hover:text-gold-400 transition-colors" style="font-size:0.82rem;">Collection</a></li>
            <li><a href="#about" class="font-sans text-white/50 hover:text-gold-400 transition-colors" style="font-size:0.82rem;">Our Story</a></li>
            <li><a href="#services" class="font-sans text-white/50 hover:text-gold-400 transition-colors" style="font-size:0.82rem;">Services</a></li>
            <li><a href="#testimonials" class="font-sans text-white/50 hover:text-gold-400 transition-colors" style="font-size:0.82rem;">Reviews</a></li>
            <li><a href="#contact" class="font-sans text-white/50 hover:text-gold-400 transition-colors" style="font-size:0.82rem;">Contact</a></li>
          </ul>
        </div>

        <!-- Contact info -->
        <div>
          <p class="font-sans text-white/30 mb-5" style="font-size:0.62rem; letter-spacing:0.22em; text-transform:uppercase;">Contact</p>
          <ul class="space-y-3">
            <li class="font-sans text-white/50" style="font-size:0.82rem;">Sacramento, California</li>
            <li><a href="mailto:Christophersfinejewlers@gmail.com" class="font-sans text-white/50 hover:text-gold-400 transition-colors" style="font-size:0.82rem;">Christophersfinejewlers@gmail.com</a></li>
            <li class="font-sans text-white/50" style="font-size:0.82rem;">By Appointment Only</li>
          </ul>
        </div>

      </div>

      <div style="border-top: 1px solid rgba(255,255,255,0.07); padding-top: 24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
        <p class="font-sans text-white/25" style="font-size:0.72rem;">© 2026 Christopher's Fine Jewelers. All rights reserved.</p>
        <p class="font-sans text-white/20" style="font-size:0.72rem; letter-spacing:0.1em;">FINE JEWELRY · SACRAMENTO, CA</p>
      </div>
    </div>
  </footer>

  <script>
    // ── Contact form → opens email client with pre-filled inquiry ──
    function handleSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const first   = (form.querySelector('#first_name').value  || '').trim();
      const last    = (form.querySelector('#last_name').value   || '').trim();
      const email   = (form.querySelector('#email').value       || '').trim();
      const message = (form.querySelector('#message').value     || '').trim();

      const subject = encodeURIComponent('Jewelry Inquiry – ' + first + ' ' + last);
      const body    = encodeURIComponent(
        'Name: '    + first + ' ' + last + '\n' +
        'Email: '   + email + '\n\n' +
        message
      );

      window.location.href =
        'mailto:Christophersfinejewlers@gmail.com?subject=' + subject + '&body=' + body;

      form.style.display = 'none';
      document.getElementById('form-success').classList.remove('hidden');
    }

    // ── Scroll reveal (progressive enhancement) ──
    document.documentElement.classList.add('js-sr');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.sr, .sr-left, .sr-right').forEach(el => revealObserver.observe(el));
  </script>
</body>
</html>
`;

export async function GET() {
  return new Response(HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}