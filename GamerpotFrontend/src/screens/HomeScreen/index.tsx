import React, { useEffect, useState } from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import {RootStackParamList} from './RootStackParams';
import {flex} from '../../components/styles';
import { DealsSearchParams, getDeals } from '../../library/services/deals.service';

type homeScreenParams = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<homeScreenParams>();

  return (
    <View style={flex.container}>
      <Text>Home screen</Text>
      <Button title="Go Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go Deals" onPress={() => navigation.navigate('Deals')} />
    </View>
  );
};

export default HomeScreen;
