import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../HomeScreen/RootStackParams';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {GameDetails} from '../../library/models/gameDetails';
import {getGameInfo} from '../../library/services/games.service';
import {Carousel, Wrapper} from '../../components';

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
    <ScrollView>
      <Carousel
        isImageCarousel={true}
        data={gameDetails.images ? gameDetails.images : []}
      />
      <Wrapper isCardWrapper={true}>
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
