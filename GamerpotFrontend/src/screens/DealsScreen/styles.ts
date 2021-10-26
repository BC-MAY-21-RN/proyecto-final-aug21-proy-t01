import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.secondary,
    fontFamily: fonts.secondary,
  },
});
