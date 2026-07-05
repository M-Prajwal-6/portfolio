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

const roleEl = document.querySelector('.role-text');
if (roleEl) {
  const roles = ['Software Developer', 'Java Developer', 'Full-Stack Engineer'];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeRole = () => {
    const current = roles[roleIndex];

    if (!deleting) {
      roleEl.textContent = current.slice(0, charIndex + 1);
      charIndex += 1;

      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeRole, 1400);
        return;
      }
    } else {
      roleEl.textContent = current.slice(0, charIndex - 1);
      charIndex -= 1;

      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeRole, deleting ? 60 : 110);
  };

  typeRole();
}

// keep existing nav link behaviour
document.querySelectorAll('.nav-links a').forEach((a) => {
  a.addEventListener('click', () => {
    const navCheck = document.getElementById('nav-check');
    if (navCheck) navCheck.checked = false;
  });
});

// prevent body scrolling while mobile nav is open and ensure nav is above content
const _navCheck = document.getElementById('nav-check');
if (_navCheck) {
  _navCheck.addEventListener('change', () => {
    document.body.style.overflow = _navCheck.checked ? 'hidden' : '';
    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.style.zIndex = _navCheck.checked ? '9999' : '';
  });
}
