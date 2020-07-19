import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { Tweet, User } from '@models/reducers/tweet';
import { Colors } from '@constants';
import moment from 'moment';
import Chevron from 'react-native-vector-icons/Entypo';
import Share from 'react-native-vector-icons/Entypo';
import Heart from 'react-native-vector-icons/AntDesign';
import Balloon from 'react-native-vector-icons/SimpleLineIcons';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

interface TweetItemProps {
  data: Tweet;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;

const TweetItem = ({ data }: TweetItemProps): JSX.Element => {
  const user = data.user as User;
  const {
    text,
    createdAt,
    hashTags,
    favoriteCount,
    retweetCount,
    images,
  } = data;
  const postedDate = moment(createdAt).format('MMM D');
  const bodyText = text.split('#');
  const bodyContent = bodyText[0];
  console.log(images);
  const renderHashTags = () => {
    return hashTags.map((hashTag, i) => (
      <TouchableOpacity key={i}>
        <Text style={styles.hashTag}>{`#${hashTag}`}</Text>
      </TouchableOpacity>
    ));
  };

  const renderImages = () => {
    return images.map((url) => (
      <Image key={url} source={{ uri: url }} style={styles.image} />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: user.thumbnail }} style={styles.thumbnail} />
        <View style={styles.textContent}>
          <View style={styles.authorContent}>
            <Text style={styles.nickName}>
              {user.name}
              <Text style={styles.screenName}> {`@${user.screenName}`}</Text>
              <Text style={styles.screenName}> {postedDate}</Text>
            </Text>
            <RectButton
              style={styles.chevronButton}
              underlayColor={Colors.anchorColor}
              rippleColor={Colors.twitterBlue}>
              <Chevron name={'chevron-down'} size={14} color={Colors.grey} />
            </RectButton>
          </View>
          <View>
            <Text>{bodyContent}</Text>
          </View>
          <View style={styles.hashTagCover}>{renderHashTags()}</View>
          <View style={styles.imageCover}>{renderImages()}</View>
        </View>
      </View>
      <View style={styles.iconCover}>
        <RectButton
          style={styles.chevronButton}
          underlayColor={Colors.anchorColor}
          rippleColor={Colors.twitterBlue}>
          <Balloon name={'speech'} size={17} color={Colors.grey} />
        </RectButton>
        <RectButton
          style={styles.chevronButton}
          underlayColor={Colors.anchorColor}
          rippleColor={Colors.twitterBlue}>
          <Share name={'cycle'} size={17} color={Colors.grey} />
        </RectButton>
        <RectButton
          style={styles.chevronButton}
          underlayColor={Colors.anchorColor}
          rippleColor={Colors.twitterBlue}>
          <Heart name={'hearto'} size={17} color={Colors.grey} />
        </RectButton>
        <RectButton
          style={styles.chevronButton}
          underlayColor={Colors.anchorColor}
          rippleColor={Colors.twitterBlue}>
          <Heart name={'upload'} size={17} color={Colors.grey} />
        </RectButton>
      </View>
    </View>
  );
};

export default TweetItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.tweetBackground,
    paddingVertical: 9,
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  authorContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContent: {
    flex: 1,
  },
  iconCover: {
    marginTop: 9,
    marginLeft: 70,
    marginRight: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 9,
  },
  nickName: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
  },
  screenName: {
    flexShrink: 1,
    fontWeight: '400',
    color: Colors.grey,
  },
  chevronButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hashTagCover: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hashTag: {
    fontSize: 14,
    color: Colors.anchorColor,
    marginRight: 6,
  },
  imageCover: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },
  image: {
    display: 'flex',
    width: '50%',
    paddingBottom: '50%',
  },
});
