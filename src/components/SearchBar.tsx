import CloseIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { StyleSheet, View, TextInput } from 'react-native';
import React, { createRef } from 'react';
import { Colors } from '@constants';

interface SearchBarProps {
  value?: string;
  onChangeText?(text: string): void;
}

const BUTTON_RADIUS = 27;

const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  const input = createRef<TextInput>();

  const clearText = () => {
    if (input.current) {
      input.current.clear();
    }
  };

  return (
    <View style={styles.container}>
      <Icon name={'magnifier'} size={20} color={Colors.grey} />
      <TextInput
        ref={input}
        value={value}
        autoCapitalize={'none'}
        autoCorrect={false}
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search Twitter"
        placeholderTextColor={Colors.grey}
        returnKeyType={'search'}
      />
      {value ? (
        <TouchableOpacity onPress={clearText}>
          <View style={styles.buttonBackground} />
          <CloseIcon
            size={BUTTON_RADIUS}
            color={Colors.twitterBlue}
            name={'close-circle'}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 10,
    flexBasis: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.tweetBackground,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    fontSize: 15,
    padding: 10,
  },
  buttonBackground: {
    borderRadius: BUTTON_RADIUS / 2,
    position: 'absolute',
    backgroundColor: 'white',
    top: 3,
    left: 3,
    right: 3,
    bottom: 3,
  },
});
