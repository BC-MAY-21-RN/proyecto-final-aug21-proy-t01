import {NewsResponse} from '../models/newsResponse';
import {NewsSearchParams} from '../models/newsSearchParams';
import {buildParams} from './paramBuilder';
import {
  API_GAMESPOT_URL,
  DEFAULT_GAMESPOT_URL_PARAMS,
} from '../constants/newsConstants';

export const getNews = async (params?: NewsSearchParams) => {
  try {
    const urlParams = params || DEFAULT_GAMESPOT_URL_PARAMS;
    const response = await fetch(
      `${API_GAMESPOT_URL}${buildParams(urlParams)}`,
    );
    const newsResponse: NewsResponse = await response.json();
    return newsResponse;
  } catch (error) {
    return [] as unknown as NewsResponse;
  }
};
