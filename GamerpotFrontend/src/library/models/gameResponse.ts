import {GameDetails} from './gameDetails';

export interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: GameDetails[];
}
