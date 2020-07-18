import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import React, { createRef, useState } from 'react';
import { Colors } from '@constants';
import SearchHeader from './SearchHeader';
import SettingModal from './SettingModal';

interface TabHeaderProps {}

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const TabHeader = (props: TabHeaderProps) => {
  const { top: safeAreaTop } = useSafeArea();
  const [containerYOffset, setPosition] = useState(0);
  const [showSetting, setShowSetting] = useState(false);
  const [focused, setFocus] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = createRef<View>();

  const toggleSettingModal = () => {
    setShowSetting((prev) => !prev);
  };

  const getContainerPosition = () => {
    if (containerRef.current && containerYOffset === 0) {
      containerRef.current.measure((fx, fy, width, height, px, py) => {
        // NOTE: safeArea 유무
        const yOffset =
          safeAreaTop === 0 ? py + height : height - (py - safeAreaTop);
        setPosition(yOffset);
      });
    }
  };

  const onChangeText = (text: string) => {
    setQuery(text);
  };

  const onCleaText = () => {
    setQuery('');
  };

  const onFocusInput = () => {
    setFocus(true);
  };

  const onBlurInput = () => {
    setFocus(false);
  };

  const handleOnSubmit = () => {
    onBlurInput();
  };

  const inputStyle = {
    backgroundColor: focused ? Colors.white : Colors.tweetBackground,
    borderColor: focused ? Colors.twitterBlue : Colors.tweetBackground,
  };

  return (
    <View
      style={styles.container}
      ref={containerRef}
      onLayout={getContainerPosition}>
      <SearchHeader
        value={query}
        onFocus={onFocusInput}
        onBackButtonPress={onBlurInput}
        onChangeText={onChangeText}
        onClearButtonPress={onCleaText}
        inputContainerStyle={inputStyle}
        onDotsPress={toggleSettingModal}
        onSubmit={handleOnSubmit}
      />
      {focused ? (
        <View
          style={[
            styles.searchHistory,
            {
              top: containerYOffset,
              height: SCREEN_HEIGHT - containerYOffset,
            },
          ]}>
          <ScrollView bounces={false}>
            {/* TODO: History mode, Dynamic search result */}
            <View style={{ height: 200 }}>
              <Text>History</Text>
            </View>
          </ScrollView>
        </View>
      ) : null}

      <SettingModal isVisible={showSetting} closeModal={toggleSettingModal} />
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  searchHistory: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
  },
});
