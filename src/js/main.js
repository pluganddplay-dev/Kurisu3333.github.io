// =============================================================================
// Site interactions: mobile menu, navbar-on-scroll, active nav link,
// reveal-on-scroll, animated counters, and the mobile testimonial carousel.
// =============================================================================

// Mobile menu
(function () {
  const btn = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  const iconMenu = document.getElementById('iconMenu');
  const iconClose = document.getElementById('iconClose');
  if (!btn || !menu) return;
  const toggle = (force) => {
    const isOpen = force !== undefined ? force : menu.classList.contains('hidden');
    menu.classList.toggle('hidden', !isOpen);
    iconMenu.classList.toggle('hidden', isOpen);
    iconClose.classList.toggle('hidden', !isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  };
  btn.addEventListener('click', () => toggle());
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
})();

// Navbar background on scroll
(function () {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Active nav link
(function () {
  const links = document.querySelectorAll('header nav a.nav-link');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => observer.observe(s));
})();

// Reveal on scroll
(function () {
  const els = document.querySelectorAll('.reveal');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

// Animated counters
(function () {
  const counters = document.querySelectorAll('[data-counter]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suffix; return; }
    const duration = 1400;
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => io.observe(c));
})();

// Navbar gold border on scroll
(function () {
  const hdr = document.getElementById("navbar");
  if (!hdr) return;
  window.addEventListener("scroll", () => {
    hdr.classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });
})();

// Testimonial dots + arrows (mobile)
(function () {
  const track = document.getElementById("testimonialTrack");
  const dotsWrap = document.getElementById("testimonialDots");
  if (!track || !dotsWrap) return;
  const cards = Array.from(track.querySelectorAll(".testimonial"));
  const total = cards.length;
  let active = 0;
  const dots = cards.map((_, i) => {
    const d = document.createElement("button");
    d.className = "h-1.5 rounded-full transition-all duration-300 " + (i === 0 ? "w-5 bg-gold" : "w-1.5 bg-white/25");
    d.setAttribute("aria-label", "Go to testimonial " + (i + 1));
    d.addEventListener("click", () => scrollTo(i));
    dotsWrap.appendChild(d);
    return d;
  });
  function scrollTo(i) {
    active = i;
    cards[i].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    dots.forEach((d, j) => {
      d.className = "h-1.5 rounded-full transition-all duration-300 " + (j === i ? "w-5 bg-gold" : "w-1.5 bg-white/25");
    });
  }
  document.querySelector("[data-testimonial-prev]")?.addEventListener("click", () => scrollTo((active - 1 + total) % total));
  document.querySelector("[data-testimonial-next]")?.addEventListener("click", () => scrollTo((active + 1) % total));
})();
