import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import React from 'react';
import {
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextProps,
} from 'react-native';
import { Colors } from '@constants';

interface MenuButton extends RectButtonProperties {
  title?: string;
  iconName: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextProps>;
  iconStyle?: StyleProp<ViewStyle>;
  onPress?(): void;
}

const MenuButton = ({
  title,
  iconName,
  textStyle,
  iconStyle,
  style,
  onPress,
  ...rest
}: MenuButton) => {
  return (
    <RectButton
      onPress={onPress}
      activeOpacity={1}
      underlayColor={Colors.tweetBackground}
      rippleColor={Colors.tweetBackground}
      style={[styles.container, style]}
      {...rest}>
      <Icon name={iconName} size={17} style={[styles.icon, iconStyle]} />
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </RectButton>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },
  text: {
    fontSize: 14,
  },
  icon: {
    marginRight: 8,
  },
});
