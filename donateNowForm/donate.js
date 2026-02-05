<<<<<<< HEAD
// password validation
// selectors
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm__password')
const form = document.querySelector('form')
const toaster = document.querySelector('.toaster')
const toastTitle = document.querySelector('.password_validation h3')
let timer;
const progress1 = document.querySelector('.progress_bar1')
const progress2 = document.querySelector('.progress_bar2')
const progress3 = document.querySelector('.progress_bar3')
const validation = document.querySelector('.password_validation')
// open validaton checker
password.addEventListener('focus', () => {
  validation.style.display = 'flex'

})
// timer event
function setTimer(delay, text) {
  clearTimeout(timer)
  toaster.classList.add('active')

  toaster.querySelector('.toast').textContent = text
  timer = setTimeout(() => {
    toaster.classList.remove('active')
  }, delay)
}
// checkInputs
const checkInputs = () => {
  const passwordValue = password.value.trim()
  const confirmPasswordValue = confirmPassword.value.trim()
  if (passwordValue === '') {
    setTimer(1000, 'password cannot be empty')
    toaster.style.backgroundColor = 'red'

  } else if (confirmPasswordValue === '') {
    setTimer(1000, 'confirm password cannot be empty')
    toaster.style.backgroundColor = 'red'
  } else if (passwordValue !== confirmPasswordValue) {
    setTimer(1000, 'passwords do not match')
    toaster.style.backgroundColor = 'red'
  } else {
    setTimer(1000, 'donation successful')
    toaster.style.backgroundColor = 'green'
  }

  //     check password strength
  if (passwordValue.length < 8) {
    setTimer(3000, 'password must be at least 8 characters')
    toaster.style.backgroundColor = 'red'
  }
  if (!passwordValue || !confirmPasswordValue) {
    setTimer(3000, 'password or confirm password cannot be empty')
    toaster.style.backgroundColor = 'red'
  }

  checkPassowrdStrength(passwordValue)
}
// check password strength
const checkPassowrdStrength = (password) => {
  toastTitle.innerHTML = ''

  if (password.length < 8) {
    toastTitle.innerHTML = 'password must be at least 8 characters'
    toastTitle.style.color = 'darkred'
  } else if (password.length >= 8 && password.length < 10) {
    toastTitle.innerHTML = 'Bad password'
    toastTitle.style.color = 'darkred'
    progress1.style.width = '33%'
  } else if (password.length >= 12 && password.length < 16) {

    toastTitle.innerHTML = 'password is medium'
    toastTitle.style.color = 'darkred'
    progress2.style.width = '33%'
  } else {
    toastTitle.innerHTML = 'Excellent password - tour password is strong and secure'
    progress3.style.width = '35%'
    setTimer(400, 'Excellent password - tour password is strong and secure')

  }
}
// form handler
form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()


}
)

=======
// password validation
  // selectors
 const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm__password')
const form = document.querySelector('form')
const toaster = document.querySelector('.toaster')
const toastTitle = document.querySelector('.password_validation h3')
let timer;
const progress1 = document.querySelector('.progress_bar1')
const progress2 = document.querySelector('.progress_bar2')
const progress3 = document.querySelector('.progress_bar3')
const validation = document.querySelector('.password_validation')
// open validaton checker
password.addEventListener('focus',()=>{
    validation.style.display = 'flex'

})
 // timer event
function setTimer(delay,text) {
    clearTimeout(timer)
    toaster.classList.add('active')

    toaster.querySelector('.toast').textContent = text
    timer = setTimeout(() => {
        toaster.classList.remove('active')
    }, delay)
}
// checkInputs
 const checkInputs = () => {
    const passwordValue = password.value.trim()
     const confirmPasswordValue = confirmPassword.value.trim()
     if(passwordValue === '') {
         setTimer(1000,'password cannot be empty')
         toaster.style.backgroundColor = 'red'

     } else if(confirmPasswordValue === '') {
         setTimer(1000,'confirm password cannot be empty')
         toaster.style.backgroundColor = 'red'
     } else if(passwordValue !== confirmPasswordValue) {
         setTimer(1000, 'passwords do not match')
         toaster.style.backgroundColor = 'red'
     } else {
         setTimer(1000, 'donation successful')
         toaster.style.backgroundColor = 'green'
     }

 //     check password strength
      if(passwordValue.length < 8) {
          setTimer(3000, 'password must be at least 8 characters')
          toaster.style.backgroundColor = 'red'
      }
      if(!passwordValue || !confirmPasswordValue) {
          setTimer(3000, 'password or confirm password cannot be empty')
          toaster.style.backgroundColor = 'red'
      }

      checkPassowrdStrength(passwordValue)
 }
 // check password strength
 const checkPassowrdStrength = (password) => {
  toastTitle.innerHTML = ''

     if(password.length < 8) {
         toastTitle.innerHTML = 'password must be at least 8 characters'
         toastTitle.style.color = 'darkred'
     } else if(password.length >= 8 && password.length < 10) {
         toastTitle.innerHTML = 'Bad password'
         toastTitle.style.color = 'darkred'
         progress1.style.width = '33%'
     } else if(password.length >= 12 && password.length < 16) {

         toastTitle.innerHTML = 'password is medium'
         toastTitle.style.color = 'darkred'
         progress2.style.width = '33%'
     } else {
         toastTitle.innerHTML = 'Excellent password - tour password is strong and secure'
         progress3.style.width = '35%'
         setTimer(400,'Excellent password - tour password is strong and secure')

     }
 }
 // form handler
 form.addEventListener('submit', (e) => {
     e.preventDefault()
     checkInputs()


     }
 )

>>>>>>> 2b25be485a29e89db1ad8ed600043f94bf07b65d
