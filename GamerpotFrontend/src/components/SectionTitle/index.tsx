import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {SectionTitleProps} from './props';

const SectionTitle = ({title, mb}: SectionTitleProps) => {
  return (
    <View
      style={[styles.container, mb ? {marginBottom: mb} : {marginBottom: 5}]}>
      <Text style={styles.textArea}>{title ? title : 'Games'}</Text>
    </View>
  );
};

export default SectionTitle;
