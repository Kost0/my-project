const form = document.getElementById('ContactForm')

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')

function validateEmail() {
    // [A-Za-z0-9_\.]{3,10}@[A-Za-z0-9_\.]{1,15}.[A-Za-z0-9_\.]{2,3}
    const emailRegex = /[A-Za-z0-9_\.]{3,10}@[A-Za-z0-9_\.]{1,15}.[A-Za-z0-9_\.]{2,3}/;
    if (emailRegex.test(emailInput.value))
    {
        hideError(emailInput)
        return true
    }
    else {
        showError(emailInput)
        return false
    }
}

emailInput.addEventListener('input', validateEmail)

function showError(input, message) {
    const formControl = input.parentElement;
    const errorControl = formControl.querySelector('.error') || document.createElement('div');
    errorControl.className = 'error';
    errorControl.textContent = message;
    formControl.appendChild(errorControl);
    input.style.borderColor = 'red';
}

function hideError(input) {
    const formControl = input.parentElement;
    const errorControl = formControl.querySelector('.error');
    if (errorControl) {
        formControl.removeChild(errorControl)
    }
    input.style.borderColor = 'green';
}


const dlg = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog')
const closeBtn = document.getElementById('closeDialog')

openBtn.addEventListener('click', () => {
    lastActive = document.activeElement;
    dlg.showModal();
    dlg.querySelector('input,select,textarea,button')?.focus();
});

closeBtn.addEventListener('click', () => dlg.closest('cancel'));

form?.addEventListener('submit', (e) => {

})

dlg.addEventListener('close', () => { lastActive?.focus(); });