import React from 'react';
import {Text, View} from 'react-native';
import {DescriptionProp} from './props';
import {styles} from './styles';

const NewsDescription = ({text, numberOfLines, textStyle}: DescriptionProp) => {
  return (
    <View>
      <Text
        style={{...styles.textEllipsis, ...textStyle}}
        numberOfLines={numberOfLines}>
        {text}
      </Text>
    </View>
  );
};

export default NewsDescription;
