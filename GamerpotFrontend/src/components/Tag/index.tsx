import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface TagProps {
  text: string;
}

const Tag = ({text}: TagProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelTag} numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
};

export default Tag;
