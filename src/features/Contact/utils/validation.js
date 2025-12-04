export function validateName(name) {
  return name.trim().length >= 2;
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateMessage(message) {
  return message.trim().length >= 10;
}

export function validateField(name, value) {
  const trimmedValue = value.trim();

  switch (name) {
    case 'name':
      if (!trimmedValue) {
        return 'name is required';
      }
      if (!validateName(value)) {
        return 'name must be at least 2 characters';
      }
      return null;

    case 'email':
      if (!trimmedValue) {
        return 'email is required';
      }
      if (!validateEmail(value)) {
        return 'please enter a valid email address';
      }
      return null;

    case 'message':
      if (!trimmedValue) {
        return 'message is required';
      }
      if (!validateMessage(value)) {
        return 'message must be at least 10 characters';
      }
      return null;

    default:
      return null;
  }
}

export function validateContactForm(formData) {
  const errors = {};

  const nameError = validateField('name', formData.name);
  if (nameError) errors.name = nameError;

  const emailError = validateField('email', formData.email);
  if (emailError) errors.email = emailError;

  const messageError = validateField('message', formData.message);
  if (messageError) errors.message = messageError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
