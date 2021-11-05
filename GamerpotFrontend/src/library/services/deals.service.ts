import {buildParams} from './paramBuilder';
import {DealInterface, DealsResponse} from '../models/deal';
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
  const totalPageCount = response.headers.get('x-total-page-count') || '1';
  const stores = await getStores();
  const fixedDeals: DealInterface[] = deals.map(deal => ({
    ...deal,
    ...stores[deal.storeID - 1],
  }));
  const dealsToReturn: DealsResponse = {
    list: fixedDeals,
    totalItems: parseInt(totalPageCount, 10) * urlParams.pageSize,
  };
  return dealsToReturn;
};
