import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {CardData} from '../GameHorizontalCard/props';
import {GamesSearchParams} from '../../library/models/gamesSearchParams';
import GameHorizontalCard from '../GameHorizontalCard';
import {useService} from '../../library/hooks/useService';
import {getGames} from '../../library/services/games.service';
import {GameResponse} from '../../library/models/gameResponse';
import {parseGames} from '../../library/utils/parseGames';
import Pagination from '../Pagination';
import GameSectionInputs from './GamesSectionInputs';

const initialParams: GamesSearchParams = {
  page: 1,
  page_size: 5,
};

const HomeGamesSection = () => {
  const [games, setGames] = useState([] as Array<CardData>);
  const [gamesParams, setGamesParams] = useState(initialParams);
  const [areGamesLoading, callGamesService] = useService(getGames);
  const [totalItems, setTotalItems] = useState(1);
  useEffect(() => {
    const fetchGames = async () => {
      const {count, results}: GameResponse = await callGamesService(gamesParams);
      setTotalItems(count);
      setGames(parseGames(results));
    };
    fetchGames();
  }, [gamesParams]);
  return (
    <View>
      <GameSectionInputs
        handleOrderChange={order =>
          setGamesParams({...gamesParams, ordering: `-${order}`})
        }
        handlePlatformChange={platform =>
          setGamesParams({...gamesParams, platforms: platform})
        }
      />
      {areGamesLoading && <Text>Loading...</Text>}
      {games && games.map((game, index) => (
          <GameHorizontalCard {...game} key={index} />
        ))}
      <Pagination
        totalItems={totalItems}
        pageSize={gamesParams.page_size}
        onPageChange={page => setGamesParams({...gamesParams, page})}/>
    </View>
  );
};

export default HomeGamesSection;
