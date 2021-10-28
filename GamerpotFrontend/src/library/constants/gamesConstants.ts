import {GamesSearchParams} from '../models/gamesSearchParams';

export const DEFAULT_URL_PARAMS: GamesSearchParams = {
  page: 1,
  page_size: 10,
};

export const API_KEY = 'f3f82f92ef90498e986b88325fcf5e62';
export const API_GAMES_URL = `https://api.rawg.io/api/games?key=${API_KEY}&`;

export const getGameInfoUrl = (gameId: number) => {
  return `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}&`;
};
