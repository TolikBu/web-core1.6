const modal = () => {
  const btnFeedback = document.querySelectorAll('.icon-message')
  const overlay = document.querySelector('.overlays')
  const feedbackModal = document.querySelector('.feedback-modal')
  const body = document.querySelector('body')

  btnFeedback.forEach((item) => {
    item.addEventListener('click', () => {
      overlay.classList.add('overlays--active')
      feedbackModal.classList.add('feedback-modal--active')
      body.classList.add('scroll')
    })
  })

  overlay.addEventListener('click', (e) => {
    if (
      !e.target.closest('.feedback-modal') ||
      e.target.classList.contains('feedback-form__close')
    ) {
      overlay.classList.remove('overlays--active')
      feedbackModal.classList.remove('feedback-modal--active')
      body.classList.remove('scroll')
    }
  })
}

export default modal
