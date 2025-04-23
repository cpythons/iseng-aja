const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Munculkan popup setelah 1 detik
setTimeout(() => {
  popup.style.display = 'flex';
}, 1000);

// Tutup popup ketika tombol close ditekan
closeBtn.onclick = () => {
  popup.style.display = 'none';
};

// Tutup juga ketika klik di luar kotak
window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};
