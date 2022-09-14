const menu = () => {
  const menuBtn = document.querySelector('.head-logo__btn')
  const menuClose = document.querySelector('.sidebar__close')
  const menu = document.querySelector('.sidebar')
  const overlay = document.querySelector('.overlays')
  const telephoneBtn = document.querySelector('.telephone')


  menuBtn.addEventListener('click', () => {
    menu.classList.add('sidebar--active')
    overlay.classList.add('overlays--active')
  })

  overlay.addEventListener('click', (e) => {
    menu.classList.remove('sidebar--active')
    overlay.classList.remove('overlays--active')
  })

  menuClose.addEventListener('click', (e) => {
    menu.classList.remove('sidebar--active')
    overlay.classList.remove('overlays--active')
  })

  telephoneBtn.addEventListener('click', (e) => {
    menu.classList.remove('sidebar--active')
    overlay.classList.remove('overlays--active')
  })
}

export default menu
