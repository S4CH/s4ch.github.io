interface User {
  name: string;
  username: string;
  twitter_username?: string | null;
  github_username: string;
  website_url?: string | null;
  profile_image: string;
  profile_image_90: string;
}

export interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id?: string | null;
  published_timestamp: Date;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at?: string | null;
  crossposted_at?: string | null;
  published_at: Date;
  last_comment_at: Date;
  tag_list: string[];
  tags: string;
  user: User;
}

export interface ArticleQueryParams {
  username: string;
}
