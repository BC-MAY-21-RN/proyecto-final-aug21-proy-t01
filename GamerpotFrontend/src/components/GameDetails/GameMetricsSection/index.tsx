import React from 'react';
import {View} from 'react-native';
import DetailsCard from '../DetailsCard';
import {styles} from './styles';
import {GameMetricsSectionProps} from './props';

const GameMetricsSection = ({game}: GameMetricsSectionProps) => {
  return (
    <View style={styles.container}>
      <DetailsCard
        bigText={game.metacritic ? `${game.metacritic}` : 'NA'}
        smallText="Score"
      />
      <DetailsCard
        bigText={game.esrb_rating ? game.esrb_rating.name.charAt(0) : 'NA'}
        smallText="Rated"
      />
      <DetailsCard
        bigText={game.playtime ? `${game.playtime}` : 'NA'}
        smallText="Duration"
        minimalText={game.playtime ? 'hrs' : ''}
      />
    </View>
  );
};

export default GameMetricsSection;
