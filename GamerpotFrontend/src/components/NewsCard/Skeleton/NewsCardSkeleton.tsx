import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../../library/constants/colors';
import {styles} from '../styles';

const NewsCardSkeleton = () => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder highlightColor={colors.secondary}>
        <SkeletonPlaceholder.Item {...styles.imageContainer} />
        <SkeletonPlaceholder.Item {...styles.details}>
          <SkeletonPlaceholder.Item {...styles.skeletonItem} width="80%" />
          <SkeletonPlaceholder.Item {...styles.skeletonItem} width="100%" />
          <SkeletonPlaceholder.Item {...styles.skeletonItem} width="40%" />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default NewsCardSkeleton;
