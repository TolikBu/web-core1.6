const sliderPrice = () => {
  let swiper
  let init = false;

  function swiperCard() {
    if (window.innerWidth <= 576) {
      if (!init) {
        init = true
        swiper = new Swiper('.swiper-price', {
          // slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination-price',
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

export default sliderPrice