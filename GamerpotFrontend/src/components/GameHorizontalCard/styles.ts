import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

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
  skeletonItem: {
    width: '48%',
    height: 25,
    borderRadius: 5,
  },
});
