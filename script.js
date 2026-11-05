/* =========================================================
   nouman — Portfolio
   Edit the DATA section below to update site content.
   ========================================================= */

/* ------------------------- DATA ------------------------- */
const TYPED_WORDS = ['interfaces', 'web apps', 'design systems', 'experiences'];

const MARQUEE = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Redux', 'GraphQL', 'Vue', 'Figma', 'Vite'];

const SERVICES = [
  { title: 'Frontend Development', text: 'Scalable, component-driven apps with React & Next.js, typed end-to-end with TypeScript.',
    icon: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>' },
  { title: 'UI Engineering', text: 'Pixel-perfect Figma-to-code, reusable design systems and buttery-smooth micro-interactions.',
    icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/>' },
  { title: 'Performance & SEO', text: 'Core Web Vitals tuning, code-splitting, image optimisation and SSR/SSG for blazing-fast loads.',
    icon: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>' },
  { title: 'Responsive & Accessible', text: 'Mobile-first layouts that work everywhere, built to WCAG standards so everyone can use them.',
    icon: '<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M12 18h.01"/>' },
];

const TECH = [
  { group: 'Languages', items: ['JavaScript (ES2024)', 'TypeScript', 'HTML5', 'CSS3 / SCSS'] },
  { group: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Vue / Nuxt', 'Redux Toolkit', 'React Query', 'Zustand'] },
  { group: 'Styling & Motion', items: ['Tailwind CSS', 'Styled Components', 'shadcn/ui', 'Framer Motion', 'GSAP'] },
  { group: 'Tools & Workflow', items: ['Git & GitHub', 'Vite', 'Jest / Vitest', 'Playwright', 'Figma', 'Vercel'] },
];

// image: optional path, e.g. 'assets/pulse.png' — falls back to a gradient mockup
const PROJECTS = [
  { title: 'Pulse Analytics Dashboard', cat: 'saas', label: 'SaaS', year: 2026,
    text: 'Real-time analytics platform with interactive charts, role-based access and dark mode. Cut initial load time by 45%.',
    tags: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind'], from: 'from-violet-500', to: 'to-cyan-400', mock: 'dashboard',
    live: '#', code: '#' },
  { title: 'Lumen Store', cat: 'ecom', label: 'E-commerce', year: 2025,
    text: 'Headless storefront with instant product search, delightful cart animations and Stripe checkout.',
    tags: ['React', 'Shopify API', 'Framer Motion', 'Zustand'], from: 'from-pink-500', to: 'to-amber-400', mock: 'shop',
    live: '#', code: '#' },
  { title: 'Chatter — Realtime Messenger', cat: 'web', label: 'Web app', year: 2025,
    text: 'WebSocket-powered chat with typing indicators, file sharing and offline-first PWA support.',
    tags: ['React', 'Socket.io', 'PWA', 'React Query'], from: 'from-emerald-400', to: 'to-blue-500', mock: 'chat',
    live: '#', code: '#' },
  { title: 'Voyage — Travel Planner', cat: 'web', label: 'Web app', year: 2024,
    text: 'Trip planning app with drag-and-drop itineraries, interactive maps and real-time collaborative editing.',
    tags: ['Vue 3', 'Pinia', 'Mapbox', 'SCSS'], from: 'from-amber-400', to: 'to-rose-500', mock: 'landing',
    live: '#', code: '#' },
];

const EXPERIENCE = [
  { date: '2024 — Present', role: 'Senior Frontend Developer', company: 'TechNova',
    text: 'Leading the frontend for a B2B SaaS product used by 50k+ users. Built a shared design system and migrated the codebase to the Next.js App Router.',
    tags: ['Next.js', 'TypeScript', 'Design Systems'] },
  { date: '2023 — 2024', role: 'Frontend Developer', company: 'PixelCraft Studio',
    text: 'Delivered 20+ client websites and web apps. Raised the average Lighthouse performance score from 62 to 95.',
    tags: ['React', 'Tailwind', 'GSAP'] },
  { date: '2022 — 2023', role: 'Junior Web Developer', company: 'CodeBridge',
    text: 'Built responsive landing pages and reusable UI components, collaborating closely with designers and backend engineers.',
    tags: ['JavaScript', 'SCSS', 'Vue'] },
];

const TESTIMONIALS = [
  { quote: 'nouman turned our rough Figma file into a polished, lightning-fast app. Communication was excellent and every detail was on point.',
    name: 'Sarah Khan', role: 'Product Manager, TechNova', color: 'bg-violet-500' },
  { quote: "One of the most reliable developers I've worked with. Clean code, great animations and always ahead of deadlines.",
    name: 'Ahmed Raza', role: 'Founder, PixelCraft', color: 'bg-emerald-500' },
  { quote: 'Our conversion rate jumped 30% after nouman rebuilt our storefront. Highly recommended for any frontend work.',
    name: 'James Miller', role: 'CEO, Lumen', color: 'bg-pink-500' },
];

/* ----------------------- HELPERS ------------------------ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ----------------------- RENDERING ---------------------- */
function mockup(type) {
  const bar = 'rounded bg-white/70';
  switch (type) {
    case 'dashboard':
      return `<div class="flex h-full gap-3 rounded-xl bg-white/15 p-3 backdrop-blur">
        <div class="w-1/5 space-y-2 rounded-lg bg-white/20 p-2"><div class="h-2 ${bar}"></div><div class="h-2 w-3/4 ${bar} opacity-60"></div><div class="h-2 w-2/3 ${bar} opacity-60"></div></div>
        <div class="flex flex-1 flex-col gap-2"><div class="grid grid-cols-3 gap-2">${'<div class="h-8 rounded-lg bg-white/30"></div>'.repeat(3)}</div>
        <div class="flex flex-1 items-end gap-1.5 rounded-lg bg-white/20 p-2">${[40, 70, 55, 90, 65, 80, 50].map((h) => `<div class="flex-1 rounded-t bg-white/80" style="height:${h}%"></div>`).join('')}</div></div></div>`;
    case 'shop':
      return `<div class="grid h-full grid-cols-3 gap-3">${Array.from({ length: 6 }, () => `<div class="flex flex-col gap-1.5 rounded-xl bg-white/20 p-2 backdrop-blur"><div class="flex-1 rounded-lg bg-white/40"></div><div class="h-1.5 w-3/4 ${bar}"></div><div class="h-1.5 w-1/3 ${bar} opacity-60"></div></div>`).join('')}</div>`;
    case 'chat':
      return `<div class="flex h-full flex-col justify-end gap-2.5 rounded-xl bg-white/15 p-4 backdrop-blur">
        <div class="h-7 w-1/2 rounded-2xl rounded-bl-sm bg-white/40"></div><div class="ml-auto h-7 w-2/5 rounded-2xl rounded-br-sm bg-white/80"></div>
        <div class="h-7 w-3/5 rounded-2xl rounded-bl-sm bg-white/40"></div><div class="ml-auto h-7 w-1/3 rounded-2xl rounded-br-sm bg-white/80"></div></div>`;
    default:
      return `<div class="flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-white/15 p-4 text-center backdrop-blur">
        <div class="h-4 w-2/3 ${bar}"></div><div class="h-2 w-1/2 ${bar} opacity-60"></div><div class="h-2 w-2/5 ${bar} opacity-60"></div>
        <div class="mt-2 h-7 w-24 rounded-full bg-white/90"></div></div>`;
  }
}

function render() {
  // Marquee (duplicated for seamless loop)
  const words = MARQUEE.map((w) => `<span class="flex items-center gap-12">${esc(w)}<span class="text-brand-500">✦</span></span>`).join('');
  $('#marquee').innerHTML = words + words;

  $('#services').innerHTML = SERVICES.map((s) => `
    <article class="reveal card card-hover group p-7">
      <div class="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-lg shadow-brand-500/25 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg>
      </div>
      <h3 class="mt-6 text-lg font-bold text-zinc-900 dark:text-white">${esc(s.title)}</h3>
      <p class="mt-2 text-sm leading-relaxed">${esc(s.text)}</p>
    </article>`).join('');

  $('#techGroups').innerHTML = TECH.map((g) => `
    <div class="reveal">
      <h3 class="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">${esc(g.group)}</h3>
      <ul class="flex flex-wrap gap-2">${g.items.map((i) => `<li class="chip">${esc(i)}</li>`).join('')}</ul>
    </div>`).join('');

  $('#projectGrid').innerHTML = PROJECTS.map((p) => `
    <article class="project-card reveal card card-hover group overflow-hidden" data-cat="${esc(p.cat)}">
      <div class="relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.from} ${p.to} p-6 sm:p-8">
        <div class="h-full transition-transform duration-500 group-hover:scale-[1.04] group-hover:-rotate-1">
          ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" class="h-full w-full rounded-xl object-cover shadow-2xl" loading="lazy" />` : mockup(p.mock)}
        </div>
      </div>
      <div class="p-6 sm:p-7">
        <div class="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-zinc-500"><span>${esc(p.label)}</span><span>${p.year}</span></div>
        <h3 class="mt-3 text-xl font-bold text-zinc-900 dark:text-white">${esc(p.title)}</h3>
        <p class="mt-2 text-sm leading-relaxed">${esc(p.text)}</p>
        <ul class="mt-5 flex flex-wrap gap-2">${p.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join('')}</ul>
        <div class="mt-6 flex items-center gap-5 text-sm font-semibold">
          <a href="${esc(p.live)}" target="_blank" rel="noopener" class="group/l inline-flex items-center gap-1 text-zinc-900 hover:text-brand-500 dark:text-white">Live demo <span class="transition-transform group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5">↗</span></a>
          <a href="${esc(p.code)}" target="_blank" rel="noopener" class="text-zinc-500 hover:text-brand-500">Source code</a>
        </div>
      </div>
    </article>`).join('');

  $('#timeline').innerHTML = EXPERIENCE.map((e, i) => `
    <li class="reveal relative">
      <span class="absolute -left-[42.5px] top-1.5 grid h-5 w-5 place-items-center rounded-full border-4 border-zinc-50 ${i === 0 ? 'bg-brand-500' : 'bg-zinc-300 dark:bg-zinc-600'} sm:-left-[50.5px] dark:border-ink-950">
        ${i === 0 ? '<span class="absolute h-full w-full animate-ping rounded-full bg-brand-500/50"></span>' : ''}
      </span>
      <p class="font-mono text-sm font-medium text-brand-500">${esc(e.date)}</p>
      <div class="card card-hover mt-3 p-6">
        <h3 class="text-lg font-bold text-zinc-900 dark:text-white">${esc(e.role)} <span class="font-medium text-zinc-500">@ ${esc(e.company)}</span></h3>
        <p class="mt-2 leading-relaxed">${esc(e.text)}</p>
        <ul class="mt-4 flex flex-wrap gap-2">${e.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join('')}</ul>
      </div>
    </li>`).join('');

  $('#quotes').innerHTML = TESTIMONIALS.map((t) => `
    <figure class="reveal card card-hover flex flex-col p-7">
      <svg class="h-8 w-8 text-brand-500/40" viewBox="0 0 24 24" fill="currentColor"><path d="M9.6 6C6 7.6 4 10.6 4 14.4V18h6v-6H7c0-2.2 1.2-3.9 3.4-4.9L9.6 6zm10 0C16 7.6 14 10.6 14 14.4V18h6v-6h-3c0-2.2 1.2-3.9 3.4-4.9L19.6 6z"/></svg>
      <div class="mt-3 flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">${'★'.repeat(5)}</div>
      <blockquote class="mt-4 flex-1 leading-relaxed text-zinc-700 dark:text-zinc-300">“${esc(t.quote)}”</blockquote>
      <figcaption class="mt-6 flex items-center gap-3 border-t border-zinc-200 pt-5 dark:border-white/10">
        <span class="grid h-11 w-11 place-items-center rounded-full ${t.color} font-bold text-white">${esc(t.name[0])}</span>
        <span><strong class="block text-zinc-900 dark:text-white">${esc(t.name)}</strong><small class="text-zinc-500">${esc(t.role)}</small></span>
      </figcaption>
    </figure>`).join('');
}

/* ---------------------- INTERACTIONS -------------------- */
function initTheme() {
  $('#themeToggle').addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
  });
}

function initNav() {
  const nav = $('#nav');
  const progress = $('#progress');
  const toTop = $('#toTop');

  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('backdrop-blur-xl', y > 20);
    nav.classList.toggle('bg-white/70', y > 20);
    nav.classList.toggle('dark:bg-ink-950/70', y > 20);
    nav.classList.toggle('shadow-sm', y > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    const show = y > 600;
    toTop.classList.toggle('opacity-0', !show);
    toTop.classList.toggle('translate-y-4', !show);
    toTop.classList.toggle('pointer-events-none', !show);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const btn = $('#menuBtn');
  const menu = $('#mobileMenu');
  const icon = $('#menuIcon');
  const setMenu = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('opacity-0', !open);
    menu.classList.toggle('-translate-y-2', !open);
    menu.classList.toggle('pointer-events-none', !open);
    icon.setAttribute('d', open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 17h16');
  };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  $$('.mobile-link').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

  // Active section highlight
  const links = $$('.nav-link');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${en.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((s) => spy.observe(s));
}

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
      el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 6) * 80}ms`;
      el.classList.add('is-visible');
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el) => io.observe(el));
}

function initTyped() {
  const el = $('#typed');
  if (reduceMotion) return;
  let w = 0, i = TYPED_WORDS[0].length, deleting = true;
  const tick = () => {
    i += deleting ? -1 : 1;
    el.textContent = TYPED_WORDS[w].slice(0, i);
    let delay = deleting ? 45 : 90;
    if (deleting && i === 0) {
      deleting = false;
      w = (w + 1) % TYPED_WORDS.length;
      delay = 300;
    } else if (!deleting && i === TYPED_WORDS[w].length) {
      deleting = true;
      delay = 1800;
    }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2000);
}

function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = +el.dataset.count;
      const start = performance.now();
      const dur = 1400;
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$('[data-count]').forEach((el) => io.observe(el));
}

function initFilters() {
  const btns = $$('.filter-btn');
  btns.forEach((b) => b.addEventListener('click', () => {
    btns.forEach((x) => { x.classList.toggle('is-active', x === b); x.setAttribute('aria-selected', String(x === b)); });
    const f = b.dataset.filter;
    $$('.project-card').forEach((card) => {
      const show = f === 'all' || card.dataset.cat === f;
      card.classList.toggle('is-hidden', !show);
      if (show) card.classList.add('is-visible');
    });
  }));
}

function initTilt() {
  const card = $('#tilt');
  if (reduceMotion || !matchMedia('(hover: hover)').matches) return;
  const wrap = card.parentElement;
  wrap.addEventListener('mousemove', (e) => {
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  });
  wrap.addEventListener('mouseleave', () => { card.style.transform = ''; });
}

function initCursorGlow() {
  const glow = $('#cursorGlow');
  if (reduceMotion || !matchMedia('(hover: hover)').matches) return;
  addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
    glow.classList.remove('opacity-0');
  }, { passive: true });
}

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.remove('opacity-0', 'translate-y-6');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('opacity-0', 'translate-y-6'), 2400);
}

