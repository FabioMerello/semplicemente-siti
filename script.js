(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  const desktop = window.matchMedia('(min-width: 861px)');

  // Menu mobile (hamburger)
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !header.contains(e.target)) {
      setMenu(false);
    }
  });

  desktop.addEventListener('change', (e) => {
    if (e.matches) setMenu(false);
  });

  // Ombra dell'header quando si scorre
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Anno nel footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
