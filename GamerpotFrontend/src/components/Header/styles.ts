import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.complementary,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    alignSelf: 'center',
    fontFamily: fonts.header,
    fontSize: 18,
    color: colors.secondary,
  },
});
