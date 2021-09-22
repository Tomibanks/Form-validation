const checkRequired = document.getElementById('form');
const checkLength = document.getElementById('username');
const checkEmail = document.getElementById('email');
const checkPasswordsMatch = document.getElementById('password');
const msg = document.querySelector('.msg')

checkRequired.addEventListener('submit', onSubmit)

function onSubmit(e) {
 e.preventDefault();

if(checkLength.value === '') {
 msg.classList.add('error');
 msg.innerHTML = 'Username must be less than 15 characters';
 setTimeout(() => msg.remove(), 3000);
} else {

}

if(checkEmail.value === '') {
 msg.innerHTML = 'Username must be less than 15 characters';
} else {
 checkLength.setError(null);
return true;
}


}



