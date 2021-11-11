import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkPastelGreen,
    marginTop: 2,
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 5,
    marginRight: 8,
  },
  labelTag: {
    color: colors.secondary,
    fontSize: 12,
    fontFamily: fonts.secondary,
    lineHeight: 15,
  },
});
