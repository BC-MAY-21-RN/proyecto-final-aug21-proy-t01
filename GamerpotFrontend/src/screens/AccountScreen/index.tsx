import React from 'react';
import AccountSection from '../../components/AccountSection';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../HomeScreen/RootStackParams';

type accountScreenParams = NativeStackNavigationProp<
  RootStackParamList,
  'Account'
>;

const AccountScreen = () => {
  return <AccountSection />;
};

export default AccountScreen;
