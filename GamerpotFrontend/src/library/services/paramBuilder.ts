interface UrlParams {
  [key: string]: any;
}

export const buildParams = (params: UrlParams) => {
  let stringParams = '';
  for(const key in params) {
    stringParams = `${stringParams}&${key}=${params[key]}`;
  }
  return stringParams;
};
