import {Alert} from 'react-native';
import {SignInFormData} from '../../components/AccountSection/SignIn/props';
import {SignUpFormData} from '../../components/AccountSection/SignUp/props';

import * as httpClient from './client';

export const AuthService = {
  signIn: async ({email, password}: SignInFormData) => {
    try {
      return await httpClient.login({email, password});
    } catch (error) {
      Alert.alert(error + '');
    }
  },
  signUp: async ({name, userName, email, password}: SignUpFormData) => {
    try {
      return await httpClient.register({name, userName, email, password});
    } catch (error) {
      Alert.alert(error + '');
    }
  },
};
