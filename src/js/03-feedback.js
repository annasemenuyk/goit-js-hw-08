
import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector('.feedback-form')

if (localStorage.getItem('feedback-form-state')) {
    feedbackForm.elements.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
}

if (localStorage.getItem('feedback-form-state')) {
    feedbackForm.elements.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
}

feedbackForm.addEventListener('input', throttle(onFormInputChange, 500));
feedbackForm.addEventListener('submit', () => {localStorage.removeItem('feedback-form-state')})

let inputsValues = {
        email: '',
        message: '',
    }

function onFormInputChange(e) {
   
    if (e.currentTarget.elements.email.value) {
        inputsValues.email = e.currentTarget.elements.email.value;
    }

    if (e.currentTarget.elements.message.value) {
        inputsValues.message = e.currentTarget.elements.message.value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(inputsValues))
}