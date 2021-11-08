import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import { fonts } from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.lightGray,
  },
  imageContainer: {
    width: 114,
    height: 114,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  dataContainer: {
    width: '70%',
    paddingHorizontal: 10,
    paddingLeft: 18,
  },
  titleContainer: {
    marginBottom: 6,
  },
  commentsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  metacriticContainer: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: colors.darkPastelGreen,
  },
  metacriticText: {
    color: colors.darkPastelGreen,
    fontFamily: fonts.primary,
    fontSize: 16,
  },
});
