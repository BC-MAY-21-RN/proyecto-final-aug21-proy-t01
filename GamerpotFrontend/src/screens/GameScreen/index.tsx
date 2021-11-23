import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
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
  GameSection,
} from '../../components';
import {styles} from './styles';
import {parseDate} from '../../library/utils/parseDate';

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
      <Wrapper isCardWrapper={true}>
        <NewsDescription
          text={gameDetails.name}
          numberOfLines={2}
          textStyle={styles.title}
        />
        <TagList
          tags={
            gameDetails.genres
              ? gameDetails.genres.map(genre => genre.name)
              : []
          }
        />
        <GameMetricsSection game={gameDetails} />
        <GameSection title="About" content={gameDetails.description_raw} />
        <GameSection
          title="Platforms"
          content={
            gameDetails.platforms
              ? gameDetails.platforms
                  .map(platform => platform.platform.name)
                  .join(', ')
              : ''
          }
        />
        <GameSection
          title="Genre"
          content={
            gameDetails.genres
              ? gameDetails.genres.map(genre => genre.name).join(', ')
              : ''
          }
        />
        <GameSection
          title="Developer"
          content={
            gameDetails.developers
              ? gameDetails.developers.map(dev => dev.name).join(', ')
              : ''
          }
        />
        <GameSection
          title="Publisher"
          content={
            gameDetails.publishers
              ? gameDetails.publishers.map(pub => pub.name).join(', ')
              : ''
          }
        />
        <GameSection title="Website" content={gameDetails.website} />
        <GameSection
          title="Release date"
          content={parseDate(gameDetails.released)}
        />
      </Wrapper>
    </ScrollView>
  );
};

export default GameScreen;
