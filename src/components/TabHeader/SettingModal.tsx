import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { Colors } from '@constants';
import Button from '../Button';

interface SettingModal {
  isVisible: boolean;
  closeModal?(): void;
}

const SettingModal = ({ isVisible, closeModal }: SettingModal) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      style={styles.modal}>
      <View style={styles.content}>
        <Button />
      </View>
    </Modal>
  );
};

export default SettingModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
