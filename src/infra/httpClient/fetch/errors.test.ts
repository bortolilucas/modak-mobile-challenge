import {
  getErrorMessage,
  HttpGenericError,
  HttpResponseError,
} from '@/infra/httpClient/fetch/errors';

describe('Errors', () => {
  describe('HttpResponseError', () => {
    test('should create an error with correct message, data, and status', () => {
      const data = { error: 'Not Found' };
      const status = 404;
      const error = new HttpResponseError(data, status);

      expect(error).toBeInstanceOf(HttpResponseError);
      expect(error.message).toContain(
        `Request failed (status code: ${status}). Please check your internet connection and try again later.`,
      );
      expect(error.data).toBe(data);
      expect(error.status).toBe(status);
    });
  });

  describe('HttpGenericError', () => {
    test('should create an error with correct message and cause', () => {
      const cause = 'Timeout';
      const error = new HttpGenericError(cause);

      expect(error).toBeInstanceOf(HttpGenericError);
      expect(error.message).toContain(
        `Request failed to complete. Cause: ${cause}. Please check your internet connection and try again later.`,
      );
      expect(error.cause).toBe(cause);
    });
  });

  describe('when getErrorMessage is called', () => {
    test('should return the message of an Error instance', () => {
      const error = new Error('Something went wrong');
      const message = getErrorMessage(error);

      expect(message).toBe(error.message);
    });

    test('should return the default message', () => {
      const error = 'Timeout';
      const message = getErrorMessage(error);

      expect(message).toBe(
        'An unknown error ocurred. Please check your internet connection and try again later.',
      );
    });
  });
});
