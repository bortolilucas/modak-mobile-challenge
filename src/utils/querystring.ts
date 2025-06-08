export type QueryStringParams = Record<string, string | number>;

export function toQueryString(params?: QueryStringParams): string {
  if (!params) {
    return '';
  }

  const cleanedParams = Object.entries(params).reduce((obj, [key, value]) => {
    if (value) {
      obj[key] = value.toString();
    }
    return obj;
  }, {} as Record<string, string>);

  return `?${new URLSearchParams(cleanedParams).toString()}`;
}
