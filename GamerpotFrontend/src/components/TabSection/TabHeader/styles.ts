import {StyleSheet} from 'react-native';
import {colors} from '../../../library/constants/colors';
import {fonts} from '../../../library/constants/fonts';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  headerItem: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 10,
  },
  headerItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.blue,
  },
  headerItemTextBase: {
    fontSize: 14,
    fontFamily: fonts.primary,
    color: colors.secondary,
  },
  headerItemTextActive: {
    color: colors.blue,
  },
});
