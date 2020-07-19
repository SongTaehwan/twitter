import { useSafeArea } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import React, { createRef, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@constants';
import { addHistory } from '@actions/searchHistoryAction';
import { getLoadingStatus } from '@selectors/loading';
import { fetchTweet } from '@actions/tweetAction';
import SearchHistory from './SearchHistory';
import SearchHeader from './SearchHeader';
import { Store } from '@models/store';
import { generateId } from '@utils';
import {
  getTopSearchURL,
  getPhotoSearchURL,
  getVideoSearchURL,
  getPeopleSearchURL,
  getLatestSearchURL,
} from '@api/endpoints';
import { getHistoryState } from '@selectors/history';

export type Tabs = 'Top' | 'Latest' | 'Photos' | 'Videos';
interface TabHeaderProps {
  tabName: Tabs;
}

const TOP = 'Top',
  LATEST = 'Latest',
  PEOPLE = 'People',
  PHOTOS = 'Photos',
  VIDEOS = 'Videos';

const TabHeader = ({ tabName }: TabHeaderProps) => {
  const searchWord = useSelector(
    (state: Store) => getHistoryState(state).searchWord,
  );
  const dispatch = useDispatch();
  const { top: safeAreaTop } = useSafeArea();
  const [openHistory, setOpenHistory] = useState(false);
  const [containerYOffset, setPosition] = useState(0);
  const [text, setText] = useState('');
  const containerRef = createRef<View>();

  useEffect(() => {
    if (searchWord !== text) {
      setText(searchWord);
    }
  }, [searchWord]);

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
    closeHistory();
    dispatch(addHistory({ keyword: text, id: generateId() }));
    dispatch(fetchTweet(getUrl(text), tabName));
  };

  const handleOnPressFetchData = (keyword: string) => {
    closeHistory();
    dispatch(fetchTweet(getUrl(keyword), tabName));
  };

  const getUrl = (keyword: string): string => {
    switch (tabName) {
      case TOP:
        console.log('top!');
        return getTopSearchURL(keyword);
      case LATEST:
        console.log('Lastest!');
        return getLatestSearchURL(keyword);
      case PEOPLE:
        console.log('People!');
        return getPeopleSearchURL(keyword);
      case PHOTOS:
        console.log('Photos!');
        return getPhotoSearchURL(keyword);
      case VIDEOS:
        console.log('Video!');
        return getVideoSearchURL(keyword);
      default:
        throw new Error('Tab name is not valid!');
    }
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
      {openHistory ? (
        <SearchHistory
          parentYOffset={containerYOffset}
          onPressItem={handleOnPressFetchData}
        />
      ) : null}
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
