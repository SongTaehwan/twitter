import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import { Colors } from '@constants';

interface SearchBarProps {}

const SearchBar = ({}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Icon name={'magnifier'} size={20} color={Colors.grey} />
      <TextInput style={styles.input} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.tweetBackground,
    borderRadius: 20,
  },
  input: {
    flexGrow: 1,
    padding: 10,
  },
});
