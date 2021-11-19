import {TextStyle, ViewStyle} from 'react-native';

export interface TextButtonProps {
  text: string;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
  onClick: () => void;
  disabled?: boolean;
}
