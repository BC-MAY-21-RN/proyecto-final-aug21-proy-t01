import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {GameDetailsButtonsProps} from './props';
import IconButton from '../../IconButton';

const GameDetailsButtons = ({
  arrowPress = () => {},
  bookmarkPress = () => {},
}: GameDetailsButtonsProps) => {
  return (
    <View style={styles.container}>
      <IconButton onPress={arrowPress} icon="arrow-left" />
      <IconButton onPress={bookmarkPress} icon="bookmark" />
    </View>
  );
};

export default GameDetailsButtons;
