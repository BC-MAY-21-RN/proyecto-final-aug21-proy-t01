import {StyleSheet} from 'react-native';
import {colors} from '../../../library/constants/colors';
import {fonts} from '../../../library/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayComplementary,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  bigText: {
    fontFamily: fonts.primary,
    fontSize: 24,
    color: colors.darkPastelGreen,
  },
  smallText: {
    fontFamily: fonts.primary,
    fontSize: 10,
    color: colors.complementary2,
  },
  minimalText: {
    fontFamily: fonts.primary,
    fontSize: 10,
    color: colors.darkPastelGreen,
  },
});
