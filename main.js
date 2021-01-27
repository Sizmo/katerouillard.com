const menuBtnOpen = document.getElementById('menu-btn-open')
const menuBtnClose = document.getElementById('menu-btn-close')
const navList = document.getElementById('nav-list')
const navListItems = document.getElementsByClassName('nav-list-item')
const icon = document.getElementById('icon')

menuBtnOpen.addEventListener('click', openMenu)

menuBtnClose.addEventListener('click', closeMenu)

function openMenu() {
  menuBtnOpen.style.display = 'none'
  menuBtnClose.style.display = 'initial'
  navList.classList.add('nav-list-mobile')
  icon.classList.add('absolute-icon')

  let nli = navListItems
  for (let i = 0; i < nli.length; i++) {
    nli[i].classList.add('nav-list-item-mobile')
  }
}

function closeMenu() {
  menuBtnClose.style.display = 'none'
  menuBtnOpen.style.display = 'initial'
  navList.classList.remove('nav-list-mobile')

  let nli = navListItems
  for (let i = 0; i < nli.length; i++) {
    nli[i].classList.remove('nav-list-item-mobile')
  }
}
