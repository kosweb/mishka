const mainNavButton = document.querySelector('.main-nav__button')
const mainNavList = document.querySelector('.main-nav__list')

mainNavButton.onclick = function(evt) {
  evt.preventDefault()
  mainNavButton.classList.toggle('main-nav__button--open')
  mainNavList.classList.toggle('main-nav__list--open')
  mainNavList.classList.toggle('main-nav__list--closed')
}
