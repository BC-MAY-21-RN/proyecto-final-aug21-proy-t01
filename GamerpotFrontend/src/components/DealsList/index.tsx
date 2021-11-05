import React from 'react';
import {View, Text} from 'react-native';
import GameDeal from '../GameDeal';
import {DealsListProps} from './props';

const DealsList = ({loading, deals}: DealsListProps) => {
  return (
    <View>
      {loading && <Text>Loading...</Text>}
      {!loading &&
        deals.map((deal, index) => <GameDeal game={deal} key={index} />)}
    </View>
  );
};

export default DealsList;
