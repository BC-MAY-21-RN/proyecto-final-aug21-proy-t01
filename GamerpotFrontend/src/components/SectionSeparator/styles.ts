import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  line: {
    width: '100%',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  text: {
    color: colors.secondary,
    fontFamily: 'TruenoSemibold-Z9yl',
    fontSize: 18,
  },
});
