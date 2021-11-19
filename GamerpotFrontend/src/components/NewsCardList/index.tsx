import React from 'react';
import {FlatList, View} from 'react-native';
import {NewsCard} from '..';
import NewsCardSkeletonList from '../NewsCard/Skeleton/';
import {NewsCardListProps} from './props';

const NewsCardList = ({news}: NewsCardListProps) => {
  return (
    <View>
      <FlatList
        horizontal
        data={news}
        renderItem={({item}) => <NewsCard {...item} />}
        ListEmptyComponent={NewsCardSkeletonList}
      />
    </View>
  );
};

export default NewsCardList;
