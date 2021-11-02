import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../library/constants/carouselConstants';

const width = WINDOW_WIDTH;
export const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  textColor: {fontSize: width / 30, color: '#888', margin: 3},
  textColorActive: {fontSize: width / 30, color: '#fff', margin: 3},
});
