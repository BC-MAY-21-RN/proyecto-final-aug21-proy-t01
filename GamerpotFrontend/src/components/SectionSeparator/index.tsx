import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {SectionSeparatorProps} from './props';

const SectionSeparator = ({title}: SectionSeparatorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default SectionSeparator;
