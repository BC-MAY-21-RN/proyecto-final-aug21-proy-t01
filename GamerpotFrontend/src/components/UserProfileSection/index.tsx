import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
import {AboutMe, RoundedAvatar} from '..';
import {colors} from '../../library/constants/colors';
import PencilIcon from './PencilIcon';
import RoundedIcon from './RoundedIcon';

interface UserProfileSectionProps {
  name: string;
  nickname: string;
  initialCharacter: string;
  description: string;
  editable: boolean;
}

const UserProfileSection = ({
  name,
  nickname,
  initialCharacter,
  description,
  editable = false,
}: UserProfileSectionProps) => {
  const [bgColor, setBgColor] = useState(colors.darkPastelGreen);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.backgroundContainer, {backgroundColor: bgColor}]}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <ColorPicker
            onColorSelected={bg => {
              setBgColor(bg);
              setModalVisible(!modalVisible);
            }}
            style={styles.modalContainer}
          />
        </Modal>
        <PencilIcon
          styleView={styles.icon}
          editable={editable}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <RoundedAvatar text={initialCharacter} bgColor={bgColor} />
      <View style={styles.details}>
        <Text style={[styles.textLabel, styles.size30]}>{name}</Text>
        <Text style={[styles.textLabel, styles.size20]}>{nickname}</Text>
      </View>
      <AboutMe description={description} editable={editable} />
    </View>
  );
};

export default UserProfileSection;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  container: {
    backgroundColor: colors.primary,
    height: 450,
  },
  backgroundContainer: {
    height: 157,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  icon: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: 100,
    borderWidth: 5,
    margin: 5,
  },
  details: {
    top: 65,
  },
  textLabel: {
    color: colors.secondary,
    textAlign: 'center',
  },
  size30: {
    fontSize: 30,
  },
  size20: {
    fontSize: 20,
    fontWeight: '500',
  },
});
