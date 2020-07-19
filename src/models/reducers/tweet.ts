export interface TweetState {
  allTopTweetIds: string[];
  allLatestTweetIds: string[];
  allPeopleTweetIds: string[];
  allPhotosTweetIds: string[];
  allVideoTweetIds: string[];
  allUserIds: string[];
  tweetByIds: {
    [id: string]: {
      text: string;
      hashTags: string[];
      userId: string;
      createdAt: Date;
      favoriteCount: number;
      retweetCount: number;
      images: string[];
    };
  };
  userByIds: {
    [id: string]: {
      name: string;
      thumbnail: string;
      screenName: string;
    };
  };
}
