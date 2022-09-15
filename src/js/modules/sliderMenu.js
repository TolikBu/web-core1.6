const sliderMenu = () => {
  let swiper
  let init = false;

  function swiperCard() {
    if (window.innerWidth <= 768) {
      if (!init) {
        init = true
        swiper = new Swiper('.swiper-menu', {
          slidesPerView: 'auto',
          spaceBetween: 16,
        })
      }
    } else if (init) {
      swiper.destroy()
      init = false
    }
    window.addEventListener('resize', swiperCard)
  }
  swiperCard()
}

export default sliderMenu
