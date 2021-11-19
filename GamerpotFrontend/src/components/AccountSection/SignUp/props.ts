import {FormikProps} from 'formik';

export interface SignUpFormData {
  name: string;
  userName: string;
  email: string;
  password: string;
  confirmationPassword: string;
}

export interface SignUpFormProps extends FormikProps<SignUpFormData> {
  loading?: boolean;
}
