import { buildParams } from './paramBuilder';
import { DealInterface } from '../models/deal';

export interface DealsSearchParams {
  [key: string]: any;
  pageNumber: number;
  pageSize?: number;
  params?: string;
  title?: string;
  lowerPrice?: string;
  upperPrice?: string;
}

const DEFAULT_URL_PARAMS: DealsSearchParams = {
  pageNumber: 0,
  title: '',
  pageSize: 15,
  lowerPrice: '0',
  upperPrice: '500',
};

const API_URL = 'https://www.cheapshark.com/api/1.0/deals?';

export const getDeals = async (params?: DealsSearchParams) => {
  const urlParams = params || DEFAULT_URL_PARAMS;
  const response = await fetch(`${API_URL}${buildParams(urlParams)}`);
  const deals: DealInterface[] = await response.json();
  return deals;
};
