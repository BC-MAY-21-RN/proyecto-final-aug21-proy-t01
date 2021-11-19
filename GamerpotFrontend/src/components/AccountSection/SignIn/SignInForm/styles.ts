import {StyleSheet} from 'react-native';
import {colors} from '../../../../library/constants/colors';

export const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.primary,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
