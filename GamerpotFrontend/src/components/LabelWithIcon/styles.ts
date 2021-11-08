import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: 'auto',
    alignContent: 'center',
    marginRight: 15,
  },
  icon: {
    fontSize: 14,
    color: colors.complementary2,
  },
  text: {
    fontSize: 14,
    color: colors.complementary2,
    fontFamily: fonts.secondary,
    marginLeft: 5,
  },
});
