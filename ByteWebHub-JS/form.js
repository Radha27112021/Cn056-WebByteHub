const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();

  if (usernameValue.length < 4) {
    setError(username, 'Username must be at least 4 characters');
  } else {
    setSuccess(username);
  }

  if (!isEmail(emailValue)) {
    setError(email, 'Email is not valid');
  } else {
    setSuccess(email);
  }

  if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 characters');
  } else {
    setSuccess(password);
  }

  if (passwordValue !== password2Value) {
    setError(password2, 'Passwords do not match');
  } else {
    setSuccess(password2);
  }

});

function setError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
  input.classList.add('error');
  input.classList.remove('success');
}

function setSuccess(input) {
  const error = input.nextElementSibling;
  error.innerText = '';
  input.classList.add('success');
  input.classList.remove('error');
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
  );
}