import {buildParams} from './paramBuilder';
import {
  DEFAULT_URL_PARAMS,
  API_GAMES_URL,
  API_PLATFORMS_URL,
  getGameInfoUrl,
} from '../constants/gamesConstants';
import {GamesSearchParams} from '../models/gamesSearchParams';
import {GameResponse} from '../models/gameResponse';
import {GameDetails} from '../models/gameDetails';
import {PlatformsResponse} from '../models/platformsResponse';

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

export const getPlatforms = async () => {
  const response = await fetch(API_PLATFORMS_URL);
  const platformsInfo: PlatformsResponse = await response.json();
  return platformsInfo.results;
};
