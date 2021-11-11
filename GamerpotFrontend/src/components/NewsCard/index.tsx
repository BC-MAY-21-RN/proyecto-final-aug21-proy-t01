import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {DateText, NewsDescription, TagList} from '..';
import {CardData} from '../GameHorizontalCard/props';
import {styles} from './styles';
import CardImage from '../CardImage';
import {handleOpenLink} from '../../library/utils/links';

const NewsCard = ({image, tags = [], title, date, link}: CardData) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleOpenLink(link)}>
      <View style={styles.imageContainer}>
        <CardImage image={image} />
      </View>
      <View style={styles.details}>
        <TagList tags={tags} />
        <NewsDescription text={title} numberOfLines={2} />
        <DateText title={date} />
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
