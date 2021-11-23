import {StyleSheet} from 'react-native';
import {colors} from '../../../library/constants/colors';
import {fonts} from '../../../library/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.primary,
    marginBottom: 35,
  },
  title: {
    fontFamily: fonts.primary,
    fontSize: 24,
    color: colors.complementary2,
    marginBottom: 10,
  },
  content: {
    fontFamily: fonts.secondary,
    fontSize: 16,
    color: colors.complementary2,
  },
});
