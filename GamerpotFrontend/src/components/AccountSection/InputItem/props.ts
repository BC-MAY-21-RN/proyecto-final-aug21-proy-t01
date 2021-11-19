import {TextInputProps} from 'react-native';

export interface InputTextProps extends TextInputProps {
  label: string;
  error?: string;
  touched?: boolean;
}
