import React, {useState} from 'react';
import {Modal, View} from 'react-native';
import {SectionTitle, TextButton} from '../..';
import {styles} from './styles';
import {CustomModalProps} from './props';
import CloseIcon from '../CloseIcon';

function CustomModal({buttonText, viewStyle, form}: CustomModalProps) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={[styles.modalContainer, viewStyle]}>
          <CloseIcon onPress={() => setModalVisible(false)} />
          <SectionTitle
            title="GAMERPOT"
            viewStyle={styles.bgColor}
            textStyle={(styles.bgColor, styles.text)}
          />
          {form}
        </View>
      </Modal>
      <TextButton
        text={buttonText}
        viewStyle={styles.button}
        textStyle={styles.buttonText}
        onClick={() => setModalVisible(true)}
      />
    </View>
  );
}

export default CustomModal;
