import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Tag} from '..';

interface Tags {
  tags: string[];
}

const TagList = ({tags}: Tags) => {
  return (
    <View style={styles.container}>
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
    </View>
  );
};

export default TagList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: '100%',
    flexWrap: 'wrap',
    maxHeight: 28,
    overflow: 'hidden',
  },
});
