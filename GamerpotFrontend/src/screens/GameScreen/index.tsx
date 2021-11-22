import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../HomeScreen/RootStackParams';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {GameDetails} from '../../library/models/gameDetails';
import {getGameInfo} from '../../library/services/games.service';
import {Carousel, Wrapper, NewsDescription, TagList} from '../../components';
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
        <TagList tags={gameDetails.genres.map(genre => genre.name)} />
        <Text>Game screen</Text>
        <Text>{route.params.gameId}</Text>
        <Text>{gameDetails.name}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Return</Text>
        </TouchableOpacity>
      </Wrapper>
    </ScrollView>
  );
};

export default GameScreen;
