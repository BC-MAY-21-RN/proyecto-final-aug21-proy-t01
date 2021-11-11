import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {TextWrapper} from '../Tag/props';

const DateText = ({title}: TextWrapper) => {
  return (
    <View>
      <Text style={styles.dateText}>{title}</Text>
    </View>
  );
};

export default DateText;
