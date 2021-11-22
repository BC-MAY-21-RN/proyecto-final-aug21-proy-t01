import {fetchWithParams} from './paramBuilder';
import {
  DEFAULT_URL_PARAMS,
  API_GAMES_URL,
  API_PLATFORMS_URL,
  getGameInfoUrl,
  getGameImagesUrl,
} from '../constants/gamesConstants';
import {GamesSearchParams} from '../models/gamesSearchParams';
import {GameResponse} from '../models/gameResponse';
import {
  GameDetails,
  GameImagesResponse,
  GameImage,
} from '../models/gameDetails';
import {PlatformsResponse} from '../models/platformsResponse';

export const getGames = async (params?: GamesSearchParams) => {
  const response = await fetchWithParams({
    params: params,
    defaultParams: DEFAULT_URL_PARAMS,
    url: API_GAMES_URL,
  });
  const games: GameResponse = await response.json();
  return games;
};

export const getGameInfo = async (gameId: number) => {
  const url = getGameInfoUrl(gameId);
  const response = await fetch(url);
  const gameInfo: GameDetails = await response.json();
  const images: Array<GameImage> = await getGameImages(gameId);
  const parsedImages: Array<GameImage> = [
    {image: gameInfo.background_image, width: 1920, height: 1080},
    ...images,
  ];
  return {...gameInfo, images: parsedImages} as GameDetails;
};

export const getPlatforms = async () => {
  const response = await fetch(API_PLATFORMS_URL);
  const platformsInfo: PlatformsResponse = await response.json();
  return platformsInfo.results;
};

export const getGameImages = async (gameId: number) => {
  const response = await fetch(getGameImagesUrl(gameId));
  const gameImagesRaw: GameImagesResponse = await response.json();
  return gameImagesRaw.results;
};
