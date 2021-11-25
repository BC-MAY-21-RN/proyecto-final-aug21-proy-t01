import React from 'react';
import GameSection from '../GameSection';
import {parseDataToString} from '../../../library/utils/parseGames';
import {parseDate} from '../../../library/utils/parseDate';
import {GameDataProps} from './props';

const GameData = ({gameDetails}: GameDataProps) => {
  return (
    <>
      <GameSection title="About" content={gameDetails.description_raw} />
      <GameSection
        title="Platforms"
        content={parseDataToString(gameDetails.gamePlatforms)}
      />
      <GameSection
        title="Genre"
        content={parseDataToString(gameDetails.genres)}
      />
      <GameSection
        title="Developer"
        content={parseDataToString(gameDetails.developers)}
      />
      <GameSection
        title="Publisher"
        content={parseDataToString(gameDetails.publishers)}
      />
      <GameSection title="Website" content={gameDetails.website} />
      <GameSection
        title="Release date"
        content={parseDate(gameDetails.released)}
      />
    </>
  );
};

export default GameData;
