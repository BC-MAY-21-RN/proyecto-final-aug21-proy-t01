import {ViewStyle} from 'react-native';

export interface PencilIconProps {
  editable: boolean;
  styleView: ViewStyle;
  onPress?: () => void;
}
