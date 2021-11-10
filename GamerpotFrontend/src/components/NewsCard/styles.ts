import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: 260,
    height: 363,
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    margin: 16,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 260,
    height: 196,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 20,
    height: 167,
  },
});
