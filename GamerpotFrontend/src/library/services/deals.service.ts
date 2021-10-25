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

const API_DEALS_URL = 'https://www.cheapshark.com/api/1.0/deals?';
const API_STORES_URL = 'https://www.cheapshark.com/api/1.0/stores';

const getStores = async () => {
  const response = await fetch(API_STORES_URL);
  return await response.json();
};

export const getDeals = async (params?: DealsSearchParams) => {
  const urlParams = params || DEFAULT_URL_PARAMS;
  const response = await fetch(`${API_DEALS_URL}${buildParams(urlParams)}`);
  const deals: DealInterface[] = await response.json();

  const stores = await getStores();
  const fixedDeals: DealInterface[] = deals.map(deal => (
    {
      ...deal,
      ...stores[deal.storeID - 1],
    }
  ));

  return fixedDeals;
};
