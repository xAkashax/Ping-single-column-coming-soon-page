const btn = document.querySelector('.btn');
const input = document.querySelector('.email');
const error = document.querySelector('.error');

function validationEmail() {
  if (input.value == "") {
    error.textContent = "Whoops! It looks like you forgot to add your email";
  } else {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!input.value.match(mailformat)) {
      input.style.borderColor = 'hsl(354, 100%, 66%)';
      error.textContent = "Please provide a valid email address"
    } else {
      input.style.borderColor = 'hsl(0, 0%, 59%)';
      error.textContent = ""
    }
  }
  input.value = '';
};


btn.addEventListener('click', validationEmail);