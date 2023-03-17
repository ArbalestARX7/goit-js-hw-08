import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
const data = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE)) || {};

formFiller();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(data);
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
}

function onFormInput(evt) {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(data));
}

function formFiller() {
  const filledData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));

  if (filledData) {
    form[0].value = filledData.email || '';
    form[1].value = filledData.message || '';
  }
}
