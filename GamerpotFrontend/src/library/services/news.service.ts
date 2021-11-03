import {API_GAMESPOT_URL} from '../constants/newsConstants';
import {NewsResponse} from '../models/newsResponse';

export const getNews = async () => {
  const response = await fetch(API_GAMESPOT_URL);
  const newsResponse: NewsResponse = await response.json();
  return newsResponse.results;
};
