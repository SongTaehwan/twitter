export interface User {
  id?: string;
  name: string;
  thumbnail: string;
  screenName: string;
}

export interface Tweet {
  id?: string;
  text: string;
  hashTags: string[];
  createdAt: Date;
  favoriteCount: number;
  retweetCount: number;
  images: string[];
  user: string | User;
}

export interface TweetState {
  allTopTweetIds: string[];
  allLatestTweetIds: string[];
  allPeopleTweetIds: string[];
  allPhotosTweetIds: string[];
  allVideoTweetIds: string[];
  allUserIds: string[];
  tweetByIds: {
    [id: string]: Tweet;
  };
  userByIds: {
    [id: string]: User;
  };
}
