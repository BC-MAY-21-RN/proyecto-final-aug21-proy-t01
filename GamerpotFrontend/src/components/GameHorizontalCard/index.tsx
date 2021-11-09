import React from 'react';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import {CardData} from './props';
import NewsDescription from '../NewsDescription';
import DateText from '../DateText';
import TagList from '../TagList';
import Metacritic from '../Metacritic';
import {styles} from './styles';
import LabelWithIcon from '../LabelWithIcon';

const handleClick = (link: string) => {
  if (link) {
    Linking.openURL(link);
  }
};

const GameHorizontalCard = ({
  image,
  title,
  date,
  tags,
  saves,
  comments,
  metacritic,
  link,
}: CardData) => {
  return (
    <TouchableOpacity
      onPress={() => handleClick(link)}
      style={styles.cardContainer}>
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
          <View style={styles.commentsContainer}>
            <View style={styles.row}>
              <LabelWithIcon icon="bookmark">{saves}</LabelWithIcon>
              <LabelWithIcon icon="comment">{comments}</LabelWithIcon>
            </View>
            <Metacritic score={metacritic} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default GameHorizontalCard;
