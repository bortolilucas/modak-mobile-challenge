export type QueryStringParams = Record<string, string>;

export function toQueryString(params?: QueryStringParams): string {
  if (!params) {
    return '';
  }

  const cleanedParams = Object.entries(params).reduce((obj, [key, value]) => {
    if (value) {
      obj[key] = value;
    }
    return obj;
  }, {} as QueryStringParams);

  return `?${new URLSearchParams(cleanedParams).toString()}`;
}
