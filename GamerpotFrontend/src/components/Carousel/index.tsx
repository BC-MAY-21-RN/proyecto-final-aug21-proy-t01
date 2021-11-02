import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import News from '../News';
import newsData from '../../library/utils/newsData';
import {styles} from './styles';
import Pagination from '../Pagination';

const data = newsData;

const Carousel = () => {
  const [active, setActive] = useState(0);
  const handleOnScroll = ({nativeEvent}: any) => {
    const currentIndex =
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
    const slide = Math.round(currentIndex);
    slide !== active && setActive(slide);
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
      <Pagination data={data} active={active} />
    </View>
  );
};

export default Carousel;
