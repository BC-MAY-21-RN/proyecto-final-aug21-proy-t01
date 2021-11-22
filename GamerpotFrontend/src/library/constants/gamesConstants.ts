import {GamesSearchParams} from '../models/gamesSearchParams';
import {RAWG_API_KEY} from '@env';

export const DEFAULT_URL_PARAMS: GamesSearchParams = {
  page: 1,
  page_size: 10,
};

export const GAMES_ORDERING: string[] = [
  'released',
  'rating',
  'added',
  'created',
  'updated',
  'name',
  'metacritic',
];

export const API_KEY = RAWG_API_KEY;
export const API_GAMES_URL = `https://api.rawg.io/api/games?key=${API_KEY}&`;
export const API_PLATFORMS_URL = `https://api.rawg.io/api/platforms?key=${API_KEY}`;

export const getGameInfoUrl = (gameId: number) => {
  return `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}&`;
};

export const getGameImagesUrl = (gameId: number) => {
  return `https://api.rawg.io/api/games/${gameId}/screenshots?key=${API_KEY}`;
};
