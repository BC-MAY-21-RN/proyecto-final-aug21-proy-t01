import * as Yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
};

export const signInValidationSchema = Yup.object({
  email: Yup.string().email('Enter valid email').required(),
  password: Yup.string()
    .min(8, 'Password is too short')
    .max(25, 'Password is too long')
    .required(),
});
