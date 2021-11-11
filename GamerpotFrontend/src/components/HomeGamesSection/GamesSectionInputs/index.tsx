import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import SectionTitle from '../../SectionTitle';
import SelectorPicker from '../../SelectorPicker';
import {styles} from './styles';
import {Platform} from '../../../library/models/platform';
import {getPlatforms} from '../../../library/services/games.service';
import {GameSectionInputsProps} from './props';
import {GAMES_ORDERING} from '../../../library/constants/gamesConstants';

const GamesSectionInputs = ({
  handleOrderChange,
  handlePlatformChange,
}: GameSectionInputsProps) => {
  const [platforms, setPlatforms] = useState([] as Array<Platform>);
  useEffect(() => {
    const fetchPlatforms = async () => {
      const response = await getPlatforms();
      setPlatforms(response);
    };
    fetchPlatforms();
  }, []);
  const handlePlatform = (platform: string) => {
    const selectedPlatform = platforms.find(p => p.name === platform);
    handlePlatformChange(selectedPlatform.id);
  };
  return (
    <View style={styles.container}>
      <View>
        <SectionTitle title="New Games" />
      </View>
      <View style={styles.containerSelectors}>
        <SelectorPicker
          data={GAMES_ORDERING}
          defaultText="Order by"
          handleChange={handleOrderChange}
        />
        <SelectorPicker
          data={platforms.map(p => p.name)}
          defaultText="Platforms"
          handleChange={handlePlatform}
        />
      </View>
    </View>
  );
};

export default GamesSectionInputs;
