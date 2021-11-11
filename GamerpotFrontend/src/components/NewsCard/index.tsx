import React from 'react';
import {View} from 'react-native';
import {DateText, NewsDescription, TagList} from '..';
import {CardData} from '../GameHorizontalCard/props';
import {styles} from './styles';
import CardImage from '../CardImage';

const NewsCard = ({image, tags = [], title, date}: CardData) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <CardImage image={image} />
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
