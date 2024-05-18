const navItems = document.querySelectorAll('.side-nav__item');

navItems.forEach(item => {
  item.addEventListener('click', e => {
    navItems.forEach(item => item.classList.remove('side-nav__item--active'));
    item.classList.add('side-nav__item--active');
  });
});
