const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  projects.forEach(card => {
    const categories = (card.dataset.category || '').split(' ');
    card.hidden = filter !== 'all' && !categories.includes(filter);
  });
}));
document.getElementById('year').textContent = new Date().getFullYear();
