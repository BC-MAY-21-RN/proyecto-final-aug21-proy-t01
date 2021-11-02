import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import News from '../News';
import newsData from '../../library/utils/newsData';
import {CHAR_PAGINATION} from '../../library/constants/carouselConstants';
import {styles} from './styles';

const data = newsData;

const Carousel = () => {
  const [active, setActive] = useState(0);
  const handleOnScroll = ({nativeEvent}: any) => {
    const currentIndex =
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
    const slide = Math.round(currentIndex);
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        onScroll={handleOnScroll}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>
        {data.map((item, index) => (
          <News key={index} {...item} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {data.map((_, key) => (
          <Text
            key={key}
            style={key === active ? styles.textColorActive : styles.textColor}>
            {CHAR_PAGINATION}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Carousel;
