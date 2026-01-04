const revealTargets = document.querySelectorAll('[data-reveal]');

const revealOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealTargets.forEach((target, index) => {
  target.style.transitionDelay = `${index * 0.08}s`;
  revealOnScroll.observe(target);
});

const heroItems = document.querySelectorAll('[data-hero-item]');
heroItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.12}s`;
  item.classList.add('hero-enter');
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const heroVisual = document.querySelector('.hero-visual');
const heroImage = document.querySelector('.hero-image');
const heroCard = document.querySelector('.hero-card');

if (!prefersReducedMotion.matches && heroVisual && heroImage && heroCard) {
  const handleMove = (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroImage.style.setProperty('--hero-img-x', `${x * 18}px`);
    heroImage.style.setProperty('--hero-img-y', `${y * 18}px`);
    heroCard.style.setProperty('--hero-card-x', `${x * -12}px`);
    heroCard.style.setProperty('--hero-card-y', `${y * -12}px`);
  };

  heroVisual.addEventListener('mousemove', handleMove);
  heroVisual.addEventListener('mouseleave', () => {
    heroImage.style.setProperty('--hero-img-x', '0px');
    heroImage.style.setProperty('--hero-img-y', '0px');
    heroCard.style.setProperty('--hero-card-x', '0px');
    heroCard.style.setProperty('--hero-card-y', '0px');
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', () => {
    alert('Thanks for reaching out! I will respond within 48 hours.');
  });
}
