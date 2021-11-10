import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParams';
import {
  Carousel,
  GamesSection,
  NewsSection,
  Wrapper,
  TabSection,
} from '../../components';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {data} from '../../library/constants/tabSectionExample';

type homeScreenParams = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Carousel />
      <Wrapper>
      </Wrapper>
      <Wrapper>
        <TabSection tabData={data} />
      </Wrapper>
    </ScrollView>
  );
};

export default HomeScreen;
