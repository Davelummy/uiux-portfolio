document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const revealTargets = document.querySelectorAll('[data-reveal]');
const supportsIntersectionObserver = 'IntersectionObserver' in window;

const revealOnScroll = supportsIntersectionObserver
  ? new IntersectionObserver(
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
    )
  : null;

revealTargets.forEach((target, index) => {
  if (!supportsIntersectionObserver) {
    target.classList.add('reveal');
    return;
  }
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

const menuToggle = document.querySelector('.menu-toggle');
const siteHeader = document.querySelector('.site-header');
const navLinks = document.querySelectorAll('.nav a');

if (menuToggle && siteHeader) {
  const menuLabel = menuToggle.querySelector('.menu-toggle-label');
  const setMenuState = (isOpen) => {
    siteHeader.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('nav-open', isOpen);
    if (menuLabel) {
      menuLabel.textContent = isOpen ? 'Close' : 'Menu';
    }
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.contains('is-open');
    setMenuState(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (siteHeader.classList.contains('is-open')) {
        setMenuState(false);
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!siteHeader.classList.contains('is-open')) {
      return;
    }
    if (!siteHeader.contains(event.target)) {
      setMenuState(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuState(false);
    }
  });
}

const contactForm = document.querySelector('.contact-form');
const contactStatus = document.querySelector('.form-status');
if (contactForm) {
  contactForm.addEventListener('submit', () => {
    if (contactStatus) {
      contactStatus.textContent = 'Thanks for reaching out! I will respond within 48 hours.';
      contactStatus.hidden = false;
    }
  });
}
