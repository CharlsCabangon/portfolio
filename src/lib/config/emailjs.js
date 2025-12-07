export const EMAILJS = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export function validateEmailJSConfig() {
  const missing = [];

  if (!EMAILJS.SERVICE_ID) missing.push('VITE_EMAILJS_SERVICE_ID');
  if (!EMAILJS.TEMPLATE_ID) missing.push('VITE_EMAILJS_TEMPLATE_ID');
  if (!EMAILJS.PUBLIC_KEY) missing.push('VITE_EMAILJS_PUBLIC_KEY');

  if (missing.length > 0) {
    throw new Error(
      `Missing EmailJS configuration: ${missing.join(', ')}\n` +
        'Please check your .env.local file.'
    );
  }

  return true;
}

if (import.meta.env.DEV) {
  try {
    validateEmailJSConfig();
  } catch (error) {
    console.error('EmailJS Configuration Error:', error.message);
  }
}
