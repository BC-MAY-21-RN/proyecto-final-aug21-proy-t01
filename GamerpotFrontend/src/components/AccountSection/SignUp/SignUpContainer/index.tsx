import React, {useState} from 'react';
import {Formik, FormikProps} from 'formik';
import CustomModal from '../../CutomModal';
import {SignUpFormData} from '../props';
import {initialValues} from './validationSchema';
import {signUpValidationSchema} from './validationSchema';
import {SignUpForm} from '..';
import {styles} from '../../styles';
import {AuthService} from '../../../../library/services/auth.service';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../screens/HomeScreen/RootStackParams';
import {useNavigation} from '@react-navigation/core';
import {Alert} from 'react-native';

type profileScreenParams = NativeStackNavigationProp<
  RootStackParamList,
  'Account'
>;

const SignUpContainer = () => {
  const [loading, setloading] = useState(false);
  const navigation = useNavigation<profileScreenParams>();

  const onSubmit = async (values: SignUpFormData) => {
    if (loading) {
      return;
    }
    setloading(true);
    try {
      const response = await AuthService.signUp(values);
      navigation.navigate('Profile', {userId: response.userId});
    } catch (error) {
      Alert.alert('Could not connect with the server');
    }
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
