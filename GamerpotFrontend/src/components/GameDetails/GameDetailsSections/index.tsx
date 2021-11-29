import React from 'react';
import {View} from 'react-native';
import {
  NewsDescription,
  TagList,
  GameMetricsSection,
  GameData,
  ContentDivisor,
} from '../../../components';
import {parseDataToArray} from '../../../library/utils/parseGames';
import {GameDetailsSectionsProps} from './props';
import {styles} from './styles';

const GameDetailsSections = ({gameDetails}: GameDetailsSectionsProps) => {
  return (
    <View>
      <NewsDescription
        text={gameDetails.name}
        numberOfLines={2}
        textStyle={styles.title}
      />
      <TagList tags={parseDataToArray(gameDetails.genres)} />
      <GameMetricsSection game={gameDetails} />
      <ContentDivisor />
      <GameData gameDetails={gameDetails} />
    </View>
  );
};

export default GameDetailsSections;
