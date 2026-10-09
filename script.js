const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toast = document.getElementById('toast');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.textContent = navLinks.classList.contains('open') ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.textContent = '☰';
  });
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.car-card').forEach(card => {
      card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category);
    });
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('.favorite').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
    button.textContent = button.classList.contains('liked') ? '♥' : '♡';
    showToast(button.classList.contains('liked') ? 'Mobil ditambahkan ke favorit!' : 'Mobil dihapus dari favorit.');
  });
});

document.querySelectorAll('.detail-btn').forEach(button => {
  button.addEventListener('click', () => showToast('Kamu memilih ' + button.dataset.car + '. Hubungi PDIDI untuk info lebih lanjut.'));
});

document.getElementById('year').textContent = new Date().getFullYear();
