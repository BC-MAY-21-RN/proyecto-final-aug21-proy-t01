import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParams';
import {
  Carousel,
  GamesSection,
  NewsSection,
  Wrapper,
  TrendingSection,
} from '../../components';
import {ScrollView} from 'react-native';
import {styles} from './styles';

type homeScreenParams = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Carousel />
      <Wrapper>
        <GamesSection />
      </Wrapper>
      <NewsSection />
      <Wrapper>
        <TrendingSection />
      </Wrapper>
    </ScrollView>
  );
};

export default HomeScreen;
