import React, {useState} from 'react';
import {Formik, FormikProps} from 'formik';
import {SignInForm} from '..';
import {SignInFormData} from '../props';
import {initialValues, signInValidationSchema} from './validationSchema';
import CustomModal from '../../CutomModal';
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

const SignInContainer = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<profileScreenParams>();

  const onSubmit = async (values: SignInFormData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const data = await AuthService.signIn(values);
      navigation.navigate('Profile', {userId: data.userId});
    } catch (error) {
      Alert.alert('Could not connect with the server');
    }
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
