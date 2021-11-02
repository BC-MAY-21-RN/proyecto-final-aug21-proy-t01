import {StyleSheet} from 'react-native';
import {HEIGHT, WINDOW_WIDTH} from '../../library/constants/carouselConstants';
import {colors} from '../../library/constants/colors';

const width = WINDOW_WIDTH;
const height = HEIGHT;

export const styles = StyleSheet.create({
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  textContainer: {
    flexDirection: 'column',
    width: '97%',
  },
  newsPresentation: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    top: '50%',
    position: 'absolute',
    paddingLeft: 20,
    zIndex: 3,
  },
  fade: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
    opacity: 0.5,
    zIndex: 2,
    position: 'absolute',
  },
});
