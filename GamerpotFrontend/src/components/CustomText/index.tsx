import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface TextWrapper {
  title: string;
}

const CustomText = ({title}: TextWrapper) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CustomText;
