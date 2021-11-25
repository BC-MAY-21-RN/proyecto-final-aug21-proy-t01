import React, {useState} from 'react';
import {ScrollView, View, Image} from 'react-native';
import News from '../News';
import newsData from '../../library/utils/newsData';
import {styles} from './styles';
import DotPagination from '../DotPagination';
import {CarouselProps} from './props';

const Carousel = ({
  data = newsData,
  isImageCarousel = false,
}: CarouselProps) => {
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
        {data.map((item, index) =>
          isImageCarousel ? (
            <Image
              key={index}
              source={{uri: item.image}}
              style={styles.scroll}
            />
          ) : (
            <News key={index} {...item} />
          ),
        )}
      </ScrollView>
      <DotPagination data={data} active={active} />
    </View>
  );
};

export default Carousel;
