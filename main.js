function toggleNavbar() {
  var dropdown, barIcon, closeIcon;
  dropdown = document.querySelector('.main-nav__items');
  barIcon = document.querySelector('.fa-bars');
  closeIcon = document.querySelector('.fa-times');
  dropdown.classList.toggle('open');
  barIcon.classList.toggle('close');
  closeIcon.classList.toggle('close');
}
