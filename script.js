// Smooth scroll for internal links
document.addEventListener('click', function(e){
  const t = e.target;
  if(t.matches('a[href^="#"]')){
    const href = t.getAttribute('href');
    const el = document.querySelector(href);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav if open
      document.getElementById('nav').classList.remove('open');
    }
  }
}, false);

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
menuToggle && menuToggle.addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
});

// IntersectionObserver fade-in
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.section, .card, .project-card, .skill, .hero-art').forEach(el => {
  io.observe(el);
});

// Contact form simple behavior
const form = document.getElementById('contactForm');
form && form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){ alert('Please fill all fields'); return; }
  // Use mailto: to open the user's email client
  const subject = encodeURIComponent('Contact from Portfolio');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
});

// Set current year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
