import React from 'react';
import {View, Text} from 'react-native';
import {flex} from '../styles';

interface TextWrapper {
  title: string;
}

const CustomText = ({title}: TextWrapper) => {
  return (
    <View style={flex.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default CustomText;
