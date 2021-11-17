import React from 'react';
import {ScrollView} from 'react-native';
import NewsCardSkeleton from './NewsCardSkeleton';
import {NewsCardSkeletonProps} from './props';

const NewsCardSkeletonList = ({display = 5}: NewsCardSkeletonProps) => {
  return (
    <ScrollView horizontal>
      {Array.from({length: display}).map((_, index) => (
        <NewsCardSkeleton key={index} />
      ))}
    </ScrollView>
  );
};

export default NewsCardSkeletonList;
