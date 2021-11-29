import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen} from '../screens';
import ProfileScreen from '../screens/ProfileScreen';

const AccountStack = createNativeStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AccountStack.Screen name="AccountScreen" component={AccountScreen} />
      <AccountStack.Screen name="Profile" component={ProfileScreen} />
    </AccountStack.Navigator>
  );
};

export default AccountStackScreen;
