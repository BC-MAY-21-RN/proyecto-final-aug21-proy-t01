import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../library/constants/colors';
import {DescriptionProp} from './props';

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

const styles = StyleSheet.create({
  textEllipsis: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 27,
    marginTop: 10,
  },
});
