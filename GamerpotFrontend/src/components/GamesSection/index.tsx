import React from 'react';
import {View} from 'react-native';
import SectionTitle from '../SectionTitle';
import SelectorPicker from '../SelectorPicker';
import {styles} from './styles';

const platforms = ['Xbox', 'PlayStation', 'Nintento', 'PC'];

const GamesSection = () => {
  return (
    <View style={styles.container}>
      <View>
        <SectionTitle title="New Games" />
      </View>
      <View style={styles.containerSelectors}>
        <SelectorPicker data={platforms} defaultText="Order by" />
        <SelectorPicker data={platforms} defaultText="Platforms" />
      </View>
    </View>
  );
};

export default GamesSection;
