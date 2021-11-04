import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkPastelGreen,
    marginTop: 2,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginRight: 8,
  },
  labelTag: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
  },
});
