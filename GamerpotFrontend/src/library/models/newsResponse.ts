import {News} from './news';

export interface NewsResponse {
  limit: number;
  results: News[];
}
