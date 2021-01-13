const form = document.getElementById('form');
const password1el = document.getElementById('password1');
const password2el = document.getElementById('password2');
const messageContainer = document.getElementById('message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    //using contraint api
    isValid = form.checkValidity();
    console.log(isValid);
    //style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    //check to see if passwords match 
    if (password1el.value === password2el.value) {
        passwordsMatch = true;
        password1el.style.borderColor = 'green';
        password2el.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1el.style.borderColor = 'red';
        password2el.style.borderColor = 'red';
        return;
    }
    // if form is valid and passwords match 
    if (isValid && passwordsMatch) {
        message.textContent = 'successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    //do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    //validate form
    validateForm();
    //submit data if valid 
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}


//Event listener 
form.addEventListener('submit', processFormData);
