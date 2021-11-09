import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {CardData} from './props';
import NewsDescription from '../NewsDescription';
import DateText from '../DateText';
import TagList from '../TagList';
import {styles} from './styles';

const GameHorizontalCard = ({
  image,
  title,
  date,
  tags,
  saves,
  comments,
  metacritic,
}: CardData) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.titleContainer}>
          <NewsDescription text={title} numberOfLines={2} />
        </View>
        {tags && <TagList tags={tags} />}
        <DateText title={date} />
        {saves && (
          <View>
            <Text>{saves}</Text>
            <Text>{comments}</Text>
            <Text>{metacritic}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default GameHorizontalCard;
