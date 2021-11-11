import React from 'react';
import {FlatList, View} from 'react-native';
import {NewsProps} from '../News/props';
import {NewsCard} from '..';

const NewsCardList = ({...newsData}: NewsProps[]) => {
  return (
    <View>
      <FlatList
        horizontal
        data={newsData}
        renderItem={({item}) => <NewsCard {...item} />}
      />
    </View>
  );
};

export default NewsCardList;
