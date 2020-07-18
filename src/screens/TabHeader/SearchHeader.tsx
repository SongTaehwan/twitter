import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  StyleSheet,
  View,
  TextInput,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {
  forwardRef,
  useState,
  createRef,
  useEffect,
  useRef,
} from 'react';
import HorizontalDots from '../../components/HorizontalDots';
import ArrowButton from '../../components/ArrowButton';
import CloseButton from './CloseButton';
import { Colors } from '@constants';

interface SearchBarProps {
  value?: string;
  onFocus?(): void;
  onBlur?(): void;
  onBackButtonPress?(): void;
  onClearButtonPress?(): void;
  onChangeText?(text: string): void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onDotsPress?(): void;
  onSubmit?(): void;
}

const SearchHeader = ({
  value,
  onFocus = () => null,
  onBlur = () => null,
  onClearButtonPress = () => null,
  onBackButtonPress = () => null,
  inputContainerStyle,
  onChangeText,
  onDotsPress = () => null,
  onSubmit,
}: SearchBarProps) => {
  const inputRef = useRef<TextInput>();

  const setRef = (node: TextInput) => {
    if (node) {
      inputRef.current = node;
    }
  };

  const blurInput = () => {
    if (inputRef.current) {
      inputRef.current.blur();
      onBackButtonPress();
    }
  };

  const clearText = () => {
    if (inputRef.current) {
      inputRef.current.clear();
      onClearButtonPress();
    }
  };

  return (
    <View style={styles.content}>
      <ArrowButton onPress={blurInput} />
      <View style={[styles.inputWrapper, inputContainerStyle]}>
        <Icon name={'magnifier'} size={20} color={Colors.grey} />
        <TextInput
          ref={setRef}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          autoCorrect={false}
          autoCapitalize={'none'}
          returnKeyType={'search'}
          placeholder="Search Twitter"
          placeholderTextColor={Colors.grey}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
          style={styles.input}
        />
        {value && inputRef.current?.isFocused ? (
          <CloseButton onPress={clearText} />
        ) : null}
      </View>
      <HorizontalDots onPress={onDotsPress} />
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  inputWrapper: {
    marginHorizontal: 18,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: Colors.tweetBackground,
    height: 40,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 15,
  },
});
