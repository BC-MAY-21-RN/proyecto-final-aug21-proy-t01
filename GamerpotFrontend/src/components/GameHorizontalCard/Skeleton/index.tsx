import React from 'react';
import {View} from 'react-native';
import GameHorizontalCardSkeleton from './CardSkeleton';
import {GameCardSkeletonProps} from './props';

const GameCardSkeletonList = ({display = 1}: GameCardSkeletonProps) => {
  return (
    <View>
      {Array.from({length: display}).map((_, index) => (
        <GameHorizontalCardSkeleton key={index} />
      ))}
    </View>
  );
};

export default GameCardSkeletonList;
