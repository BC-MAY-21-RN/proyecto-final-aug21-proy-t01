import {buildParams} from './paramBuilder';
import {DEFAULT_URL_PARAMS, API_GAMES_URL} from '../constants/gamesConstants';
import {GamesSearchParams} from '../models/gamesSearchParams';
import {GameResponse} from '../models/gameResponse';

export const getGames = async (params?: GamesSearchParams) => {
  const urlParams = params || DEFAULT_URL_PARAMS;
  const response = await fetch(`${API_GAMES_URL}${buildParams(urlParams)}`);
  const games: GameResponse = await response.json();
  return games;
};
