import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import {RootStackParamList} from '../HomeScreen/RootStackParams';
import {flex} from '../../components/styles';

type loginScreenParams = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<loginScreenParams>();

  return (
    <View style={flex.container}>
      <Text>Login screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;
