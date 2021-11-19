import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 5,
  },
  textArea: {
    color: colors.secondary,
    fontSize: 24,
    paddingBottom: 2,
    fontFamily: fonts.primary,
  },
});
