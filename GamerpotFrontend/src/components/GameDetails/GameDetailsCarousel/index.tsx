import React from 'react';
import {View, Alert} from 'react-native';
import Carousel from '../../Carousel';
import GameDetailsButtons from '../GameDetailsButtons';
import {GameDetailsCarouselProps} from './props';

const GameDetailsCarousel = ({
  navigation,
  gameDetails,
}: GameDetailsCarouselProps) => {
  return (
    <View>
      <Carousel
        isImageCarousel={true}
        data={gameDetails.images ? gameDetails.images : []}
      />
      <GameDetailsButtons
        arrowPress={() => navigation.goBack()}
        bookmarkPress={() => Alert.alert('Game saved')}
      />
    </View>
  );
};

export default GameDetailsCarousel;
