export class HttpResponseError extends Error {
  constructor(public data: unknown, public status: number) {
    super(
      `Request failed (status code: ${status}). Please check your internet connection and try again later.`,
    );
  }
}

export class HttpGenericError extends Error {
  constructor(public cause: unknown) {
    super(
      `Request failed to complete. Cause: ${cause}. Please check your internet connection and try again later.`,
    );
  }
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return 'An unknown error ocurred. Please check your internet connection and try again later.';
}
