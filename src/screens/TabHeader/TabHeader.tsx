import { useSafeArea } from 'react-native-safe-area-context';
import React, { createRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@constants';
import SearchHistory from './containers/SearchHistoryContainer';
import SearchHeader from './SearchHeader';

interface TabHeaderProps {}

// TODO: Async Action and no subscribe to store
const TabHeader = ({}: TabHeaderProps) => {
  const { top: safeAreaTop } = useSafeArea();
  const [containerYOffset, setPosition] = useState(0);
  const [openHistory, setOpenHistory] = useState(false);
  const [text, setText] = useState('');
  const containerRef = createRef<View>();

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

  const onChangeText = (input: string) => {
    setText(input);
  };

  const onCleaText = () => {
    setText('');
  };

  const showHistory = () => {
    setOpenHistory(true);
  };

  const closeHistory = () => {
    setOpenHistory(false);
  };

  const handleOnSubmit = () => {};

  return (
    <View
      style={styles.container}
      ref={containerRef}
      onLayout={getContainerPosition}>
      <SearchHeader
        value={text}
        onFocusInput={showHistory}
        onBackButtonPress={closeHistory}
        onChangeText={onChangeText}
        onClearButtonPress={onCleaText}
        onSubmit={handleOnSubmit}
      />
      {openHistory ? <SearchHistory parentYOffset={containerYOffset} /> : null}
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
