import {CardData} from '../../components/GameHorizontalCard/props';
import {GameDetails} from '../models/gameDetails';

export const parseGames = (games: Array<GameDetails>) => {
  const parsedGames: Array<CardData> = games.map(game => ({
    id: game.id,
    image: game.background_image,
    title: game.name,
    date: game.released,
    link: game.website,
    metacritic: game.metacritic,
    saves: 0,
    comments: 0,
  }));
  return parsedGames;
};

export const parseDataToString = (list: Array<any>) => {
  if (!list) return '';
  const parsedData: string = list.map(obj => obj.name).join(', ');
  return parsedData;
};

export const parseDataToArray = (list: Array<any>) => {
  if (!list) return [];
  return list.map(obj => obj.name);
};
