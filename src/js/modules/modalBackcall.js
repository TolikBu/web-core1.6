const modalBackcall = () => {
  const btnTelephone = document.querySelectorAll('.telephone')
  const overlay = document.querySelector('.overlays-backcall')
  const feedbackModal = document.querySelector('.backcall-modal')
  const body = document.querySelector('body')
  
  btnTelephone.forEach(item => {
    item.addEventListener('click', () => {
      overlay.classList.add('overlays-backcall--active')
      feedbackModal.classList.add('backcall-modal--active')
      body.classList.add('scroll')
    })
  })

  overlay.addEventListener('click', (e) => {
    if (
      !e.target.closest('.backcall-modal') ||
      e.target.classList.contains('backcall-form__close')
    ) {
      overlay.classList.remove('overlays-backcall--active')
      feedbackModal.classList.remove('backcall-modal--active')
      body.classList.remove('scroll')
    }
  })
}

export default modalBackcall
