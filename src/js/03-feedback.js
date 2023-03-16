import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

formFiller();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(data);
  evt.currentTarget.reset();
}

const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function onFormInput(evt) {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function formFiller() {
  const filledData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (filledData) {
    form[0].value = filledData.email || '';
    form[1].value = filledData.message || '';
  }
}
