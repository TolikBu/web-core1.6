const more = () => {
  const aboutBtn = document.querySelector('.about-info__btn')
  const arrowBtn = document.querySelector('.about-info__btn-arrow')
  const aboutInfo = document.querySelector('.about-info__hidden')
  
  const bransBtn = document.querySelector('.brands__btn')
  const bransItems = document.querySelector('.brands-items')
  const bransArrow = document.querySelector('.brands__btn-arrow')

  const viewBtn = document.querySelector('.view__btn')
  const viewItems = document.querySelector('.view-items')
  const viewArrow = document.querySelector('.view__btn-arrow')


  aboutBtn.addEventListener('click', () => {
    aboutInfo.classList.toggle('about-info__hidden--active')
    arrowBtn.classList.toggle('about-info__btn-arrow--active')
  })

  bransBtn.addEventListener('click', () => {
    bransItems.classList.toggle('brands-items--active')
    bransArrow.classList.toggle('brands__btn-arrow--active')
  })

  viewBtn.addEventListener('click', () => {
    viewItems.classList.toggle('view-items--active')
    viewArrow.classList.toggle('view__btn-arrow--active')
  })

}

export default more