function initCopy() {
  $$('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); toast('Email copied to clipboard ✓'); }
    catch { toast(b.dataset.copy); }
  }));
}

function initForm() {
  const form = $('#contactForm');
  const status = $('#formStatus');
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let ok = true;
    $$('.field', form).forEach((f) => {
      const input = $('input, textarea', f);
      const valid = input.value.trim() !== '' && (input.type !== 'email' || emailRe.test(input.value.trim()));
      f.classList.toggle('has-error', !valid);
      if (!valid) ok = false;
    });
    if (!ok) {
      status.className = 'min-h-[1.25rem] text-sm text-red-500';
      status.textContent = 'Please fill in all fields with a valid email.';
      return;
    }

    const btn = $('button[type="submit"] span', form);
    const label = btn.textContent;
    btn.textContent = 'Sending…';

    /* Hook up a real backend here, e.g. Formspree:
       await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }); */
    await new Promise((r) => setTimeout(r, 900));

    btn.textContent = label;
    form.reset();
    status.className = 'min-h-[1.25rem] text-sm text-emerald-500';
    status.textContent = "Thanks! Your message has been sent — I'll reply soon.";
    toast('Message sent ✓');
  });

  $$('input, textarea', form).forEach((i) => i.addEventListener('input', () => i.parentElement.classList.remove('has-error')));
}

/* ------------------------- INIT ------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  render();
  initTheme();
  initNav();
  initReveal();
  initTyped();
  initCounters();
  initFilters();
  initTilt();
  initCursorGlow();
  initCopy();
  initForm();
});
