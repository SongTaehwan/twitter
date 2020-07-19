import CloseIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MagnifierIcon from 'react-native-vector-icons/SimpleLineIcons';
import { useSafeArea } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Keyboard,
  Dimensions,
  StyleSheet,
  ScrollView,
  KeyboardEvent,
} from 'react-native';
import { removeHistory, resetHistory } from '@actions/searchHistoryAction';
import { HistoryItem, Store } from '@models/store';
import { getHistory } from '@selectors/history';
import { Colors } from '@constants';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

interface SearchHistoryProps {
  parentYOffset: number;
  onPressItem?(keyword: string): void;
}

const SearchHistroy = ({ parentYOffset, onPressItem }: SearchHistoryProps) => {
  const history = useSelector((state: Store) => getHistory(state));
  const dispatch = useDispatch();
  const { bottom } = useSafeArea();
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const getKeyboardHeight = (e: KeyboardEvent) => {
      setKeyboardHeight(e.endCoordinates.height + bottom * 2);
    };
    Keyboard.addListener('keyboardWillShow', getKeyboardHeight);
    return () => {
      Keyboard.removeAllListeners('keyboardWillShow');
    };
  }, []);

  const removeItem = (id: string) => {
    console.log(id);
    dispatch(removeHistory(id));
  };

  const resetAllItems = () => {
    dispatch(resetHistory());
  };

  const renderHistoryHeader = () => {
    if (!history.length) {
      return (
        <View style={styles.emptyHistory}>
          <Text style={styles.emptyTile}>
            Try searching for people, topics, or keywords
          </Text>
        </View>
      );
    } else {
      return <ScrolllHeader onClearItem={resetAllItems} />;
    }
  };

  const renderHistoryItem = () => {
    return history.map((item) => {
      return (
        <HistoryListItem
          key={item.id}
          {...item}
          onDelete={removeItem}
          onPress={onPressItem}
        />
      );
    });
  };

  return (
    <View
      style={[
        styles.searchHistory,
        {
          top: parentYOffset,
          height: SCREEN_HEIGHT - parentYOffset,
        },
      ]}>
      <ScrollView
        bounces={false}
        contentContainerStyle={{ paddingBottom: keyboardHeight }}>
        {renderHistoryHeader()}
        {renderHistoryItem()}
      </ScrollView>
    </View>
  );
};

const ScrolllHeader = ({ onClearItem }: { onClearItem?(): void }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Recent</Text>
      <RectButton
        style={styles.clearButton}
        rippleColor={Colors.rippleColor}
        underlayColor={Colors.anchorColor}
        onPress={onClearItem}>
        <Text style={styles.clearBtnTitle}>Clear all</Text>
      </RectButton>
    </View>
  );
};

interface HistoryListItemProps extends HistoryItem {
  onDelete?(id: string): void;
  onPress?(keyword: string): void;
}

const HistoryListItem = ({
  id,
  keyword,
  onDelete,
  onPress,
}: HistoryListItemProps) => {
  const handleDeletion = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const handleOnPressItem = () => {
    if (onPress) {
      onPress(keyword);
    }
  };

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: Colors.tweetBackground,
      }}>
      <RectButton
        style={styles.historyItemContainer}
        underlayColor={Colors.grey}
        rippleColor={Colors.tweetBackground}
        onPress={handleOnPressItem}>
        <View style={styles.magnifierCover}>
          <MagnifierIcon name={'magnifier'} size={18} color={Colors.grey} />
        </View>
        <Text style={styles.keyword}>{keyword}</Text>
        <RectButton
          onPress={handleDeletion}
          style={styles.closeIconCover}
          underlayColor={Colors.anchorColor}
          rippleColor={Colors.rippleColor}>
          <CloseIcon name="close" size={20} color={Colors.twitterBlue} />
        </RectButton>
      </RectButton>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.tweetBackground,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  clearButton: {
    justifyContent: 'center',
    height: 26,
    borderRadius: 12,
    paddingHorizontal: 14,
  },
  clearBtnTitle: {
    fontSize: 12,
    color: Colors.twitterBlue,
    fontWeight: '700',
  },
  emptyHistory: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  emptyTile: {
    color: Colors.grey,
    fontSize: 15,
    fontWeight: '400',
  },
  historyItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 14,
  },
  magnifierCover: {
    width: 37,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tweetBackground,
    borderRadius: 100,
    marginRight: 9,
  },
  closeIconCover: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
    marginLeft: 'auto',
    borderRadius: 14,
  },
  keyword: {
    fontSize: 14,
    fontWeight: '400',
  },
});
