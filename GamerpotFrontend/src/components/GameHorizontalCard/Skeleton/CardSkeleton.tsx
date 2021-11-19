import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../../library/constants/colors';
import {styles} from '../styles';

const GameHorizontalCardSkeleton = () => {
  return (
    <View style={styles.cardContainer}>
      <SkeletonPlaceholder highlightColor={colors.secondary}>
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item
            width={styles.imageContainer.width}
            height={styles.imageContainer.height}
            borderRadius={10}
          />
          <SkeletonPlaceholder.Item
            width="60%"
            flexDirection="column"
            justifyContent="space-between"
            marginLeft={styles.dataContainer.paddingLeft}>
            <SkeletonPlaceholder.Item {...styles.skeletonItem} width="95%" />
            <SkeletonPlaceholder.Item {...styles.skeletonItem} />
            <SkeletonPlaceholder.Item {...styles.skeletonItem} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default GameHorizontalCardSkeleton;
