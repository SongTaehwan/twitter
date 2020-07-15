import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import { Colors } from '@constants';

interface SearchBarProps {}

const SearchBar = ({}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Icon name={'magnifier'} size={20} />
      <TextInput />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: Colors.tweetBackground,
  },
});
