import {ReactChild} from 'react';
import {ViewStyle} from 'react-native';

export interface CustomModalProps {
  buttonText: string;
  viewStyle: ViewStyle;
  form: ReactChild;
}
