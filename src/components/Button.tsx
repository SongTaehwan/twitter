// import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '@constants';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?(): void;
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}

const Button = ({ title, onPress, style, textStyle, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      {...rest}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 37,
    paddingHorizontal: 14,
    borderRadius: 100,
    backgroundColor: Colors.tweetBackground,
  },
  text: {
    fontSize: 14,
  },
});
