import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {GameDetailsButtonsProps} from './props';

const GameDetailsButtons = ({
  arrowPress = () => {},
  bookmarkPress = () => {},
}: GameDetailsButtonsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={arrowPress}>
        <Icon name="arrow-left" size={32} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={bookmarkPress}>
        <Icon name="bookmark" size={32} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default GameDetailsButtons;
