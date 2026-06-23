const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FAQs — Christopher's Fine Jewelers</title>
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

    /* FAQ Hero */
    .faq-hero {
      background: linear-gradient(135deg, #1a1a1a 0%, #2a1f0a 100%);
      position: relative;
      overflow: hidden;
    }
    .faq-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(161,98,7,0.12) 0%, transparent 70%);
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

    /* Mobile menu */
    #mobile-menu {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease;
    }
    #mobile-menu.menu-open {
      max-height: 400px;
      opacity: 1;
    }

    /* Accordion */
    .faq-item {
      border-bottom: 1px solid rgba(161,98,7,0.15);
    }
    .faq-item:first-child {
      border-top: 1px solid rgba(161,98,7,0.15);
    }
    .faq-btn {
      width: 100%;
      text-align: left;
      background: none;
      border: none;
      cursor: pointer;
      padding: 1.5rem 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1.5rem;
    }
    .faq-question {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(1.05rem, 1.8vw, 1.25rem);
      font-weight: 400;
      color: #1a1a1a;
      line-height: 1.4;
    }
    .faq-icon {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      margin-top: 3px;
      position: relative;
      transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
    }
    .faq-icon::before,
    .faq-icon::after {
      content: '';
      position: absolute;
      background: #A16207;
      border-radius: 2px;
      transition: opacity 0.35s ease, transform 0.35s ease;
    }
    .faq-icon::before { width: 14px; height: 1.5px; top: 9px; left: 3px; }
    .faq-icon::after  { width: 1.5px; height: 14px; top: 3px; left: 9px; }
    .faq-item.open .faq-icon::after { transform: rotate(90deg); opacity: 0; }
    .faq-answer {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
    }
    .faq-item.open .faq-answer {
      max-height: 1000px;
    }
    .faq-answer-inner {
      padding-bottom: 1.75rem;
    }
    .faq-answer-inner p {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.88rem;
      line-height: 1.85;
      color: rgba(26,26,26,0.65);
      margin-bottom: 0.75rem;
    }
    .faq-answer-inner p:last-child { margin-bottom: 0; }
    .faq-answer-inner ul {
      margin: 0.5rem 0 0.75rem 0;
      padding-left: 0;
      list-style: none;
    }
    .faq-answer-inner ul li {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.88rem;
      line-height: 1.85;
      color: rgba(26,26,26,0.65);
      padding-left: 1.2rem;
      position: relative;
      margin-bottom: 0.35rem;
    }
    .faq-answer-inner ul li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.65em;
      width: 5px;
      height: 1px;
      background: #A16207;
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
        <a href="/collection" class="nav-link">Collection</a>
      </nav>

      <!-- Logo -->
      <a href="/" class="flex-shrink-0 mx-auto md:mx-0">
        <img src="/brand-assets/christopher_logo_transparent_gold.png" alt="Christopher's Fine Jewelers" style="height: 52px; width: auto; filter: brightness(1.15) contrast(1.1) drop-shadow(0 1px 6px rgba(161,98,7,0.22));" />
      </a>

      <!-- Right nav -->
      <nav class="hidden md:flex items-center gap-10">
        <a href="/faq" class="nav-link" style="color:#A16207;">FAQs</a>
        <a href="/#services" class="nav-link">Services</a>
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
      <a href="/collection" class="nav-link">Collection</a>
      <a href="/faq" class="nav-link" style="color:#A16207;">FAQs</a>
      <a href="/#services" class="nav-link">Services</a>
      <a href="/#testimonials" class="nav-link">Reviews</a>
      <a href="/#contact" class="nav-link">Contact</a>
    </div>
  </header>

  <!-- ════════════════════════════ FAQ HERO ════════════════════════════ -->
  <section class="faq-hero" style="padding-top: 72px; padding-bottom: 80px;">
    <div class="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-4 text-center">
      <p class="fade-up font-sans text-gold-300 mb-4" style="font-size:0.65rem; letter-spacing:0.32em; text-transform:uppercase;">Christopher's Fine Jewelers</p>
      <h1 class="fade-up delay-1 font-serif text-white" style="font-size: clamp(2.8rem, 6vw, 5rem); font-weight:300; letter-spacing:-0.02em; line-height:1.1; margin-bottom: 1.25rem;">
        Frequently Asked<br /><em style="font-style:italic; color:#E5C456;">Questions</em>
      </h1>
      <div class="fade-up delay-2 divider mx-auto" style="background: linear-gradient(90deg, transparent, #E5C456, transparent); margin-bottom: 1.5rem;"></div>
      <p class="fade-up delay-3 font-serif text-white/60" style="font-size: clamp(1rem, 1.8vw, 1.2rem); font-weight:300; font-style:italic; max-width: 480px; margin: 0 auto; line-height: 1.7;">
        Everything you need to know before beginning your custom jewelry journey.
      </p>
    </div>
  </section>

  <!-- ═══════════════════════════ FAQ CONTENT ══════════════════════════ -->
  <section style="padding: 80px 0 96px; background: #FAF8F3;">
    <div class="max-w-3xl mx-auto px-8">

      <div id="faq-list">

        <!-- Q1 -->
        <div class="faq-item sr sr-d1">
          <button class="faq-btn" onclick="toggleFaq(this)" aria-expanded="false">
            <span class="faq-question">What should I know about your pricing?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer" role="region">
            <div class="faq-answer-inner">
              <p>Every piece I create is a one-of-a-kind work of art, individually designed and hand-fabricated using the finest gold, platinum, and gemstones. Because no two designs are ever alike, pricing is determined by several factors — including the complexity of the design, metal weight, stone quality, and labor time.</p>
              <p>Before any work begins, I provide a detailed estimate so you know exactly what to expect. My goal is always to deliver the highest level of craftsmanship within your desired budget range.</p>
              <p>Unlike mass-produced jewelry, my custom creations are heirloom-quality — designed to last for generations and hold their value over time. I occasionally extend loyalty considerations to returning clients or collectors who commission multiple pieces.</p>
            </div>
          </div>
        </div>

        <!-- Q2 -->
        <div class="faq-item sr sr-d2">
          <button class="faq-btn" onclick="toggleFaq(this)" aria-expanded="false">
            <span class="faq-question">What is your typical process for working with a new customer?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer" role="region">
            <div class="faq-answer-inner">
              <p>Every custom piece begins with a personal consultation — either in person or virtually — where I learn about your vision, lifestyle, and the sentiment behind the piece. Together, we explore design ideas, metals, and gemstones that best express your style and purpose.</p>
              <p>Once we establish the design direction, I can create sketches and renderings for your approval. This ensures you can visualize the finished piece before any fabrication begins.</p>
              <p>After approval, I source the finest materials and handcraft your jewelry using traditional goldsmithing techniques refined over decades. Throughout the process, I provide updates so you can experience the creation of your piece from concept to completion.</p>
              <p>The result is not just jewelry, but a timeless work of art — designed exclusively for you.</p>
            </div>
          </div>
        </div>

        <!-- Q3 -->
        <div class="faq-item sr sr-d3">
          <button class="faq-btn" onclick="toggleFaq(this)" aria-expanded="false">
            <span class="faq-question">What education and training do you have that relates to your work?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer" role="region">
            <div class="faq-answer-inner">
              <p>I hold a Master Jewelers Designation, my Diamond and Colored Stone Grading Certificates from the Gemological Institute of America (GIA), and of course, decades of hands-on experience that no classroom can replicate.</p>
            </div>
          </div>
        </div>

        <!-- Q4 -->
        <div class="faq-item sr sr-d4">
          <button class="faq-btn" onclick="toggleFaq(this)" aria-expanded="false">
            <span class="faq-question">How did you get started in fine jewelry?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer" role="region">
            <div class="faq-answer-inner">
              <p>My journey in fine jewelry began in 1979, when I was working as a sales associate in a high-end custom jewelry boutique. There, I was offered the rare opportunity to apprentice under Mr. Robert Haseltine, who later became the Director of the Gemological Institute of America's Jewelry Arts Department.</p>
              <p>That early mentorship laid the foundation for a lifelong passion for design and craftsmanship. I later refined my skills under master jeweler and Horologist Mr. Don McQuaig, deepening my understanding of both artistry and technique.</p>
              <p>For over two decades, I worked in Honolulu with the prestigious Haimoff & Haimoff Jewelry Design firm, creating bespoke pieces for an elite clientele. My dedication to the craft and the industry eventually led to my election as President of the Hawaii Jewelers Association.</p>
              <p>Every piece I create today reflects the depth of those experiences — blending old-world artistry with modern precision.</p>
            </div>
          </div>
        </div>

        <!-- Q5 -->
        <div class="faq-item sr sr-d1">
          <button class="faq-btn" onclick="toggleFaq(this)" aria-expanded="false">
            <span class="faq-question">What types of customers have you worked with?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer" role="region">
            <div class="faq-answer-inner">
              <p>I have worked with every type of client possible — from the newly engaged to elite Hollywood and entertainment celebrities. Every piece is given the same care and expertise they deserve.</p>
            </div>
          </div>
        </div>

        <!-- Q6 -->
        <div class="faq-item sr sr-d2">
          <button class="faq-btn" onclick="toggleFaq(this)" aria-expanded="false">
            <span class="faq-question">Can you describe a recent project you're especially proud of?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer" role="region">
            <div class="faq-answer-inner">
              <p>I recently created a simple and yet elegant piece around an untreated gem-quality Alexandrite for a client who had been dreaming of owning a piece like this since her childhood. It truly was a pleasure to fulfill her dream.</p>
            </div>
          </div>
        </div>

        <!-- Q7 -->
        <div class="faq-item sr sr-d3">
          <button class="faq-btn" onclick="toggleFaq(this)" aria-expanded="false">
            <span class="faq-question">What advice would you give a customer looking to commission custom jewelry?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer" role="region">
            <div class="faq-answer-inner">
              <p>When choosing a jeweler for a custom-designed piece, look beyond price — focus on experience, artistry, and trust. Custom jewelry is a collaboration, and you want to work with someone who not only understands fine craftsmanship, but also listens to your vision and guides you through the process with clarity and care.</p>
              <p>Ask to see examples of past work and pay attention to the details of design and finish — true mastery is found in the subtle craftsmanship that mass production can never replicate.</p>
              <p>A seasoned custom jeweler will take the time to educate you about materials, gemstones, and construction methods, ensuring that your piece is both beautiful and enduring.</p>
              <p>Ultimately, the best jeweler for you is one who blends technical excellence with artistic sensitivity, creating a piece that tells your story and can be treasured for generations.</p>
            </div>
          </div>
        </div>

        <!-- Q8 -->
        <div class="faq-item sr sr-d4">
          <button class="faq-btn" onclick="toggleFaq(this)" aria-expanded="false">
            <span class="faq-question">What should I think through before my first consultation?</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer" role="region">
            <div class="faq-answer-inner">
              <p>Before beginning a custom jewelry project, it helps to have a clear sense of what you'd like to create — both emotionally and aesthetically. Here are a few things to consider:</p>
              <ul>
                <li><strong style="color:#1a1a1a; font-weight:500;">Purpose & Meaning:</strong> What is the occasion or sentiment behind the piece? (Engagement, anniversary, heirloom redesign, personal milestone, etc.)</li>
                <li><strong style="color:#1a1a1a; font-weight:500;">Style & Inspiration:</strong> Are there particular styles, eras, or design elements that speak to you? Photos, sketches, or examples can be helpful starting points.</li>
                <li><strong style="color:#1a1a1a; font-weight:500;">Materials:</strong> Do you have a preference for gold, platinum, or another precious metal? Are there specific gemstones or colors you're drawn to?</li>
                <li><strong style="color:#1a1a1a; font-weight:500;">Budget Range:</strong> Having a general idea of your budget allows your jeweler to guide you toward the best options without compromising quality or design integrity.</li>
                <li><strong style="color:#1a1a1a; font-weight:500;">Timeline:</strong> Is the piece tied to a specific date or event? Knowing this helps ensure the project is scheduled appropriately.</li>
              </ul>
              <p>Taking a few moments to reflect on these details will make your first consultation more productive — and allow Christopher to translate your vision into a truly personal, one-of-a-kind creation.</p>
            </div>
          </div>
        </div>

      </div>

      <!-- CTA -->
      <div class="text-center mt-16 sr">
        <div class="divider mx-auto mb-10"></div>
        <p class="font-serif text-charcoal/60 mb-6" style="font-size:1.1rem; font-weight:300; font-style:italic;">Ready to bring your vision to life?</p>
        <a href="/#contact" class="btn-gold">Book a Consultation</a>
      </div>

    </div>
  </section>

  <!-- ════════════════════════════ FOOTER ══════════════════════════════ -->
  <footer style="background: #1a1a1a; padding: 48px 32px; text-align: center;">
    <img src="/brand-assets/christopher_logo_transparent_gold.png" alt="Christopher's Fine Jewelers" style="height: 44px; width: auto; opacity: 0.8; margin-bottom: 1.5rem; filter: brightness(1.1);" />
    <div class="divider mx-auto mb-5" style="background: linear-gradient(90deg, transparent, rgba(229,196,86,0.5), transparent);"></div>
    <p class="font-sans text-white/30" style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;">Creating Wearable Art Since 1979</p>
  </footer>

  <script>
    function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('menu-open');
    }

    function toggleFaq(btn) {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    }

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.sr').forEach(el => observer.observe(el));
  </script>
</body>
</html>`;

export async function GET() {
  return new Response(HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
