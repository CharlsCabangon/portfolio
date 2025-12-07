import emailjs from '@emailjs/browser';

import { EMAILJS, validateEmailJSConfig } from '@/lib/config/emailjs';
import { EMAIL_ERROR_TYPE } from '../utils/constants';

class EmailService {
  constructor() {
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;

    try {
      validateEmailJSConfig();
      emailjs.init(EMAILJS.PUBLIC_KEY);
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
      throw error;
    }
  }

  getErrorType(error) {
    if (!error) return EMAIL_ERROR_TYPE.UNKNOWN;

    const errorText = (error.text || error.message || '').toLowerCase();

    if (errorText.includes('network') || errorText.includes('fetch')) {
      return EMAIL_ERROR_TYPE.NETWORK;
    }

    if (errorText.includes('rate limit') || errorText.includes('quota')) {
      return EMAIL_ERROR_TYPE.RATE_LIMIT;
    }

    if (errorText.includes('invalid') || errorText.includes('config')) {
      return EMAIL_ERROR_TYPE.INVALID_CONFIG;
    }

    return EMAIL_ERROR_TYPE.UNKNOWN;
  }

  getUserFriendlyError(errorType) {
    switch (errorType) {
      case EMAIL_ERROR_TYPE.NETWORK:
        return 'network error. please check your connection and try again.';
      case EMAIL_ERROR_TYPE.RATE_LIMIT:
        return 'too many requests. please try again in a few minutes.';
      case EMAIL_ERROR_TYPE.INVALID_CONFIG:
        return 'email service configuration error. please contact the site owner.';
      default:
        return 'failed to send message. please try again or contact me directly.';
    }
  }

  async sendContactEmail(formData) {
    if (!this.initialized) {
      this.init();
    }

    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      message: formData.message.trim(),
      to_name: 'Charls Cabangon',
    };

    try {
      const response = await emailjs.send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        templateParams,
        EMAILJS.PUBLIC_KEY
      );

      return {
        success: true,
        status: response.status,
        text: response.text,
      };
    } catch (error) {
      console.error('EmailJS send failed:', error);

      const errorType = this.getErrorType(error);
      const userMessage = this.getUserFriendlyError(errorType);

      return {
        success: false,
        errorType,
        error: userMessage,
        originalError: error.text || error.message,
      };
    }
  }
}

export const emailService = new EmailService();
