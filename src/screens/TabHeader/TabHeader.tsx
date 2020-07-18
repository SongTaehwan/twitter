import { useSafeArea } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import React, { createRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@constants';
import SearchHistory from './containers/SearchHistoryContainer';
import { getLoadingStatus } from '@selectors/loading';
import SearchHeader from './SearchHeader';
import { Store } from '@models/store';
import { addHistory } from '@actions/searchHistoryAction';
import { generateId } from '@utils';

// TODO: Async Action and no subscribe to store
const TabHeader = () => {
  const isLoading = useSelector((state: Store) => getLoadingStatus(state));
  const dispatch = useDispatch();
  const { top: safeAreaTop } = useSafeArea();
  const [openHistory, setOpenHistory] = useState(false);
  const [containerYOffset, setPosition] = useState(0);
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

  const handleOnSubmit = () => {
    dispatch(addHistory({ keyword: text, id: generateId() }));
  };

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
