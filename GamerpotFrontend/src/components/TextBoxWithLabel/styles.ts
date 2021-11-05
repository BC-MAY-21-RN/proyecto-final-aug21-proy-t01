import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  labels: {
    color: colors.secondary,
    marginRight: 8,
    fontSize: 16,
    fontFamily: fonts.secondary,
  },
  inputs: {
    backgroundColor: colors.lightGray,
    color: colors.secondary,
    textAlign: 'left',
    width: 250,
    padding: 5,
    paddingLeft: 15,
    fontSize: 14,
  },
});
