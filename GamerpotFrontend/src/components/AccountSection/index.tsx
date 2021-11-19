import React from 'react';
import {Text, View} from 'react-native';
import {SignUpContainer} from './SignUp';
import {SignInContainer} from './SignIn';
import {styles} from './styles';

const AccountSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.section}>
        <Text style={styles.textLabel}>You are not logged in, please</Text>
        <SignInContainer />
        <Text style={styles.textLabel}>Or</Text>
        <SignUpContainer />
      </View>
    </View>
  );
};

export default AccountSection;
