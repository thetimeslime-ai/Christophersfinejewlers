"use client";

import { useState, useEffect } from "react";

type Testimonial = {
  quote: string;
  avatar: string;
  name: string;
  sub: string;
};

const col1: Testimonial[] = [
  {
    quote: "I wanted to have a custom gold pendant necklace made with our ranch logo on the front and inscription on the back for my wife's birthday. Chris was totally enthusiastic about this project and helped lead me through all the various decisions which resulted in a very beautiful piece of jewelry which I fully expect will become a family heirloom. My wife teared up when she opened the beautiful necklace. I highly recommend him for your custom jewelry design.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
    name: "Jim K.",
    sub: "Custom Ranch Pendant",
  },
  {
    quote: "Christopher was amazing to work with. My mom came to me asking for a 3 stone necklace with diamonds passed down from her family. All I can say is WOW. He is very responsive, very professional, and extremely punctual. I could not have asked for a better piece of jewelry for my mother.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
    name: "Thomas P.",
    sub: "3-Stone Diamond Necklace",
  },
  {
    quote: "Christopher was a delight to work with. He offered critical advice about color, size, and composition regarding my wife's necklace and was very prompt with communicating updates and information regarding timeline and process completion. His work is exceptional and I would be happy to choose him every time for my custom jewelry needs.",
    avatar: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=80&h=80&fit=crop&crop=face",
    name: "Zachary C.",
    sub: "Custom Necklace",
  },
  {
    quote: "My dad always wore a gold signet with a ruby like stone, handed down from my grandfather. When my dad passed, I wanted to create a remembrance. Christopher was great to work with from start to finish. We created a ring that was like my dad's and also mine. I will treasure it always. Thank you Christopher!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    name: "Patricia D.",
    sub: "Memorial Signet Ring",
  },
];

const col2: Testimonial[] = [
  {
    quote: '"Oh, my gosh! It is SOOO pretty!" That was my wife\'s reaction when she opened the box with her new ring guard. Chris did an amazing job, taking the ring I sent him and customizing two pieces that completely complemented the original so they could be worn as a wedding band set. He is a master of his craft and the quality shows through in the work he produced. Thank you, Chris!',
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    name: "Mark V.",
    sub: "Custom Ring Guard · Alexandria, VA",
  },
  {
    quote: "He's been great to work with the whole time — easy to understand things and very professional. I would recommend him to any and everyone!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    name: "Tyler M.",
    sub: "Verified Client",
  },
  {
    quote: "Chris Reese is a true artist! He designed our engagement and wedding bands back in 1992 — unique pieces that drew compliments for decades. After losing touch, we recently found him again after my husband lost his wedding band. No jeweler in Maryland would take on the challenge, but Chris recreated the 18K band flawlessly and upgraded my engagement ring with a stunning GIA triple excellent natural diamond. If you want jewelry that's one-of-a-kind and unforgettable, Chris is your guy.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    name: "Susan B.",
    sub: "Engagement & Wedding Bands",
  },
  {
    quote: "I trusted Chris to make a very personal piece of jewelry for me and he came through perfectly as I knew he would. We worked together to create the concept of making a ring out of a very important diamond pin and he delivered exactly what I wanted. I cannot recommend his work enough.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    name: "Patrick S.",
    sub: "Custom Diamond Ring",
  },
];

const col3: Testimonial[] = [
  {
    quote: "I wish I could leave more stars because my experience with Chris was absolutely amazing! He really listened to me and came up with a gorgeous design. I'm wearing my new ring with so much joy — it's even better than I had hoped. Chris kept in touch with me every step of the way. He knows his craft and gave me remarkably accurate timing and pricing estimates. I can't wait for our next project!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    name: "Anita G.",
    sub: "Custom Ring Design",
  },
  {
    quote: "My wife & I have had multiple pieces made that have turned out exquisitely — well beyond our expectations. Christopher found the perfect opal for an 18k gold pendant for our granddaughter. For my wife he found a stunning tanzanite, cast the perfect ring, and set a ruby alongside three high-quality diamonds. He is now working on split opal drop earrings for her Christmas gift. I cannot recommend Christopher enough.",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face",
    name: "Mike E.",
    sub: "Multiple Custom Pieces",
  },
  {
    quote: "Working with Christopher was absolutely extraordinary — his attention to detail and his execution of our vision just blew us away. If you're looking for something really special and unique, Christopher is your man!",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&h=80&fit=crop&crop=face",
    name: "James M.",
    sub: "Custom Jewelry",
  },
  {
    quote: "Everything that Chris has done for me I absolutely love and love showing off. We have had 3 and now 4 pieces done by him — they are treasures.",
    avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&h=80&fit=crop&crop=face",
    name: "Chandra E.",
    sub: "Repeat Client · 4 Pieces",
  },
];

