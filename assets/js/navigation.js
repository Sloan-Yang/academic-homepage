const nav = document.querySelector('.navbar');
const toggle = nav?.querySelector('.navbar-toggler');
const links = nav?.querySelector('.site-navigation');

if (toggle && links) {
  nav.classList.add('enhanced');
  toggle.hidden = false;
  const close = () => toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true'));
  });
  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      close();
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) close();
  });
}
