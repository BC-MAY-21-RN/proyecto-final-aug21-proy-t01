import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: 20,
    paddingBottom: 20,
  },
  textArea: {
    color: colors.secondary,
    fontSize: 24,
    paddingLeft: 20,
    paddingBottom: 2,
    fontWeight: 'bold',
  },
});
