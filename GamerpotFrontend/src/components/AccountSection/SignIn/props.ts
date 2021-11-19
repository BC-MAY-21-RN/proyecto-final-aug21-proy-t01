import {FormikProps} from 'formik';

export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignInProps extends FormikProps<SignInFormData> {
  loading?: boolean;
}
