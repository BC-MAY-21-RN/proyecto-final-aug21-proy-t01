export interface DealsSearchParams {
  [key: string]: any;
  pageNumber: number;
  pageSize: number;
  params?: string;
  title?: string;
  lowerPrice?: string;
  upperPrice?: string;
}
