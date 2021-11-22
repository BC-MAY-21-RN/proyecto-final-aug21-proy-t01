import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingLeft: 15,
    paddingRight: 15,
  },
  cardWrapper: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 35,
    marginTop: -30,
  },
});
