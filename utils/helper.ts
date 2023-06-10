import config from '../config';

export const removeTrailingSlashes = (str: string): string => str.replace(/^\/|\/$/g, '');

export const siteUrl = (path?: string, withProtocol = true): string => {
  const protocol = withProtocol ? `http${config.app.is_secure ? 's' : ''}://` : '';
  const base = removeTrailingSlashes(config.app.base_url);
  const endpoint = path ? removeTrailingSlashes(path) : '';

  return `${protocol}${base}/${endpoint}`;
};

export const appendQueryString = (uri: string, key: string, value: string): string => {
  const baseUri = uri.replace(/\/$/, '');
  const pattern = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  const separator = baseUri.indexOf('?') === -1 ? '?' : '&';

  if (baseUri.match(pattern)) {
    return baseUri.replace(pattern, '$1' + key + '=' + value + '$2');
  }

  return baseUri + separator + key + '=' + value;
};

export const nl2Br = (str: string): string => str.replace(/\n/g, '<br />');

export const range = (start: number, end: number) => {
  const length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

export const convertPercentageToPixelWidthClass = (percentage: string, totalWidth: number): string => {
  const parsedPercentage = parseFloat(percentage);
  const pixelWidth = Math.round((parsedPercentage / 100) * totalWidth);

  return `w-${pixelWidth}px`;
};
