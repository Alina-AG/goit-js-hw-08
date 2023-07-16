import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(onInput,500));
feedbackForm.addEventListener('submit', onSubmit);

const feedbackFormSaved = JSON.parse(localStorage.getItem("feedback-form-state"));
if (feedbackFormSaved) {
    feedbackForm.elements.email.value = feedbackFormSaved.email;
    feedbackForm.elements.message.value = feedbackFormSaved.message;
};

function onInput() {
    const feedbackFormState = { };
    feedbackFormState.email = feedbackForm.elements.email.value;
    feedbackFormState.message = feedbackForm.elements.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
};

function onSubmit(evt) {
    evt.preventDefault();
    const feedbackFormState = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (feedbackFormState&&feedbackFormState.email && feedbackFormState.message) {
        console.log(feedbackFormState);
        localStorage.removeItem("feedback-form-state");
        feedbackForm.reset();
    } else {
        alert("All fields must be filled!");
    };
};
