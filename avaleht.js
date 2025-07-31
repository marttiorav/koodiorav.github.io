const menu = document.getElementById('menu');
const drop = document.getElementById('drop');

menu.addEventListener('click', () => {
  drop.style.display = drop.style.display === 'block' ? 'none' : 'block';
});

// Optional: Close menu if clicking outside
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !drop.contains(event.target)) {
    drop.style.display = 'none';
  }
});