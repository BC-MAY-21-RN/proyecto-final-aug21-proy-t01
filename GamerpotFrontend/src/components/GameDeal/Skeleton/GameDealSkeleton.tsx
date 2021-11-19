import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../../library/constants/colors';
import {styles} from '../styles';

const GameDealSkeleton = () => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder highlightColor={colors.secondary}>
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item width={130} height={60} />
          <SkeletonPlaceholder.Item
            {...styles.titleContainer}
            justifyContent="space-evenly"
            width="60%">
            <SkeletonPlaceholder.Item width="100%" height={16} />
            <SkeletonPlaceholder.Item width="100%" height={16} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default GameDealSkeleton;
