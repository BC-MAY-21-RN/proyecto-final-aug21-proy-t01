import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {WrapperProps} from './props';

const Wrapper = ({children, isCardWrapper = false}: WrapperProps) => {
  return (
    <ScrollView style={isCardWrapper ? styles.cardWrapper : styles.wrapper}>
      {children}
    </ScrollView>
  );
};

export default Wrapper;
