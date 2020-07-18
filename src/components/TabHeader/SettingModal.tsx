import { useSafeArea } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import { Colors } from '@constants';
import Button from '../Button';
import { MenuButton } from '@components';

interface SettingModal {
  isVisible: boolean;
  closeModal?(): void;
}

const SettingModal = ({ isVisible, closeModal }: SettingModal) => {
  const { bottom } = useSafeArea();

  const bottomInset = {
    paddingBottom: bottom,
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      style={styles.modal}>
      <View style={[styles.content, bottomInset]}>
        <MenuButton
          title={'Go to settings'}
          iconName={'settings'}
          onPress={() => null}
          style={{ borderRadius: 15 }}
        />
        <Button
          title={'Cancel'}
          onPress={closeModal}
          style={{ marginHorizontal: 14, marginVertical: 9 }}
          textStyle={{ fontWeight: 'bold' }}
        />
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
