import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  containerSelectors: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
  },
});
