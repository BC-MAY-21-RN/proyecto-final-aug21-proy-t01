interface UrlParams {
  [key: string]: any;
}

interface FetchWithParamsProps {
  params?: UrlParams;
  defaultParams: UrlParams;
  url: string;
}

export const buildParams = (params: UrlParams) => {
  let stringParams = '';
  for (const key in params) {
    stringParams = `${stringParams}&${key}=${params[key]}`;
  }
  return stringParams;
};

export const fetchWithParams = async ({
  params,
  defaultParams,
  url,
}: FetchWithParamsProps) => {
  const urlParams = params || defaultParams;
  const response = await fetch(`${url}${buildParams(urlParams)}`);
  return response;
};
