export interface DealsPriceFilterProps {
  onMinPriceChange?: (price: string) => void;
  onMaxPriceChange?: (price: string) => void;
  onPriceChange: (name: string, value: string) => void;
  onCurrencyChange?: (currency: string) => void;
}