function TCard({ quote, avatar, name, sub }: Testimonial) {
  return (
    <div className="t-card">
      <p className="font-serif text-charcoal/80" style={{ fontSize: "0.93rem", lineHeight: 1.75 }}>{quote}</p>
      <div className="flex items-center gap-3 mt-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar} alt={name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
        <div>
          <div className="font-sans text-charcoal" style={{ fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.02em" }}>{name}</div>
          <div className="font-sans text-charcoal/50" style={{ fontSize: "0.75rem" }}>{sub}</div>
        </div>
      </div>
    </div>
  );
}

const products = [
  { img: "/product-images/Queen Ring.webp",         alt: "Queen Ring",          cat: "Rings",     name: "The Queen Ring",            d: "sr-d1" },
  { img: "/product-images/big diamond ring.webp",   alt: "Diamond Ring",        cat: "Rings",     name: "Heirloom Diamond Ring",     d: "sr-d2" },
  { img: "/product-images/emerald necklace.webp",   alt: "Emerald Necklace",    cat: "Necklaces", name: "Emerald & Diamond Pendant", d: "sr-d3" },
  { img: "/product-images/Colorful earrings.webp",  alt: "Opal Earrings",       cat: "Earrings",  name: "Boulder Opal Drops",        d: "sr-d1" },
  { img: "/product-images/Blue Ring.webp",          alt: "Sapphire Ring",       cat: "Rings",     name: "Sapphire Wave Ring",        d: "sr-d2" },
  { img: "/product-images/yellow diamond ring.webp",alt: "Yellow Diamond Band", cat: "Rings",     name: "Canary Diamond Band",       d: "sr-d3" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".sr, .sr-left, .sr-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const get = (n: string) =>
      ((form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement)?.value || "").trim();
    const first = get("first_name");
    const last  = get("last_name");
    const email = get("email");
    const msg   = get("message");
    const subject = encodeURIComponent(`Jewelry Inquiry – ${first} ${last}`);
    const body    = encodeURIComponent(`Name: ${first} ${last}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:Christophersfinejewlers@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  }

  return (
    <div className="font-sans text-charcoal">

      {/* ── NAV ── */}
      <header
        id="top"
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(250,248,243,0.65)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.45)",
          boxShadow: "0 4px 32px rgba(0,0,0,0.06), inset 0 -0.5px 0 rgba(161,98,7,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between" style={{ height: 72 }}>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#collection" className="nav-link">Collection</a>
            <a href="#about"      className="nav-link">Our Story</a>
          </nav>
          <a href="#top" className="flex-shrink-0 mx-auto md:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand-assets/christopher_logo_transparent_gold.png" alt="Christopher's Fine Jewelers" style={{ height: 52, width: "auto" }} />
          </a>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#services"     className="nav-link">Services</a>
            <a href="#testimonials" className="nav-link">Reviews</a>
            <a href="#contact"      className="nav-link">Contact</a>
          </nav>
          <button
            className="md:hidden p-2 -mr-2 focus-visible:outline-none"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((p) => !p)}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <line x1="0" y1="1"  x2="22" y2="1"  stroke="#A16207" strokeWidth="1.5" />
              <line x1="0" y1="8"  x2="22" y2="8"  stroke="#A16207" strokeWidth="1.5" />
              <line x1="0" y1="15" x2="22" y2="15" stroke="#A16207" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`md:hidden px-4 pb-6 pt-2 flex flex-col gap-5${menuOpen ? " menu-open" : ""}`}
          style={{ borderTop: "1px solid rgba(161,98,7,0.12)" }}
          aria-hidden={!menuOpen}
        >
          {[["#collection","Collection"],["#about","Our Story"],["#services","Services"],["#testimonials","Reviews"],["#contact","Contact"]].map(([href, label]) => (
            <a key={href} href={href} className="nav-link" onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden grain" style={{ paddingTop: 72, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/product-images/Mama's necklace.webp" alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,26,26,0.78) 0%, rgba(26,26,26,0.45) 60%, rgba(161,98,7,0.08) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(161,98,7,0.07) 0%, transparent 70%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-xl">
            <p className="fade-up text-gold-400 font-sans mb-6" style={{ fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase" }}>
              Est. Sacramento, California
            </p>
            <h1 className="hero-h1 fade-up delay-1 font-serif text-white leading-none mb-6" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Crafted for<br /><em style={{ fontStyle: "italic", color: "#E5C456" }}>Every Moment</em><br />That Matters
            </h1>
            <p className="hero-sub fade-up delay-2 font-sans text-white/70 mb-10" style={{ fontSize: "0.9rem", lineHeight: 1.75, maxWidth: 380 }}>
              Heirloom-quality fine jewelry — designed with intention, crafted with mastery, and worn for a lifetime.
            </p>
            <div className="hero-btns fade-up delay-3 flex flex-wrap gap-4">
              <a href="#collection" className="btn-gold">View Collection</a>
              <a href="#contact" className="btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.1)"; el.style.color = "#fff"; }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#fff"; }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator">
          <span className="font-sans text-white/40" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
          <svg width="1" height="36" viewBox="0 0 1 36"><line x1="0.5" y1="0" x2="0.5" y2="36" stroke="rgba(255,255,255,0.3)" strokeWidth="1" /></svg>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="intro-strip py-16 text-center" style={{ background: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto px-8">
          <p className="sr font-serif text-white/80" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.7, letterSpacing: "0.01em" }}>
            &ldquo;Every piece we create carries a story — of love, of legacy, and of the master&rsquo;s hand behind it.&rdquo;
          </p>
          <div className="sr sr-d2 divider mx-auto mt-6" />
        </div>
      </section>

      {/* ── COLLECTION ── */}
      <section id="collection" className="section-py py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="sr font-sans text-gold-500 mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase" }}>Handcrafted Pieces</p>
            <h2 className="sr sr-d1 font-serif text-charcoal" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, letterSpacing: "-0.02em" }}>The Collection</h2>
            <div className="sr sr-d2 divider mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(({ img, alt, cat, name, d }) => (
              <div key={name} className={`sr ${d} product-card group cursor-pointer`}>
                <div className="overflow-hidden mb-4" style={{ aspectRatio: "4/5", background: "#f0ebe0" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={alt} className="card-img w-full h-full object-cover" loading="lazy" />
                </div>
                <p className="font-sans text-gold-500 mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>{cat}</p>
                <h3 className="font-serif text-charcoal" style={{ fontSize: "1.15rem", fontWeight: 400 }}>{name}</h3>
              </div>
            ))}
          </div>
          <div className="sr text-center mt-14">
            <a href="#contact" className="btn-gold">Inquire About a Piece</a>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="about" className="section-py" style={{ background: "#FAF8F3", padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="sr-left relative">
              <div className="overflow-hidden relative" style={{ aspectRatio: "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/product-images/Old Papa Photo.webp" alt="Jeweler at work" className="w-full h-full object-cover" loading="lazy" style={{ filter: "sepia(0.12) contrast(1.05)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(161,98,7,0.06))", pointerEvents: "none" }} />
              </div>
              <div style={{ position: "absolute", top: 24, left: -16, width: 3, height: 120, background: "linear-gradient(to bottom, #A16207, transparent)" }} />
            </div>
            <div className="sr-right">
              <p className="font-sans text-gold-500 mb-4" style={{ fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase" }}>Our Story</p>
              <h2 className="font-serif text-charcoal mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                A Lifetime of<br /><em style={{ color: "#A16207" }}>Mastery</em>
              </h2>
              <div className="divider mb-8" />
              <p className="font-sans text-charcoal/70 mb-5" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                Since 1979, Christopher has been creating fine custom jewelry in gold, platinum, and rare gemstones—pieces that blend timeless craftsmanship with modern artistry. As the former President of the Hawaii Jewelers Association, Christopher brings over four decades of award-winning experience to every creation.
              </p>
              <p className="font-sans text-charcoal/70 mb-5" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                Each design is handcrafted from start to finish, resulting in unique engagement rings, wedding bands, and wearable art that reflect your personal story and style. From restyling heirlooms to designing original statement pieces, every project is treated with the same precision, passion, and integrity that have defined his career.
              </p>
              <p className="font-sans text-charcoal/70 mb-5" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                If you&rsquo;re looking for a master jeweler who creates bespoke jewelry that&rsquo;s truly one-of-a-kind, Christopher will turn your vision into a lasting masterpiece.
              </p>
              <p className="font-sans text-charcoal mb-10" style={{ fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 500, letterSpacing: "0.04em" }}>
                Custom. Bespoke. Unparalleled.
              </p>
              <a href="#contact" className="btn-outline">Meet Christopher</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-py" style={{ background: "#1a1a1a", padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="sr font-sans text-gold-400 mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase" }}>What We Offer</p>
            <h2 className="sr sr-d1 font-serif text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, letterSpacing: "-0.02em" }}>Our Services</h2>
            <div className="sr sr-d2 divider mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="service-card sr sr-d1 text-center" style={{ padding: "40px 24px", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px) saturate(160%)", WebkitBackdropFilter: "blur(16px) saturate(160%)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 0.5px 0 rgba(255,255,255,0.12)" }}>
              <div className="mx-auto mb-6 flex items-center justify-center" style={{ width: 56, height: 56 }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="7" stroke="#A16207" strokeWidth="1.2" />
                  <path d="M16 6V4M16 28v-2M6 16H4M28 16h-2" stroke="#A16207" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M9.17 9.17L7.76 7.76M24.24 24.24l-1.41-1.41M9.17 22.83l-1.41 1.41M24.24 7.76l-1.41 1.41" stroke="#A16207" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-serif text-white mb-3" style={{ fontSize: "1.25rem", fontWeight: 400 }}>Custom Design</h3>
              <p className="font-sans text-white/50" style={{ fontSize: "0.82rem", lineHeight: 1.75 }}>Bring your vision to life. We collaborate with you from sketch to finished piece, crafting something entirely your own.</p>
            </div>
            <div className="service-card sr sr-d2 text-center" style={{ padding: "40px 24px", background: "rgba(161,98,7,0.08)", backdropFilter: "blur(16px) saturate(160%)", WebkitBackdropFilter: "blur(16px) saturate(160%)", border: "1px solid rgba(161,98,7,0.25)", boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 0.5px 0 rgba(255,255,255,0.12)" }}>
              <div className="mx-auto mb-6 flex items-center justify-center" style={{ width: 56, height: 56 }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 24l4-4 4 4 4-8 4 4" stroke="#A16207" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="4" y="4" width="24" height="24" rx="1" stroke="#A16207" strokeWidth="1.2" />
                  <path d="M10 12h12M10 16h8" stroke="#A16207" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-serif text-white mb-3" style={{ fontSize: "1.25rem", fontWeight: 400 }}>Estate & Appraisals</h3>
              <p className="font-sans text-white/50" style={{ fontSize: "0.82rem", lineHeight: 1.75 }}>We appraise, buy, and restore estate jewelry with the same care and expertise we bring to everything we make.</p>
            </div>
            <div className="service-card sr sr-d3 text-center" style={{ padding: "40px 24px", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px) saturate(160%)", WebkitBackdropFilter: "blur(16px) saturate(160%)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 0.5px 0 rgba(255,255,255,0.12)" }}>
              <div className="mx-auto mb-6 flex items-center justify-center" style={{ width: 56, height: 56 }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#A16207" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-serif text-white mb-3" style={{ fontSize: "1.25rem", fontWeight: 400 }}>Repairs & Restoration</h3>
              <p className="font-sans text-white/50" style={{ fontSize: "0.82rem", lineHeight: 1.75 }}>Breathe new life into a cherished piece. From resizing and re-tipping to full restorations, we handle every repair with precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PIECE ── */}
      <section className="section-py" style={{ padding: "96px 0", background: "#FAF8F3" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="sr-left">
              <p className="font-sans text-gold-500 mb-4" style={{ fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase" }}>Featured Piece</p>
              <h2 className="font-serif text-charcoal mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                &ldquo;Beginnings&rdquo;<br />Necklace
              </h2>
              <div className="divider mb-8" />
              <p className="font-sans text-charcoal/70 mb-8" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                Set in 14k yellow gold, this sculptural pendant features a rare Australian boulder opal surrounded by a ribbon of pavé diamonds and a vivid tourmaline accent. A statement piece designed to be passed down.
              </p>
              <a href="#contact" className="btn-gold">Inquire About This Piece</a>
            </div>
            <div className="sr-right overflow-hidden" style={{ aspectRatio: "1/1", background: "#f0ebe0" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/product-images/Mama's necklace.webp" alt="Beginnings Necklace" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="section-py" style={{ background: "#FAF8F3", padding: "96px 0", borderTop: "1px solid rgba(161,98,7,0.12)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="sr font-sans text-gold-500 mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase" }}>Client Stories</p>
            <h2 className="sr sr-d1 font-serif text-charcoal" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, letterSpacing: "-0.02em" }}>What Our Clients Say</h2>
            <div className="sr sr-d2 divider mx-auto mt-5" />
          </div>
          <div className="flex justify-center gap-6 t-fade-mask" style={{ maxHeight: 740, overflow: "hidden" }}>
            <div className="t-col-1" style={{ flexShrink: 0, width: 300 }}>
              <div className="t-track">
                {[...col1, ...col1].map((t, i) => <TCard key={i} {...t} />)}
              </div>
            </div>
            <div className="hidden md:block t-col-2" style={{ flexShrink: 0, width: 300 }}>
              <div className="t-track">
                {[...col2, ...col2].map((t, i) => <TCard key={i} {...t} />)}
              </div>
            </div>
            <div className="hidden lg:block t-col-3" style={{ flexShrink: 0, width: 300 }}>
              <div className="t-track">
                {[...col3, ...col3].map((t, i) => <TCard key={i} {...t} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section-py" style={{ background: "#FAF8F3", padding: "96px 0", borderTop: "1px solid rgba(161,98,7,0.12)" }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="sr font-sans text-gold-500 mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase" }}>Get in Touch</p>
          <h2 className="sr sr-d1 font-serif text-charcoal mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, letterSpacing: "-0.02em" }}>
            Let&rsquo;s Create Something<br /><em style={{ color: "#A16207" }}>Together</em>
          </h2>
          <div className="sr sr-d2 divider mx-auto mb-6" />
          <p className="sr sr-d3 font-sans text-charcoal/60 mb-12" style={{ fontSize: "0.88rem", lineHeight: 1.8 }}>
            Whether you have a vision in mind or need guidance, we&rsquo;d love to hear from you. Reach out for custom orders, appraisals, or simply to start a conversation.
          </p>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="sr sr-d4 text-left" style={{ maxWidth: 520, margin: "0 auto" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="first_name" className="font-sans text-charcoal/50 block mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>First Name</label>
                  <input id="first_name" name="first_name" type="text" placeholder="Jane" className="form-input" required autoComplete="given-name" />
                </div>
                <div>
                  <label htmlFor="last_name" className="font-sans text-charcoal/50 block mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Last Name</label>
                  <input id="last_name" name="last_name" type="text" placeholder="Smith" className="form-input" autoComplete="family-name" />
                </div>
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="font-sans text-charcoal/50 block mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Email</label>
                <input id="email" name="email" type="email" placeholder="jane@example.com" className="form-input" required autoComplete="email" />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="font-sans text-charcoal/50 block mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>How Can We Help?</label>
                <textarea id="message" name="message" placeholder="Tell us about your vision..." className="form-input" rows={4} style={{ resize: "none" }} />
              </div>
              <div className="text-center">
                <button type="submit" className="btn-gold w-full sm:w-auto">Send Message</button>
              </div>
            </form>
          ) : (
            <div className="mt-8 py-5 px-8 font-sans text-charcoal/70" style={{ border: "1px solid rgba(161,98,7,0.3)", fontSize: "0.85rem", lineHeight: 1.7, background: "rgba(161,98,7,0.04)" }}>
              Thank you for reaching out. Christopher will be in touch with you personally within 1–2 business days.
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer" style={{ background: "#111", padding: "56px 32px 32px", borderTop: "1px solid rgba(161,98,7,0.12)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand-assets/christopher_logo_transparent_gold.png" alt="Christopher's Fine Jewelers" style={{ height: 60, width: "auto", marginBottom: 16, filter: "brightness(1.1)" }} />
              <p className="font-sans text-white/40" style={{ fontSize: "0.8rem", lineHeight: 1.8 }}>Heirloom-quality fine jewelry,<br />crafted by hand with intention.</p>
            </div>
            <div>
              <p className="font-sans text-white/30 mb-5" style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>Navigate</p>
              <ul className="space-y-3">
                {[["#collection","Collection"],["#about","Our Story"],["#services","Services"],["#testimonials","Reviews"],["#contact","Contact"]].map(([href, label]) => (
                  <li key={href}><a href={href} className="font-sans text-white/50 hover:text-gold-400 transition-colors" style={{ fontSize: "0.82rem" }}>{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-white/30 mb-5" style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>Contact</p>
              <ul className="space-y-3">
                <li className="font-sans text-white/50" style={{ fontSize: "0.82rem" }}>Sacramento, California</li>
                <li><a href="mailto:Christophersfinejewlers@gmail.com" className="font-sans text-white/50 hover:text-gold-400 transition-colors" style={{ fontSize: "0.82rem" }}>Christophersfinejewlers@gmail.com</a></li>
                <li className="font-sans text-white/50" style={{ fontSize: "0.82rem" }}>By Appointment Only</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <p className="font-sans text-white/25" style={{ fontSize: "0.72rem" }}>© 2026 Christopher&rsquo;s Fine Jewelers. All rights reserved.</p>
            <p className="font-sans text-white/20" style={{ fontSize: "0.72rem", letterSpacing: "0.1em" }}>FINE JEWELRY · SACRAMENTO, CA</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
