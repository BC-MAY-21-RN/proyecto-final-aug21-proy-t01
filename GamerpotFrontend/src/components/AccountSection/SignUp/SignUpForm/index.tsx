import React from 'react';
import {View} from 'react-native';
import {TextButton} from '../../..';
import {styles} from '../../styles';
import InputItem from '../../InputItem';
import {SignUpFormProps} from '../props';

const SignUpForm = ({...props}: SignUpFormProps) => {
  const {
    errors,
    loading,
    touched,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
  } = props;
  return (
    <View>
      <InputItem
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        error={errors.name}
        touched={touched.name}
        label="Name"
        textContentType="name"
      />
      <InputItem
        onChangeText={handleChange('userName')}
        onBlur={handleBlur('userName')}
        value={values.userName}
        error={errors.userName}
        touched={touched.userName}
        label="User name"
        textContentType="username"
      />
      <InputItem
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        error={errors.email}
        touched={touched.email}
        label="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <InputItem
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        error={errors.password}
        touched={touched.password}
        label="Password"
        textContentType="password"
        secureTextEntry
      />
      <InputItem
        onChangeText={handleChange('confirmationPassword')}
        onBlur={handleBlur('confirmationPassword')}
        value={values.confirmationPassword}
        error={errors.confirmationPassword}
        touched={touched.confirmationPassword}
        label="Repeat password"
        textContentType="password"
        secureTextEntry
      />
      <TextButton
        onClick={handleSubmit}
        viewStyle={styles.button}
        textStyle={styles.text}
        text={loading ? '...' : 'Sign Up'}
      />
    </View>
  );
};

export default SignUpForm;
