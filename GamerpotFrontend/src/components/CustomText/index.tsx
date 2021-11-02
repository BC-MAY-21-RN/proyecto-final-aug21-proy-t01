import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';
import {TextWrapper} from './props';

const CustomText = ({title}: TextWrapper) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default CustomText;
