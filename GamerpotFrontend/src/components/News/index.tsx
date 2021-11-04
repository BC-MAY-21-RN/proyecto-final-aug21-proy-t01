import React from 'react';
import {ImageBackground, View} from 'react-native';
import {NewsProps} from './props';
import {TagList} from '..';
import {styles} from './styles';
import NewsDescription from '../NewsDescription';
import DateText from '../DateText';

const News = ({img, tags, title, dateRelease}: NewsProps) => {
  return (
    <View>
      <ImageBackground source={{uri: img}} style={styles.image} />
      <View style={styles.fade} />
      <View style={styles.newsPresentation}>
        <TagList tags={tags} />
        <View style={styles.textContainer}>
          <NewsDescription text={title} numberOfLines={2} />
          <DateText title={dateRelease} />
        </View>
      </View>
    </View>
  );
};

export default News;
