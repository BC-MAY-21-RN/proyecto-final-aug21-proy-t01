import React from 'react';
import {View, Text} from 'react-native';
import {GameSectionProps} from './props';
import {styles} from './styles';

const GameSection = ({title, content}: GameSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default GameSection;
