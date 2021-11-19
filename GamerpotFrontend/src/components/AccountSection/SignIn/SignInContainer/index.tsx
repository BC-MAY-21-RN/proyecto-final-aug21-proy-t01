import React, {useState} from 'react';
import {Formik, FormikProps} from 'formik';
import {Alert} from 'react-native';
import {SignInForm} from '..';
import {SignInFormData} from '../props';
import {initialValues, signInValidationSchema} from './validationSchema';
import CustomModal from '../../CutomModal';
import {styles} from '../../styles';

const SignInContainer = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values: SignInFormData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    Alert.alert(values.email, values.password);
    setLoading(false);
  };

  return (
    <CustomModal
      viewStyle={styles.shortHeight}
      buttonText="Sign In"
      form={
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signInValidationSchema}>
          {(props: FormikProps<SignInFormData>) => (
            <SignInForm {...props} loading={loading} />
          )}
        </Formik>
      }
    />
  );
};

export default SignInContainer;
