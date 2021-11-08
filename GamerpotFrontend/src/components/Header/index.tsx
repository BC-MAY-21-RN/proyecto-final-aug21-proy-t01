import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>GAMERPOT</Text>
    </View>
  );
};

export const createHeader = () => <Header />;

export default Header;
