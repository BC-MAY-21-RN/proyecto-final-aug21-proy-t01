import {StyleSheet} from 'react-native';
import {colors} from '../library/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBackground: {
    backgroundColor: colors.dealsBackground,
    paddingBottom: 4,
  },
  dateText: {
    color: colors.secondary,
    marginTop: 10,
    fontSize: 14,
  },
});
