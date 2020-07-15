import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@constants';

interface ArrowProps {
  dircetion?: 'up' | 'down' | 'left' | 'right';
  onPress?(): void;
}

const ArrowButton = ({ dircetion = 'left', onPress }: ArrowProps) => {
  return (
    <RectButton
      style={styles.container}
      underlayColor={Colors.anchorColor}
      rippleColor={'rgba(27, 148, 224, 0.1)'}
      onPress={onPress}>
      <Icon name={`arrow${dircetion}`} color={Colors.twitterBlue} size={22} />
    </RectButton>
  );
};

export default ArrowButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 8,
  },
});
