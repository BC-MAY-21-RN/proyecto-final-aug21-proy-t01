import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {CardData} from '../GameHorizontalCard/props';
import {GamesSearchParams} from '../../library/models/gamesSearchParams';
import GameHorizontalCard from '../GameHorizontalCard';
import {useService} from '../../library/hooks/useService';
import {getGames} from '../../library/services/games.service';
import {GameResponse} from '../../library/models/gameResponse';
import {parseGames} from '../../library/utils/parseGames';
import Pagination from '../Pagination';
import GameSectionInputs from './GamesSectionInputs';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../screens/HomeScreen/RootStackParams';
import GameCardSkeletonList from '../GameHorizontalCard/Skeleton';

const initialParams: GamesSearchParams = {
  page: 1,
  page_size: 5,
};

type homeScreenParams = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeGamesSection = () => {
  const [games, setGames] = useState([] as Array<CardData>);
  const [gamesParams, setGamesParams] = useState(initialParams);
  const [areGamesLoading, callGamesService] = useService(getGames);
  const [totalItems, setTotalItems] = useState(1);
  const navigation = useNavigation<homeScreenParams>();
  const handleClick = (gameId: number) => navigation.navigate('Game', {gameId});
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
      {areGamesLoading && <GameCardSkeletonList display={5} />}
      {games && games.map((game, index) => (
          <GameHorizontalCard {...game} key={index} onClick={handleClick} />
        ))}
      <Pagination
        totalItems={totalItems < 1000 ? totalItems : 1000}
        pageSize={gamesParams.page_size}
        onPageChange={page => setGamesParams({...gamesParams, page})}/>
    </View>
  );
};

export default HomeGamesSection;
