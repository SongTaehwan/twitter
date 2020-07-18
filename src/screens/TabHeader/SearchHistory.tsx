import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import React from 'react';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

interface Props {
  parentYOffset: number;
}

// TODO: subscribe history data and get remove action
const SearchHistroy = (props: Props) => {
  console.log(props);
  return (
    <View
      style={[
        styles.searchHistory,
        {
          top: props.parentYOffset,
          height: SCREEN_HEIGHT - props.parentYOffset,
        },
      ]}>
      <ScrollView bounces={false}>
        {/* TODO: History mode, Dynamic search result */}
        <View style={{ height: 200 }}>
          <Text>History</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchHistroy;

const styles = StyleSheet.create({
  searchHistory: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
  },
});
