import React, {useEffect, useState} from 'react';
import {ScrollView, Alert} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../HomeScreen/RootStackParams';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {GameDetails} from '../../library/models/gameDetails';
import {getGameInfo} from '../../library/services/games.service';
import {
  Carousel,
  Wrapper,
  NewsDescription,
  TagList,
  GameMetricsSection,
  GameData,
  ContentDivisor,
  GameDetailsButtons,
} from '../../components';
import {styles} from './styles';
import {parseDataToArray} from '../../library/utils/parseGames';

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
      <Carousel
        isImageCarousel={true}
        data={gameDetails.images ? gameDetails.images : []}
      />
      <GameDetailsButtons
        arrowPress={() => navigation.goBack()}
        bookmarkPress={() => Alert.alert('Game saved')}
      />
      <Wrapper isCardWrapper={true}>
        <NewsDescription
          text={gameDetails.name}
          numberOfLines={2}
          textStyle={styles.title}
        />
        <TagList tags={parseDataToArray(gameDetails.genres)} />
        <GameMetricsSection game={gameDetails} />
        <ContentDivisor />
        <GameData gameDetails={gameDetails} />
      </Wrapper>
    </ScrollView>
  );
};

export default GameScreen;
