import CloseIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@constants';

interface CloseButtonProps {
  onPress?(): void;
}

const BUTTON_RADIUS = 27;

const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.clearBtn} />
      <CloseIcon
        size={BUTTON_RADIUS}
        color={Colors.twitterBlue}
        name={'close-circle'}
      />
    </TouchableOpacity>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  clearBtn: {
    borderRadius: BUTTON_RADIUS / 2,
    position: 'absolute',
    backgroundColor: 'white',
    top: 3,
    left: 3,
    right: 3,
    bottom: 3,
  },
});
