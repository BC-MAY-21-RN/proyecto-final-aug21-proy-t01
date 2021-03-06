import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../HomeScreen/RootStackParams';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {GameDetails} from '../../library/models/gameDetails';
import {getGameInfo} from '../../library/services/games.service';
import {
  Wrapper,
  GameDetailsCarousel,
  GameDetailsSections,
} from '../../components';
import {styles} from './styles';

type GameScreenProp = NativeStackNavigationProp<RootStackParamList, 'Game'>;
type GameRouteProp = RouteProp<RootStackParamList, 'Game'>;

const GameScreen = () => {
  const navigation = useNavigation<GameScreenProp>();
  const route = useRoute<GameRouteProp>();
  const [gameDetails, setGameDetails] = useState({} as GameDetails);
  useEffect(() => {
    const fetchGameDetails = async () => {
      const gameData: GameDetails = await getGameInfo(route.params.gameId);
      setGameDetails(gameData);
    };
    fetchGameDetails();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <GameDetailsCarousel {...{navigation, gameDetails}} />
      <Wrapper isCardWrapper={true}>
        <GameDetailsSections gameDetails={gameDetails} />
      </Wrapper>
    </ScrollView>
  );
};

export default GameScreen;
