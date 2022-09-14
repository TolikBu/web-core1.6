const sliderBrands = () => {
  let swiper
  let init = false;

  function swiperCard() {
    if (window.innerWidth <= 576) {
      if (!init) {
        init = true
        swiper = new Swiper('.swiper-brands', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination-brands',
            clickable: true
          }
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

export default sliderBrands
