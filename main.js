const signUp = document.querySelector('.sign-up');
const form = document.querySelector('form');
const inputEmail = document.querySelector('#email');
const submit = document.querySelector('button');
const errorMessage = document.querySelector('#error-message');

const successMessage = document.querySelector('.success-message');
const submitBtn = document.querySelector('#success-btn');

console.log(successMessage.classList);


form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    if (inputEmail.value === "" || inputEmail.value == null) {
        errorMessage.style.visibility = "visible";
        inputEmail.style.borderColor = "hsl(4, 100%, 67%)";
        inputEmail.style.backgroundColor = "hsla(4, 100%, 67%,0.1)";
    } else if (validateEmail(inputEmail.value) == false) {
        errorMessage.style.visibility = "visible";
        inputEmail.style.borderColor = "hsl(4, 100%, 67%)";
        inputEmail.style.backgroundColor = "hsla(4, 100%, 67%,0.1)";
    } else {
        inputEmail.value = "";
        errorMessage.style.visibility = "hidden";
        inputEmail.style.borderColor = "hsl(231, 7%, 60%)";
        inputEmail.style.backgroundColor = "#ffffff";
        signUp.classList.remove('flex'); 
        successMessage.classList.add('flex', 'flex-column');
    }
});

submitBtn.addEventListener('click', () => {
    signUp.classList.add('flex');
    successMessage.classList.remove('flex','flex-column');
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }