
import throttle from 'lodash.throttle'
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект 
//с полями email и password, в которых сохраняй текущие значения полей формы.
// Пусть ключом для хранилища будет строка "feedback-form-state".

const feedbackForm = document.querySelector('.feedback-form')

if (localStorage.getItem('feedback-form-state')) {
    feedbackForm.elements.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
}

if (localStorage.getItem('feedback-form-state')) {
    feedbackForm.elements.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
}
// При загрузке страницы проверяй состояние хранилища, 
// и если там есть сохраненные данные, заполняй ими поля формы.
//  В противном случае поля должны быть пустыми.
feedbackForm.addEventListener('input', throttle(onFormInputChange, 500));//Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle
feedbackForm.addEventListener('submit', () => {localStorage.removeItem('feedback-form-state')})

let inputsValues = {
        email: '',
        message: '',
    }//При сабмите формы очищай хранилище и поля формы, а также выводи объект 
    //с полями email, password и текущими их значениями в консоль.

function onFormInputChange(event) {
   
    if (event.currentTarget.elements.email.value) {
        inputsValues.email = event.currentTarget.elements.email.value;
    }

    if (event.currentTarget.elements.message.value) {
        inputsValues.message = event.currentTarget.elements.message.value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(inputsValues))
}