import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    backgroundColor: colors.lightGray,
    fontFamily: fonts.secondary,
    color: colors.secondary,
    fontSize: 16,
    borderRadius: 20,
    paddingLeft: 18,
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary,
    color: colors.secondary,
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    right: 20,
    top: 7,
  },
});
