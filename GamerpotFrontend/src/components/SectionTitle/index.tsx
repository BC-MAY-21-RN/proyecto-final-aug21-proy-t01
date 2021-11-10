import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {SectionTitleProp} from './props';

const SectionTitle = ({title}: SectionTitleProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textArea}>{title}</Text>
    </View>
  );
};

export default SectionTitle;
