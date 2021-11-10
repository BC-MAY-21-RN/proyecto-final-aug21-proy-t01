import React from 'react';
import {Image, View} from 'react-native';
import {DateText, NewsDescription, TagList} from '..';
import {CardData} from '../GameHorizontalCard/props';
import {styles} from './styles';

const NewsCard = ({image, tags = [], title, date}: CardData) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.details}>
        <TagList tags={tags} />
        <NewsDescription text={title} numberOfLines={2} />
        <DateText title={date} />
      </View>
    </View>
  );
};

export default NewsCard;
