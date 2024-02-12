import {
  Maybe,
  Media,
  Movie,
  PopularMediaQuery,
  TrendingMediaQuery,
  Tv,
} from "@/__generated__/graphql";

export interface MediaDetail {
  title: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: string;
}

export interface GetPopularMediaQueryResponse {
  [key: string]: MediaDetail[];
}

export type FeaturedSectionType = "trending" | "popular";

export interface FeaturedMediaInfo {
  id: string;
  title: string;
  posterPath?: string | null;
  releaseDate?: string | null;
  voteAverage?: string | null;
}

export type FeaturedMovie = FeaturedMediaInfo & {
  __typename?: "Movie" | undefined;
};
export type FeaturedTv = FeaturedMediaInfo & { __typename?: "TV" | undefined };

export type FeaturedMediaArray = (FeaturedMovie | FeaturedTv)[];

export interface FeatureSectionData {
  headingLabel: string;
  getData: (a: string) => Promise<FeaturedMediaArray>;
  selectorOptions: { label: string; value: string }[];
}
