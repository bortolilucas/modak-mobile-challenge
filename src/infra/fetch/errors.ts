export class HttpResponseError extends Error {
  constructor(public data: unknown, public status: number) {
    super(`Request failed with status ${status}`);
  }
}

export class HttpGenericError extends Error {
  constructor(public cause: unknown) {
    super(`Request failed to complete. Error: ${cause}`);
  }
}
