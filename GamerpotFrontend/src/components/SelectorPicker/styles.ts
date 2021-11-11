import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  itemSelected: {
    height: 40,
    width: 150,
  },
  row: {
    borderLeftWidth: 1,
    borderRightWidth: 2,
    backgroundColor: colors.darkGray,
    color: colors.secondary,
    borderColor: colors.secondary,
  },
  rowText: {
    color: colors.secondary,
  },
  buttomBorder: {
    width: 160,
    height: 32,
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.primary,
    marginHorizontal: 10,
  },
});
