import { AxiosError } from 'axios';

export const logError = (error: Error | AxiosError) => {
  if (import.meta.env.DEV) {
    console.error('Error:', error);
  } else {
    // In production, send error to a logging service
    // Example: sendToLoggingService(error);
  }
};

const sendToLoggingService = (error: Error | AxiosError) => {
  // Implement the logic to send errors to your logging service
  // This could be a custom backend endpoint or a third-party service like Sentry
};

export default logError;