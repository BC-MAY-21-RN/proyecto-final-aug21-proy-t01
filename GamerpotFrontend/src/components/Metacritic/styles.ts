import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  metacriticContainer: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: colors.darkPastelGreen,
  },
  metacriticText: {
    color: colors.darkPastelGreen,
    fontFamily: fonts.primary,
    fontSize: 16,
  },
});
