import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {SectionTitleProps} from './props';

const SectionTitle = ({title, viewStyle, textStyle}: SectionTitleProps) => {
  return (
    <View style={[styles.container, viewStyle]}>
      <Text style={[styles.textArea, textStyle]}>
        {title ? title : 'Games'}
      </Text>
    </View>
  );
};

export default SectionTitle;
