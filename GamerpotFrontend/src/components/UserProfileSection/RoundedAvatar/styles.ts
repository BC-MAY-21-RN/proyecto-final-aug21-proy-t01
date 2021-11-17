import {StyleSheet} from 'react-native';
import {colors} from '../../../library/constants/colors';

export const styles = StyleSheet.create({
  textUser: {
    color: colors.secondary,
    alignSelf: 'center',
    fontSize: 60,
    top: 12,
  },
  profileContainer: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    top: 85,
    width: 130,
    height: 130,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: colors.secondary,
  },
  camera: {
    backgroundColor: colors.complementary2,
    borderColor: colors.complementary2,
    width: 38,
    height: 38,
    borderWidth: 5,
    borderRadius: 50,
    padding: 3,
  },
});
