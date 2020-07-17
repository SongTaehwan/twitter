import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Pressable } from 'react-native';

interface ButtonProps {}

const Button = ({}: ButtonProps) => {
  return (
    <Pressable>
      <Text></Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
