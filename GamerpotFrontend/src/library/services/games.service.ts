import {buildParams} from './paramBuilder';
import {
  DEFAULT_URL_PARAMS,
  API_GAMES_URL,
  getGameInfoUrl,
} from '../constants/gamesConstants';
import {GamesSearchParams} from '../models/gamesSearchParams';
import {GameResponse} from '../models/gameResponse';
import {GameDetails} from '../models/gameDetails';

export const getGames = async (params?: GamesSearchParams) => {
  const urlParams = params || DEFAULT_URL_PARAMS;
  const response = await fetch(`${API_GAMES_URL}${buildParams(urlParams)}`);
  const games: GameResponse = await response.json();
  return games;
};

export const getGameInfo = async (gameId: number) => {
  const url = getGameInfoUrl(gameId);
  const response = await fetch(url);
  const gameInfo: GameDetails = await response.json();
  return gameInfo;
};
