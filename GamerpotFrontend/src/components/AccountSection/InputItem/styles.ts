import {StyleSheet} from 'react-native';
import {colors} from '../../../library/constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.secondary,
    width: 270,
    height: 30,
    marginTop: 12,
    borderWidth: 1,
    padding: 6,
  },
  textColor: {
    color: colors.secondary,
  },
});
