// script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle   = document.getElementById('menuToggle');
  const closeContent = document.getElementById('closeContent');
  const menuLinks    = document.querySelectorAll('#menuPanel a');
  const pages        = document.querySelectorAll('.content-page');

  // 1) Toggle sidebar
  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  // 2) Open overlay & page
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // close menu
      document.body.classList.remove('menu-open');

      // show target page
      const target = document.querySelector(link.getAttribute('href'));
      pages.forEach(p => p.classList.remove('active'));
      if (target) target.classList.add('active');

      // show overlay
      document.body.classList.add('overlay-is-open');
    });
  });

  // 3) Close overlay
  closeContent.addEventListener('click', () => {
    document.body.classList.remove('overlay-is-open');
    pages.forEach(p => p.classList.remove('active'));
  });
});
