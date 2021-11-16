import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../HomeScreen/RootStackParams';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

type GameScreenProp = NativeStackNavigationProp<RootStackParamList, 'Game'>;
type GameRouteProp = RouteProp<RootStackParamList, 'Game'>;

const GameScreen = () => {
  const navigation = useNavigation<GameScreenProp>();
  const route = useRoute<GameRouteProp>();
  return (
    <View>
      <Text>Game screen</Text>
      <Text>{route.params.gameId}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Return</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameScreen;
