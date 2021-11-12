import {GAMESPOT_API_KEY} from '@env';
import {NewsSearchParams} from '../models/newsSearchParams';

export const DEFAULT_GAMESPOT_URL_PARAMS: NewsSearchParams = {
  limit: 10,
  page: 0,
  sort: 'publish_date:desc',
};

const KEY = '548675760f97528b78996deae785884770db6c8f';

export const API_GAMESPOT_URL = `http://www.gamespot.com/api/articles/?api_key=${KEY}&format=json`;
