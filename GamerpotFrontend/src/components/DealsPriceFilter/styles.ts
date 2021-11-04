import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
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
    padding: 10,
    paddingLeft: 15,
    fontSize: 16,
  },
  picker: {
    backgroundColor: colors.lightGray,
    color: colors.secondary,
    fontFamily: fonts.secondary,
    width: 250,
  },
  title: {
    fontFamily: fonts.primary,
    fontSize: 18,
    color: colors.secondary,
    marginBottom: 10,
  },
});
