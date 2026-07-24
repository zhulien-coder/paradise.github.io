// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => preloader.classList.add('hidden'), 400);
});

// Header scroll state
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Reveal on scroll
const revealEls = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Hero particles
const particlesContainer = document.getElementById('particles');
const colors = ['#d4af6a', '#f3d38a', '#e0457a'];
for (let i = 0; i < 30; i++) {
  const p = document.createElement('span');
  const size = Math.random() * 5 + 2;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.left = `${Math.random() * 100}%`;
  p.style.background = colors[Math.floor(Math.random() * colors.length)];
  p.style.animationDuration = `${Math.random() * 8 + 6}s`;
  p.style.animationDelay = `${Math.random() * 8}s`;
  particlesContainer.appendChild(p);
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
