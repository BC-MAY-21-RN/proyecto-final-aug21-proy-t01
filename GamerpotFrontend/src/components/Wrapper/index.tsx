import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {WrapperProps} from './props';

const Wrapper = ({children}: WrapperProps) => {
  return <ScrollView style={styles.wrapper}>{children}</ScrollView>;
};

export default Wrapper;
