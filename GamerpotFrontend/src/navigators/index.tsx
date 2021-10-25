import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../screens/HomeScreen/RootStackParams';
import {HomeScreen, LoginScreen, DealsScreen} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Deals" component={DealsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
