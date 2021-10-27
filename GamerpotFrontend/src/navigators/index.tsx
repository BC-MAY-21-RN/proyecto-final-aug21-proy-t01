import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../screens/HomeScreen/RootStackParams';
import {
  HomeScreen,
  DealsScreen,
  BestGamesScreen,
  ProfileScreen,
} from '../screens';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Navigators = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Deals" component={DealsScreen} />
        <Tab.Screen name="BestGames" component={BestGamesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
