const validators = {
  name: (value) => {
    if (value.trim() === '') return 'Name is required.';
    return '';
  },
  email: (value) => {
    if (value.trim() === '') return 'Email is required.';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) return 'Enter a valid email address.';
    return '';
  },
  message: (value) => {
    if (value.trim() === '') return 'Message is required.';
    if (value.trim().length < 10) return 'Message should be at least 10 characters.';
    return '';
  }
};

function showError(fieldName, message) {
  const errorEl = document.getElementById(`${fieldName}-error`);
  if (errorEl) {
    errorEl.textContent = message;
  }
}

function validateField(fieldName, value) {
  const message = validators[fieldName](value);
  showError(fieldName, message);
  return message === '';
}

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const isNameValid = validateField('name', name);
  const isEmailValid = validateField('email', email);
  const isMessageValid = validateField('message', message);

  if (isNameValid && isEmailValid && isMessageValid) {
    // Form is valid — normally you'd send this somewhere.
    // For this project, just confirm success to the user.
   const success = document.getElementById('form-success');
success.textContent = 'Message sent! Thank you, I will get back to you soon.';
success.hidden = false;
    event.target.reset();
  }
}

function handleFieldBlur(event) {
  const field = event.target;
  if (field.name in validators) {
    validateField(field.name, field.value);
  }
}

export function initValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', handleSubmit);
  form.addEventListener('blur', handleFieldBlur, true);
}