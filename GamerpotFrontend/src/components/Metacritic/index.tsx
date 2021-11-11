import React from 'react';
import {View, Text} from 'react-native';
import {MetacriticProps} from './props';
import {styles} from './styles';

const Metacritic = ({score = 0}: MetacriticProps) => {
  return (
    <View style={styles.metacriticContainer}>
      <Text style={styles.metacriticText}>{score ? score : 'NA'}</Text>
    </View>
  );
};

export default Metacritic;
