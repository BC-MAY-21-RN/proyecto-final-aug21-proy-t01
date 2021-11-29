import axios from 'axios';
import {Alert} from 'react-native';
import {SignInFormData} from '../../components/AccountSection/SignIn/props';
import {SignUpFormData} from '../../components/AccountSection/SignUp/props';

const baseURL = 'http://10.0.2.2:4000/api/v1';

export const httpClient = axios.create({baseURL});

export const login = async ({email, password}: SignInFormData) => {
  try {
    const res = await httpClient({
      url: '/login',
      method: 'POST',
      data: {email, password},
      headers: {'Content-Type': 'application/json'},
    });
    return res.data;
  } catch (err) {
    Alert.alert('Invalid password or email');
  }
};

export const register = async ({
  name,
  userName,
  email,
  password,
}: SignUpFormData) => {
  try {
    const res = await httpClient({
      url: '/register',
      method: 'POST',
      data: {name, userName, email, password},
      headers: {'Content-Type': 'application/json'},
    });
    return res.data;
  } catch (error) {
    Alert.alert(error + '');
  }
};
