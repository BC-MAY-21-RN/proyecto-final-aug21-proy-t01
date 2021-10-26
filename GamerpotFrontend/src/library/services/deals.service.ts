import {buildParams} from './paramBuilder';
import {DealInterface} from '../models/deal';
import {DealsSearchParams} from '../models/dealsSearchParams';
import {
  DEFAULT_URL_PARAMS,
  API_DEALS_URL,
  API_STORES_URL,
} from '../constants/dealsConstants';

const getStores = async () => {
  const response = await fetch(API_STORES_URL);
  return await response.json();
};

export const getDeals = async (params?: DealsSearchParams) => {
  const urlParams = params || DEFAULT_URL_PARAMS;
  const response = await fetch(`${API_DEALS_URL}${buildParams(urlParams)}`);
  const deals: DealInterface[] = await response.json();

  const stores = await getStores();
  const fixedDeals: DealInterface[] = deals.map(deal => ({
    ...deal,
    ...stores[deal.storeID - 1],
  }));

  return fixedDeals;
};
