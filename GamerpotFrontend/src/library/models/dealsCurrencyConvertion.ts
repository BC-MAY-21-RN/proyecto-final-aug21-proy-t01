import {DealInterface} from '../models/deal';

export interface DealsCurrencyConvertion {
  deals: DealInterface[];
  fromCurrency: string;
  toCurrency: string;
}
