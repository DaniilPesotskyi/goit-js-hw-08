import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');

const formRefs = {
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
}

feedbackFormRef.addEventListener('input', throttle(onFormRefInput, 500))
feedbackFormRef.addEventListener('submit', onSubmitForm)

const STORAGE_KEY = 'feedback-form-state';

let formData = {}

fillForm()

function onFormRefInput(e) {
    formData[e.target.name] = e.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onSubmitForm(e) {
    e.preventDefault()
    console.log('Before Reset', formData)

    if (formRefs.email.value === "" || formRefs.message.value === "") {
        alert("Fill all fields!!!")
    } else {
        formData = {}
        e.currentTarget.reset()
        localStorage.removeItem(STORAGE_KEY)
    }
}

function fillForm() {
    const localeFormData = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (localeFormData) {
        formData = localeFormData;
    
        for (const key in formData) {
            feedbackFormRef.elements[key].value = formData[key];
        }
    }
}