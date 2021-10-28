import React, {useEffect, useState} from 'react';
import {Button, Text, View, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import {RootStackParamList} from './RootStackParams';
import {flex} from '../../components/styles';
import {getGames, getGameInfo} from '../../library/services/games.service';
import {GameDetails} from '../../library/models/gameDetails';
import {GameResponse} from '../../library/models/gameResponse';
import {GamesSearchParams} from '../../library/models/gamesSearchParams';

type homeScreenParams = NativeStackNavigationProp<RootStackParamList, 'Home'>;
const params: GamesSearchParams = {
  page: 1,
  page_size: 10,
};

const HomeScreen = () => {
  const navigation = useNavigation<homeScreenParams>();
  const [games, setGames] = useState([] as GameDetails[]);

  useEffect(() => {
    const fetchGamesData = async () => {
      const response: GameResponse = await getGames(params);
      setGames(response.results);
    };
    fetchGamesData();
  }, []);

  return (
    <View style={flex.container}>
      <Text>Home screen</Text>
      <Button title="Go Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go Deals" onPress={() => navigation.navigate('Deals')} />
      <ScrollView>
        {games &&
          games.map((game, index) => {
            return (
              <View key={index}>
                <Text>{game.name}</Text>
                <Text>{game.playtime}</Text>
                <Text>{game.id}</Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
