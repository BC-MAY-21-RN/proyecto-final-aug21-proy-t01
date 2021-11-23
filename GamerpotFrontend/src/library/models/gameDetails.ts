export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  playtime: number;
  name_original: string;
  description: string;
  description_raw: string;
  metacritic: number;
  released: string;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  savedBy: number;
  savedByLoggedUser: boolean;
  platforms: Array<{
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }>;
  developers: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  genres: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  publishers: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  images: Array<GameImage>;
  esrb_rating: {
    name: string;
  };
}

export interface GameImage {
  image: string;
  width: number;
  height: number;
}

export interface GameImagesResponse {
  count: number;
  results: Array<GameImage>;
}
