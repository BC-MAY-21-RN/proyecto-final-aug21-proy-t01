import * as Yup from 'yup';

export const initialValues = {
  name: '',
  userName: '',
  email: '',
  password: '',
  confirmationPassword: '',
};

export const signUpValidationSchema = Yup.object({
  name: Yup.string()
    .min(4, 'Name is too short')
    .max(15, 'Name is too long')
    .required(),
  userName: Yup.string().min(4).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    )
    .required(),
  confirmationPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password must match',
  ),
});
