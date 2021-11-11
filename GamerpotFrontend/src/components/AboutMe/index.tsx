import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../library/constants/colors';
import {AboutProps} from './props';
import {styles} from './styles';

const AboutMe = ({title, description, isLoggedIn}: AboutProps) => {
  return (
    <View style={styles.aboutContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.aboutText}>{title ? title : 'About Me'}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.icon}>
          {isLoggedIn && (
            <MaterialCommunityIcons
              name="pencil-outline"
              size={24}
              color={colors.secondary}
            />
          )}
        </View>
        <Text style={styles.textArea} numberOfLines={3}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default AboutMe;
