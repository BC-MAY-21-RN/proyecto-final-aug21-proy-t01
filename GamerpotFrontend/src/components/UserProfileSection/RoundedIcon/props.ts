import {ViewStyle} from 'react-native';

export interface RoundedIconProps {
  name: string;
  size: number;
  color: string;
  customStyle: ViewStyle;
  onPress?: () => void;
}
