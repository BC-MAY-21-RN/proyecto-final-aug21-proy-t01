import {Platform} from './platform';

export interface PlatformsResponse {
  count: number;
  next: string;
  previous: string;
  results: Platform[];
}
