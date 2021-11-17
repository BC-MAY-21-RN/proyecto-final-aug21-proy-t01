import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {styles} from './styles';

interface TagProps {
  text: string;
  textStyle?: TextStyle;
  viewStyle?: ViewStyle;
}

const Tag = ({text, textStyle, viewStyle}: TagProps) => {
  return (
    <View style={viewStyle ? viewStyle : styles.container}>
      <Text style={textStyle ? textStyle : styles.labelTag} numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
};

export default Tag;
