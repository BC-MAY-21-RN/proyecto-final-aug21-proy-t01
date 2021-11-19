import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Formik, FormikProps} from 'formik';
import CustomModal from '../../CutomModal';
import {SignUpFormData} from '../props';
import {initialValues} from './validationSchema';
import {signUpValidationSchema} from './validationSchema';
import {SignUpForm} from '..';
import {styles} from '../../styles';

const SignUpContainer = () => {
  const [loading, setloading] = useState(false);
  const onSubmit = async (values: SignUpFormData) => {
    if (loading) {
      return;
    }

    setloading(true);
    Alert.alert(values.email, values.password);
    setloading(false);
  };
  return (
    <CustomModal
      viewStyle={styles.largeHeight}
      buttonText="Sign Up"
      form={
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signUpValidationSchema}>
          {(props: FormikProps<SignUpFormData>) => (
            <SignUpForm {...props} loading={loading} />
          )}
        </Formik>
      }
    />
  );
};

export default SignUpContainer;
