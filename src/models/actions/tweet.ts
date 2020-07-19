export interface TopTweet {
  id_str: string;
  created_at: Date;
  text: string;
  retweet_count: number;
  favorite_count: number;
  entities: {
    hashtags: { text: string }[];
  };
  extended_entities: {
    media: { id_str: string; media_url_https: string }[];
  };
  user: {
    id_str: string;
    name: string;
    screen_name: string;
    profile_image_url_https: string;
  };
}

export interface TopTweetAction {
  data: TopTweet[];
}

export interface LatestTweetAction {}
export interface PeopleTweetAction {}
export interface PhotosTweetAction {}
export interface VideoTweetAction {}
