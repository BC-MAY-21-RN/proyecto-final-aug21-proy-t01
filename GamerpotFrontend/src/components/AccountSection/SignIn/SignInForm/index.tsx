import React from 'react';
import {View} from 'react-native';
import {TextButton} from '../../..';
import {colors} from '../../../../library/constants/colors';
import RoundedIcon from '../../../UserProfileSection/RoundedIcon';
import InputItem from '../../InputItem';
import {styles} from '../../styles';
import {SignInProps} from '../props';
import {styles as iconStyles} from './styles';
function SignInForm({...props}: SignInProps) {
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
    <View style={styles.container}>
      <View style={iconStyles.input}>
        <RoundedIcon
          name="account"
          size={23}
          color={colors.secondary}
          customStyle={iconStyles.icon}
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
      </View>
      <View style={iconStyles.input}>
        <RoundedIcon
          name="lock"
          size={23}
          color={colors.secondary}
          customStyle={iconStyles.icon}
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
          blurOnSubmit
        />
      </View>
      <TextButton
        onClick={handleSubmit}
        viewStyle={styles.buttonWidth}
        textStyle={styles.text}
        text={loading ? '...' : 'Sign in'}
      />
    </View>
  );
}

export default SignInForm;
