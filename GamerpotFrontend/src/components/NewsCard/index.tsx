import React from 'react';
import {Image, View} from 'react-native';
import {DateText, NewsDescription, TagList} from '..';
import {NewsProps} from '../News/props';
import {styles} from './styles';

const NewsCard = ({img, tags, title, dateRelease}: NewsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: img}} style={styles.image} />
      </View>
      <View style={styles.details}>
        <TagList tags={tags} />
        <NewsDescription text={title} numberOfLines={2} />
        <DateText title={dateRelease} />
      </View>
    </View>
  );
};

export default NewsCard;
