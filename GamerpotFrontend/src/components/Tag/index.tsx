import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../library/constants/colors';

interface TagProps {
  text: string;
}

const Tag = ({text}: TagProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelTag}>{text}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkPastelGreen,
    marginTop: 2,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginRight: 8,
  },
  labelTag: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
  },
});
