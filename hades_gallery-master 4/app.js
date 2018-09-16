var mailList = document.querySelector(".mail-list")
var introScreen = document.querySelector(".intro")
var mailScreen = document.querySelector(".mail-screen")
var thankScreen = document.querySelector(".thank-screen")
var emailForm = document.querySelector('#mc-embedded-subscribe-form')

mailList.addEventListener('click', () => {
  mailList.classList.toggle('fadeOut')
  introScreen.classList.toggle('fadeOut')
  
  
  setTimeout(() => {
    mailScreen.classList.toggle('hidden')
    mailScreen.classList.toggle('fadeIn')
    mailList.classList.toggle('hidden')
    introScreen.classList.toggle('hidden')
  }, 1000);
})

emailForm.addEventListener('submit', () => {
    mailScreen.classList.toggle('fadeOut')

    setTimeout(() => {
      console.log('hide')
      mailScreen.classList.toggle('hidden')
      thankScreen.classList.toggle('hidden')
      thankScreen.classList.toggle('fadeIn')
    }, 1000);
})
