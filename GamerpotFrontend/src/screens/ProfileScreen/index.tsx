import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../HomeScreen/RootStackParams';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

type ProfileScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;
type ProfileRouteProp = RouteProp<RootStackParamList, 'Profile'>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenProp>();
  const route = useRoute<ProfileRouteProp>();
  return (
    <View>
      <Text>Profile screen</Text>
      <Text>{route.params.userId}</Text>
    </View>
  );
};

export default ProfileScreen;
