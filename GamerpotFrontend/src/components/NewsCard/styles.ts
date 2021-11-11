import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 260,
    height: 363,
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    margin: 16,
  },
  image: {
    position: 'absolute',
    width: 260,
    height: 196,
    borderRadius: 10,
    top: 0,
  },
  details: {
    flex: 1,
    position: 'absolute',
    top: '60%',
    paddingLeft: 20,
  },
});
