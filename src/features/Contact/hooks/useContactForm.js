import { useState, useEffect, useRef, useMemo } from 'react';

import { emailService } from '../services/emailService';
import { debounce } from '../utils/debounce';
import { validateContactForm, validateField } from '../utils/validation';
import { INITIAL_FORM_STATE, STATUS } from '../utils/constants';
import { saveFormData, loadFormData, clearFormData } from '../utils/storage';

export function useContactForm() {
  const [formData, setFormData] = useState(() => loadFormData());
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const fieldRefs = { name: nameRef, email: emailRef, message: messageRef };

  useEffect(() => {
    saveFormData(formData);
  }, [formData]);

  // delayed validator that waits 500 ms before checking if the field is valid
  const debouncedValidateField = useMemo(
    () =>
      debounce((fieldName, value) => {
        const error = validateField(fieldName, value);
        setErrors((prev) => ({
          ...prev,
          [fieldName]: error,
        }));
      }, 500),
    []
  );

  useEffect(() => {
    return () => {
      debouncedValidateField.cancel?.();
    };
  }, [debouncedValidateField]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      debouncedValidateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const focusFirstInvalidField = (validationErrors) => {
    const fieldOrder = ['name', 'email', 'message'];

    for (const field of fieldOrder) {
      if (validationErrors[field] && fieldRefs[field]?.current) {
        fieldRefs[field].current.focus();
        break;
      }
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setTouched({});
    setStatus(STATUS.IDLE);
    setErrorMessage('');
    clearFormData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      focusFirstInvalidField(validation.errors);
      return;
    }

    // send email
    setStatus(STATUS.SENDING);
    setErrors({});

    try {
      const result = await emailService.sendContactEmail(formData);

      if (result.success) {
        setStatus(STATUS.SUCCESS);
        setFormData(INITIAL_FORM_STATE);
        setTouched({});
      } else {
        setStatus(STATUS.ERROR);
        setErrorMessage(result.error);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setStatus(STATUS.ERROR);
      setErrorMessage('an unexpected error occurred. please try again.');
    }
  };

  return {
    formData,
    errors,
    status,
    errorMessage,
    fieldRefs,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isIdle: status === STATUS.IDLE,
    isSending: status === STATUS.SENDING,
    isSuccess: status === STATUS.SUCCESS,
    isError: status === STATUS.ERROR,
  };
}
