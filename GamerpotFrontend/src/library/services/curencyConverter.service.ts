import {API_CURRENCY_URL} from '../constants/dealsConstants';
import {CURRENCY_API_KEY} from '@env';
import {CurrencyConvertion} from '../models/currencyConvertion';
import {DealsCurrencyConvertion} from '../models/dealsCurrencyConvertion';
import {
  DEFAULT_CURRENCY_AMOUNT,
  MX_CURRENCY_CODE,
  US_CURRENCY_CODE,
} from '../constants/currencyContants';

const fetchConvertionRate = async ({
  fromCurrency = US_CURRENCY_CODE,
  toCurrency = MX_CURRENCY_CODE,
}: CurrencyConvertion) => {
  const url = `${API_CURRENCY_URL}?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${CURRENCY_API_KEY}`;

  const response = (await (await fetch(url)).json()) as {
    [key: string]: any;
  };

  return response[`${fromCurrency}_${toCurrency}`];
};

export const calculateDealsNewCurrency = async ({
  deals,
  fromCurrency,
  toCurrency,
}: DealsCurrencyConvertion) => {
  if (fromCurrency === toCurrency) {
    return deals;
  }
  const conversionRate = await fetchConvertionRate({
    fromCurrency,
    toCurrency,
  });

  return deals.map(deal => {
    const salePrice = Math.floor(deal.salePrice * conversionRate);
    const normalPrice = Math.floor(deal.normalPrice * conversionRate);
    return {...deal, salePrice, normalPrice};
  });
};

export const convertCurrency = async ({
  fromCurrency = US_CURRENCY_CODE,
  toCurrency = MX_CURRENCY_CODE,
  amount = DEFAULT_CURRENCY_AMOUNT,
}: CurrencyConvertion) => {
  const conversionRate = await fetchConvertionRate({
    fromCurrency,
    toCurrency,
  });
  return Number(amount) * conversionRate;
};
