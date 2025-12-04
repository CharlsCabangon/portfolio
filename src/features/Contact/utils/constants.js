export const EMAIL_SUCCESS = {
  title: 'message sent!',
  message: "thank you for reaching out. i'll get back to you soon.",
};

export const EMAIL_ERROR = {
  title: 'failed to send',
  fallback: 'something went wrong. please try again later.',
};

export const EMAIL_ERROR_TYPE = {
  NETWORK: 'network error',
  RATE_LIMIT: 'rate limit',
  INVALID_CONFIG: 'invalid config',
  UNKNOWN: 'unknown error',
};

export const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  message: '',
};

export const STATUS = {
  IDLE: 'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const STORAGE_KEY = 'contact_form_draft';
