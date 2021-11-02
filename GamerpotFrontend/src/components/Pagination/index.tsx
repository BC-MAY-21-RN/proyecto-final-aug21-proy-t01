import React from 'react';
import {Text, View} from 'react-native';
import {CHAR_PAGINATION} from '../../library/constants/carouselConstants';
import {PaginationProps} from './props';
import {styles} from './styles';

const Pagination = ({data, active}: PaginationProps) => {
  return (
    <View style={styles.pagination}>
      {data.map((_, key) => (
        <Text
          key={key}
          style={key === active ? styles.textColorActive : styles.textColor}>
          {CHAR_PAGINATION}
        </Text>
      ))}
    </View>
  );
};

export default Pagination;
