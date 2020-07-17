import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  StyleSheet,
  View,
  TextInput,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, { forwardRef } from 'react';
import HorizontalDots from '../HorizontalDots';
import ArrowButton from '../ArrowButton';
import CloseButton from './CloseButton';
import { Colors } from '@constants';

interface SearchBarProps {
  value?: string;
  onFocus?(): void;
  onBackButtonPress?(): void;
  onClearButtonPress?(): void;
  onChangeText?(text: string): void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onDotsPress?(): void;
}

const SearchHeader = forwardRef<TextInput, SearchBarProps>(
  (
    {
      value,
      onFocus,
      onClearButtonPress,
      onChangeText,
      onBackButtonPress,
      inputContainerStyle,
      onDotsPress,
    },
    ref,
  ) => {
    return (
      <View style={styles.content}>
        <ArrowButton onPress={onBackButtonPress} />
        <View style={[styles.inputWrapper, inputContainerStyle]}>
          <Icon name={'magnifier'} size={20} color={Colors.grey} />
          <TextInput
            ref={ref}
            onFocus={onFocus}
            value={value}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Search Twitter"
            placeholderTextColor={Colors.grey}
            returnKeyType={'search'}
          />
          {value ? <CloseButton onPress={onClearButtonPress} /> : null}
        </View>
        <HorizontalDots onPress={onDotsPress} />
      </View>
    );
  },
);

export default SearchHeader;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  inputWrapper: {
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
