/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cast = {
  __typename?: 'Cast';
  character: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type Media = Movie | Tv;

export type MediaDetail = MovieDetail | TvDetail;

export type Movie = {
  __typename?: 'Movie';
  backdropPath?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  overview?: Maybe<Scalars['String']['output']>;
  posterPath?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  voteAverage?: Maybe<Scalars['String']['output']>;
};

export type MovieDetail = {
  __typename?: 'MovieDetail';
  backdropPath?: Maybe<Scalars['String']['output']>;
  budget?: Maybe<Scalars['String']['output']>;
  casts?: Maybe<Array<Maybe<Cast>>>;
  directors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  duration?: Maybe<Scalars['String']['output']>;
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  originalLanguage?: Maybe<Scalars['String']['output']>;
  overview: Scalars['String']['output'];
  posterPath?: Maybe<Scalars['String']['output']>;
  releaseDate: Scalars['String']['output'];
  revenue?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  voteAverage: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  movieDetail: MovieDetail;
  popularMedia: Array<Media>;
  search?: Maybe<SearchResult>;
  trendingMedia: Array<Media>;
  tvDetail: TvDetail;
};


export type QueryMovieDetailArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPopularMediaArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchArgs = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrendingMediaArgs = {
  timeWindow?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTvDetailArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  data: Array<Media>;
  page: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
  totalResults: Scalars['Int']['output'];
};

export type Tv = {
  __typename?: 'TV';
  backdropPath?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  overview?: Maybe<Scalars['String']['output']>;
  posterPath?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  voteAverage?: Maybe<Scalars['String']['output']>;
};

export type TvDetail = {
  __typename?: 'TvDetail';
  backdropPath?: Maybe<Scalars['String']['output']>;
  casts?: Maybe<Array<Maybe<Cast>>>;
  creator?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  networkLogos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  originalLanguage?: Maybe<Scalars['String']['output']>;
  overview: Scalars['String']['output'];
  posterPath?: Maybe<Scalars['String']['output']>;
  releaseDate: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
  voteAverage: Scalars['String']['output'];
};

export type TrendingMediaQueryVariables = Exact<{
  timeWindow?: InputMaybe<Scalars['String']['input']>;
}>;


export type TrendingMediaQuery = { __typename?: 'Query', trendingMedia: Array<{ __typename: 'Movie', id: string, title: string, posterPath?: string | null, releaseDate?: string | null, voteAverage?: string | null } | { __typename: 'TV', id: string, title: string, posterPath?: string | null, releaseDate?: string | null, voteAverage?: string | null }> };

export type PopularMediaQueryVariables = Exact<{
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type PopularMediaQuery = { __typename?: 'Query', popularMedia: Array<{ __typename: 'Movie', id: string, title: string, posterPath?: string | null, releaseDate?: string | null, voteAverage?: string | null } | { __typename: 'TV', id: string, title: string, posterPath?: string | null, releaseDate?: string | null, voteAverage?: string | null }> };

export type MovieDetailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type MovieDetailQuery = { __typename?: 'Query', movieDetail: { __typename: 'MovieDetail', id: string, title: string, overview: string, posterPath?: string | null, backdropPath?: string | null, releaseDate: string, tagline?: string | null, genres?: Array<string | null> | null, status?: string | null, originalLanguage?: string | null, revenue?: string | null, budget?: string | null, directors?: Array<string | null> | null, duration?: string | null, keywords?: Array<string | null> | null, voteAverage: string, casts?: Array<{ __typename?: 'Cast', name: string, profile_path?: string | null, character: string } | null> | null } };

export type TvDetailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TvDetailQuery = { __typename?: 'Query', tvDetail: { __typename: 'TvDetail', id: string, title: string, overview: string, posterPath?: string | null, backdropPath?: string | null, releaseDate: string, tagline?: string | null, genres?: Array<string | null> | null, status?: string | null, originalLanguage?: string | null, creator?: Array<string | null> | null, keywords?: Array<string | null> | null, voteAverage: string, networkLogos?: Array<string | null> | null, type?: string | null, casts?: Array<{ __typename?: 'Cast', name: string, profile_path?: string | null, character: string } | null> | null } };

export type SearchQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchQuery = { __typename?: 'Query', search?: { __typename?: 'SearchResult', page: number, totalPages: number, totalResults: number, data: Array<{ __typename: 'Movie', id: string, title: string, overview?: string | null, releaseDate?: string | null, posterPath?: string | null } | { __typename: 'TV', id: string, title: string, overview?: string | null, releaseDate?: string | null, posterPath?: string | null }> } | null };


export const TrendingMediaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"trendingMedia"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeWindow"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trendingMedia"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timeWindow"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeWindow"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Movie"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TV"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}}]}}]}}]}}]} as unknown as DocumentNode<TrendingMediaQuery, TrendingMediaQueryVariables>;
export const PopularMediaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"popularMedia"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"popularMedia"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Movie"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TV"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}}]}}]}}]}}]} as unknown as DocumentNode<PopularMediaQuery, PopularMediaQueryVariables>;
export const MovieDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"movieDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movieDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"tagline"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"originalLanguage"}},{"kind":"Field","name":{"kind":"Name","value":"revenue"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"directors"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}},{"kind":"Field","name":{"kind":"Name","value":"casts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profile_path"}},{"kind":"Field","name":{"kind":"Name","value":"character"}}]}}]}}]}}]} as unknown as DocumentNode<MovieDetailQuery, MovieDetailQueryVariables>;
export const TvDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tvDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"tagline"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"originalLanguage"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"networkLogos"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"casts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profile_path"}},{"kind":"Field","name":{"kind":"Name","value":"character"}}]}}]}}]}}]} as unknown as DocumentNode<TvDetailQuery, TvDetailQueryVariables>;
export const SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalResults"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Movie"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TV"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>;