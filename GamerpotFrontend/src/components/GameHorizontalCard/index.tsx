import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {CardData} from './props';
import NewsDescription from '../NewsDescription';
import DateText from '../DateText';
import TagList from '../TagList';
import Metacritic from '../Metacritic';
import {styles} from './styles';
import LabelWithIcon from '../LabelWithIcon';
import CardImage from '../CardImage';
import {handleOpenLink} from '../../library/utils/links';

const GameHorizontalCard = ({
  image,
  title,
  date,
  tags,
  saves,
  comments,
  metacritic,
  link,
  onClick,
  id,
}: CardData) => {
  const [showComments, setShowComments] = useState(true);
  useEffect(() => {
    if (saves === undefined || comments === undefined) {
      setShowComments(false);
    }
  }, []);
  return (
    <TouchableOpacity
      onPress={() => (onClick ? onClick(id) : handleOpenLink(link))}
      style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <CardImage image={image} />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.titleContainer}>
          <NewsDescription text={title} numberOfLines={2} />
        </View>
        {tags && <TagList tags={tags} />}
        <DateText title={date} />
        {showComments && (
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
