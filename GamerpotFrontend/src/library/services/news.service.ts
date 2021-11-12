import {NewsResponse} from '../models/newsResponse';
import {NewsSearchParams} from '../models/newsSearchParams';
import {fetchWithParams} from './paramBuilder';
import {
  API_GAMESPOT_URL,
  DEFAULT_GAMESPOT_URL_PARAMS,
} from '../constants/newsConstants';

export const getNews = async (params?: NewsSearchParams) => {
  try {
    const response = await fetchWithParams({
      params: params,
      defaultParams: DEFAULT_GAMESPOT_URL_PARAMS,
      url: API_GAMESPOT_URL,
    });
    const newsResponse: NewsResponse = await response.json();
    return newsResponse;
  } catch (error) {
    return [] as unknown as NewsResponse;
  }
};
