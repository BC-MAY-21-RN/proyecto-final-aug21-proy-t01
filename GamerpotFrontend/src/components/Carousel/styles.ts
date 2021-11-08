import {StyleSheet} from 'react-native';
import {HEIGHT, WINDOW_WIDTH} from '../../library/constants/carouselConstants';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: WINDOW_WIDTH,
    height: HEIGHT,
  },
  scroll: {
    width: WINDOW_WIDTH,
    height: HEIGHT,
  },
});
