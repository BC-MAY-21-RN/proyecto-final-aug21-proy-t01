import {StyleSheet} from 'react-native';
import {HEIGHT, WINDOW_WIDTH} from '../../library/constants/carouselConstants';

const width = WINDOW_WIDTH;
const height = HEIGHT;

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 2,
    width,
    height,
  },
  scroll: {width, height},
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  textColor: {fontSize: width / 30, color: '#888', margin: 3},
  textColorActive: {fontSize: width / 30, color: '#fff', margin: 3},
});
