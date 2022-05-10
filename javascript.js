const hamburgerIcon = document.querySelector('.button');
const navigationBar = document.querySelector('.nav-bar');
const closeIcon = document.querySelector('.clos');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('show');
  navigationBar.classList.toggle('show');
  closeIcon.classList.toggle('show');
});

document.querySelectorAll('.adj,.clos').forEach((n) => n.addEventListener('click', () => {
  hamburgerIcon.classList.remove('show');
  navigationBar.classList.remove('show');
  closeIcon.classList.remove('show');
}));