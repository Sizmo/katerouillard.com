const menuBtnOpen = document.getElementById('menu-btn-open')
const menuBtnClose = document.getElementById('menu-btn-close')
const navList = document.getElementById('nav-list')
const icon = document.getElementById('icon')

menuBtnOpen.addEventListener('click', openMenu)

menuBtnClose.addEventListener('click', closeMenu)

function openMenu() {
  menuBtnOpen.style.display = 'none'
  menuBtnClose.style.display = 'unset'
  navList.classList.add('nav-list-mobile')
  icon.classList.add('absolute-icon')
}

function closeMenu() {
  menuBtnClose.style.display = 'none'
  menuBtnOpen.style.display = 'unset'
  navList.classList.remove('nav-list-mobile')
}
