import React from 'react';
import {View} from 'react-native';
import GameDeal from '../GameDeal';
import GameDealSkeleton from '../GameDeal/Skeleton/GameDealSkeleton';
import {DealsListProps} from './props';

const DealsList = ({loading, deals}: DealsListProps) => {
  return (
    <View>
      {loading &&
        Array.from({length: 10}).map((_, index) => (
          <GameDealSkeleton key={index} />
        ))}
      {!loading &&
        deals.map((deal, index) => <GameDeal game={deal} key={index} />)}
    </View>
  );
};

export default DealsList;
