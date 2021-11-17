import React, {useState} from 'react';
import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import {colors} from '../../../library/constants/colors';
import RoundedIcon from '../RoundedIcon';
import {styles} from './styles';
import {AboutMeProps} from './props';
import {Tag} from '../..';

const AboutMe = ({description, editable}: AboutMeProps) => {
  const [modalTextVisible, setModalTextVisible] = useState(false);
  const [text, setText] = useState(description);
  return (
    <View style={styles.textInputContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalTextVisible}
        onRequestClose={() => setModalTextVisible(!modalTextVisible)}>
        <View style={styles.modalDescription}>
          <TextInput
            style={styles.descriptionText}
            onChangeText={setText}
            value={text}
            editable={true}
            multiline
            maxLength={140}
          />
          <Pressable
            style={styles.btnSave}
            onPress={() => setModalTextVisible(!modalTextVisible)}>
            <Text style={styles.btnText}>Save</Text>
          </Pressable>
        </View>
      </Modal>
      <Tag
        text="About me"
        viewStyle={styles.aboutContainer}
        textStyle={styles.aboutText}
      />
      {editable && (
        <RoundedIcon
          name="pencil"
          size={23}
          color={colors.secondary}
          customStyle={styles.pencilIcon}
          onPress={() => {
            setModalTextVisible(true);
          }}
        />
      )}
      <Text style={styles.descriptionText}>{text}</Text>
    </View>
  );
};

export default AboutMe;
