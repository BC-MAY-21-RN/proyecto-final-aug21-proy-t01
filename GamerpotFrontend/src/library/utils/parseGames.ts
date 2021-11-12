import {CardData} from '../../components/GameHorizontalCard/props';
import {GameDetails} from '../models/gameDetails';

export const parseGames = (games: Array<GameDetails>) => {
  const parsedGames: Array<CardData> = games.map(game => ({
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
