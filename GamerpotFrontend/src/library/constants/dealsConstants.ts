import {DealsSearchParams} from '../models/dealsSearchParams';

export const DEFAULT_URL_PARAMS: DealsSearchParams = {
  pageNumber: 0,
  title: '',
  pageSize: 15,
  lowerPrice: '0',
  upperPrice: '500',
};

export const API_DEALS_URL = 'https://www.cheapshark.com/api/1.0/deals?';
export const API_STORES_URL = 'https://www.cheapshark.com/api/1.0/stores';
