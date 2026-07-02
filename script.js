const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => io.observe(el));

document.querySelectorAll('.nav-links a').forEach((a) => {
  a.addEventListener('click', () => {
    const navCheck = document.getElementById('nav-check');
    if (navCheck) navCheck.checked = false;
  });
});
