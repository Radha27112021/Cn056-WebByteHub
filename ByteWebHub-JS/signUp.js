const signUpForm = document.getElementById('sign-up-form');

signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const pwd = document.getElementById('pwd');
    const cpwd = document.getElementById('cpwd');

    if (pwd.value !== cpwd.value) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // submit form data to server
    const formData = new FormData(signUpForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/sign-up');
    xhr.send(formData);

    // display success message
    alert('Successfully signed up!');
    signUpForm.reset.getElementById('cpwd');

    if (pwd.value !== cpwd.value) {
        alert('Passwords do not match.');
        return;
    }

    // Add your sign-up logic here (e.g. sending a request to();
});