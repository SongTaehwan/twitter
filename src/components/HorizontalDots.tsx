import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@constants';

interface HorizontalDotsProps {
  onPress?(): void;
}

const HorizontalDots = ({ onPress }: HorizontalDotsProps) => {
  return (
    <RectButton
      style={styles.container}
      underlayColor={Colors.anchorColor}
      rippleColor={'rgba(27, 148, 224, 0.1)'}
      onPress={onPress}>
      <Icon
        name={'dots-three-horizontal'}
        color={Colors.twitterBlue}
        size={22}
      />
    </RectButton>
  );
};

export default HorizontalDots;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 8,
  },
});
