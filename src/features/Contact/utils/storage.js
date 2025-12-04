import { STORAGE_KEY, INITIAL_FORM_STATE } from './constants';

export function saveFormData(formData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  } catch (error) {
    console.error('Failed to save form data to localStorage:', error);
  }
}

export function loadFormData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return INITIAL_FORM_STATE;
    }
    const parsed = JSON.parse(saved);
    return {
      name: parsed.name || '',
      email: parsed.email || '',
      message: parsed.message || '',
    };
  } catch (error) {
    console.error('Failed to load form data from localStorage:', error);
    return INITIAL_FORM_STATE;
  }
}

export function clearFormData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear form data from localStorage:', error);
  }
}
