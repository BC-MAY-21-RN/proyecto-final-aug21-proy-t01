import {StyleSheet} from 'react-native';
import {colors} from '../../../library/constants/colors';
import {fonts} from '../../../library/constants/fonts';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.lightGray,
    marginHorizontal: 4,
    alignContent: 'center',
    marginBottom: 8,
  },
  buttonActive: {
    backgroundColor: colors.lightGray,
  },
  text: {
    color: colors.secondary,
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: fonts.secondary,
  },
});
