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

    if (formRefs.email.value === "" || formRefs.message === "") {
        alert("Fill all fields!!!")
    } else {
        formData = {}
        e.currentTarget.reset()
        localStorage.removeItem(STORAGE_KEY)
    }
}

function fillForm() {
    localeFormData = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if(localeFormData) {
        if(localeFormData.email) {
            formRefs.email.value = localeFormData.email
        }

        if(localeFormData.message) {
            formRefs.message.value = localeFormData.message
        }
    }
    
}