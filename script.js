const form = document.querySelector('form')
const spanInput = document.getElementById('email_input')
const email = document.getElementById('email')
const indexMain = document.querySelector('.index_main')
const successPage = document.querySelector('.success_main')
const errorMsg = document.querySelector('.error_text')
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

function showEmail(e) {
  e.preventDefault()
  console.log(email.value)
  if (checkValidEmail(email.value)) {
    spanInput.innerText = email.value
    successPage.style.display = 'block'
    indexMain.style.display = 'none'
  } else {
    errorMsg.style.visibility = 'visible'
    email.style.borderColor = 'orange'
  }
}

function checkValidEmail(email) {
  if (re.test(email)) {
    return true
  }
}

form.addEventListener('submit', showEmail)
