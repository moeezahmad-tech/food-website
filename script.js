const sections = document.querySelectorAll('.section-reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

sections.forEach((section, idx) => {
  section.style.transitionDelay = `${idx * 80}ms`;
  observer.observe(section);
});

const reserveForm = document.querySelector('.reserve-form');

if (reserveForm) {
  reserveForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = reserveForm.querySelector('button');
    if (!button) return;

    const originalText = button.textContent;
    button.textContent = 'Reservation Sent';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      reserveForm.reset();
    }, 1800);
  });
}
