import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  itemSelected: {
    height: 28,
    width: 140,
  },
  row: {
    borderLeftWidth: 1,
    borderRightWidth: 2,
    backgroundColor: colors.darkGray,
    color: colors.secondary,
    borderColor: colors.secondary,
    justifyContent: 'center',
  },
  rowText: {
    color: colors.secondary,
    fontSize: 16,
    fontFamily: fonts.secondary,
    textAlign: 'left',
  },
  buttomBorder: {
    width: 150,
    height: 28,
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.primary,
    marginLeft: 18,
  },
});
