import {Linking} from 'react-native';

export const handleOpenLink = (link: string) => {
  if (link) {
    Linking.openURL(link);
  }
};
