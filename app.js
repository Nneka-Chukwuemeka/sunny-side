const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('closebtn');
function openNav() {
  document.getElementById('mobile').style.height = '100%';
  mobileMenu.style.display = 'none';
}

function closeNav() {
  document.getElementById('mobile').style.height = '0%';
  mobileMenu.style.display = 'block';
}
mobileMenu.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
