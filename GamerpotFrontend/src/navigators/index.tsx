import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../screens/HomeScreen/RootStackParams';
import {
  tabNavigatorOptions,
  tabStackList,
} from '../library/constants/tabScreens';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Navigators = () => {
  return (
    <Tab.Navigator screenOptions={tabNavigatorOptions}>
      {tabStackList.map((tabItem, index) => (
        <Tab.Screen
          key={index}
          name={tabItem.name as keyof RootStackParamList}
          component={tabItem.component}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name={tabItem.iconName}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Navigators;
