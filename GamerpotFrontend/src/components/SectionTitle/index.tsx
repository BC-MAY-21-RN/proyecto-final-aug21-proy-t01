import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {SectionTitleProps} from './props';

const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textArea}>{title ? title : 'Games'}</Text>
    </View>
  );
};

export default SectionTitle;
