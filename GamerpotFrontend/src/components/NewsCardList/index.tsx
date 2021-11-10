import React from 'react';
import {FlatList, View} from 'react-native';
import {NewsCard} from '..';
import {NewsCardListProps} from './props';

const NewsCardList = ({news}: NewsCardListProps) => {
  return (
    <View>
      <FlatList
        horizontal
        data={news}
        renderItem={({item}) => <NewsCard {...item} />}
      />
    </View>
  );
};

export default NewsCardList;
