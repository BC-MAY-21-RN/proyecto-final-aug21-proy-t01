import React from 'react';
import {Text, View} from 'react-native';
import {DescriptionProp} from './props';
import {styles} from './styles';

const NewsDescription = ({text, numberOfLines}: DescriptionProp) => {
  return (
    <View>
      <Text style={styles.textEllipsis} numberOfLines={numberOfLines}>
        {text}
      </Text>
    </View>
  );
};

export default NewsDescription;
